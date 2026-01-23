# Blog Sayfası "Daha Fazla Yükle" (Pagination) Özelliği Planı

Bu plan, `Blog.jsx` sayfasında blog yazılarının aşamalı olarak (her seferinde 10 adet) yüklenmesini sağlayan "Daha Fazla Yükle" fonksiyonunun eklenmesini kapsar.

## Hedef
Kullanıcı deneyimini iyileştirmek ve performans optimizasyonu sağlamak amacıyla, blog listesinin tamamını tek seferde yüklemek yerine, başlangıçta 10 yazı göstermek ve kullanıcı talep ettikçe (butona tıkladıkça) 10'ar adet daha yüklemek.

## Değişiklikler

### 1. `src/pages/Blog.jsx` Güncellemesi
- **State Yönetimi:**
  - `visibleCount` adında yeni bir state eklenecek. Başlangıç değeri: `10`.
- **Filtreleme Mantığı:**
  - Filtreler (Kategori veya Yazar) değiştiğinde, `visibleCount` tekrar `10`'a sıfırlanacak.
- **Görüntüleme Mantığı:**
  - `filteredPosts` listesi render edilirken `.slice(0, visibleCount)` kullanılarak sadece belirlenen sayıdaki yazı gösterilecek.
- **Buton Ekleme:**
  - Listenin en altına "Daha Fazla Yükle" butonu eklenecek.
  - **Görünürlük Koşulu:** `visibleCount < filteredPosts.length` olduğu sürece buton görünecek.

### 2. `src/pages/Blog.css` Güncellemesi
- Yeni eklenen buton için stil tanımlamaları yapılacak (`.load-more-container`, `.load-more-button`).
- Butonun sayfanın tasarımıyla uyumlu (minimal, hover efektli) olması sağlanacak.

## Adım Adım Uygulama

1.  **CSS Ekleme:** `Blog.css` dosyasına buton stillerini ekle.
2.  **Logic Entegrasyonu:** `Blog.jsx` dosyasına state ve slice mantığını ekle.
3.  **Buton Entegrasyonu:** JSX yapısının altına butonu yerleştir.
4.  **Test:** Filtreler değiştiğinde sayının sıfırlandığını ve butonun doğru çalıştığını kontrol et.
