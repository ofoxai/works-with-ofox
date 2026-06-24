export const LOCALES = [
  { code: 'zh', name: '简体中文' },
  { code: 'zh-TW', name: '繁體中文' },
  { code: 'en', name: 'English' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'de', name: 'Deutsch' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'pt', name: 'Português' },
  { code: 'ru', name: 'Русский' },
] as const;

export type Locale = (typeof LOCALES)[number]['code'];
export const LOCALE_CODES = LOCALES.map((l) => l.code) as Locale[];
export const NON_DEFAULT_LOCALES = LOCALE_CODES.filter((c) => c !== 'en');

type Dict = Record<string, string>;

export const i18n: Record<string, Dict> = {
  zh: {
    sub: '用 Ofox 的开发者做了哪些值得关注的应用？',
    submit_q: '想添加你的应用？', submit_link: '提交 PR', search: '搜索应用...',
    about: '关于', visit: '访问', docs: '文档', source: '源代码', back: '← 返回列表',
    guide_title: 'Ofox for {app} 入门指南',
    g1_pre: '在', g1_link: 'app.ofox.ai', g1_suf: '创建账户',
    g2_pre: '前往', g2_link: 'app.ofox.ai 控制台', g2_suf: '充值并生成 API Key',
    g3: '在 {app} 中配置你的 API Key', g3_docs_pre: '——设置详情请参阅', g3_docs_link: '{app} Ofox 集成指南',
    use_title: '使用 Ofox 和 {app}',
    use_body: '{app} 支持 Ofox 作为模型供应商，让你只需一个 API Key 即可访问 Claude、GPT、Gemini、DeepSeek 等多家模型。Ofox 负责模型路由和故障转移，让你专注于真正重要的事。',
    use_docs_pre: '有关详细的设置说明和配置选项，请访问', use_docs_link: '{app} Ofox 文档',
    empty: '暂无匹配应用', all: '全部',
    hero_before: '用 ', hero_after: ' 做点有趣的事',
    stat_apps: '应用', stat_cats: '类别', stat_oss: '开源', footer_suf: ' · 一个 Key，所有模型',
  },
  'zh-TW': {
    sub: '用 Ofox 的開發者做了哪些值得關注的應用？',
    submit_q: '想新增你的應用？', submit_link: '提交 PR', search: '搜尋應用...',
    about: '關於', visit: '造訪', docs: '文件', source: '原始碼', back: '← 返回列表',
    guide_title: 'Ofox for {app} 入門指南',
    g1_pre: '在', g1_link: 'app.ofox.ai', g1_suf: '建立帳戶',
    g2_pre: '前往', g2_link: 'app.ofox.ai 主控台', g2_suf: '儲值並產生 API Key',
    g3: '在 {app} 中設定你的 API Key', g3_docs_pre: '——設定詳情請參閱', g3_docs_link: '{app} Ofox 整合指南',
    use_title: '使用 Ofox 和 {app}',
    use_body: '{app} 支援 Ofox 作為模型供應商，讓你只需一個 API Key 即可存取 Claude、GPT、Gemini、DeepSeek 等多家模型。Ofox 負責模型路由和故障轉移，讓你專注於真正重要的事。',
    use_docs_pre: '有關詳細的設定說明和設定選項，請造訪', use_docs_link: '{app} Ofox 文件',
    empty: '暫無符合的應用', all: '全部',
    hero_before: '用 ', hero_after: ' 做點有趣的事',
    stat_apps: '應用', stat_cats: '類別', stat_oss: '開源', footer_suf: ' · 一個 Key，所有模型',
  },
  en: {
    sub: 'What are Ofox developers building that’s worth checking out?',
    submit_q: 'Want to add your app?', submit_link: 'Submit a PR', search: 'Search...',
    about: 'About', visit: 'Visit', docs: 'Docs', source: 'Source', back: '← Back',
    guide_title: 'Getting started with Ofox for {app}',
    g1_pre: 'Create an account at', g1_link: 'app.ofox.ai', g1_suf: '',
    g2_pre: 'Go to', g2_link: 'app.ofox.ai', g2_suf: 'to add credits and generate an API key',
    g3: 'Configure your API key in {app}', g3_docs_pre: ' — for setup details, see their', g3_docs_link: 'Ofox integration guide',
    use_title: 'Using Ofox and {app}',
    use_body: '{app} supports Ofox as a provider, giving you access to Claude, GPT, Gemini, DeepSeek and more with a single API key. Ofox handles model routing and fallbacks so you can focus on what matters.',
    use_docs_pre: 'For detailed setup instructions and configuration options, visit the', use_docs_link: '{app} Ofox documentation',
    empty: 'No apps found', all: 'All',
    hero_before: 'Do cool things with ', hero_after: '',
    stat_apps: 'Apps', stat_cats: 'Categories', stat_oss: 'Open Source', footer_suf: ' · One key, every model',
  },
  ja: {
    sub: 'Ofox を使う開発者が作った注目のアプリは？',
    submit_q: 'あなたのアプリを追加しますか？', submit_link: 'PR を送る', search: '検索...',
    about: '概要', visit: '開く', docs: 'ドキュメント', source: 'ソース', back: '← 戻る',
    guide_title: '{app} で Ofox を始める',
    g1_pre: '', g1_link: 'app.ofox.ai', g1_suf: 'でアカウントを作成',
    g2_pre: '', g2_link: 'app.ofox.ai', g2_suf: 'でクレジットを追加し API キーを発行',
    g3: '{app} で API キーを設定', g3_docs_pre: ' — 設定の詳細は', g3_docs_link: '{app} の Ofox 連携ガイド',
    use_title: 'Ofox と {app} を使う',
    use_body: '{app} は Ofox をプロバイダーとしてサポートし、1 つの API キーで Claude、GPT、Gemini、DeepSeek などにアクセスできます。Ofox がモデルのルーティングとフォールバックを処理するので、大切なことに集中できます。',
    use_docs_pre: '詳しい設定手順とオプションは', use_docs_link: '{app} の Ofox ドキュメント',
    empty: 'アプリが見つかりません', all: 'すべて',
    hero_before: '', hero_after: ' でクールなことを',
    stat_apps: 'アプリ', stat_cats: 'カテゴリ', stat_oss: 'オープンソース', footer_suf: ' · 1 つのキーで全モデル',
  },
  ko: {
    sub: 'Ofox 개발자들이 만든 주목할 만한 앱은?',
    submit_q: '앱을 추가하고 싶으신가요?', submit_link: 'PR 보내기', search: '검색...',
    about: '정보', visit: '방문', docs: '문서', source: '소스', back: '← 뒤로',
    guide_title: '{app}에서 Ofox 시작하기',
    g1_pre: '', g1_link: 'app.ofox.ai', g1_suf: '에서 계정 만들기',
    g2_pre: '', g2_link: 'app.ofox.ai', g2_suf: '에서 크레딧을 충전하고 API 키 발급',
    g3: '{app}에서 API 키 설정', g3_docs_pre: ' — 자세한 내용은', g3_docs_link: '{app} Ofox 연동 가이드',
    use_title: 'Ofox와 {app} 사용하기',
    use_body: '{app}은(는) Ofox를 공급자로 지원하여 하나의 API 키로 Claude, GPT, Gemini, DeepSeek 등에 접근할 수 있습니다. Ofox가 모델 라우팅과 폴백을 처리하므로 중요한 일에 집중할 수 있습니다.',
    use_docs_pre: '자세한 설정 방법과 옵션은', use_docs_link: '{app} Ofox 문서',
    empty: '앱을 찾을 수 없습니다', all: '전체',
    hero_before: '', hero_after: '로 멋진 것을 만들어 보세요',
    stat_apps: '앱', stat_cats: '카테고리', stat_oss: '오픈소스', footer_suf: ' · 하나의 키로 모든 모델',
  },
  de: {
    sub: 'Welche bemerkenswerten Apps bauen Entwickler mit Ofox?',
    submit_q: 'Möchtest du deine App hinzufügen?', submit_link: 'PR einreichen', search: 'Suchen...',
    about: 'Über', visit: 'Besuchen', docs: 'Doku', source: 'Quellcode', back: '← Zurück',
    guide_title: 'Erste Schritte mit Ofox für {app}',
    g1_pre: 'Erstelle ein Konto bei', g1_link: 'app.ofox.ai', g1_suf: '',
    g2_pre: 'Gehe zu', g2_link: 'app.ofox.ai', g2_suf: ', um Guthaben aufzuladen und einen API-Key zu erstellen',
    g3: 'Konfiguriere deinen API-Key in {app}', g3_docs_pre: ' — Details siehe', g3_docs_link: 'Ofox-Integrationsanleitung',
    use_title: 'Ofox mit {app} verwenden',
    use_body: '{app} unterstützt Ofox als Anbieter und gibt dir mit einem einzigen API-Key Zugriff auf Claude, GPT, Gemini, DeepSeek und mehr. Ofox übernimmt Modell-Routing und Fallbacks, damit du dich auf das Wesentliche konzentrieren kannst.',
    use_docs_pre: 'Für ausführliche Anleitungen und Optionen besuche die', use_docs_link: 'Ofox-Dokumentation für {app}',
    empty: 'Keine Apps gefunden', all: 'Alle',
    hero_before: 'Mach coole Dinge mit ', hero_after: '',
    stat_apps: 'Apps', stat_cats: 'Kategorien', stat_oss: 'Open Source', footer_suf: ' · Ein Key, alle Modelle',
  },
  es: {
    sub: '¿Qué apps destacadas están creando los desarrolladores con Ofox?',
    submit_q: '¿Quieres añadir tu app?', submit_link: 'Enviar un PR', search: 'Buscar...',
    about: 'Acerca de', visit: 'Visitar', docs: 'Docs', source: 'Código', back: '← Volver',
    guide_title: 'Primeros pasos con Ofox para {app}',
    g1_pre: 'Crea una cuenta en', g1_link: 'app.ofox.ai', g1_suf: '',
    g2_pre: 'Ve a', g2_link: 'app.ofox.ai', g2_suf: 'para añadir saldo y generar una API Key',
    g3: 'Configura tu API Key en {app}', g3_docs_pre: ' — para más detalles, consulta la', g3_docs_link: 'guía de integración de Ofox',
    use_title: 'Usar Ofox con {app}',
    use_body: '{app} admite Ofox como proveedor, dándote acceso a Claude, GPT, Gemini, DeepSeek y más con una sola API Key. Ofox se encarga del enrutamiento de modelos y los fallbacks para que te concentres en lo que importa.',
    use_docs_pre: 'Para instrucciones detalladas y opciones de configuración, visita la', use_docs_link: 'documentación de Ofox para {app}',
    empty: 'No se encontraron apps', all: 'Todos',
    hero_before: 'Haz cosas geniales con ', hero_after: '',
    stat_apps: 'Apps', stat_cats: 'Categorías', stat_oss: 'Código abierto', footer_suf: ' · Una Key, todos los modelos',
  },
  fr: {
    sub: 'Quelles apps remarquables les développeurs créent-ils avec Ofox ?',
    submit_q: 'Vous voulez ajouter votre app ?', submit_link: 'Soumettre une PR', search: 'Rechercher...',
    about: 'À propos', visit: 'Visiter', docs: 'Docs', source: 'Code source', back: '← Retour',
    guide_title: 'Démarrer avec Ofox pour {app}',
    g1_pre: 'Créez un compte sur', g1_link: 'app.ofox.ai', g1_suf: '',
    g2_pre: 'Allez sur', g2_link: 'app.ofox.ai', g2_suf: 'pour ajouter du crédit et générer une clé API',
    g3: 'Configurez votre clé API dans {app}', g3_docs_pre: ' — pour les détails, consultez le', g3_docs_link: 'guide d’intégration Ofox',
    use_title: 'Utiliser Ofox avec {app}',
    use_body: '{app} prend en charge Ofox comme fournisseur, vous donnant accès à Claude, GPT, Gemini, DeepSeek et plus avec une seule clé API. Ofox gère le routage des modèles et les bascules pour que vous restiez concentré sur l’essentiel.',
    use_docs_pre: 'Pour des instructions détaillées et des options de configuration, consultez la', use_docs_link: 'documentation Ofox pour {app}',
    empty: 'Aucune app trouvée', all: 'Tous',
    hero_before: 'Faites des choses cool avec ', hero_after: '',
    stat_apps: 'Apps', stat_cats: 'Catégories', stat_oss: 'Open Source', footer_suf: ' · Une clé, tous les modèles',
  },
  pt: {
    sub: 'Quais apps notáveis os desenvolvedores estão criando com a Ofox?',
    submit_q: 'Quer adicionar seu app?', submit_link: 'Enviar um PR', search: 'Buscar...',
    about: 'Sobre', visit: 'Visitar', docs: 'Docs', source: 'Código', back: '← Voltar',
    guide_title: 'Começando com a Ofox para {app}',
    g1_pre: 'Crie uma conta em', g1_link: 'app.ofox.ai', g1_suf: '',
    g2_pre: 'Acesse', g2_link: 'app.ofox.ai', g2_suf: 'para adicionar créditos e gerar uma API Key',
    g3: 'Configure sua API Key no {app}', g3_docs_pre: ' — para detalhes, veja o', g3_docs_link: 'guia de integração da Ofox',
    use_title: 'Usando a Ofox com {app}',
    use_body: '{app} suporta a Ofox como provedor, dando acesso a Claude, GPT, Gemini, DeepSeek e mais com uma única API Key. A Ofox cuida do roteamento de modelos e fallbacks para você focar no que importa.',
    use_docs_pre: 'Para instruções detalhadas e opções de configuração, acesse a', use_docs_link: 'documentação da Ofox para {app}',
    empty: 'Nenhum app encontrado', all: 'Todos',
    hero_before: 'Faça coisas legais com a ', hero_after: '',
    stat_apps: 'Apps', stat_cats: 'Categorias', stat_oss: 'Código aberto', footer_suf: ' · Uma key, todos os modelos',
  },
  ru: {
    sub: 'Какие интересные приложения разработчики создают с Ofox?',
    submit_q: 'Хотите добавить своё приложение?', submit_link: 'Отправить PR', search: 'Поиск...',
    about: 'О приложении', visit: 'Открыть', docs: 'Документы', source: 'Исходники', back: '← Назад',
    guide_title: 'Начало работы с Ofox для {app}',
    g1_pre: 'Создайте аккаунт на', g1_link: 'app.ofox.ai', g1_suf: '',
    g2_pre: 'Перейдите на', g2_link: 'app.ofox.ai', g2_suf: 'чтобы пополнить баланс и создать API-ключ',
    g3: 'Настройте API-ключ в {app}', g3_docs_pre: ' — подробности см. в', g3_docs_link: 'руководстве по интеграции Ofox',
    use_title: 'Использование Ofox с {app}',
    use_body: '{app} поддерживает Ofox в качестве провайдера, давая доступ к Claude, GPT, Gemini, DeepSeek и другим моделям с одним API-ключом. Ofox берёт на себя маршрутизацию моделей и резервирование, чтобы вы могли сосредоточиться на главном.',
    use_docs_pre: 'Подробные инструкции и параметры см. в', use_docs_link: 'документации Ofox для {app}',
    empty: 'Приложения не найдены', all: 'Все',
    hero_before: 'Делайте крутые вещи с ', hero_after: '',
    stat_apps: 'Приложения', stat_cats: 'Категории', stat_oss: 'Open Source', footer_suf: ' · Один ключ — все модели',
  },
};

export const tagLabels: Record<string, Record<string, string>> = {
  zh: { chat: '对话', coding: '编程', productivity: '效率', creative: '创作', research: '研究', other: '其他' },
  'zh-TW': { chat: '對話', coding: '程式', productivity: '效率', creative: '創作', research: '研究', other: '其他' },
  en: { chat: 'Chat', coding: 'Code', productivity: 'Productivity', creative: 'Creative', research: 'Research', other: 'Other' },
  ja: { chat: 'チャット', coding: 'コード', productivity: '生産性', creative: 'クリエイティブ', research: 'リサーチ', other: 'その他' },
  ko: { chat: '채팅', coding: '코드', productivity: '생산성', creative: '창작', research: '리서치', other: '기타' },
  de: { chat: 'Chat', coding: 'Code', productivity: 'Produktivität', creative: 'Kreativ', research: 'Forschung', other: 'Sonstige' },
  es: { chat: 'Chat', coding: 'Código', productivity: 'Productividad', creative: 'Creativo', research: 'Investigación', other: 'Otros' },
  fr: { chat: 'Chat', coding: 'Code', productivity: 'Productivité', creative: 'Créatif', research: 'Recherche', other: 'Autres' },
  pt: { chat: 'Chat', coding: 'Código', productivity: 'Produtividade', creative: 'Criativo', research: 'Pesquisa', other: 'Outros' },
  ru: { chat: 'Чат', coding: 'Код', productivity: 'Продуктивность', creative: 'Творчество', research: 'Исследования', other: 'Другое' },
};

// Empty-wall perks panel + floating "limited-time call" promo widget.
// `headline` is the slogan. Perks are short chips only — full perks & rules
// live in CONTRIBUTING (linked via `more`), so keep these terse.
export const recruitText: Record<string, Record<string, string>> = {
  zh: {
    headline: '和 Ofox 一起，玩转 AI',
    lead: '加入计划，你能得到：',
    p_cash: '$5 激励金', p_partner: 'Partner 返利', p_show: '应用展示', p_refer: '推荐奖励',
    cta: '提交你的应用', more: '完整权益与规则见 GitHub →', ghost: '你的应用？',
    promo_badge: '限时征集', promo_desc: '上墙激励 + Partner 返利',
  },
  'zh-TW': {
    headline: '和 Ofox 一起，玩轉 AI',
    lead: '加入計畫，你能得到：',
    p_cash: '$5 獎勵金', p_partner: 'Partner 返利', p_show: '應用展示', p_refer: '推薦獎勵',
    cta: '提交你的應用', more: '完整權益與規則見 GitHub →', ghost: '你的應用？',
    promo_badge: '限時徵集', promo_desc: '上牆獎勵 + Partner 返利',
  },
  en: {
    headline: 'Have fun with AI, with Ofox',
    lead: 'Join the program and get:',
    p_cash: '$5 incentive', p_partner: 'Partner rebate', p_show: 'App showcase', p_refer: 'Refer & earn',
    cta: 'Submit your app', more: 'Full perks & rules on GitHub →', ghost: 'Your app?',
    promo_badge: 'Limited-time call', promo_desc: 'Listing reward + Partner rebate',
  },
  ja: {
    headline: 'Ofox と一緒に、AI を使いこなそう',
    lead: 'プログラムに参加すると：',
    p_cash: '$5 インセンティブ', p_partner: 'Partner リベート', p_show: 'アプリ掲載', p_refer: '紹介報酬',
    cta: 'アプリを投稿', more: '特典とルールの詳細は GitHub で →', ghost: 'あなたのアプリ？',
    promo_badge: '期間限定募集', promo_desc: '掲載報酬 + Partner リベート',
  },
  ko: {
    headline: 'Ofox와 함께, AI를 자유자재로',
    lead: '프로그램에 참여하면：',
    p_cash: '$5 인센티브', p_partner: 'Partner 리베이트', p_show: '앱 전시', p_refer: '추천 보상',
    cta: '앱 제출하기', more: '전체 혜택과 규칙은 GitHub에서 →', ghost: '당신의 앱?',
    promo_badge: '한정 모집', promo_desc: '등재 보상 + Partner 리베이트',
  },
  de: {
    headline: 'Mit Ofox spielend leicht zu KI',
    lead: 'Mach mit und erhalte:',
    p_cash: '$5 Bonus', p_partner: 'Partner-Rückvergütung', p_show: 'App-Präsentation', p_refer: 'Empfehlungsprämie',
    cta: 'App einreichen', more: 'Alle Vorteile & Regeln auf GitHub →', ghost: 'Deine App?',
    promo_badge: 'Zeitlich begrenzt', promo_desc: 'Listing-Prämie + Partner-Rückvergütung',
  },
  es: {
    headline: 'Domina la IA, con Ofox',
    lead: 'Únete al programa y obtén:',
    p_cash: '$5 de incentivo', p_partner: 'Reembolso Partner', p_show: 'Vitrina de apps', p_refer: 'Refiere y gana',
    cta: 'Envía tu app', more: 'Todas las ventajas y reglas en GitHub →', ghost: '¿Tu app?',
    promo_badge: 'Convocatoria limitada', promo_desc: 'Recompensa + reembolso Partner',
  },
  fr: {
    headline: 'Maîtrisez l’IA, avec Ofox',
    lead: 'Rejoignez le programme et obtenez :',
    p_cash: '5 $ d’incitation', p_partner: 'Rétrocommission Partner', p_show: 'Vitrine d’apps', p_refer: 'Parrainez et gagnez',
    cta: 'Soumettre votre app', more: 'Avantages & règles complets sur GitHub →', ghost: 'Votre app ?',
    promo_badge: 'Appel limité', promo_desc: 'Récompense + rétrocommission Partner',
  },
  pt: {
    headline: 'Domine a IA, com a Ofox',
    lead: 'Participe do programa e ganhe:',
    p_cash: '$5 de incentivo', p_partner: 'Reembolso Partner', p_show: 'Vitrine de apps', p_refer: 'Indique e ganhe',
    cta: 'Enviar seu app', more: 'Benefícios e regras completos no GitHub →', ghost: 'Seu app?',
    promo_badge: 'Chamada limitada', promo_desc: 'Recompensa + reembolso Partner',
  },
  ru: {
    headline: 'Освойте ИИ вместе с Ofox',
    lead: 'Участвуйте в программе и получите:',
    p_cash: '$5 за разработку', p_partner: 'Возврат Partner', p_show: 'Витрина приложений', p_refer: 'Реферальное вознаграждение',
    cta: 'Отправить приложение', more: 'Все бонусы и правила на GitHub →', ghost: 'Ваше приложение?',
    promo_badge: 'Ограниченный приём', promo_desc: 'Награда + возврат Partner',
  },
};
export function r(locale: string, key: string): string {
  const d = recruitText[locale] || recruitText.en;
  return d[key] ?? recruitText.en[key] ?? key;
}

// Localized <title> for the list page (most important SEO tag → per-locale keywords).
export const pageTitles: Record<string, string> = {
  zh: 'Works with Ofox — Ofox 应用展示墙',
  'zh-TW': 'Works with Ofox — Ofox 應用展示牆',
  en: 'Works with Ofox — Apps & tools that work with Ofox',
  ja: 'Works with Ofox — Ofox 対応アプリ＆ツール',
  ko: 'Works with Ofox — Ofox 지원 앱 & 도구',
  de: 'Works with Ofox — Apps & Tools, die mit Ofox funktionieren',
  es: 'Works with Ofox — Apps y herramientas que funcionan con Ofox',
  fr: 'Works with Ofox — Apps et outils compatibles avec Ofox',
  pt: 'Works with Ofox — Apps e ferramentas que funcionam com a Ofox',
  ru: 'Works with Ofox — Приложения и инструменты, работающие с Ofox',
};
export function pageTitle(locale: string): string {
  return pageTitles[locale] || pageTitles.en;
}

// Accessible name for the language switcher, localized.
export const langAria: Record<string, string> = {
  zh: '语言', 'zh-TW': '語言', en: 'Language', ja: '言語', ko: '언어',
  de: 'Sprache', es: 'Idioma', fr: 'Langue', pt: 'Idioma', ru: 'Язык',
};
export function languageLabel(locale: string): string {
  return langAria[locale] || langAria.en;
}

export function t(locale: string, key: string): string {
  const d = i18n[locale] || i18n.en;
  return d[key] ?? i18n.en[key] ?? key;
}
export function tagLabel(locale: string, tag: string): string {
  return (tagLabels[locale] || tagLabels.en)[tag] || tag;
}
export function localePrefix(locale: string): string {
  return locale === 'en' ? '' : `/${locale}`;
}
export function wallPath(locale: string): string {
  return `${localePrefix(locale)}/awesome-ofox`;
}
export function detailPath(locale: string, slug: string): string {
  return `${localePrefix(locale)}/awesome-ofox/${slug}`;
}
export function period(locale: string): string {
  return locale === 'zh' || locale === 'zh-TW' || locale === 'ja' ? '。' : '.';
}
export function submitUrl(locale: string): string {
  const zh = locale === 'zh' || locale === 'zh-TW';
  return `https://github.com/ofoxai/works-with-ofox/blob/main/${zh ? 'CONTRIBUTING.md' : 'CONTRIBUTING_EN.md'}`;
}
export function htmlLang(locale: string): string {
  return locale === 'zh' ? 'zh-CN' : locale === 'zh-TW' ? 'zh-TW' : locale;
}
