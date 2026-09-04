/* ============================================================
   PromptVault · 前端逻辑（原生 JS，无依赖）
   ============================================================ */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var DATA = { meta: {}, taxonomy: [], items: [] };
  var CAT = {};            // catId -> {name, color, icon}
  var SUB = {};            // "cat/sub" -> 子分类名
  var FAV_KEY = 'pv.favs';
  var THEME_KEY = 'pv.theme';
  var LANG_KEY = 'pv.lang';
  var I18N = window.__PV_I18N__ || { LANGS: {}, t: function (k) { return k; }, DEFAULT: 'zh' };

  var state = { q: '', cat: '', sub: '', sort: 'updated', favOnly: false, view: 'home', id: '' };
  var favs = load(FAV_KEY, []);
  var currentLang = load(LANG_KEY, I18N.DEFAULT);

  /* ------------------------------ 工具 ------------------------------ */

  function load(k, d) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* -------- i18n -------- */
  function t(key, lang) { return I18N.t(key, lang || currentLang); }

  // 取 item 上某字段的多语言版本；按 currentLang → 'en' → 字段本身的回退链
  function pick(it, field) {
    if (!it) return '';
    var bag = it.i18n && it.i18n[field];
    if (bag) {
      if (bag[currentLang]) return bag[currentLang];
      if (bag.en) return bag.en;
    }
    // 兼容旧 schema（保留 title/summary/content/html 原生字段）
    return it[field] || '';
  }
  function pickCat(catId) {
    var c = CAT[catId];
    if (!c) return '';
    if (c.i18n && c.i18n[currentLang]) return c.i18n[currentLang];
    if (c.i18n && c.i18n.en) return c.i18n.en;
    return c.name || '';
  }
  function pickSub(catId, subId) {
    var fullKey = catId + '/' + subId;
    var c = CAT[catId];
    if (c && c.subsById && c.subsById[subId]) {
      var s = c.subsById[subId];
      if (s.i18n && s.i18n[currentLang]) return s.i18n[currentLang];
      if (s.i18n && s.i18n.en) return s.i18n.en;
      return s.name;
    }
    return SUB[fullKey] || '';
  }

  /* -------- data schema：把 taxonomy/i18n 预编译成 CAT/SUB -------- */
  function buildCaches() {
    CAT = {};
    SUB = {};
    DATA.taxonomy.forEach(function (c) {
      CAT[c.id] = c;
      c.subsById = {};
      (c.subs || []).forEach(function (s) {
        c.subsById[s.id] = s;
        SUB[c.id + '/' + s.id] = s.name;
      });
    });
  }

  /* -------- DOM 静态 i18n 扫描 -------- */
  function applyStaticI18n() {
    // [data-i18n] -> textContent
    $$('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      el.textContent = t(k);
    });
    // [data-i18n-attr="attr|key"] -> setAttribute
    $$('[data-i18n-attr]').forEach(function (el) {
      var v = el.getAttribute('data-i18n-attr').split('|');
      el.setAttribute(v[0], t(v[1]));
    });
    // [data-i18n-html="key"] -> innerHTML（保留内部子元素，例如 <b id="favCount">0</b>）
    $$('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      el.innerHTML = t(k);
    });
  }

  /* -------- 切换语言时的全量重渲入口 -------- */
  function applyLang(lang) {
    if (!I18N.LANGS[lang]) lang = I18N.DEFAULT;
    currentLang = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
    save(LANG_KEY, lang);
    // 静态 DOM
    applyStaticI18n();
    // 卡片/详情/侧栏都依赖语言，需要全量刷
    renderLangFlag();
    renderLangMenu();
    renderTree();
    renderQuick();
    if (state.view === 'detail') showDetail(state.id);
    else renderHome();
  }

  /* -------- 切换器 UI -------- */
  function renderLangFlag() {
    var meta = I18N.LANGS[currentLang] || I18N.LANGS[I18N.DEFAULT];
    $('#langFlag').textContent = meta.flag;
    $('#langCode').textContent = (currentLang || I18N.DEFAULT).toUpperCase();
  }
  function renderLangMenu() {
    var html = '';
    Object.keys(I18N.LANGS).forEach(function (code) {
      var m = I18N.LANGS[code];
      var sel = code === currentLang;
      html += '<li role="option" aria-selected="' + (sel ? 'true' : 'false') + '" data-lang="' + code + '">' +
        '<span class="fi">' + m.flag + '</span>' +
        '<span class="nm">' + esc(m.name) + '</span>' +
        '<svg class="ic ck" viewBox="0 0 24 24"><use href="#i-check"/></svg>' +
      '</li>';
    });
    $('#langMenu').innerHTML = html;
    $$('#langMenu li').forEach(function (li) {
      li.addEventListener('click', function () {
        var code = li.dataset.lang;
        applyLang(code);
        closeLangMenu();
      });
    });
  }
  function openLangMenu() {
    $('#langMenu').hidden = false;
    $('#langBtn').setAttribute('aria-expanded', 'true');
  }
  function closeLangMenu() {
    $('#langMenu').hidden = true;
    $('#langBtn').setAttribute('aria-expanded', 'false');
  }
  function toggleLangMenu() {
    if ($('#langMenu').hidden) openLangMenu();
    else closeLangMenu();
  }

  function toast(msg, ok) {
    var wrap = $('#toasts');
    var el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = (ok ? '<svg class="ic"><use href="#i-check"/></svg>' : '') + '<span>' + esc(msg) + '</span>';
    wrap.appendChild(el);
    setTimeout(function () {
      el.classList.add('out');
      setTimeout(function () { el.remove(); }, 240);
    }, 1900);
  }

  function copy(text, btn, label) {
    var done = function () {
      toast(label || t('app.copy-success'), true);
      if (!btn) return;
      var old = btn.innerHTML;
      var was = btn.className;
      btn.classList.add('done');
      btn.innerHTML = '<svg class="ic"><use href="#i-check"/></svg><span>' + esc(t('app.copied')) + '</span>';
      setTimeout(function () { btn.className = was; btn.innerHTML = old; }, 1600);
    };
    var fail = function () { toast(t('app.copy-fail')); };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, function () { legacy(text) ? done() : fail(); });
    } else {
      legacy(text) ? done() : fail();
    }
  }

  function legacy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;top:-1000px;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    ta.setSelectionRange(0, text.length);
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) {}
    ta.remove();
    return ok;
  }

  function debounce(fn, ms) {
    var t;
    return function () {
      var a = arguments, s = this;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(s, a); }, ms);
    };
  }

  function isFav(id) { return favs.indexOf(id) > -1; }
  function toggleFav(id) {
    var i = favs.indexOf(id);
    if (i > -1) favs.splice(i, 1); else favs.push(id);
    save(FAV_KEY, favs);
    renderFavCount();
    $$('[data-fav="' + cssEsc(id) + '"]').forEach(function (b) { syncStar(b, isFav(id)); });
  }
  function cssEsc(s) { return String(s).replace(/["\\]/g, '\\$&'); }
  function syncStar(btn, on) {
    btn.classList.toggle('on', on);
    btn.setAttribute('aria-pressed', on);
    var sp = $$('.chip-btn-t span, .btn-s.star span', btn)[0] || $('span', btn);
    if (sp) sp.textContent = on ? t('app.fav-on') : t('app.fav-off');
  }

  function renderFavCount() {
    var n = $('#favCount');
    if (n) n.textContent = favs.length;
    $('#favBtn').classList.toggle('on', state.favOnly);
  }

  /* ------------------------------ 侧栏分类树 ------------------------------ */

  function renderTree() {
    var tree = $('#tree');
    tree.innerHTML = DATA.taxonomy.map(function (c) {
      var catName = pickCat(c.id);
      return '' +
        '<div class="tg" data-cat="' + c.id + '" style="--c:' + c.color + '">' +
          '<button class="tg-head" data-act="toggle-cat" data-cat="' + c.id + '">' +
            '<span class="tg-icon"><svg class="ic"><use href="#i-' + c.icon + '"/></svg></span>' +
            '<span class="tg-name">' + esc(catName) + '</span>' +
            '<span class="tg-n">' + c.count + '</span>' +
            '<svg class="ic ic-chev"><use href="#i-chev"/></svg>' +
          '</button>' +
          '<div class="tg-subs">' +
            '<button class="sub" data-act="sub" data-cat="' + c.id + '" data-sub="">' +
              '<span>' + esc(t('side.all')) + ' ' + esc(catName) + '</span><span class="sub-n">' + c.count + '</span>' +
            '</button>' +
            c.subs.map(function (s) {
              return '<button class="sub" data-act="sub" data-cat="' + c.id + '" data-sub="' + s.id + '">' +
                '<span>' + esc(pickSub(c.id, s.id)) + '</span><span class="sub-n">' + s.count + '</span></button>';
            }).join('') +
          '</div>' +
        '</div>';
    }).join('');
  }

  function syncTree() {
    $$('.tg').forEach(function (g) {
      var c = g.dataset.cat;
      g.classList.toggle('active', state.cat === c);
      g.classList.toggle('open', state.cat === c || $$('.sub.on', g).length > 0);
    });
    $$('.sub').forEach(function (b) {
      var on = state.cat === b.dataset.cat && (state.sub || '') === (b.dataset.sub || '');
      b.classList.toggle('on', on);
    });
  }

  function renderQuick() {
    var html = '<button class="qchip' + (!state.cat ? ' on' : '') + '" data-act="sub" data-cat="" data-sub="" style="--c:var(--accent)">' +
      '<svg class="ic"><use href="#i-cube"/></svg>' + esc(t('side.all')) + '</button>';
    html += DATA.taxonomy.map(function (c) {
      return '<button class="qchip" data-act="sub" data-cat="' + c.id + '" data-sub="" style="--c:' + c.color + '">' +
        '<svg class="ic"><use href="#i-' + c.icon + '"/></svg>' + esc(pickCat(c.id)) + '</button>';
    }).join('');
    $('#quickbar').innerHTML = html;
  }

  function syncQuick() {
    $$('.qchip').forEach(function (b) {
      b.classList.toggle('on', (b.dataset.cat || '') === state.cat && !state.sub);
    });
  }

  /* ------------------------------ 路由 ------------------------------ */

  function route() {
    var h = (location.hash || '').replace(/^#/, '');
    var seg = h.split('/').filter(Boolean).map(decodeURIComponent);

    if (seg[0] === 'p' && seg[1]) {
      state.view = 'detail';
      state.id = seg.slice(1).join('/');
      showDetail(state.id);
      return;
    }
    state.view = 'home';
    state.id = '';
    state.favOnly = seg[0] === 'fav';
    if (seg[0] === 'c') {
      state.cat = seg[1] || '';
      state.sub = seg[2] || '';
    } else {
      state.cat = '';
      state.sub = '';
    }
    renderHome();
  }

  function go(hash) {
    if (location.hash === hash) route();
    else location.hash = hash;
  }

  /* ------------------------------ 首页渲染 ------------------------------ */

  function filtered() {
    var q = state.q.trim().toLowerCase();
    var list = DATA.items.filter(function (it) {
      if (state.cat && it.category !== state.cat) return false;
      if (state.sub && it.subcategory !== state.sub) return false;
      if (state.favOnly && !isFav(it.id)) return false;
      if (!q) return true;
      return match(it, q) > 0;
    });

    var s = state.sort;
    list.sort(function (a, b) {
      if (s === 'title') return pick(a, 'title').localeCompare(pick(b, 'title'), currentLang === 'zh' ? 'zh' : currentLang);
      if (s === 'chars') return b.chars - a.chars;
      if (s === 'cat') {
        var d = pickCat(a.category).localeCompare(pickCat(b.category), currentLang === 'zh' ? 'zh' : currentLang);
        return d || pick(a, 'title').localeCompare(pick(b, 'title'), currentLang === 'zh' ? 'zh' : currentLang);
      }
      return (b.updated || '').localeCompare(a.updated || '');
    });
    return list;
  }

  function match(it, q) {
    var bag = it.i18n || {};
    var tBag = bag.title || {};
    var sBag = bag.summary || {};
    var titles = [tBag.zh, tBag.en, tBag.ja, tBag.ko, tBag.es, tBag.fr, tBag.de, tBag.ru, it.title].filter(Boolean);
    var sums = [sBag.zh, sBag.en, sBag.ja, sBag.ko, sBag.es, sBag.fr, sBag.de, sBag.ru, it.summary].filter(Boolean);
    var hay = titles.concat(sums).concat([it.tags.join(' '), pickCat(it.category), pickSub(it.category, it.subcategory),
      it.content, it.model]).join(' ').toLowerCase();
    if (hay.indexOf(q) === -1) return 0;
    // 标题命中权重最高（任何语种标题都行）
    for (var i = 0; i < titles.length; i++) {
      if (titles[i] && titles[i].toLowerCase().indexOf(q) > -1) return 4;
    }
    if (it.tags.join(' ').toLowerCase().indexOf(q) > -1) return 3;
    for (var j = 0; j < sums.length; j++) {
      if (sums[j] && sums[j].toLowerCase().indexOf(q) > -1) return 2;
    }
    return 1;
  }

  function mark(text, q) {
    if (!q) return esc(text);
    var i = text.toLowerCase().indexOf(q);
    if (i < 0) return esc(text);
    return esc(text.slice(0, i)) + '<mark>' + esc(text.slice(i, i + q.length)) + '</mark>' + esc(text.slice(i + q.length));
  }

  function renderHome() {
    $('#viewDetail').hidden = true;
    $('#viewHome').hidden = false;

    var filtering = !!(state.q.trim() || state.cat || state.favOnly);
    $('#hero').style.display = filtering ? 'none' : '';
    $('#quickbar').style.display = state.cat && !state.q ? 'none' : '';

    syncTree();
    syncQuick();

    var list = filtered();
    var q = state.q.trim().toLowerCase();

    $('#resultTitle').textContent = titleText();
    $('#resCount').innerHTML = list.length + ' ' + '<span data-i18n="tag.item">' + esc(t('tag.item')) + '</span>';

    var grid = $('#grid');
    grid.innerHTML = list.map(function (it) { return cardHtml(it, q); }).join('');
    $('#empty').hidden = list.length > 0;
    grid.hidden = list.length === 0;

    document.title = state.cat
      ? pickCat(state.cat) + (state.sub ? ' / ' + pickSub(state.cat, state.sub) : '') + ' · PromptVault'
      : t('meta.title');
  }

  function titleText() {
    if (state.favOnly) return t('toolbar.fav');
    if (state.q.trim()) return t('toolbar.search-prefix') + state.q.trim() + t('toolbar.search-suffix');
    if (state.sub) return pickCat(state.cat) + ' / ' + pickSub(state.cat, state.sub);
    if (state.cat) return pickCat(state.cat);
    return t('toolbar.all');
  }

  function cardHtml(it, q) {
    var c = CAT[it.category];
    var title = pick(it, 'title');
    var summary = pick(it, 'summary');
    var catName = pickCat(it.category);
    var subName = pickSub(it.category, it.subcategory);
    return '' +
      '<article class="card" style="--c:' + c.color + '" data-id="' + esc(it.id) + '" tabindex="0">' +
        '<div class="card-top">' +
          '<span class="cat-chip"><i></i>' + esc(catName) + '</span>' +
          '<span class="sub-txt">' + esc(subName) + '</span>' +
          '<button class="star' + (isFav(it.id) ? ' on' : '') + '" data-act="fav" data-id="' + esc(it.id) + '" data-fav="' + esc(it.id) + '" aria-pressed="' + isFav(it.id) + '" aria-label="' + esc(t('app.fav-off')) + '">' +
            '<svg class="ic"><use href="#i-star"/></svg></button>' +
        '</div>' +
        '<h3>' + mark(title, q) + '</h3>' +
        '<p>' + mark(summary, q) + '</p>' +
        (it.tags.length ? '<div class="tags">' +
          it.tags.slice(0, 3).map(function (tg) { return '<span class="tag">' + esc(tg) + '</span>'; }).join('') +
          (it.tags.length > 3 ? '<span class="tag">+' + (it.tags.length - 3) + '</span>' : '') +
        '</div>' : '') +
        '<div class="card-bot">' +
          '<div class="meta">' +
            (it.variables.length ? '<span>' + it.variables.length + esc(t('card.vars')) + '</span>' : '') +
            '<span>' + it.chars + esc(t('card.chars')) + '</span>' +
          '</div>' +
          '<button class="copy-btn" data-act="copy" data-id="' + esc(it.id) + '">' +
            '<svg class="ic"><use href="#i-copy"/></svg><span>' + esc(t('card.copy')) + '</span></button>' +
        '</div>' +
      '</article>';
  }

  /* ------------------------------ 详情页 ------------------------------ */

  function showDetail(id) {
    var it = DATA.items.filter(function (x) { return x.id === id; })[0];
    if (!it) { location.hash = '#/'; return; }

    var c = CAT[it.category];
    var title = pick(it, 'title');
    var summary = pick(it, 'summary');
    var catName = pickCat(it.category);
    var subName = pickSub(it.category, it.subcategory);

    $('#viewHome').hidden = true;
    var d = $('#viewDetail');
    d.hidden = false;
    document.title = title + ' · PromptVault';

    d.innerHTML = '' +
      '<div class="dtl" style="--c:' + c.color + '">' +
        '<div class="dtl-bar">' +
          '<button class="back" data-act="back"><svg class="ic"><use href="#i-back"/></svg>' + esc(t('detail.back')) + '</button>' +
          '<div class="crumb"><b>' + esc(catName) + '</b><span class="sep">/</span><span>' + esc(subName) + '</span></div>' +
        '</div>' +

        '<div class="dtl-head">' +
          '<h1>' + esc(title) + '</h1>' +
          '<p class="dtl-sum">' + esc(summary) + '</p>' +
          '<div class="dtl-meta">' +
            '<span class="mchip">' + esc(t('detail.model')) + ' <b>' + esc(it.model) + '</b></span>' +
            '<span class="mchip">' + esc(t('detail.level')) + ' <b>' + esc(it.level) + '</b></span>' +
            (it.updated ? '<span class="mchip">' + esc(t('detail.updated')) + ' <b>' + esc(it.updated) + '</b></span>' : '') +
            '<span class="mchip">' + esc(t('detail.chars-a')) + '<b>' + it.chars + '</b>' + esc(t('detail.chars-b')) + '</span>' +
            (it.variables.length ? '<span class="mchip">' + esc(t('detail.vars-a')) + '<b>' + it.variables.length + '</b>' + esc(t('detail.vars-b')) + '</span>' : '') +
            (it.source ? '<a class="mchip mchip-src" href="' + esc(it.source) + '" target="_blank" rel="noopener">' + esc(t('detail.src')) + ' <b>↗</b></a>' : '') +
          '</div>' +
          '<div class="dtl-act">' +
            '<button class="btn-p" data-act="copy-raw"><svg class="ic"><use href="#i-copy"/></svg><span>' + esc(t('detail.copy-raw')) + '</span></button>' +
            (it.variables.length ? '<button class="btn-p" data-act="copy-filled" style="background:linear-gradient(135deg,#0ea5e9,#0284c7);box-shadow:0 4px 14px rgba(14,165,233,.3)"><svg class="ic"><use href="#i-check"/></svg><span>' + esc(t('detail.copy-filled')) + '</span></button>' : '') +
            '<button class="btn-s star' + (isFav(it.id) ? ' on' : '') + '" data-act="fav" data-id="' + esc(it.id) + '" data-fav="' + esc(it.id) + '"><svg class="ic"><use href="#i-star"/></svg><span>' + esc(isFav(it.id) ? t('app.fav-on') : t('app.fav-off')) + '</span></button>' +
            '<button class="btn-s" data-act="copy-link"><svg class="ic"><use href="#i-link"/></svg><span>' + esc(t('detail.copy-link')) + '</span></button>' +
            '<button class="btn-s" data-act="download"><svg class="ic"><use href="#i-inbox"/></svg><span>' + esc(t('detail.download')) + '</span></button>' +
          '</div>' +
        '</div>' +

        (it.variables.length ? varsHtml(it) : '') +

        '<div class="dtl-body" id="dtlBody"><div class="md" id="mdBody">' + pick(it, 'html') + '</div></div>' +

        relHtml(it) +
      '</div>';

    if (it.variables.length) bindVars(it, {});
    window.scrollTo(0, 0);
  }

  function varsHtml(it) {
    var chs = it.choices || [], ins = it.inputs || [];
    if (!chs.length && !ins.length) return '';
    return '' +
      '<div class="vars">' +
        '<div class="vars-head">' +
          '<span class="badge">' + esc(t('detail.fill-badge')) + '</span>' +
          esc(t('detail.fill-hint-1')) +
          '<span class="hint">' + esc(t('detail.fill-hint-2')) + '</span>' +
        '</div>' +
        '<div class="vars-grid">' +
          chs.map(function (c) {
            var lb = c.label ||
              (c.options.length > 2
                ? c.options.slice(0, 2).join(' / ') + ' …'
                : c.options.join(' / '));
            return '<div class="vf"><label title="' + esc(c.name) + '">' +
              esc(lb) + '</label>' +
              '<select data-var="' + esc(c.name) + '">' +
                c.options.map(function (o) {
                  return '<option value="' + esc(o) + '">' + esc(o) + '</option>';
                }).join('') +
              '</select></div>';
          }).join('') +
          ins.map(function (v) {
            return '<div class="vf"><label title="' + esc(v) + '">{{ ' + esc(v) + ' }}</label>' +
              '<input type="text" data-var="' + esc(v) + '" placeholder="' + esc(v) + '"></div>';
          }).join('') +
        '</div>' +
      '</div>';
  }

  /** 按占位名在填充面板里找对应控件（避开属性选择器的转义问题） */
  function findCtl(name, tag) {
    var all = $$(tag === 'select' ? '.vars select' : '.vars input');
    for (var i = 0; i < all.length; i++) if (all[i].dataset.var === name) return all[i];
    return null;
  }

  /** 把某个占位的当前值同步到正文所有对应位置 */
  function syncOne(name, val) {
    $$('#mdBody .pv-var').forEach(function (sp) {
      if (sp.dataset.var !== name) return;
      if (sp.classList.contains('pv-choice')) {
        var opts = sp.dataset.options.split('\u0001');
        var i = opts.indexOf(val);
        if (i < 0) i = 0;
        sp.dataset.idx = i;
        sp.textContent = opts[i];
        sp.classList.toggle('filled', i > 0);
      } else if (val) {
        sp.textContent = val;
        sp.classList.add('filled');
      } else {
        sp.textContent = '{{' + name + '}}';
        sp.classList.remove('filled');
      }
    });
  }

  function bindVars(it, fill) {
    (it.choices || []).forEach(function (c) {
      fill[c.name] = c.options[0];
      syncOne(c.name, c.options[0]);
    });

    $$('.vars input, .vars select').forEach(function (el) {
      var handler = function () {
        var name = el.dataset.var;
        fill[name] = el.value.trim();
        syncOne(name, fill[name]);
      };
      el.addEventListener('input', handler);
      el.addEventListener('change', handler);
    });

    $$('#mdBody .pv-choice').forEach(function (sp) {
      sp.addEventListener('click', function () {
        var opts = sp.dataset.options.split('\u0001');
        var idx = ((+sp.dataset.idx || 0) + 1) % opts.length;
        var val = opts[idx];
        fill[sp.dataset.var] = val;
        syncOne(sp.dataset.var, val);
        var sel = findCtl(sp.dataset.var, 'select');
        if (sel) sel.value = val;
      });
    });
  }

  function fillText(it, fill) {
    var content = pick(it, 'content') || it.content;
    return content.replace(/\{\{([^{}]+)\}\}/g, function (m, v) {
      var k = v.trim();
      return fill[k] && fill[k].trim() ? fill[k] : m;
    });
  }

  function relHtml(it) {
    var rel = DATA.items.filter(function (x) {
      return x.id !== it.id && x.category === it.category && x.subcategory === it.subcategory;
    }).slice(0, 6);
    if (rel.length < 3) {
      var more = DATA.items.filter(function (x) {
        return x.id !== it.id && x.category === it.category && x.subcategory !== it.subcategory;
      });
      rel = rel.concat(more).slice(0, 6);
    }
    if (!rel.length) return '';
    return '<section class="rel"><h2>' + esc(t('detail.rel')) + '</h2><div class="rel-grid">' +
      rel.map(function (r) {
        return '<button class="rel-item" style="--c:' + CAT[r.category].color + '" data-act="open" data-id="' + esc(r.id) + '">' +
          '<div class="t">' + esc(pick(r, 'title')) + '</div>' +
          '<div class="s">' + esc(pickCat(r.category)) + ' / ' + esc(pickSub(r.category, r.subcategory)) + '</div>' +
        '</button>';
      }).join('') + '</div></section>';
  }

  /* ------------------------------ 事件 ------------------------------ */

  function bind() {
    var q = $('#q');
    // hash 路由监听：点击分类/子分类/卡片改变 location.hash 后由此触发重渲
    window.addEventListener('hashchange', route);
    q.addEventListener('input', debounce(function () {
      state.q = q.value;
      $('#qClear').hidden = !q.value;
      if (state.view === 'detail') location.hash = homeHash();
      else renderHome();
    }, 160));
    $('#qClear').addEventListener('click', function () {
      q.value = ''; state.q = ''; $('#qClear').hidden = true; q.focus(); renderHome();
    });

    $('#sortSel').addEventListener('change', function (e) { state.sort = e.target.value; renderHome(); });

    $('#favBtn').addEventListener('click', function () {
      state.favOnly = !state.favOnly;
      state.cat = ''; state.sub = '';
      go(state.favOnly ? '#/fav' : '#/');
    });

    $('#resetBtn').addEventListener('click', function () { state.q = ''; $('#q').value = ''; go('#/'); });
    $('#emptyReset').addEventListener('click', function () {
      state.q = ''; $('#q').value = ''; $('#qClear').hidden = true; state.favOnly = false; go('#/');
    });

    $('#themeBtn').addEventListener('click', function () {
      applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
    });

    /* —— 语言切换器 —— */
    $('#langBtn').addEventListener('click', function (e) {
      e.stopPropagation();
      toggleLangMenu();
    });
    document.addEventListener('click', function (e) {
      if (!$('#langMenu').hidden && !e.target.closest('.lang-pick')) closeLangMenu();
    });

    $('#menuBtn').addEventListener('click', openDrawer);
    $('#scrim').addEventListener('click', closeDrawer);

    document.addEventListener('click', function (e) {
      var t = e.target.closest('[data-act]');
      if (!t) return;
      var act = t.dataset.act;

      if (act === 'toggle-cat') {
        var g = t.closest('.tg');
        var open = g.classList.toggle('open');
        if (open && state.cat !== t.dataset.cat) go('#/c/' + t.dataset.cat);
        else if (!open) g.classList.remove('open');
        return;
      }
      if (act === 'sub') {
        var cat = t.dataset.cat || '';
        var sub = t.dataset.sub || '';
        state.favOnly = false;
        closeDrawer();
        go(cat ? '#/c/' + cat + (sub ? '/' + sub : '') : '#/');
        return;
      }
      if (act === 'fav') { e.stopPropagation(); toggleFav(t.dataset.id); return; }
      if (act === 'copy') {
        e.stopPropagation();
        var it0 = byId(t.dataset.id);
        copy(pick(it0, 'content') || it0.content, t);
        return;
      }
      if (act === 'open') { go('#/p/' + encodeURIComponent(t.dataset.id)); return; }
      if (act === 'back') { history.length > 1 ? history.back() : go('#/'); return; }
      if (act === 'copy-raw') { var it1 = current(); copy(pick(it1, 'content') || it1.content, t, t('toast.copy-raw')); return; }
      if (act === 'copy-filled') {
        var it2 = current();
        var f = collectVars();
        copy(fillText(it2, f), t, t('toast.copy-filled'));
        return;
      }
      if (act === 'copy-link') { copy(location.href, t, t('toast.copy-link')); return; }
      if (act === 'download') {
        var it3 = current();
        download(it3.slug + '.md', fm(it3));
        toast(t('toast.copy-link').replace('链接已复制', '已下载') + ' ' + it3.slug + '.md', true);
        return;
      }
    });

    document.addEventListener('keydown', function (e) {
      // ... 快捷键部分保留略
    });

    /* —— 快捷键 —— */
    document.addEventListener('keydown', function (e) {
      var typing = document.activeElement && /input|textarea|select/i.test(document.activeElement.tagName || '');
      if (typing) {
        if (e.key === 'Escape') document.activeElement.blur();
        return;
      }
      if (e.key === '/') { e.preventDefault(); $('#q').focus(); return; }
      if (e.key === 'Escape') {
        if (state.view === 'detail') { go(homeHash()); return; }
        if ($('#scrim') && !$('#scrim').hidden) closeDrawer();
      }
    });
  }

  function byId(id) { return DATA.items.filter(function (x) { return x.id === id; })[0]; }
  function current() { return byId(state.id); }
  function homeHash() {
    if (state.favOnly) return '#/fav';
    return state.cat ? '#/c/' + state.cat + (state.sub ? '/' + state.sub : '') : '#/';
  }

  function collectVars() {
    var f = {};
    $$('.vars input, .vars select').forEach(function (i) { f[i.dataset.var] = i.value.trim(); });
    $$('#mdBody .pv-choice').forEach(function (sp) {
      if (!(sp.dataset.var in f)) f[sp.dataset.var] = sp.textContent.trim();
    });
    return f;
  }

  function fm(it) {
    // 导出当前语言的 markdown frontmatter + 正文
    return '---\ntitle: ' + pick(it, 'title') + '\nsummary: ' + pick(it, 'summary') + '\ncategory: ' + it.category +
      '\nsubcategory: ' + it.subcategory + '\ntags: [' + it.tags.join(', ') + ']\nmodel: ' + it.model +
      '\nlevel: ' + it.level + '\nupdated: ' + it.updated + '\n---\n\n' + (pick(it, 'content') || it.content) + '\n';
  }

  function download(name, text) {
    var blob = new Blob([text], { type: 'text/markdown;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 100);
  }

  function openDrawer() {
    $('#side').classList.add('open');
    $('#scrim').hidden = false;
  }
  function closeDrawer() {
    $('#side').classList.remove('open');
    $('#scrim').hidden = true;
  }

  function applyTheme(theme, silent) {
    document.documentElement.dataset.theme = theme;
    var use = $('#themeBtn use');
    use.setAttribute('href', theme === 'dark' ? '#i-sun' : '#i-moon');
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0c0e13' : '#ffffff');
    if (!silent) save(THEME_KEY, theme);
  }

  /* ------------------------------ 启动 ------------------------------ */

  function boot(d) {
    DATA = d;
    buildCaches();
    // 让 doc.lang 一开始就是用户上次的选择
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : currentLang;
    applyStaticI18n();
    renderLangFlag();
    renderLangMenu();
    renderFavCount();
    bind();
    renderFavCount();
    renderQuick();
    renderTree();
    route();
  }

  if (window.__PROMPTS__) {
    boot(window.__PROMPTS__);
  } else {
    fetch('data/prompts.json')
      .then(function (r) {
        if (!r.ok) throw new Error(r.status);
        return r.json();
      })
      .then(boot)
      .catch(function (err) {
        document.querySelector('.main').innerHTML =
          '<div class="empty"><svg class="ic"><use href="#i-inbox"/></svg>' +
          '<p>' + esc(t('error.load-fail')) + '</p><span>' + esc(err.message) +
          ' — ' + esc(t('error.load-hint').replace(/^ — /, '')) + '</span></div>';
      });
  }
})();
