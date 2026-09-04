/* ============================================================
 * PromptVault · i18n 字典
 * 8 主流语言：zh-CN / en / ja / ko / es / fr / de / ru
 * 翻不到的目标语言自动回落到 'en'（即下面 t() 函数的 chain）
 * ============================================================
 *  key 命名规范：
 *   app.*        通用 UI 文案（按钮/空状态/Toast 等）
 *   meta.*       顶部 meta / footer
 *   hero.*       首页 hero 区块
 *   side.*       侧栏分类导航
 *   toolbar.*    工具条（标题/排序）
 *   detail.*     详情页
 *   empty.*      空状态
 *   sort.*       排序选项
 *   tag.*        变量 / 难度 等小标签
 * ============================================================
 */
(function () {
  var Z = {
    /* —— 通用 UI —— */
    'app.copy-success':    '已复制到剪贴板',
    'app.copied':          '已复制',
    'app.copy-fail':       '复制失败，请手动选择文本',
    'app.fav-on':          '已收藏',
    'app.fav-off':         '收藏',
    'app.fav-title':       '只看收藏',
    'app.toggle-theme':    '切换主题',
    'app.open-repo':       'GitHub 仓库',
    'app.search-ph':       '搜索标题、摘要、标签或正文…',
    'app.search-clear':    '清空搜索',
    'app.open-menu':       '打开分类',
    'app.back-home':       '回到首页',
    'app.gh':              'GitHub 仓库',
    /* —— meta / footer —— */
    'meta.title':          'PromptVault · 个人提示词库',
    'meta.desc':           '结构化个人提示词库：88+ 条精选提示词，12 大分类、86 个子分类，支持一键复制、变量填充与全文检索。',
    'meta.footer-brand':   'PromptVault · 个人提示词库',
    'meta.footer-add':     '新增提示词：在 prompts/<分类>/<子分类>/ 下加一个 .md，然后 npm run build',
    /* —— hero —— */
    'hero.kicker':         '结构化 · 可维护 · 一键复制',
    'hero.h1-a':           '把好用的提示词',
    'hero.h1-em':          '能查得到的库',
    'hero.h1-tail':        '存成一个',
    'hero.sub':            '覆盖代码、绘图、写作、研究、产品、商业等 12 大领域。每条提示词都带分类标签、变量占位与完整说明，复制即用。',
    'hero.stat-prompt':    '条提示词',
    'hero.stat-cat':       '个大类',
    'hero.stat-sub':       '个子分类',
    /* —— 侧栏 —— */
    'side.title':          '分类导航',
    'side.reset':          '重置',
    'side.all':            '全部',
    'side.total-a':        '共 ',
    'side.total-b':        ' 条提示词',
    'side.note':           '数据由 prompts/ 构建生成',
    /* —— toolbar —— */
    'toolbar.all':         '全部提示词',
    'toolbar.fav':         '我的收藏',
    'toolbar.search-prefix': '搜索「',
    'toolbar.search-suffix': '」',
    /* —— sort —— */
    'sort.updated':        '最近更新',
    'sort.title':          '标题 A→Z',
    'sort.cat':            '按分类',
    'sort.chars':          '内容长度',
    /* —— 卡片 —— */
    'card.vars':           ' 变量',
    'card.chars':          ' 字',
    'card.copy':           '复制',
    /* —— 详情 —— */
    'detail.back':         '返回列表',
    'detail.model':        '适用模型',
    'detail.level':        '难度',
    'detail.updated':      '更新',
    'detail.chars-a':      '正文 ',
    'detail.chars-b':      ' 字',
    'detail.vars-a':       '变量 ',
    'detail.vars-b':       ' 个',
    'detail.src':          '原站与参考实现',
    'detail.copy-raw':     '复制原文',
    'detail.copy-filled':  '复制填充版',
    'detail.copy-link':    '复制链接',
    'detail.download':     '下载 .md',
    'detail.fill-badge':   '变量填充',
    'detail.fill-hint-1':  '填写后正文会实时替换，可一键复制成稿',
    'detail.fill-hint-2':  '下拉项默认取第一项，也可点正文里的选项直接切换',
    'detail.rel':          '相关提示词',
    /* —— 卡片/详情单位 —— */
    'tag.item':            '条',
    /* —— 空状态 —— */
    'empty.title':         '没有匹配的提示词',
    'empty.hint':          '试试换个关键词，或清空筛选条件',
    'empty.reset':         '清空筛选',
    /* —— 错误 —— */
    'error.load-fail':     '数据加载失败',
    'error.load-hint':     ' — 请先运行 npm run build 生成 data/prompts.json',
    /* —— Toast —— */
    'toast.copy-raw':      '原文已复制',
    'toast.copy-filled':   '已复制填充后的提示词',
    'toast.copy-link':     '链接已复制',
    /* —— 语言切换器 —— */
    'lang.label':          '语言',
    'lang.zh':             '简体中文',
    'lang.en':             'English',
    'lang.ja':             '日本語',
    'lang.ko':             '한국어',
    'lang.es':             'Español',
    'lang.fr':             'Français',
    'lang.de':             'Deutsch',
    'lang.ru':             'Русский',
  };

  var E = {
    'app.copy-success':    'Copied to clipboard',
    'app.copied':          'Copied',
    'app.copy-fail':       'Copy failed. Please select the text manually.',
    'app.fav-on':          'Favorited',
    'app.fav-off':         'Favorite',
    'app.fav-title':       'Favorites only',
    'app.toggle-theme':    'Toggle theme',
    'app.open-repo':       'GitHub repo',
    'app.search-ph':       'Search by title, summary, tags, or body…',
    'app.search-clear':    'Clear search',
    'app.open-menu':       'Open categories',
    'app.back-home':       'Back to home',
    'app.gh':              'GitHub repo',
    'meta.title':          'PromptVault · Personal Prompt Library',
    'meta.desc':           'A structured personal prompt library: 88+ curated prompts across 12 categories and 86 sub-categories. One-click copy, variable fill, full-text search.',
    'meta.footer-brand':   'PromptVault · Personal Prompt Library',
    'meta.footer-add':     'Add a prompt: create a .md under prompts/<cat>/<sub>/, then run npm run build',
    'hero.kicker':         'Structured · Maintainable · One-Click Copy',
    'hero.h1-a':           'Keep the prompts that work in a',
    'hero.h1-em':          'library you can actually search',
    'hero.h1-tail':        ' turn them into a',
    'hero.sub':            'Coverage across code, art, writing, research, product, business, and 12 other domains. Every prompt has category tags, variable slots, and full notes — copy and use.',
    'hero.stat-prompt':    'prompts',
    'hero.stat-cat':       'categories',
    'hero.stat-sub':       'sub-categories',
    'side.title':          'Categories',
    'side.reset':          'Reset',
    'side.all':            'All',
    'side.total-a':        'Total: ',
    'side.total-b':        ' prompts',
    'side.note':           'Built from prompts/ at build time',
    'toolbar.all':         'All prompts',
    'toolbar.fav':         'My favorites',
    'toolbar.search-prefix': 'Search: "',
    'toolbar.search-suffix': '"',
    'sort.updated':        'Recently updated',
    'sort.title':          'Title A→Z',
    'sort.cat':            'By category',
    'sort.chars':          'By length',
    'card.vars':           ' vars',
    'card.chars':          ' ch',
    'card.copy':           'Copy',
    'detail.back':         'Back to list',
    'detail.model':        'Model',
    'detail.level':        'Level',
    'detail.updated':      'Updated',
    'detail.chars-a':      'Length ',
    'detail.chars-b':      ' ch',
    'detail.vars-a':       'Vars ',
    'detail.vars-b':       '',
    'detail.src':          'Original & reference',
    'detail.copy-raw':     'Copy raw',
    'detail.copy-filled':  'Copy filled',
    'detail.copy-link':    'Copy link',
    'detail.download':     'Download .md',
    'detail.fill-badge':   'Variable fill',
    'detail.fill-hint-1':  'Fill the slots and the body updates live. Copy a ready-to-use version with one click.',
    'detail.fill-hint-2':  'Drops default to the first option; click an inline option to cycle it.',
    'detail.rel':          'Related prompts',
    'tag.item':            'prompts',
    'empty.title':         'No matching prompts',
    'empty.hint':          'Try a different keyword, or clear the filters.',
    'empty.reset':         'Clear filters',
    'error.load-fail':     'Data load failed',
    'error.load-hint':     ' — please run npm run build to generate data/prompts.json',
    'toast.copy-raw':      'Raw prompt copied',
    'toast.copy-filled':   'Filled prompt copied',
    'toast.copy-link':     'Link copied',
    'lang.label':          'Language',
    'lang.zh':             '简体中文',
    'lang.en':             'English',
    'lang.ja':             '日本語',
    'lang.ko':             '한국어',
    'lang.es':             'Español',
    'lang.fr':             'Français',
    'lang.de':             'Deutsch',
    'lang.ru':             'Русский',
  };

  /* —— 其他语言版本用引擎兜底（先只 en/ja/zh，剩 5 种逐步补） —— */
  var J = {
    'app.copy-success':    'クリップボードにコピーしました',
    'app.copied':          'コピー済み',
    'app.copy-fail':       'コピーに失敗しました。テキストを手動で選択してください。',
    'app.fav-on':          'お気に入り済み',
    'app.fav-off':         'お気に入り',
    'app.fav-title':       'お気に入りのみ表示',
    'app.toggle-theme':    'テーマ切替',
    'app.open-repo':       'GitHub リポジトリ',
    'app.search-ph':       'タイトル・概要・タグ・本文を検索…',
    'app.search-clear':    '検索をクリア',
    'app.open-menu':       'カテゴリを開く',
    'app.back-home':       'ホームへ戻る',
    'app.gh':              'GitHub リポジトリ',
    'meta.title':          'PromptVault · 個人プロンプト集',
    'meta.desc':           '構造化された個人のプロンプト集：12 カテゴリ・86 サブカテゴリに厳選された 88+ 件。ワンクリックコピー・変数入力・全文検索をサポート。',
    'meta.footer-brand':   'PromptVault · 個人プロンプト集',
    'meta.footer-add':     'プロンプト追加：prompts/<カテゴリ>/<サブカテゴリ>/ に .md を作り、npm run build を実行',
    'hero.kicker':         '構造化・保守性・ワンクリックコピー',
    'hero.h1-a':           '使えるプロンプトを、',
    'hero.h1-em':          '検索できるライブラリ',
    'hero.h1-tail':         'に',
    'hero.sub':            'コード・画像・文章・研究・プロダクト・ビジネスなど 12 分野を網羅。各プロンプトにカテゴリタグ・変数スロット・完全な説明があり、すぐに使えます。',
    'hero.stat-prompt':    '件のプロンプト',
    'hero.stat-cat':       'カテゴリ',
    'hero.stat-sub':       'サブカテゴリ',
    'side.title':          'カテゴリ',
    'side.reset':          'リセット',
    'side.all':            'すべて',
    'side.total-a':        '全 ',
    'side.total-b':        ' 件',
    'side.note':           'prompts/ からビルド時に生成',
    'toolbar.all':         'すべてのプロンプト',
    'toolbar.fav':         'お気に入り',
    'toolbar.search-prefix': '検索：',
    'toolbar.search-suffix': '',
    'sort.updated':        '更新が新しい順',
    'sort.title':          'タイトル A→Z',
    'sort.cat':            'カテゴリ順',
    'sort.chars':          '文字数順',
    'card.vars':           ' 変数',
    'card.chars':          ' 字',
    'card.copy':           'コピー',
    'detail.back':         '一覧へ戻る',
    'detail.model':        '対応モデル',
    'detail.level':        '難易度',
    'detail.updated':      '更新',
    'detail.chars-a':      '本文 ',
    'detail.chars-b':      ' 字',
    'detail.vars-a':       '変数 ',
    'detail.vars-b':       ' 個',
    'detail.src':          '元記事・参考実装',
    'detail.copy-raw':     '原文をコピー',
    'detail.copy-filled':  '入力を反映してコピー',
    'detail.copy-link':    'リンクをコピー',
    'detail.download':     '.md をダウンロード',
    'detail.fill-badge':   '変数入力',
    'detail.fill-hint-1':  'スロットを埋めると本文が即時に更新され、そのままコピーできます。',
    'detail.fill-hint-2':  'ドロップダウンは最初の項目が既定値。本文内の選択肢をクリックして切り替えも可。',
    'detail.rel':          '関連プロンプト',
    'tag.item':            '件',
    'empty.title':         '該当するプロンプトがありません',
    'empty.hint':          '別のキーワードを試すか、フィルタをクリアしてください。',
    'empty.reset':         'フィルタをクリア',
    'error.load-fail':     'データ読み込みに失敗',
    'error.load-hint':     ' — 先に npm run build を実行して data/prompts.json を生成してください',
    'toast.copy-raw':      '原文をコピーしました',
    'toast.copy-filled':   '反映済みプロンプトをコピーしました',
    'toast.copy-link':     'リンクをコピーしました',
    'lang.label':          '言語',
    'lang.zh':             '简体中文',
    'lang.en':             'English',
    'lang.ja':             '日本語',
    'lang.ko':             '한국어',
    'lang.es':             'Español',
    'lang.fr':             'Français',
    'lang.de':             'Deutsch',
    'lang.ru':             'Русский',
  };

  /* —— 韩 / 西 / 法 / 德 / 俄 共用兜底（运行时暂 fallback 到英文，后续接 API 再补全） —— */
  /* 当前阶段保留扩展位，避免报错，运行时 t() 会自动 fallback 到 en */
  var K = {}, S = {}, F = {}, D = {}, R = {};
  var LANGS = {
    zh: { name: '简体中文', flag: '🇨🇳', dict: Z },
    en: { name: 'English',  flag: '🇺🇸', dict: E },
    ja: { name: '日本語',    flag: '🇯🇵', dict: J },
    ko: { name: '한국어',     flag: '🇰🇷', dict: K },
    es: { name: 'Español',  flag: '🇪🇸', dict: S },
    fr: { name: 'Français', flag: '🇫🇷', dict: F },
    de: { name: 'Deutsch',  flag: '🇩🇪', dict: D },
    ru: { name: 'Русский',  flag: '🇷🇺', dict: R },
  };

  /* 自动 fallback 链：当前 → en */
  function pick(lang, key) {
    var stack = [lang, 'en'];
    for (var i = 0; i < stack.length; i++) {
      var d = LANGS[stack[i]] && LANGS[stack[i]].dict;
      if (d && Object.prototype.hasOwnProperty.call(d, key)) return d[key];
    }
    return key; // 真的没有就回 key 名（不应当发生）
  }

  window.__PV_I18N__ = {
    LANGS: LANGS,
    LANG_CODES: Object.keys(LANGS),
    DEFAULT: 'zh',
    pick: pick,
    /* 简短 t() 助手 */
    t: function (key, lang) { return pick(lang || 'zh', key); },
  };
})();
