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

// Recruitment band (always-on, slim) + empty-wall perks panel.
// `headline` is the slogan — still being finalized; swap it freely without touching the rest.
export const recruitText: Record<string, Record<string, string>> = {
  zh: {
    band: '把你的应用加入展示墙 —— $5 + Partner 返利 + 高流量反链',
    headline: '和 Ofox 一起，被更多人看到',
    lead: '第一个位置在等你。提交一个用 Ofox 构建的应用，你将获得：',
    cash_t: '$5 开发激励金', cash_d: '上墙后发放到你的 Ofox 账户',
    show_t: '应用展示', show_d: '登上 Ofox 开发墙，被更多开发者看到',
    partner_t: '成为 Partner', partner_d: '专属推广链接 + 返利',
    refer_t: '推荐用户', refer_d: '终身绑定 + 礼遇',
    cta: '提交你的应用', ghost: '你的应用？',
  },
  'zh-TW': {
    band: '把你的應用加入展示牆 —— $5 + Partner 返利 + 高流量反向連結',
    headline: '和 Ofox 一起，被更多人看到',
    lead: '第一個位置在等你。提交一個用 Ofox 打造的應用，你將獲得：',
    cash_t: '$5 開發獎勵金', cash_d: '上牆後發放到你的 Ofox 帳戶',
    show_t: '應用展示', show_d: '登上 Ofox 開發牆，被更多開發者看到',
    partner_t: '成為 Partner', partner_d: '專屬推廣連結 + 返利',
    refer_t: '推薦用戶', refer_d: '終身綁定 + 禮遇',
    cta: '提交你的應用', ghost: '你的應用？',
  },
  en: {
    band: 'Add your app to the wall — $5 + Partner rebate + high-traffic backlink',
    headline: 'Get seen, with Ofox',
    lead: 'The first spot is yours. Submit an app built with Ofox and get:',
    cash_t: '$5 dev incentive', cash_d: 'Paid to your Ofox account once listed',
    show_t: 'App showcase', show_d: 'Featured on the Ofox wall for developers to find',
    partner_t: 'Become a Partner', partner_d: 'Referral link + rebate',
    refer_t: 'Refer users', refer_d: 'Lifetime binding + gift',
    cta: 'Submit your app', ghost: 'Your app?',
  },
  ja: {
    band: 'あなたのアプリをウォールに追加 —— $5 + Partner リベート + 高トラフィックの被リンク',
    headline: 'Ofox とともに、もっと見つけてもらう',
    lead: '最初の枠が空いています。Ofox で作ったアプリを投稿すると：',
    cash_t: '$5 開発インセンティブ', cash_d: '掲載後、あなたの Ofox アカウントに付与',
    show_t: 'アプリ掲載', show_d: 'Ofox のウォールに掲載され、開発者に見つけてもらえます',
    partner_t: 'Partner になる', partner_d: '専用リンク + リベート',
    refer_t: 'ユーザー紹介', refer_d: '永久バインド + ギフト',
    cta: 'アプリを投稿', ghost: 'あなたのアプリ？',
  },
  ko: {
    band: '당신의 앱을 월에 추가하세요 —— $5 + Partner 리베이트 + 고트래픽 백링크',
    headline: 'Ofox와 함께, 더 많은 사람에게',
    lead: '첫 자리가 비어 있습니다. Ofox로 만든 앱을 제출하면：',
    cash_t: '$5 개발 인센티브', cash_d: '등재 후 Ofox 계정으로 지급',
    show_t: '앱 전시', show_d: 'Ofox 월에 게시되어 개발자에게 노출',
    partner_t: 'Partner 되기', partner_d: '전용 링크 + 리베이트',
    refer_t: '사용자 추천', refer_d: '평생 바인딩 + 선물',
    cta: '앱 제출하기', ghost: '당신의 앱?',
  },
  de: {
    band: 'Füge deine App zur Wall hinzu — $5 + Partner-Rückvergütung + Backlink mit hohem Traffic',
    headline: 'Mit Ofox sichtbar werden',
    lead: 'Der erste Platz ist frei. Reiche eine mit Ofox gebaute App ein und erhalte:',
    cash_t: '$5 Entwickler-Bonus', cash_d: 'Nach Listung deinem Ofox-Konto gutgeschrieben',
    show_t: 'App-Präsentation', show_d: 'Auf der Ofox-Wall für Entwickler sichtbar',
    partner_t: 'Partner werden', partner_d: 'Empfehlungslink + Rückvergütung',
    refer_t: 'Nutzer empfehlen', refer_d: 'Lebenslange Bindung + Geschenk',
    cta: 'App einreichen', ghost: 'Deine App?',
  },
  es: {
    band: 'Añade tu app al muro — $5 + reembolso de Partner + backlink de alto tráfico',
    headline: 'Hazte ver, con Ofox',
    lead: 'El primer lugar es tuyo. Envía una app creada con Ofox y obtén:',
    cash_t: '$5 de incentivo', cash_d: 'Pagado a tu cuenta de Ofox una vez publicada',
    show_t: 'Vitrina de apps', show_d: 'Destacada en el muro de Ofox para desarrolladores',
    partner_t: 'Conviértete en Partner', partner_d: 'Enlace de referido + reembolso',
    refer_t: 'Refiere usuarios', refer_d: 'Vinculación de por vida + regalo',
    cta: 'Envía tu app', ghost: '¿Tu app?',
  },
  fr: {
    band: 'Ajoutez votre app au mur — 5 $ + rétrocommission Partner + backlink à fort trafic',
    headline: 'Faites-vous voir, avec Ofox',
    lead: 'La première place est pour vous. Soumettez une app conçue avec Ofox et obtenez :',
    cash_t: '5 $ d’incitation', cash_d: 'Versé sur votre compte Ofox une fois publiée',
    show_t: 'Vitrine d’apps', show_d: 'Mise en avant sur le mur Ofox pour les développeurs',
    partner_t: 'Devenez Partner', partner_d: 'Lien de parrainage + rétrocommission',
    refer_t: 'Parrainez des utilisateurs', refer_d: 'Liaison à vie + cadeau',
    cta: 'Soumettre votre app', ghost: 'Votre app ?',
  },
  pt: {
    band: 'Adicione seu app ao mural — $5 + reembolso de Partner + backlink de alto tráfego',
    headline: 'Seja visto, com a Ofox',
    lead: 'O primeiro lugar é seu. Envie um app criado com a Ofox e ganhe:',
    cash_t: '$5 de incentivo', cash_d: 'Pago à sua conta Ofox após a publicação',
    show_t: 'Vitrine de apps', show_d: 'Em destaque no mural da Ofox para desenvolvedores',
    partner_t: 'Torne-se Partner', partner_d: 'Link de indicação + reembolso',
    refer_t: 'Indique usuários', refer_d: 'Vínculo vitalício + presente',
    cta: 'Enviar seu app', ghost: 'Seu app?',
  },
  ru: {
    band: 'Добавьте приложение на стену — $5 + возврат Partner + обратная ссылка с высоким трафиком',
    headline: 'Будьте замечены вместе с Ofox',
    lead: 'Первое место — ваше. Отправьте приложение, созданное с Ofox, и получите:',
    cash_t: '$5 за разработку', cash_d: 'Зачисляется на ваш аккаунт Ofox после публикации',
    show_t: 'Витрина приложений', show_d: 'На стене Ofox — вас увидят разработчики',
    partner_t: 'Станьте Partner', partner_d: 'Реферальная ссылка + возврат',
    refer_t: 'Приглашайте пользователей', refer_d: 'Пожизненная привязка + подарок',
    cta: 'Отправить приложение', ghost: 'Ваше приложение?',
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
