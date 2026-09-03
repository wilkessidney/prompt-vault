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

  var state = { q: '', cat: '', sub: '', sort: 'updated', favOnly: false, view: 'home', id: '' };
  var favs = load(FAV_KEY, []);

  /* ------------------------------ 工具 ------------------------------ */

  function load(k, d) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
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
      toast(label || '已复制到剪贴板', true);
      if (!btn) return;
      var old = btn.innerHTML;
      var was = btn.className;
      btn.classList.add('done');
      btn.innerHTML = '<svg class="ic"><use href="#i-check"/></svg><span>已复制</span>';
      setTimeout(function () { btn.className = was; btn.innerHTML = old; }, 1600);
    };
    var fail = function () { toast('复制失败，请手动选择文本'); };

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
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  }

  /* ------------------------------ 数据加载 ------------------------------ */

  function boot(data) {
    DATA = data;
    DATA.taxonomy.forEach(function (c) {
      CAT[c.id] = { name: c.name, color: c.color, icon: c.icon };
      c.subs.forEach(function (s) { SUB[c.id + '/' + s.id] = s.name; });
    });

    $('#sTotal').textContent = DATA.meta.count;
    $('#sCat').textContent = DATA.meta.categories;
    $('#sSub').textContent = DATA.meta.subcategories;
    $('#totalCount').textContent = DATA.meta.count;

    renderTree();
    renderQuick();
    bind();
    applyTheme(load(THEME_KEY, null) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'), true);
    renderFavCount();
    window.addEventListener('hashchange', route);
    route();
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
      return '' +
        '<div class="tg" data-cat="' + c.id + '" style="--c:' + c.color + '">' +
          '<button class="tg-head" data-act="toggle-cat" data-cat="' + c.id + '">' +
            '<span class="tg-icon"><svg class="ic"><use href="#i-' + c.icon + '"/></svg></span>' +
            '<span class="tg-name">' + esc(c.name) + '</span>' +
            '<span class="tg-n">' + c.count + '</span>' +
            '<svg class="ic ic-chev"><use href="#i-chev"/></svg>' +
          '</button>' +
          '<div class="tg-subs">' +
            '<button class="sub" data-act="sub" data-cat="' + c.id + '" data-sub="">' +
              '<span>全部 ' + esc(c.name) + '</span><span class="sub-n">' + c.count + '</span>' +
            '</button>' +
            c.subs.map(function (s) {
              return '<button class="sub" data-act="sub" data-cat="' + c.id + '" data-sub="' + s.id + '">' +
                '<span>' + esc(s.name) + '</span><span class="sub-n">' + s.count + '</span></button>';
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
      '<svg class="ic"><use href="#i-cube"/></svg>全部</button>';
    html += DATA.taxonomy.map(function (c) {
      return '<button class="qchip" data-act="sub" data-cat="' + c.id + '" data-sub="" style="--c:' + c.color + '">' +
        '<svg class="ic"><use href="#i-' + c.icon + '"/></svg>' + esc(c.name) + '</button>';
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
      if (s === 'title') return a.title.localeCompare(b.title, 'zh');
      if (s === 'chars') return b.chars - a.chars;
      if (s === 'cat') {
        var d = (CAT[a.category].name).localeCompare(CAT[b.category].name, 'zh');
        return d || a.title.localeCompare(b.title, 'zh');
      }
      return (b.updated || '').localeCompare(a.updated || '');
    });
    return list;
  }

  function match(it, q) {
    var hay = [it.title, it.summary, it.tags.join(' '), CAT[it.category].name, SUB[it.category + '/' + it.subcategory] || '',
      it.content, it.model].join(' ').toLowerCase();
    if (hay.indexOf(q) === -1) return 0;
    if (it.title.toLowerCase().indexOf(q) > -1) return 4;
    if (it.tags.join(' ').toLowerCase().indexOf(q) > -1) return 3;
    if (it.summary.toLowerCase().indexOf(q) > -1) return 2;
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
    $('#resCount').textContent = list.length + ' 条';

    var grid = $('#grid');
    grid.innerHTML = list.map(function (it) { return cardHtml(it, q); }).join('');
    $('#empty').hidden = list.length > 0;
    grid.hidden = list.length === 0;

    document.title = state.cat
      ? CAT[state.cat].name + (state.sub ? ' / ' + (SUB[state.cat + '/' + state.sub] || '') : '') + ' · PromptVault'
      : 'PromptVault · 个人提示词库';
  }

  function titleText() {
    if (state.favOnly) return '我的收藏';
    if (state.q.trim()) return '搜索「' + state.q.trim() + '」';
    if (state.sub) return CAT[state.cat].name + ' / ' + (SUB[state.cat + '/' + state.sub] || '');
    if (state.cat) return CAT[state.cat].name;
    return '全部提示词';
  }

  function cardHtml(it, q) {
    var c = CAT[it.category];
    return '' +
      '<article class="card" style="--c:' + c.color + '" data-id="' + esc(it.id) + '" tabindex="0">' +
        '<div class="card-top">' +
          '<span class="cat-chip"><i></i>' + esc(c.name) + '</span>' +
          '<span class="sub-txt">' + esc(SUB[it.category + '/' + it.subcategory] || '') + '</span>' +
          '<button class="star' + (isFav(it.id) ? ' on' : '') + '" data-act="fav" data-id="' + esc(it.id) + '" data-fav="' + esc(it.id) + '" aria-pressed="' + isFav(it.id) + '" aria-label="收藏">' +
            '<svg class="ic"><use href="#i-star"/></svg></button>' +
        '</div>' +
        '<h3>' + mark(it.title, q) + '</h3>' +
        '<p>' + mark(it.summary, q) + '</p>' +
        (it.tags.length ? '<div class="tags">' +
          it.tags.slice(0, 3).map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') +
          (it.tags.length > 3 ? '<span class="tag">+' + (it.tags.length - 3) + '</span>' : '') +
        '</div>' : '') +
        '<div class="card-bot">' +
          '<div class="meta">' +
            (it.variables.length ? '<span>' + it.variables.length + ' 变量</span>' : '') +
            '<span>' + it.chars + ' 字</span>' +
          '</div>' +
          '<button class="copy-btn" data-act="copy" data-id="' + esc(it.id) + '">' +
            '<svg class="ic"><use href="#i-copy"/></svg><span>复制</span></button>' +
        '</div>' +
      '</article>';
  }

  /* ------------------------------ 详情页 ------------------------------ */

  function showDetail(id) {
    var it = DATA.items.filter(function (x) { return x.id === id; })[0];
    if (!it) { location.hash = '#/'; return; }

    var c = CAT[it.category];
    var subName = SUB[it.category + '/' + it.subcategory] || '';
    var fill = {};

    $('#viewHome').hidden = true;
    var d = $('#viewDetail');
    d.hidden = false;
    document.title = it.title + ' · PromptVault';

    d.innerHTML = '' +
      '<div class="dtl" style="--c:' + c.color + '">' +
        '<div class="dtl-bar">' +
          '<button class="back" data-act="back"><svg class="ic"><use href="#i-back"/></svg>返回列表</button>' +
          '<div class="crumb"><b>' + esc(c.name) + '</b><span class="sep">/</span><span>' + esc(subName) + '</span></div>' +
        '</div>' +

        '<div class="dtl-head">' +
          '<h1>' + esc(it.title) + '</h1>' +
          '<p class="dtl-sum">' + esc(it.summary) + '</p>' +
          '<div class="dtl-meta">' +
            '<span class="mchip">适用模型 <b>' + esc(it.model) + '</b></span>' +
            '<span class="mchip">难度 <b>' + esc(it.level) + '</b></span>' +
            (it.updated ? '<span class="mchip">更新 <b>' + esc(it.updated) + '</b></span>' : '') +
            '<span class="mchip">正文 <b>' + it.chars + '</b> 字</span>' +
            (it.variables.length ? '<span class="mchip">变量 <b>' + it.variables.length + '</b> 个</span>' : '') +
          '</div>' +
          '<div class="dtl-act">' +
            '<button class="btn-p" data-act="copy-raw"><svg class="ic"><use href="#i-copy"/></svg><span>复制原文</span></button>' +
            (it.variables.length ? '<button class="btn-p" data-act="copy-filled" style="background:linear-gradient(135deg,#0ea5e9,#0284c7);box-shadow:0 4px 14px rgba(14,165,233,.3)"><svg class="ic"><use href="#i-check"/></svg><span>复制填充版</span></button>' : '') +
            '<button class="btn-s star' + (isFav(it.id) ? ' on' : '') + '" data-act="fav" data-id="' + esc(it.id) + '" data-fav="' + esc(it.id) + '"><svg class="ic"><use href="#i-star"/></svg><span>' + (isFav(it.id) ? '已收藏' : '收藏') + '</span></button>' +
            '<button class="btn-s" data-act="copy-link"><svg class="ic"><use href="#i-link"/></svg><span>复制链接</span></button>' +
            '<button class="btn-s" data-act="download"><svg class="ic"><use href="#i-inbox"/></svg><span>下载 .md</span></button>' +
          '</div>' +
        '</div>' +

        (it.variables.length ? varsHtml(it) : '') +

        '<div class="dtl-body" id="dtlBody"><div class="md" id="mdBody">' + it.html + '</div></div>' +

        relHtml(it) +
      '</div>';

    if (it.variables.length) bindVars(it, fill);
    window.scrollTo(0, 0);
  }

  function varsHtml(it) {
    return '' +
      '<div class="vars">' +
        '<div class="vars-head">' +
          '<span class="badge">变量填充</span>' +
          '填写后正文会实时替换，可一键复制成稿' +
          '<span class="hint">留空则保留占位符</span>' +
        '</div>' +
        '<div class="vars-grid">' +
          it.variables.map(function (v) {
            return '<div class="vf"><label title="' + esc(v) + '">{{ ' + esc(v) + ' }}</label>' +
              '<input type="text" data-var="' + esc(v) + '" placeholder="' + esc(v) + '"></div>';
          }).join('') +
        '</div>' +
      '</div>';
  }

  function bindVars(it, fill) {
    var body = $('#dtlBody');
    $$('.vars input').forEach(function (inp) {
      inp.addEventListener('input', function () {
        var name = inp.dataset.var;
        fill[name] = inp.value.trim();
        $$('#mdBody .pv-var').forEach(function (sp) {
          if (sp.dataset.var !== name) return;
          if (fill[name]) {
            sp.textContent = fill[name];
            sp.classList.add('filled');
          } else {
            sp.textContent = '{{' + name + '}}';
            sp.classList.remove('filled');
          }
        });
      });
    });
  }

  function fillText(it, fill) {
    return it.content.replace(/\{\{([^{}]+)\}\}/g, function (m, v) {
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
    return '<section class="rel"><h2>相关提示词</h2><div class="rel-grid">' +
      rel.map(function (r) {
        return '<button class="rel-item" style="--c:' + CAT[r.category].color + '" data-act="open" data-id="' + esc(r.id) + '">' +
          '<div class="t">' + esc(r.title) + '</div>' +
          '<div class="s">' + esc(CAT[r.category].name) + ' / ' + esc(SUB[r.category + '/' + r.subcategory] || '') + '</div>' +
        '</button>';
      }).join('') + '</div></section>';
  }

  /* ------------------------------ 事件 ------------------------------ */

  function bind() {
    // 搜索
    var q = $('#q');
    q.addEventListener('input', debounce(function () {
      state.q = q.value;
      $('#qClear').hidden = !q.value;
      if (state.view === 'detail') location.hash = homeHash();
      else renderHome();
    }, 160));
    $('#qClear').addEventListener('click', function () {
      q.value = ''; state.q = ''; $('#qClear').hidden = true; q.focus(); renderHome();
    });

    // 排序
    $('#sortSel').addEventListener('change', function (e) { state.sort = e.target.value; renderHome(); });

    // 收藏过滤
    $('#favBtn').addEventListener('click', function () {
      state.favOnly = !state.favOnly;
      state.cat = ''; state.sub = '';
      go(state.favOnly ? '#/fav' : '#/');
    });

    // 重置
    $('#resetBtn').addEventListener('click', function () { state.q = ''; $('#q').value = ''; go('#/'); });
    $('#emptyReset').addEventListener('click', function () {
      state.q = ''; $('#q').value = ''; $('#qClear').hidden = true; state.favOnly = false; go('#/');
    });

    // 主题
    $('#themeBtn').addEventListener('click', function () {
      applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
    });

    // 移动端抽屉
    $('#menuBtn').addEventListener('click', openDrawer);
    $('#scrim').addEventListener('click', closeDrawer);

    // 事件委托
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
        copy(it0.content, t);
        return;
      }
      if (act === 'open') { go('#/p/' + encodeURIComponent(t.dataset.id)); return; }
      if (act === 'back') { history.length > 1 ? history.back() : go('#/'); return; }
      if (act === 'copy-raw') { var it1 = current(); copy(it1.content, t, '原文已复制'); return; }
      if (act === 'copy-filled') {
        var it2 = current();
        var f = collectVars();
        copy(fillText(it2, f), t, '已复制填充后的提示词');
        return;
      }
      if (act === 'copy-link') { copy(location.href, t, '链接已复制'); return; }
      if (act === 'download') {
        var it3 = current();
        download(it3.slug + '.md', fm(it3));
        toast('已下载 ' + it3.slug + '.md', true);
        return;
      }
    });

    // 卡片打开
    $('#grid').addEventListener('click', function (e) {
      var card = e.target.closest('.card');
      if (!card || e.target.closest('[data-act]')) return;
      go('#/p/' + encodeURIComponent(card.dataset.id));
    });
    $('#grid').addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      var card = e.target.closest('.card');
      if (!card) return;
      e.preventDefault();
      go('#/p/' + encodeURIComponent(card.dataset.id));
    });

    // 快捷键
    document.addEventListener('keydown', function (e) {
      var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
      if ((e.key === '/' && !typing) || ((e.metaKey || e.ctrlKey) && e.key === 'k')) {
        e.preventDefault();
        $('#q').focus();
        $('#q').select();
        return;
      }
      if (e.key === 'Escape') {
        if (typing) { document.activeElement.blur(); return; }
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
    $$('.vars input').forEach(function (i) { f[i.dataset.var] = i.value.trim(); });
    return f;
  }

  function fm(it) {
    return '---\ntitle: ' + it.title + '\nsummary: ' + it.summary + '\ncategory: ' + it.category +
      '\nsubcategory: ' + it.subcategory + '\ntags: [' + it.tags.join(', ') + ']\nmodel: ' + it.model +
      '\nlevel: ' + it.level + '\nupdated: ' + it.updated + '\n---\n\n' + it.content + '\n';
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
          '<p>数据加载失败</p><span>' + esc(err.message) +
          ' — 请先运行 <code>npm run build</code> 生成 data/prompts.json</span></div>';
      });
  }
})();
