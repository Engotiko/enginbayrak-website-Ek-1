/* ==========================================================================
   Site behaviour: i18n, rendering, light animations.
   ========================================================================== */
(function () {
  "use strict";

  const STORE = "eb_lang";
  const urlLang = new URLSearchParams(location.search).get("lang");
  let lang = (urlLang === "en" || urlLang === "tr")
    ? urlLang
    : (localStorage.getItem(STORE) || (navigator.language || "tr").slice(0, 2).toLowerCase());
  if (lang !== "en") lang = "tr";

  /* ---------- helpers ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const t = (key) => (I18N[lang] && I18N[lang][key]) || (I18N.tr[key]) || key;

  function initials(title) {
    const words = title.replace(/[—·'’"().,–-]/g, " ").split(/\s+/).filter(Boolean);
    let s = (words[0] ? words[0][0] : "") + (words[1] ? words[1][0] : "");
    return s.toUpperCase();
  }

  function posterMarkup(p) {
    if (p.img) {
      const cls = p.sq ? "contain" : "";
      const alt = `${p.t} — Engin Bayrak afiş/kapak`;
      return `<div class="proj-poster"><img class="${cls}" src="assets/img/${p.img}" alt="${alt}" loading="lazy" width="92" height="92"></div>`;
    }
    return `<div class="proj-poster placeholder"><span class="ph-glyph"></span><span class="ph-initials">${initials(p.t)}</span></div>`;
  }

  function metaLine(p) {
    const typ = TYPES[p.type] ? TYPES[p.type][lang] : "";
    return `${p.y} &middot; ${typ}`;
  }

  /* keep URL + canonical self-referencing per locale (valid hreflang set) */
  function syncUrlAndCanonical() {
    const base = location.origin + location.pathname;
    const target = lang === "en" ? base + "?lang=en" : base;
    try { history.replaceState(null, "", target); } catch (e) {}
    const canon = document.querySelector('link[rel="canonical"]');
    if (canon) canon.href = target;
    const ogu = document.querySelector('meta[property="og:url"]');
    if (ogu) ogu.setAttribute("content", target);
    const ogl = document.querySelector('meta[property="og:locale"]');
    if (ogl) ogl.setAttribute("content", lang === "en" ? "en_US" : "tr_TR");
  }

  /* ---------- apply language ---------- */
  function applyLang() {
    document.documentElement.lang = lang;
    syncUrlAndCanonical();
    $$("[data-i18n]").forEach((el) => { el.innerHTML = t(el.getAttribute("data-i18n")); });
    $$("[data-i18n-ph]").forEach((el) => { el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph"))); });
    $$(".lang-toggle button").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
    // re-render dynamic regions
    if ($("#projects-root")) renderProjects();
    if ($("#featured-root")) renderFeatured();
    if ($("#cat-nav")) renderCatNav();
    if ($("#social-root")) renderSocials();
    observeReveals();
  }

  function setLang(l) {
    lang = l; localStorage.setItem(STORE, l); applyLang();
  }

  /* ---------- nav ---------- */
  function initNav() {
    $$(".lang-toggle button").forEach((b) =>
      b.addEventListener("click", () => setLang(b.dataset.lang)));
    const burger = $(".nav-burger");
    if (burger) burger.addEventListener("click", () => $(".nav-links").classList.toggle("open"));
  }

  /* ---------- featured works (home) ---------- */
  function renderFeatured() {
    const root = $("#featured-root");
    if (!root) return;
    root.innerHTML = FEATURED.map(([cat, idx]) => {
      const p = PROJECTS[cat][idx];
      const catName = (CATEGORIES.find((c) => c.id === cat) || {})[lang] || "";
      let thumb;
      if (p.img) {
        thumb = `<div class="thumb"><img class="${p.sq ? "contain" : ""}" src="assets/img/${p.img}" alt="${p.t} — Engin Bayrak afiş/kapak" loading="lazy" width="300" height="300"></div>`;
      } else {
        thumb = `<div class="thumb proj-poster placeholder" style="border:none"><span class="ph-glyph"></span><span class="ph-initials" style="font-size:48px">${initials(p.t)}</span></div>`;
      }
      return `<a class="work reveal" href="projeler.html">
        ${thumb}
        <div class="body">
          <h3>${p.t}</h3>
          <div class="meta">${p.y} &middot; ${catName}</div>
        </div></a>`;
    }).join("");
  }

  /* ---------- projects page ---------- */
  function renderCatNav() {
    const nav = $("#cat-nav");
    if (!nav) return;
    nav.innerHTML = `<a href="#all" class="active" data-cat="all">${t("proj.all")}</a>` +
      CATEGORIES.map((c) => `<a href="#${c.id}" data-cat="${c.id}">${c[lang]}</a>`).join("");
    $$("#cat-nav a").forEach((a) => a.addEventListener("click", (e) => {
      $$("#cat-nav a").forEach((x) => x.classList.remove("active"));
      a.classList.add("active");
    }));
  }

  function renderProjects() {
    const root = $("#projects-root");
    if (!root) return;
    root.innerHTML = CATEGORIES.map((c) => {
      const items = PROJECTS[c.id] || [];
      const rows = items.map((p) => {
        const note = p.note ? `<div class="pnote">${p.note[lang]}</div>` : "";
        return `<div class="proj-row reveal">
            ${posterMarkup(p)}
            <div class="proj-info">
              <h3>${p.t}</h3>
              <div class="pmeta">${metaLine(p)}</div>
              ${note}
            </div>
          </div>`;
      }).join("");
      return `<section class="cat-section" id="${c.id}">
        <div class="cat-title">
          <h2>${c[lang]}</h2>
          <span class="count">${items.length}</span>
        </div>
        <div class="proj-list">${rows}</div>
      </section>`;
    }).join("");
  }

  /* ---------- socials (contact) ---------- */
  function renderSocials() {
    const root = $("#social-root");
    if (!root) return;
    root.innerHTML = SOCIALS.map((s) =>
      `<a href="${s.url}" target="_blank" rel="noopener noreferrer">
        <span>${s.name}</span><span class="arrow">↗</span>
      </a>`).join("");
  }

  /* ---------- contact form (mailto) ---------- */
  function initContactForm() {
    const form = $("#contact-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = encodeURIComponent($("#cf-name").value || "");
      const from = encodeURIComponent($("#cf-email").value || "");
      const msg = encodeURIComponent($("#cf-msg").value || "");
      const subject = `Web Sitesi — ${decodeURIComponent(name)}`;
      const body = `${decodeURIComponent(msg)}%0D%0A%0D%0A— ${decodeURIComponent(name)} (${decodeURIComponent(from)})`;
      window.location.href = `mailto:engin@enginbayrak.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    });
  }

  /* ---------- reveal animations + count-up ---------- */
  let io;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      $$(".reveal").forEach((el) => el.classList.add("in"));
      return;
    }
    if (io) io.disconnect();
    io = new IntersectionObserver((entries) => {
      entries.forEach((en, i) => {
        if (en.isIntersecting) {
          const el = en.target;
          setTimeout(() => el.classList.add("in"), Math.min(i * 25, 180));
          io.unobserve(el);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    $$(".reveal:not(.in)").forEach((el) => io.observe(el));
  }

  function countUp() {
    $$("[data-count]").forEach((el) => {
      const target = parseInt(el.dataset.count, 10);
      let cur = 0;
      const step = Math.max(1, Math.round(target / 36));
      const tick = () => {
        cur += step;
        if (cur >= target) { el.textContent = target; return; }
        el.textContent = cur; requestAnimationFrame(tick);
      };
      const obs = new IntersectionObserver((ents) => {
        ents.forEach((e) => { if (e.isIntersecting) { tick(); obs.disconnect(); } });
      });
      obs.observe(el);
    });
  }

  /* ---------- scrollspy for category nav ---------- */
  function initScrollSpy() {
    const nav = $("#cat-nav");
    if (!nav) return;
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const id = e.target.id;
          $$("#cat-nav a").forEach((a) => a.classList.toggle("active", a.dataset.cat === id));
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    // observe sections after they render
    setTimeout(() => $$(".cat-section").forEach((s) => spy.observe(s)), 50);
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    initNav();
    applyLang();
    initContactForm();
    countUp();
    initScrollSpy();
  });
})();
