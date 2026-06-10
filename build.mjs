/* ==========================================================================
   build.mjs — Pre-renders the default-language (TR) dynamic content into the
   static HTML so it is crawlable without JavaScript. The client JS still
   re-renders on load (and handles EN). Run after editing data.js / i18n.js:

       node build.mjs

   It fills the regions between <!--BUILD:x--> ... <!--/BUILD:x--> markers.
   ========================================================================== */
import { readFileSync, writeFileSync } from "node:fs";

const dataSrc = readFileSync("assets/js/data.js", "utf8");
const i18nSrc = readFileSync("assets/js/i18n.js", "utf8");

// Evaluate the two data files and pull out their top-level consts.
const { CATEGORIES, TYPES, PROJECTS, FEATURED, I18N } = new Function(
  dataSrc + "\n" + i18nSrc +
  "\n return { CATEGORIES, TYPES, PROJECTS, FEATURED, I18N };"
)();

const LANG = "tr";

/* ---- helpers mirroring assets/js/main.js (TR output) ---- */
function initials(title) {
  const words = title.replace(/[—·'’"().,–-]/g, " ").split(/\s+/).filter(Boolean);
  return ((words[0] ? words[0][0] : "") + (words[1] ? words[1][0] : "")).toUpperCase();
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
  const typ = TYPES[p.type] ? TYPES[p.type][LANG] : "";
  return `${p.y} &middot; ${typ}`;
}

function renderProjects() {
  return CATEGORIES.map((c) => {
    const items = PROJECTS[c.id] || [];
    const rows = items.map((p) => {
      const note = p.note ? `<div class="pnote">${p.note[LANG]}</div>` : "";
      return `<div class="proj-row reveal">${posterMarkup(p)}<div class="proj-info"><h3>${p.t}</h3><div class="pmeta">${metaLine(p)}</div>${note}</div></div>`;
    }).join("");
    return `<section class="cat-section" id="${c.id}"><div class="cat-title"><h2>${c[LANG]}</h2><span class="count">${items.length}</span></div><div class="proj-list">${rows}</div></section>`;
  }).join("");
}

function renderFeatured() {
  return FEATURED.map(([cat, idx]) => {
    const p = PROJECTS[cat][idx];
    const catName = (CATEGORIES.find((c) => c.id === cat) || {})[LANG] || "";
    let thumb;
    if (p.img) {
      thumb = `<div class="thumb"><img class="${p.sq ? "contain" : ""}" src="assets/img/${p.img}" alt="${p.t} — Engin Bayrak afiş/kapak" loading="lazy" width="300" height="300"></div>`;
    } else {
      thumb = `<div class="thumb proj-poster placeholder" style="border:none"><span class="ph-glyph"></span><span class="ph-initials" style="font-size:48px">${initials(p.t)}</span></div>`;
    }
    return `<a class="work reveal" href="projeler.html">${thumb}<div class="body"><h3>${p.t}</h3><div class="meta">${p.y} &middot; ${catName}</div></div></a>`;
  }).join("");
}

function inject(file, key, html) {
  const src = readFileSync(file, "utf8");
  const re = new RegExp(`(<!--BUILD:${key}-->)([\\s\\S]*?)(<!--/BUILD:${key}-->)`);
  if (!re.test(src)) { console.error(`! marker BUILD:${key} not found in ${file}`); return; }
  writeFileSync(file, src.replace(re, `$1${html}$3`));
  console.log(`✓ ${file} [${key}] — ${html.length} chars`);
}

inject("projeler.html", "projects", renderProjects());
inject("index.html", "featured", renderFeatured());
inject("biyografi.html", "bio", I18N.tr["bio.body"].trim());

console.log("Build complete.");
