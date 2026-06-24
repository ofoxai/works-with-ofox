import appsData from '../../apps.json';

export interface App {
  slug: string;
  name: string;
  description: string;
  url: string;
  docs: string | null;
  tags: string[];
  openSource: string | null;
  dateAdded: string;
}

// Canonical category order (matches schema enum / OpenRouter's tag set).
export const CATEGORIES = ['chat', 'coding', 'productivity', 'creative', 'research', 'other'] as const;
export type Category = (typeof CATEGORIES)[number];

export const apps: App[] = (appsData as App[])
  .slice()
  .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

export function getApp(slug: string): App | undefined {
  return apps.find((a) => a.slug === slug);
}

export function categoryCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const a of apps) for (const t of a.tags) counts[t] = (counts[t] || 0) + 1;
  return counts;
}

export function isNew(dateAdded: string, today = new Date()): boolean {
  const d = new Date(dateAdded);
  if (isNaN(d.getTime())) return false;
  return (today.getTime() - d.getTime()) / 86400000 <= 14;
}
