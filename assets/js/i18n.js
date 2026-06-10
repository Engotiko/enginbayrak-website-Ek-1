/* ==========================================================================
   Bilingual UI dictionary (TR / EN). Elements with data-i18n get .innerHTML set.
   ========================================================================== */

const I18N = {
  tr: {
    "nav.home": "Anasayfa",
    "nav.bio": "Biyografi",
    "nav.projects": "Projeler",
    "nav.contact": "İletişim",
    "brand": "Engin Bayrak",

    "home.eyebrow": "Besteci · Müzisyen · Yazar",
    "home.title": "Engin<br>Bayrak",
    "home.roles": "Bestecilik — Yazarlık — Aranjörlük — Vokalistlik — Müzik Yönetmenliği",
    "home.intro": "Film, dizi ve tiyatro müzikleriyle tanınan; kendi yazıp bestelediği şarkıları seslendiren bir yazar-besteci. Balkan, Türk müziği ve rock’u harmanlayan türler arası bir ses.",
    "home.cta.projects": "Projeleri Gör",
    "home.cta.contact": "İletişime Geç",
    "home.genres": "Pop, Rock, World, Electronica, Türk Müziği, Caz",

    "home.facts.label": "Rakamlarla",
    "fact.projects": "Sahnelenen Proje",
    "fact.theatre": "Tiyatro Oyunu",
    "fact.films": "Film & Dizi",
    "fact.since": "Yılından Beri",

    "home.selected.label": "Öne Çıkan İşler",
    "home.selected.title": "Seçilmiş projeler",
    "home.selected.all": "Tüm projeler →",

    "bio.label": "Biyografi",
    "bio.title": "Bir yazar-besteci",
    "bio.disc.label": "Disiplinler",
    "bio.hl.label": "Öne Çıkan Katkılar",
    "bio.body": `
      <p class="lede">Film, dizi ve tiyatro müzikleriyle tanınmıştır. Kendi şarkılarından oluşan albümler yayınlayan; kendi yazıp bestelediği şarkıları seslendiren bir yazar-besteci.</p>
      <p>12 Aralık 1979'da Almanya'da, 1957 yılında Yugoslavya'dan Türkiye'ye ve oradan Almanya'ya göç eden dört çocuklu bir ailenin son çocuğu olarak doğdu. Beş yaşındayken ailesiyle Türkiye'ye döndü.</p>
      <p>İzmir / Çamdibi'nde çalgı çalan göçmenler arasında büyüdü. Zamanla Balkan müziğinin çoksesliliğine ilgisi arttı. İzmir Atatürk Lisesi'nde okudu; Ege Üniversitesi Matematik Bölümü'nü bitirdi ve “Müzikte Matematik” adlı bir tez yazdı. Ardından Geleneksel Türk Sanat Müziği bölümünde makamlar ve bestecilik üzerine dersler aldı.</p>
      <p>“İncir Reçeli” adlı uzun metraj filmin tema müziklerini besteleyip düzenleyerek adını duyurdu; film için Türkçe ve İngilizce birçok şarkı besteledi, sözlerini yazdı ve solistlik yaptı. “Yedi Güzel Adam” dizisinin tüm tema müziklerini ve dizi şarkısını besteleyip düzenledi.</p>
      <p>Tiyatro ve film müziklerinin yanı sıra; genelde world, electronica ve rock türlerinde enstrümantal veya şarkı formunda eserler üretir. Klasik orkestra için yazsa da, Balkan, Türk müziği ve rock icra eden küçük, türler arası orkestralar kurmayı tercih eder. Bestelediği eserlerin çoğunun sözlerini yazar, solistliğini ya da vokalistliğini yapar.</p>
      <p>Engin Bayrak halen yazmakta, besteler yapmakta ve kendi şarkılarından oluşan müzik albümlerini yayınlamaktadır.</p>`,
    "bio.hl.1.k": "İncir Reçeli",
    "bio.hl.1.v": "Uzun metrajın tema müziklerini besteledi; Türkçe-İngilizce şarkılar yazıp solistlik yaptı.",
    "bio.hl.2.k": "Yedi Güzel Adam",
    "bio.hl.2.v": "Dizinin tüm tema müziklerini ve şarkısını besteledi; Anadolu çalgılarıyla uluslararası çalgıları harmanladı.",
    "bio.hl.3.k": "Electra Symphony",
    "bio.hl.3.v": "Electronica/world tarzındaki albümün hem bestecisi hem vokalistiydi (Japonya).",
    "bio.hl.4.k": "Sekerat",
    "bio.hl.4.v": "Oyun/konser için ses ve müzik rejisini üstlendi; sahnede bas gitar, synthesizer çaldı ve vokal yaptı.",

    "faq.label": "Sıkça Sorulan Sorular",
    "faq.q1": "Engin Bayrak kimdir?",
    "faq.a1": "Engin Bayrak (d. 12 Aralık 1979, Almanya), film, dizi ve tiyatro müzikleriyle tanınan Türk besteci, müzisyen ve yazardır. Kendi yazıp bestelediği şarkıları seslendirir; Balkan, Türk müziği ve rock’u harmanlar.",
    "faq.q2": "Engin Bayrak hangi filmlere müzik yaptı?",
    "faq.a2": "Öne çıkanlar: İncir Reçeli (2011), Toprağa Uzanan Eller (2013), Dünya Hali (2018), Kan Parası (2018), Kiraz Mevsimi (2018) ve Dünya Varmış (2024). Ayrıca çok sayıda kısa film ve belgesele müzik besteledi.",
    "faq.q3": "İncir Reçeli filminin müziğini kim besteledi?",
    "faq.a3": "İncir Reçeli (2011) filminin tema müziklerini Engin Bayrak besteleyip düzenledi; film için Türkçe ve İngilizce birçok şarkı yazıp seslendirdi.",
    "faq.q4": "Yedi Güzel Adam dizisinin müziklerini kim yaptı?",
    "faq.a4": "Yedi Güzel Adam (2014–2015) dizisinin tüm tema müziklerini ve dizi şarkısını Engin Bayrak besteleyip düzenledi; Anadolu çalgılarıyla uluslararası çalgıları harmanladı.",
    "faq.q5": "Engin Bayrak’ın albümleri hangileri?",
    "faq.a5": "Albüm ve tekilleri arasında Kayboldum (2025), Voyage to Dreams (2020), Sekerat (2020), Moonlight (2011), İncir Reçeli soundtrack (2011) ve Electra Symphony (2006) bulunur.",

    "proj.label": "Projeler",
    "proj.title": "Projelerle Engin Bayrak",
    "proj.intro": "Müzik albümlerinden film, dizi, belgesel, reklam ve tiyatro müziklerine; kategorilere ayrılmış tüm işler.",
    "proj.all": "Tümü",

    "contact.label": "İletişim",
    "contact.title": "İletişime geçin",
    "contact.intro": "Projeler, işbirlikleri ve lisanslama talepleri için e-posta yoluyla ulaşabilirsiniz.",
    "contact.email.label": "E-posta",
    "contact.platforms.label": "Platformlar & Sosyal",
    "contact.form.label": "Mesaj Gönder",
    "contact.form.name": "Ad Soyad",
    "contact.form.email": "E-posta",
    "contact.form.msg": "Mesajınız",
    "contact.form.send": "E-posta ile Gönder",

    "footer.tagline": "Besteci · Müzisyen · Yazar",
    "footer.rights": "Tüm hakları saklıdır."
  },

  en: {
    "nav.home": "Home",
    "nav.bio": "Biography",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "brand": "Engin Bayrak",

    "home.eyebrow": "Composer · Musician · Writer",
    "home.title": "Engin<br>Bayrak",
    "home.roles": "Composition — Writing — Arranging — Vocals — Music Direction",
    "home.intro": "A composer-writer known for film, TV and theatre scores, who writes and performs his own songs. A cross-genre voice blending Balkan, Turkish music and rock.",
    "home.cta.projects": "View Projects",
    "home.cta.contact": "Get in Touch",
    "home.genres": "Pop, Rock, World, Electronica, Turkish Music, Jazz",

    "home.facts.label": "By the Numbers",
    "fact.projects": "Staged Projects",
    "fact.theatre": "Theatre Plays",
    "fact.films": "Films & Series",
    "fact.since": "Active Since",

    "home.selected.label": "Selected Works",
    "home.selected.title": "Selected projects",
    "home.selected.all": "All projects →",

    "bio.label": "Biography",
    "bio.title": "A composer-writer",
    "bio.disc.label": "Disciplines",
    "bio.hl.label": "Notable Contributions",
    "bio.body": `
      <p class="lede">Known for film, TV and theatre music. A composer-writer who releases albums of his own songs and performs the songs he writes and composes himself.</p>
      <p>Born in Germany on 12 December 1979, the last of four sons in a family that migrated from Yugoslavia to Turkey and from there to Germany in 1957. He returned to Turkey at the age of five.</p>
      <p>He grew up among the immigrant musicians of Çamdibi, İzmir, developing a deep interest in the polyphony of Balkan music. He earned his undergraduate degree in Mathematics at Ege University and wrote a dissertation titled “Music in Mathematics.” He then studied Classical Turkish Music, taking courses on makam (traditional scales) and composition.</p>
      <p>He made his name composing and arranging the themes for the feature film “İncir Reçeli,” for which he also wrote and composed many songs in both Turkish and English and performed as vocalist. He composed and arranged all the themes and the title song for the series “Yedi Güzel Adam.”</p>
      <p>Beyond theatre and film, he produces instrumental and song works mostly in world, electronica and rock. Though he writes for classic orchestras, he prefers to form small, cross-genre ensembles performing Balkan, Turkish and rock music. He writes the lyrics for most of his compositions and performs them as soloist or vocalist.</p>
      <p>Engin Bayrak continues to write, compose and release albums of his own songs.</p>`,
    "bio.hl.1.k": "İncir Reçeli",
    "bio.hl.1.v": "Composed the feature film themes; wrote songs in Turkish and English and sang as soloist.",
    "bio.hl.2.k": "Yedi Güzel Adam",
    "bio.hl.2.v": "Composed all themes and the title song, blending Anatolian and international instruments.",
    "bio.hl.3.k": "Electra Symphony",
    "bio.hl.3.v": "Both composer and vocalist of this electronica/world album (released in Japan).",
    "bio.hl.4.k": "Sekerat",
    "bio.hl.4.v": "Sound and music director for the play/concert; on stage playing bass, synthesizer and vocals.",

    "faq.label": "Frequently Asked Questions",
    "faq.q1": "Who is Engin Bayrak?",
    "faq.a1": "Engin Bayrak (b. 12 December 1979, Germany) is a Turkish composer, musician and writer known for film, TV and theatre scores. He writes and performs his own songs, blending Balkan, Turkish music and rock.",
    "faq.q2": "Which films did Engin Bayrak score?",
    "faq.a2": "Highlights include İncir Reçeli (2011), King of the Cotton (2013), Dünya Hali (2018), Kan Parası (2018), Kiraz Mevsimi (2018) and Dünya Varmış (2024), plus many short films and documentaries.",
    "faq.q3": "Who composed the music for the film İncir Reçeli?",
    "faq.a3": "Engin Bayrak composed and arranged the themes for İncir Reçeli (2011), and wrote and performed many of its songs in both Turkish and English.",
    "faq.q4": "Who made the music for the TV series Yedi Güzel Adam?",
    "faq.a4": "Engin Bayrak composed and arranged all themes and the title song for Yedi Güzel Adam (2014–2015), blending Anatolian and international instruments.",
    "faq.q5": "What are Engin Bayrak’s albums?",
    "faq.a5": "His albums and singles include Kayboldum (2025), Voyage to Dreams (2020), Sekerat (2020), Moonlight (2011), the İncir Reçeli soundtrack (2011) and Electra Symphony (2006).",

    "proj.label": "Projects",
    "proj.title": "Engin Bayrak with His Projects",
    "proj.intro": "From music albums to film, TV, documentary, advertisement and theatre scores — every work, organised by category.",
    "proj.all": "All",

    "contact.label": "Contact",
    "contact.title": "Get in touch",
    "contact.intro": "Reach out by email for projects, collaborations and licensing requests.",
    "contact.email.label": "Email",
    "contact.platforms.label": "Platforms & Social",
    "contact.form.label": "Send a Message",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email",
    "contact.form.msg": "Your Message",
    "contact.form.send": "Send via Email",

    "footer.tagline": "Composer · Musician · Writer",
    "footer.rights": "All rights reserved."
  }
};

const SOCIALS = [
  { name: "Official Website", label: "enginbayrak.com", url: "https://www.enginbayrak.com" },
  { name: "Spotify", label: "Spotify", url: "https://open.spotify.com/intl-tr/artist/7616xApq2m3kp7roCKe1QH" },
  { name: "Apple Music", label: "Apple Music", url: "https://music.apple.com/tr/artist/engin-bayrak/271636802" },
  { name: "YouTube", label: "YouTube", url: "https://www.youtube.com/user/EnginBayrakComposer" },
  { name: "Instagram", label: "Instagram", url: "https://www.instagram.com/enginbayrakmusic/" },
  { name: "Facebook", label: "Facebook", url: "https://www.facebook.com/enginbayrakcomposer" },
  { name: "Wikipedia", label: "Wikipedia", url: "https://tr.wikipedia.org/wiki/Engin_Bayrak" },
  { name: "IMDb", label: "IMDb", url: "https://www.imdb.com/name/nm4250349/" }
];
