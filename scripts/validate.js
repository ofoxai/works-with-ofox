#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const APPS_DIR = path.join(__dirname, '..', 'apps');
const SCHEMA_PATH = path.join(__dirname, '..', 'schema', 'app.schema.json');

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const schema = JSON.parse(fs.readFileSync(SCHEMA_PATH, 'utf8'));
const validate = ajv.compile(schema);

// Blocked URL patterns (security)
const BLOCKED_HOSTS = ['localhost', '127.0.0.1', '::1', '0.0.0.0'];
const BLOCKED_SUFFIXES = ['.local', '.internal', '.lan'];

function checkUrlSecurity(url) {
  try {
    const parsed = new URL(url);
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return `Blocked protocol: ${parsed.protocol}`;
    }
    const h = parsed.hostname.toLowerCase();
    if (BLOCKED_HOSTS.includes(h)) return 'Localhost not allowed';
    if (BLOCKED_SUFFIXES.some(s => h.endsWith(s))) return 'Internal hostname not allowed';
    const ipMatch = h.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
    if (ipMatch) {
      const [, a, b] = ipMatch.map(Number);
      if (a === 10 || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168)) {
        return 'Private IP not allowed';
      }
    }
    return null;
  } catch {
    return 'Invalid URL';
  }
}

function validateApp(appDir) {
  const errors = [];
  const appPath = path.join(APPS_DIR, appDir);

  if (!fs.existsSync(appPath)) {
    errors.push(`Directory does not exist: ${appDir}`);
    return errors;
  }

  // Check app.yaml
  const yamlPath = path.join(appPath, 'app.yaml');
  if (!fs.existsSync(yamlPath)) {
    errors.push(`Missing app.yaml in ${appDir}`);
    return errors;
  }

  let app;
  try {
    const content = fs.readFileSync(yamlPath, 'utf8');
    app = yaml.load(content);
  } catch (err) {
    errors.push(`Invalid YAML in ${appDir}: ${err.message}`);
    return errors;
  }

  // Schema validation
  const valid = validate(app);
  if (!valid) {
    for (const error of validate.errors) {
      errors.push(`${appDir}: ${error.instancePath} ${error.message}`);
    }
  }

  // URL security checks
  for (const field of ['url', 'docs', 'open_source']) {
    if (app[field]) {
      const issue = checkUrlSecurity(app[field]);
      if (issue) errors.push(`${appDir}: ${field} — ${issue}`);
    }
  }

  // Check logo.png
  const logoPath = path.join(appPath, 'logo.png');
  if (!fs.existsSync(logoPath)) {
    errors.push(`Missing logo.png in ${appDir}`);
  } else {
    const buffer = fs.readFileSync(logoPath);
    const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    if (buffer.length < 8 || !buffer.subarray(0, 8).equals(pngSignature)) {
      errors.push(`Invalid PNG file in ${appDir}: logo.png is not a valid PNG`);
    }
  }

  // Date validation
  if (app.date_added) {
    const date = new Date(app.date_added);
    if (isNaN(date.getTime())) {
      errors.push(`${appDir}: Invalid date_added format`);
    }
  }

  // Folder name convention
  if (!/^[a-z0-9-]+$/.test(appDir)) {
    errors.push(`${appDir}: Folder name must be lowercase letters, numbers, hyphens only`);
  }

  return errors;
}

function main() {
  const appDirs = process.argv.slice(2);

  const dirsToValidate = appDirs.length > 0
    ? appDirs
    : fs.readdirSync(APPS_DIR, { withFileTypes: true })
        .filter(d => d.isDirectory())
        .map(d => d.name);

  let hasErrors = false;

  for (const dir of dirsToValidate) {
    console.log(`Validating ${dir}...`);
    const errors = validateApp(dir);

    if (errors.length > 0) {
      hasErrors = true;
      for (const error of errors) {
        console.error(`  \u274C ${error}`);
      }
    } else {
      console.log(`  \u2705 Valid`);
    }
  }

  if (hasErrors) {
    console.error('\nValidation failed');
    process.exit(1);
  } else {
    console.log('\nAll validations passed');
  }
}

main();
