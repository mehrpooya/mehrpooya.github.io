/* =============================================================================
   render.js  —  builds the page from data/content.js
   You normally do NOT need to edit this file. Edit data/content.js instead.
   ============================================================================= */
(function () {
  "use strict";
  var S = window.SITE || {};

  /* ---------- tiny helpers ---------- */
  function el(id) { return document.getElementById(id); }
  // write target: the .wrap inside a section, or the element itself
  function slot(id) { var n = document.getElementById(id); return (n && n.querySelector(":scope > .wrap")) || n; }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  // very small, safe inline markdown: **bold**  *italic*  `code`  [text](url)
  function inline(s) {
    var out = esc(s);
    out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
    out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/\*([^*]+)\*/g, '<em class="accent">$1</em>');
    out = out.replace(/\[([^\]]+)\]\((https?:[^)]+|mailto:[^)]+|#[^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener">$1</a>');
    return out;
  }

  /* ---------- SVG icons ---------- */
  var ICONS = {
    github:  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5A11.5 11.5 0 0 0 .5 12 11.5 11.5 0 0 0 8.4 23c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.5-4-1.5-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 5 18.3 5.3 18.3 5.3c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>',
    linkedin:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5V9h3v10ZM6.5 7.7A1.8 1.8 0 1 1 6.5 4a1.8 1.8 0 0 1 0 3.7ZM19 19h-3v-5c0-1.3-.5-2.1-1.6-2.1-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8V19h-3V9h3v1.3a3 3 0 0 1 2.7-1.5c2 0 3.2 1.3 3.2 4V19Z"/></svg>',
    scholar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 1 8l11 6 9-4.9V16h2V8L12 2Z"/><path d="M5 13.2V17c0 1.7 3.1 3 7 3s7-1.3 7-3v-3.8l-7 3.8-7-3.8Z"/></svg>',
    bristol: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 3 6v6c0 5 3.8 8.6 9 10 5.2-1.4 9-5 9-10V6l-9-4Zm0 2.2 7 3.1V12c0 3.9-2.8 6.8-7 8.1-4.2-1.3-7-4.2-7-8.1V7.3l7-3.1Z"/></svg>',
    email:   '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2 8-5.2H4l8 5.2ZM4 8.3V18h16V8.3l-8 5.1-8-5.1Z"/></svg>',
    link:    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.6 13.4a3 3 0 0 0 4.2 0l3-3a3 3 0 1 0-4.2-4.2l-1.5 1.5 1.4 1.4 1.5-1.5a1 1 0 1 1 1.4 1.4l-3 3a1 1 0 0 1-1.4 0 1 1 0 0 0-1.4 1.4Zm2.8-2.8a3 3 0 0 0-4.2 0l-3 3a3 3 0 1 0 4.2 4.2l1.5-1.5-1.4-1.4-1.5 1.5a1 1 0 1 1-1.4-1.4l3-3a1 1 0 0 1 1.4 0 1 1 0 0 0 1.4-1.4Z"/></svg>',
    arrow:   '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h12.2l-4.6-4.6L14 6l7 7-7 7-1.4-1.4 4.6-4.6H5z"/></svg>'
  };
  function icon(name){ return ICONS[name] || ICONS.link; }

  /* capability glyphs (datasheet style) */
  var CAP_GLYPHS = [
    '<svg viewBox="0 0 48 48"><rect x="13" y="13" width="22" height="22" rx="2"/><rect x="18" y="18" width="12" height="12" rx="1" class="fill"/><g class="ticks"><line x1="18" y1="13" x2="18" y2="8"/><line x1="24" y1="13" x2="24" y2="8"/><line x1="30" y1="13" x2="30" y2="8"/><line x1="18" y1="35" x2="18" y2="40"/><line x1="24" y1="35" x2="24" y2="40"/><line x1="30" y1="35" x2="30" y2="40"/><line x1="13" y1="18" x2="8" y2="18"/><line x1="13" y1="24" x2="8" y2="24"/><line x1="13" y1="30" x2="8" y2="30"/><line x1="35" y1="18" x2="40" y2="18"/><line x1="35" y1="24" x2="40" y2="24"/><line x1="35" y1="30" x2="40" y2="30"/></g></svg>',
    '<svg viewBox="0 0 48 48"><rect x="20" y="8" width="8" height="6" rx="1"/><rect x="10" y="34" width="8" height="6" rx="1"/><rect x="30" y="34" width="8" height="6" rx="1"/><path d="M24 14v8M14 34v-6h20v6M24 28v-6"/></svg>',
    '<svg viewBox="0 0 48 48"><path d="M24 36a12 12 0 1 1 12-12"/><line x1="24" y1="24" x2="32" y2="18"/><circle cx="24" cy="24" r="2.2" class="fill"/><line x1="24" y1="12" x2="24" y2="9"/><line x1="36" y1="24" x2="39" y2="24"/></svg>',
    '<svg viewBox="0 0 48 48"><circle cx="14" cy="16" r="3"/><circle cx="14" cy="32" r="3"/><circle cx="34" cy="24" r="3"/><path d="M17 16h7l4 6M17 32h7l4-6"/><rect x="22" y="21" width="6" height="6" rx="1" class="fill"/></svg>'
  ];

  /* ===========================================================================
     BLOCK RENDERER  —  renders the rich content of a project post
     =========================================================================== */
  function renderBlocks(blocks) {
    if (!blocks || !blocks.length) return "";
    return blocks.map(renderBlock).join("");
  }

  function renderBlock(b) {
    if (!b || !b.type) return "";
    switch (b.type) {
      case "text":
        return '<p class="post-p">' + inline(b.value) + '</p>';

      case "heading":
        return '<h3 class="post-h">' + esc(b.value) + '</h3>';

      case "list":
        return '<ul class="post-list">' +
          (b.items || []).map(function (i) { return '<li>' + inline(i) + '</li>'; }).join("") +
          '</ul>';

      case "image":
        return '<figure class="post-fig">' +
          '<img loading="lazy" src="' + esc(b.src) + '" alt="' + esc(b.caption || "") + '">' +
          (b.caption ? '<figcaption>' + esc(b.caption) + '</figcaption>' : '') +
          '</figure>';

      case "video": {
        var src = String(b.src || "");
        var isFile = /\.(mp4|webm|ogg)$/i.test(src);
        var media = isFile
          ? '<video controls preload="metadata" src="' + esc(src) + '"></video>'
          : '<iframe src="' + esc(src) + '" loading="lazy" allowfullscreen ' +
            'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>';
        return '<figure class="post-fig post-video">' + media +
          (b.caption ? '<figcaption>' + esc(b.caption) + '</figcaption>' : '') + '</figure>';
      }

      case "specs": {
        var rows = (b.rows || []).map(function (r) {
          return '<tr><th scope="row">' + esc(r[0]) + '</th><td>' + inline(r[1]) + '</td></tr>';
        }).join("");
        return '<div class="specsheet">' +
          (b.title ? '<div class="specsheet-title">' + esc(b.title) + '</div>' : '') +
          '<table>' + rows + '</table></div>';
      }

      case "code":
        return '<pre class="post-code"' + (b.lang ? ' data-lang="' + esc(b.lang) + '"' : '') +
          '><code>' + esc(b.value) + '</code></pre>';

      case "links":
        return '<div class="post-links">' +
          (b.items || []).map(function (l) {
            return '<a class="post-link" href="' + esc(l.href) + '" target="_blank" rel="noopener">' +
              icon("link") + '<span>' + esc(l.label) + '</span></a>';
          }).join("") + '</div>';

      case "tabs":
        return renderTabs(b.tabs || []);

      default:
        return "";
    }
  }

  var _tabSeq = 0;
  function renderTabs(tabs) {
    var gid = "tabs-" + (++_tabSeq);
    var heads = tabs.map(function (t, i) {
      return '<button class="tab-btn' + (i === 0 ? " is-active" : "") +
        '" data-tab="' + gid + "-" + i + '" role="tab" aria-selected="' + (i === 0) + '">' +
        esc(t.label) + '</button>';
    }).join("");
    var panes = tabs.map(function (t, i) {
      return '<div class="tab-pane' + (i === 0 ? " is-active" : "") +
        '" id="' + gid + "-" + i + '" role="tabpanel">' + renderBlocks(t.blocks) + '</div>';
    }).join("");
    return '<div class="tabs" data-group="' + gid + '">' +
      '<div class="tab-bar" role="tablist">' + heads + '</div>' +
      '<div class="tab-panes">' + panes + '</div></div>';
  }

  /* ===========================================================================
     HOME SECTIONS
     =========================================================================== */

  function renderHero() {
    var p = S.profile || {};
    var social = (p.social || []).map(function (s) {
      return '<a class="social" href="' + esc(s.href) + '" target="_blank" rel="noopener" ' +
        'aria-label="' + esc(s.label) + '" title="' + esc(s.label) + '">' + icon(s.icon) + '</a>';
    }).join("");

    slot("hero").innerHTML =
      '<div class="hero-grid">' +
        '<div class="hero-copy">' +
          '<p class="eyebrow reveal">' + esc(p.eyebrow) + '</p>' +
          '<h1 class="hero-name reveal">' + esc(p.name) + '</h1>' +
          '<p class="hero-role reveal">' + esc(p.role) + '</p>' +
          '<p class="hero-tagline reveal">' + inline(p.tagline) + '</p>' +
          '<p class="hero-intro reveal">' + esc(p.intro) + '</p>' +
          '<div class="hero-cta reveal">' +
            '<a class="btn btn-primary" href="' + esc(p.ctaPrimary.href) + '">' + esc(p.ctaPrimary.label) + ' ' + icon("arrow") + '</a>' +
            '<a class="btn btn-ghost" href="' + esc(p.ctaSecondary.href) + '">' + esc(p.ctaSecondary.label) + '</a>' +
          '</div>' +
          '<div class="hero-foot reveal">' +
            (p.affiliationLogo ? '<img class="affil" src="' + esc(p.affiliationLogo) + '" alt="' + esc(p.affiliationAlt || "") + '">' : '') +
            '<div class="hero-social">' + social + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="hero-visual reveal">' +
          '<div class="chip-frame" data-parallax>' +
            '<span class="corner tl"></span><span class="corner tr"></span>' +
            '<span class="corner bl"></span><span class="corner br"></span>' +
            '<img src="' + esc(p.coverImage) + '" alt="Xilinx Zynq UltraScale+ RFSoC">' +
            '<span class="chip-label">XCZU47DR · RFSoC</span>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function renderCapabilities() {
    var caps = S.capabilities || [];
    slot("capabilities").innerHTML =
      '<div class="cap-grid">' + caps.map(function (c, i) {
        return '<article class="cap reveal" style="--d:' + (i * 70) + 'ms">' +
          '<div class="cap-ico">' + (CAP_GLYPHS[i % CAP_GLYPHS.length]) + '</div>' +
          '<h3>' + esc(c.label) + '</h3>' +
          '<p>' + esc(c.desc) + '</p>' +
          '<span class="cap-no">' + String(i + 1).padStart(2, "0") + '</span>' +
        '</article>';
      }).join("") + '</div>';
  }

  function renderAbout() {
    var a = S.about || {}, st = S.stats || [];
    var paras = (a.paragraphs || []).map(function (t) { return '<p>' + inline(t) + '</p>'; }).join("");
    var stats = st.map(function (s) {
      return '<div class="stat reveal"><span class="stat-val">' + esc(s.value) + '</span>' +
        '<span class="stat-lab">' + esc(s.label) + '</span></div>';
    }).join("");
    var edu = (a.education || []).map(function (e) {
      return '<li class="edu"><span class="edu-deg">' + esc(e.degree) + '</span>' +
        '<span class="edu-meta">' + esc(e.field) + ' · ' + esc(e.place) + '</span>' +
        '<span class="edu-side"><span class="edu-period">' + esc(e.period) + '</span>' +
        (e.detail ? '<span class="edu-detail">' + esc(e.detail) + '</span>' : '') + '</span></li>';
    }).join("");
    var hon = (a.honours || []).map(function (h) { return '<span class="chip">' + esc(h) + '</span>'; }).join("");

    slot("about").innerHTML =
      sectionHead("01", a.heading || "About") +
      '<div class="about-grid">' +
        '<div class="about-text reveal">' + paras +
          (hon ? '<div class="chips">' + hon + '</div>' : '') + '</div>' +
        '<div class="about-side">' +
          '<div class="stat-grid">' + stats + '</div>' +
          '<h3 class="mini-h reveal">Education</h3>' +
          '<ul class="edu-list reveal">' + edu + '</ul>' +
        '</div>' +
      '</div>';
  }

  function renderProjects() {
    var ps = S.projects || [];
    var cards = ps.map(function (p, i) {
      return '<a class="card' + (p.featured ? " card-feat" : "") + ' reveal" href="#/project/' + esc(p.id) + '" style="--d:' + (i * 60) + 'ms">' +
        '<div class="card-media"><img loading="lazy" src="' + esc(p.thumb) + '" alt=""><span class="card-tag">' + esc(p.tag) + '</span></div>' +
        '<div class="card-body">' +
          '<h3 class="card-title">' + esc(p.title) + '</h3>' +
          '<p class="card-sum">' + esc(p.summary) + '</p>' +
          '<span class="card-cta">View project ' + icon("arrow") + '</span>' +
        '</div>' +
        '<span class="corner tl"></span><span class="corner br"></span>' +
      '</a>';
    }).join("");
    slot("projects").innerHTML =
      sectionHead("02", "Projects", "Selected FPGA, RF and DSP work — click any card to read the full breakdown.") +
      '<div class="card-grid">' + cards + '</div>';
  }

  function renderSkills() {
    var groups = S.skills || [];
    var cols = groups.map(function (g) {
      var items = (g.items || []).map(function (it) { return '<li>' + esc(it) + '</li>'; }).join("");
      return '<div class="skill-col reveal"><h3>' + esc(g.group) + '</h3><ul>' + items + '</ul></div>';
    }).join("");
    slot("skills").innerHTML =
      sectionHead("03", "Skills", "A datasheet of the tools and platforms I work with day to day.") +
      '<div class="skill-grid">' + cols + '</div>';
  }

  function renderPublications() {
    var pubs = S.publications || [];
    var rows = pubs.map(function (p) {
      var titleHtml = p.href
        ? '<a href="' + esc(p.href) + '" target="_blank" rel="noopener">' + esc(p.title) + ' ' + icon("link") + '</a>'
        : esc(p.title);
      return '<li class="pub reveal">' +
        '<div class="pub-year">' + esc(p.year) + (p.status ? '<span class="pub-status">' + esc(p.status) + '</span>' : '') + '</div>' +
        '<div class="pub-main"><p class="pub-title">' + titleHtml + '</p>' +
        '<p class="pub-meta">' + esc(p.authors) + '</p>' +
        '<p class="pub-venue">' + esc(p.venue) + '</p></div></li>';
    }).join("");
    slot("publications").innerHTML =
      sectionHead("04", "Publications") + '<ul class="pub-list">' + rows + '</ul>';
  }

  function renderExperience() {
    var ex = S.experience || [];
    var rows = ex.map(function (e) {
      return '<li class="tl-item reveal">' +
        '<div class="tl-period">' + esc(e.period) + '</div>' +
        '<div class="tl-dot"></div>' +
        '<div class="tl-body"><h3>' + esc(e.role) + '</h3>' +
        '<p class="tl-place">' + esc(e.place) + '</p>' +
        '<p class="tl-detail">' + esc(e.detail) + '</p></div></li>';
    }).join("");
    slot("experience").innerHTML =
      sectionHead("05", "Experience") + '<ul class="timeline">' + rows + '</ul>';
  }

  function renderContact() {
    var c = S.contact || {}, p = S.profile || {};
    var social = (p.social || []).map(function (s) {
      return '<a class="social" href="' + esc(s.href) + '" target="_blank" rel="noopener" aria-label="' + esc(s.label) + '">' + icon(s.icon) + '</a>';
    }).join("");
    slot("contact").innerHTML =
      '<div class="contact-card reveal">' +
        '<span class="corner tl"></span><span class="corner tr"></span>' +
        '<span class="corner bl"></span><span class="corner br"></span>' +
        '<p class="eyebrow">Contact</p>' +
        '<h2 class="contact-h">' + esc(c.heading) + '</h2>' +
        '<p class="contact-blurb">' + esc(c.blurb) + '</p>' +
        '<a class="btn btn-primary" href="mailto:' + esc(c.email) + '">' + esc(c.email) + ' ' + icon("arrow") + '</a>' +
        '<p class="contact-loc">' + esc(c.location) + '</p>' +
        '<div class="hero-social">' + social + '</div>' +
      '</div>';
  }

  function sectionHead(no, title, sub) {
    return '<header class="sec-head reveal">' +
      '<span class="sec-no">' + esc(no) + '</span>' +
      '<h2 class="sec-title">' + esc(title) + '</h2>' +
      (sub ? '<p class="sec-sub">' + esc(sub) + '</p>' : '') +
      '</header>';
  }

  /* ===========================================================================
     PROJECT DETAIL  (hash route #/project/<id>)
     =========================================================================== */
  function renderProjectDetail(id) {
    var p = (S.projects || []).filter(function (x) { return x.id === id; })[0];
    var view = el("project-view");
    if (!p) { view.innerHTML = '<div class="wrap"><p>Project not found. <a href="#projects">Back</a></p></div>'; return; }
    view.innerHTML =
      '<div class="post-hero" style="--post-bg:url(' + JSON.stringify(p.thumb) + ')">' +
        '<div class="wrap">' +
          '<a class="back" href="#projects">' + icon("arrow") + ' All projects</a>' +
          '<span class="post-tag">' + esc(p.tag) + '</span>' +
          '<h1 class="post-title">' + esc(p.title) + '</h1>' +
          '<p class="post-lede">' + esc(p.summary) + '</p>' +
        '</div>' +
      '</div>' +
      '<article class="post-body wrap">' + renderBlocks(p.content) + '</article>' +
      '<div class="wrap post-foot"><a class="btn btn-ghost" href="#projects">' + icon("arrow") + ' Back to all projects</a></div>';
  }

  /* expose what main.js needs */
  window.RENDER = {
    home: function () {
      renderHero(); renderCapabilities(); renderAbout(); renderProjects();
      renderSkills(); renderPublications(); renderExperience(); renderContact();
    },
    projectDetail: renderProjectDetail,
    bindTabs: function (root) {
      (root || document).querySelectorAll(".tabs").forEach(function (t) {
        t.addEventListener("click", function (e) {
          var btn = e.target.closest(".tab-btn"); if (!btn) return;
          var id = btn.getAttribute("data-tab");
          t.querySelectorAll(".tab-btn").forEach(function (b) { b.classList.toggle("is-active", b === btn); b.setAttribute("aria-selected", b === btn); });
          t.querySelectorAll(".tab-pane").forEach(function (pane) { pane.classList.toggle("is-active", pane.id === id); });
        });
      });
    }
  };
})();
