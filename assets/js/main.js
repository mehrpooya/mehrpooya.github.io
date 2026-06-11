/* =============================================================================
   main.js  —  navigation, routing, theme toggle, scroll animations
   You normally do NOT need to edit this file.
   ============================================================================= */
(function () {
  "use strict";

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- theme (dark default, remembers your choice) ---------- */
  var THEME_KEY = "am-theme";
  function getStored() { try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; } }
  function store(v) { try { localStorage.setItem(THEME_KEY, v); } catch (e) {} }
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    var btn = document.getElementById("theme-toggle");
    if (btn) btn.setAttribute("aria-label", t === "light" ? "Switch to dark theme" : "Switch to light theme");
  }
  applyTheme(getStored() || "dark");

  /* ---------- scroll reveal ---------- */
  function observeReveals(root) {
    var els = (root || document).querySelectorAll(".reveal:not(.in)");
    if (prefersReduced) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- nav: solid on scroll + active section ---------- */
  function initNav() {
    var nav = document.getElementById("nav");
    function onScroll() { nav.classList.toggle("solid", window.scrollY > 24); }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // active link highlight
    var links = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
    var map = {};
    links.forEach(function (l) {
      var id = l.getAttribute("href").replace("#", "");
      var sec = document.getElementById(id);
      if (sec) map[id] = l;
    });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("active"); });
          if (map[en.target.id]) map[en.target.id].classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(map).forEach(function (id) { spy.observe(document.getElementById(id)); });

    // mobile menu
    var toggle = document.getElementById("nav-toggle");
    var menu = document.getElementById("nav-menu");
    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        var open = document.body.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", open);
      });
      menu.addEventListener("click", function (e) {
        if (e.target.closest("a")) { document.body.classList.remove("nav-open"); toggle.setAttribute("aria-expanded", false); }
      });
    }
  }

  /* ---------- subtle parallax on the chip ---------- */
  function initParallax() {
    if (prefersReduced) return;
    var node = document.querySelector("[data-parallax]");
    if (!node) return;
    var raf = null;
    window.addEventListener("scroll", function () {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        var y = Math.min(window.scrollY, 700);
        node.style.transform = "translateY(" + (y * 0.05) + "px)";
        raf = null;
      });
    }, { passive: true });
  }

  /* ---------- router: home (sections) vs project detail ---------- */
  function route() {
    var hash = location.hash || "";
    var m = hash.match(/^#\/project\/(.+)$/);
    var home = document.getElementById("home-view");
    var detail = document.getElementById("project-view");
    if (m) {
      window.RENDER.projectDetail(decodeURIComponent(m[1]));
      home.hidden = true; detail.hidden = false;
      window.RENDER.bindTabs(detail);
      observeReveals(detail);
      window.scrollTo(0, 0);
      document.title = "Project — Ali Mehrpooya";
    } else {
      home.hidden = false; detail.hidden = true;
      document.title = "Ali Mehrpooya — Senior FPGA Developer";
      // if there is a section hash, let the browser scroll to it
      if (hash && hash.indexOf("#/") !== 0) {
        var target = document.getElementById(hash.replace("#", ""));
        if (target) requestAnimationFrame(function () { target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" }); });
      }
    }
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    if (!window.SITE) { console.error("content.js did not load."); return; }
    window.RENDER.home();
    window.RENDER.bindTabs(document);
    initNav();
    initParallax();
    observeReveals(document);

    var tt = document.getElementById("theme-toggle");
    if (tt) tt.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(next); store(next);
    });

    // year in footer
    var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();

    route();
    window.addEventListener("hashchange", route);
  });
})();
