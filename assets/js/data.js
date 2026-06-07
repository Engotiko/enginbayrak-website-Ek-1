/* ==========================================================================
   Project data — Engin Bayrak. Compiled from official EPK/CV documents (2025).
   img: filename in assets/img (or null -> typographic placeholder)
   sq : true if the poster/cover is square (shown fully, not cropped)
   ========================================================================== */

const CATEGORIES = [
  { id: "albums",       tr: "Müzik Albümleri",                     en: "Music Albums" },
  { id: "features",     tr: "Sinema Filmleri — Uzun Metraj",       en: "Feature Films" },
  { id: "shorts",       tr: "Kısa Filmler",                        en: "Short Films" },
  { id: "docs",         tr: "Belgeseller",                         en: "Documentaries" },
  { id: "series",       tr: "Diziler",                             en: "TV Series" },
  { id: "ads",          tr: "Reklam Filmleri",                     en: "Advertisements" },
  { id: "contrib",      tr: "Katkı Sağladığı Albümler",            en: "Albums Contributed" },
  { id: "stateTheatre", tr: "Devlet Tiyatrosu Oyunları",           en: "State Theatre Plays" },
  { id: "indieTheatre", tr: "Bağımsız & Üniversite Tiyatroları",   en: "Independent & University Theatre" }
];

/* type token -> bilingual label */
const TYPES = {
  single:        { tr: "Tekli Şarkı",         en: "Single" },
  instrumental:  { tr: "Enstrümantal",        en: "Instrumental" },
  soundtrack:    { tr: "Film Müziği",         en: "Soundtrack" },
  rock:          { tr: "Rock",                en: "Rock" },
  electronica:   { tr: "Electronica & World", en: "Electronica & World" },
  poptango:      { tr: "Pop & Tango",         en: "Pop & Tango" },
  theatremusic:  { tr: "Tiyatro Müziği",      en: "Theatre Music" },
  feature:       { tr: "Uzun Metraj",         en: "Feature Film" },
  short:         { tr: "Kısa Film",           en: "Short Film" },
  doc:           { tr: "Belgesel",            en: "Documentary" },
  series:        { tr: "Dizi",                en: "TV Series" },
  ad:            { tr: "Reklam Filmi",        en: "Advertisement" },
  arranger:      { tr: "Aranjör",             en: "Arranger" },
  composerwriter:{ tr: "Besteci & Söz Yazarı",en: "Composer & Lyricist" },
  play:          { tr: "Tiyatro Oyunu",       en: "Theatre Play" }
};

const PROJECTS = {
  albums: [
    { t: "Kayboldum", y: 2025, type: "single", img: null },
    { t: "Aklında Kalsın", y: 2023, type: "single", img: null },
    { t: "Müdür", y: 2023, type: "single", img: null },
    { t: "Diyemem", y: 2022, type: "single", img: null },
    { t: "Öpçem Valla", y: 2022, type: "single", img: null },
    { t: "Psikopat", y: 2022, type: "single", img: null },
    { t: "Voyage to Dreams — Rüyalara Yolculuk", y: 2020, type: "instrumental", img: "voyage-to-dreams.jpg", sq: true },
    { t: "Sekerat", y: 2020, type: "rock", img: "sekerat.jpg" },
    { t: "In The Shade of Time", y: 2020, type: "instrumental", img: null,
      note: { tr: "Sergi için soundtrack", en: "Exhibition soundtrack" } },
    { t: "Moonlight", y: 2011, type: "electronica", img: "moonlight.jpg",
      note: { tr: "İngiltere · BRM Müzik", en: "England · BRM Music" } },
    { t: "İncir Reçeli", y: 2011, type: "soundtrack", img: "incir-receli.jpg", sq: true,
      note: { tr: "Z-Kalan Müzik", en: "Z-Kalan Music" } },
    { t: "Deli Kadın'ın Güncesi'nden", y: 2008, type: "poptango", img: "deli-kadin.jpg" },
    { t: "Electra Symphony", y: 2006, type: "electronica", img: null,
      note: { tr: "Japonya", en: "Japan" } },
    { t: "Lir Tiyatrosu", y: 2001, type: "theatremusic", img: "lir-tiyatrosu.jpg", sq: true }
  ],
  features: [
    { t: "Dünya Varmış", y: 2024, type: "feature", img: null },
    { t: "Dünya Hali", y: 2018, type: "feature", img: "dunya-hali.jpg" },
    { t: "Kan Parası", y: 2018, type: "feature", img: null },
    { t: "Kiraz Mevsimi", y: 2018, type: "feature", img: null },
    { t: "Toprağa Uzanan Eller", y: 2013, type: "feature", img: null },
    { t: "İncir Reçeli", y: 2011, type: "feature", img: "incir-receli-film.jpg" }
  ],
  shorts: [
    { t: "Roya", y: 2014, type: "short", img: "roya.jpg" },
    { t: "Kayıp", y: 2013, type: "short", img: "kayip.jpg" },
    { t: "Amok Koşucusu", y: 2013, type: "short", img: null },
    { t: "Leke", y: 2012, type: "short", img: null },
    { t: "Mavi Ceket", y: 2012, type: "short", img: null },
    { t: "Irz", y: 2012, type: "short", img: null },
    { t: "Keneler ve Karıncalar", y: 2010, type: "short", img: null,
      note: { tr: "Altın Koza — En İyi Deneysel Film", en: "Golden Boll — Best Experimental Film" } },
    { t: "Haydi Denize", y: 2010, type: "short", img: null,
      note: { tr: "DenizBank Yarışması — 2. Film Ödülü", en: "DenizBank Competition — 2nd Prize" } },
    { t: "Uzaklarda Bir Yerde", y: 2009, type: "short", img: null },
    { t: "Zor", y: 2008, type: "short", img: null },
    { t: "Yıldızlar Sönerken", y: 2008, type: "short", img: null },
    { t: "Evdeki Hesap", y: 2007, type: "short", img: null },
    { t: "İd", y: 2006, type: "short", img: null }
  ],
  docs: [
    { t: "Mavi Kuşak", y: 2017, type: "doc", img: null },
    { t: "Işığın İzinde", y: 2016, type: "doc", img: null, note: { tr: "5 Bölüm", en: "5 Episodes" } },
    { t: "Misafir", y: 2016, type: "doc", img: null },
    { t: "Kopak", y: 2015, type: "doc", img: null }
  ],
  series: [
    { t: "Yedi Güzel Adam", y: "2014–15", type: "series", img: "yedi-guzel-adam.jpg",
      note: { tr: "39 Bölüm", en: "39 Episodes" } }
  ],
  ads: [
    { t: "Park Mahal", y: 2017, type: "ad", img: null },
    { t: "Demor", y: 2017, type: "ad", img: null },
    { t: "PTT 175. Yıl", y: 2015, type: "ad", img: null },
    { t: "MM Proje", y: 2012, type: "ad", img: null },
    { t: "Fabrika", y: 2011, type: "ad", img: null }
  ],
  contrib: [
    { t: "Sır — Ayfer Vardar", y: 2019, type: "arranger", img: null,
      note: { tr: "“Ölmeyince Sakın Yardan Ayrılma”", en: "“Ölmeyince Sakın Yardan Ayrılma”" } },
    { t: "Ey Aşk — Halil Sezai", y: 2013, type: "composerwriter", img: "ey-ask.jpg" }
  ],
  stateTheatre: [
    { t: "Zambak Limanı", y: 2018, type: "play", img: null },
    { t: "Kuzu Maydanozun Maceraları", y: 2017, type: "play", img: null },
    { t: "İmbö", y: 2016, type: "play", img: "imbo.jpg" },
    { t: "Söylentiler", y: 2016, type: "play", img: null },
    { t: "Fırtına", y: 2016, type: "play", img: "firtina.jpg" },
    { t: "Bakanı Bekliyoruz", y: 2015, type: "play", img: "bakani-bekliyoruz.jpg" },
    { t: "Yarınlara Geç Kalmadan", y: 2014, type: "play", img: null },
    { t: "Fadik Kız", y: 2013, type: "play", img: null },
    { t: "Canlanan Masallar", y: 2013, type: "play", img: "canlanan-masallar.jpg" },
    { t: "Yürüyen Taşlar", y: 2013, type: "play", img: null },
    { t: "Bremen Mızıkacıları", y: 2012, type: "play", img: null },
    { t: "Kedigöz Danışman", y: 2011, type: "play", img: null },
    { t: "Herkes mi Hırsız", y: 2011, type: "play", img: null },
    { t: "Fırtına", y: 2011, type: "play", img: "firtina-alt.jpg" },
    { t: "Kuvay-i Milliye", y: 2011, type: "play", img: "kuvayi-milliye.jpg" },
    { t: "İki Kova Su", y: 2011, type: "play", img: null },
    { t: "Benim Güzel Pabuçlarım", y: 2010, type: "play", img: null },
    { t: "Kader Kısmet Oyunu", y: 2010, type: "play", img: null },
    { t: "İstibdat Kumpanyası", y: 2009, type: "play", img: null },
    { t: "Çılgın Dünya", y: 2008, type: "play", img: null },
    { t: "Kafkas Tebeşir Dairesi", y: 2007, type: "play", img: null,
      note: { tr: "“2008'in En İyi Oyunu” Ödülü", en: "“Best Play of 2008” Award" } }
  ],
  indieTheatre: [
    { t: "Zincire Vurulmuş Prometheus", y: 2017, type: "play", img: null },
    { t: "Bütün Bunlar Bize Özgü", y: 2013, type: "play", img: null },
    { t: "Küçük Altın Balık", y: 2011, type: "play", img: null },
    { t: "Sevgi Çemberi", y: 2011, type: "play", img: null },
    { t: "Bazen Rüya Bazen Gerçek", y: 2010, type: "play", img: null },
    { t: "Sekerat", y: 2009, type: "play", img: null },
    { t: "Orman Çocuğu", y: 2008, type: "play", img: null },
    { t: "Küçük Adam Ne Oldu Sana", y: 2007, type: "play", img: null },
    { t: "Altın Küp", y: 2007, type: "play", img: null },
    { t: "Peter Pan", y: 2007, type: "play", img: null },
    { t: "Kral Yembe", y: 2006, type: "play", img: null },
    { t: "Bardakçı Baba", y: 2006, type: "play", img: null },
    { t: "Kafkas Tebeşir Dairesi", y: 2005, type: "play", img: null },
    { t: "Yer Altından Notlar", y: 2005, type: "play", img: "yeralti-notlar.jpg" },
    { t: "Manhattan'ın İyi Tanrısı", y: 2000, type: "play", img: null },
    { t: "Değişim", y: 2000, type: "play", img: "degisim.jpg" },
    { t: "Gizli Oturum", y: 1999, type: "play", img: null },
    { t: "Yadahev", y: 1999, type: "play", img: null },
    { t: "Easus", y: 1998, type: "play", img: null }
  ]
};

/* Featured on home page: [category, index] */
const FEATURED = [
  ["features", 5],   // İncir Reçeli (film)
  ["series", 0],     // Yedi Güzel Adam
  ["albums", 7],     // Sekerat
  ["albums", 6]      // Voyage to Dreams
];
