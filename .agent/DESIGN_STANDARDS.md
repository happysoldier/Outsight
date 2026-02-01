# Outsight Digital Design Standards (2025)

> Bu döküman, Outsight web projesindeki tüm yeni sayfa ve bileşen yapılarının uyması gereken temel tasarım standartlarını tanımlar.

## 1. Hero (Karşılama) Alanı Standartları
Tüm servis ve detay sayfaları aşağıdaki Hero yapısını kullanmalıdır:

- **Yükseklik (Height):** `70vh` sabit yükseklik.
- **Minimum Yükseklik:** `500px`.
- **Hizalama:** Tüm içerik yatay ve dikeyde **merkezlenmiş (Centered)** olmalıdır.
- **Renkler:** Tüm Hero metinleri **#ffffff (Beyaz)** olmalıdır.
- **Arka Plan:** Görsel üzerine mutlaka `%40-60` arası koyu gradient overlay eklenmelidir.
- **Etiketler:** Hero üzerinde "Hizmetlerimiz", "Hakkımızda" gibi yardımcı etiketler **bulunmamalıdır.**

### Tipografi (Hero)
- **Ana Başlık (H1):** `4.5rem`, `font-weight: 700`, `line-height: 1.1`.
- **Slogan (Tagline):** `1.6rem`, `font-weight: 400`, `opacity: 0.9-1.0`, `max-width: 800px`.

## 2. Sayfa Düzeni (Layout)
- **Bölüm Boşlukları (Section Padding):** `3rem 0` (Dikeyde daha kompakt bir görünüm için).
- **Konteyner:** Tüm içerik projenin standart `.container` sınıfı içinde olmalıdır.
- **Arka Plan Geçişleri:** Bölümler arasında `bg-white` ve `--color-bg-secondary` (açık gri) dönüşümlü kullanılmalıdır.

## 3. Bileşen Standartları
- **Etki Metrikleri (Impact Metrics):** 3 sütunlu, büyük rakamlı (`4rem`) ve açıklayıcı metinli yapı.
- **Hizmet Kartları:** 3 sütunlu grid, bold başlıklar ve altında ayırt edici renkli (accent color) ince çizgiler.
- **Listeler:** Sade maddeli listelerde bold başlık + açıklama metni yapısı tercih edilmelidir.
