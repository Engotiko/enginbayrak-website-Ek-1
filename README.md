# Engin Bayrak — Resmi Web Sitesi

Besteci, müzisyen ve yazar **Engin Bayrak** için iki dilli (Türkçe / İngilizce), statik, çok sayfalı tanıtım web sitesi.

🔗 **Canlı:** https://www.enginbayrak.com/

## Özellikler
- **Statik** site — HTML, CSS ve sade JavaScript (derleme adımı yok).
- **İki dilli**: TR / EN, anlık geçiş (localStorage'da saklanır).
- **Çok sayfalı**: Anasayfa · Biyografi · Projeler · İletişim.
- **Projeler** kategorilere ayrılmış; her projenin solunda afişi/albüm kapağı yer alır. Kare afiş ve kapaklar tam (kırpılmadan) gösterilir.
- **Editöryel grid** tasarım dili: ince çizgi çerçeveler, keskin köşeler, kırmızı (ve tonları) hâkim palet.
- Hafif giriş animasyonları (IntersectionObserver) ve sayaç efektleri.
- SEO: semantik başlıklar, meta açıklamalar, Open Graph, JSON-LD (`schema.org/Person`), `sitemap.xml`, `robots.txt`.

## Yapı
```
index.html          Anasayfa
biyografi.html      Biyografi
projeler.html       Projeler (kategorilere ayrılmış, afişli liste)
iletisim.html       İletişim (e-posta + sosyal + form)
404.html
assets/css/style.css
assets/js/data.js    Proje verisi (iki dilli, kategorili)
assets/js/i18n.js    Arayüz metinleri + biyografi içeriği
assets/js/main.js    Render + dil geçişi + animasyonlar
assets/img/          Afişler, albüm kapakları, portre
sitemap.xml, robots.txt
```

## Yerel çalıştırma
```bash
python3 -m http.server 8000
# http://localhost:8000
```

## İçerik güncelleme & derleme (önemli)
Proje listesi, öne çıkanlar ve biyografi metni **iki yerde** bulunur: çalışma zamanı için `assets/js/*` (JS render + dil geçişi) **ve** SEO/crawler için statik HTML'e önceden basılmış (pre-render) kopya. Veriyi değiştirdikten sonra statik kopyayı tazelemek gerekir:

```bash
# Yeni proje eklemek: assets/js/data.js içindeki ilgili kategoriye {t,y,type,img,sq,note} ekle
node build.mjs   # projeler/öne çıkanlar/biyografiyi statik HTML'e yeniden basar
```

`build.mjs`, `<!--BUILD:x-->...<!--/BUILD:x-->` işaretleri arasını günceller; idempotenttir (tekrar çalıştırmak içeriği çoğaltmaz). Statik içerik JS olmadan da görünür (`.js` sınıfı yoksa animasyon gizlemesi devre dışı).

## Yayın & alan adı
- **Canonical domain:** `https://www.enginbayrak.com` (tüm canonical/hreflang/og:url/sitemap bunu kullanır).
- **Cloudflare Pages** ana domaini sunar; **GitHub Pages** (`CNAME` dosyası ile) `engotiko.github.io` adresini canonical domaine 301 yönlendirir.

## Kaynaklar
İçerik resmi EPK/CV belgelerinden ve şu kaynaklardan derlenmiştir:
[enginbayrak.com](https://www.enginbayrak.com) ·
[Wikipedia](https://tr.wikipedia.org/wiki/Engin_Bayrak) ·
[Spotify](https://open.spotify.com/intl-tr/artist/7616xApq2m3kp7roCKe1QH) ·
[Apple Music](https://music.apple.com/tr/artist/engin-bayrak/271636802) ·
[YouTube](https://www.youtube.com/user/EnginBayrakComposer) ·
[Instagram](https://www.instagram.com/enginbayrakmusic/) ·
[Facebook](https://www.facebook.com/enginbayrakcomposer)

## İletişim
engin@enginbayrak.com
