import React, { useEffect } from 'react';
import './ClientConfidentiality.css';

const ClientConfidentiality = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <div className="container">
                <div style={{ paddingTop: '6rem', paddingBottom: '2rem' }}>
                    {/* Removing the small tag if not in screenshot, or keeping it subtle. Screenshot didn't show it clearly but usually breadcrumbs exist. Keeping it simple. */}
                    {/* <span className="chapter-scent">Politikalarımız</span> */}
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem', letterSpacing: '-0.02em' }}>Müşteri Gizliliği</h1>
                    <div className="divider" style={{ margin: '0' }}></div>
                </div>
            </div>

            <div style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <div className="legal-content">
                        <p className="lead">
                            Outsight, müşterilerinin gizli bilgilerini korumak için en yüksek profesyonel standartları sürdürmeye derinden bağlıdır.
                            Bu ilke, kurucularımız tarafından "profesyonel bir ilişkinin doğasında var olan gizli niteliğe her zaman saygı duymak"
                            amacıyla oluşturulmuştur.
                        </p>

                        <div className="quote-box">
                            <h3>"Müşteri sırları, en değerli varlığımız olan güvenin temelidir."</h3>
                        </div>

                        <h2>Koruma Standartları</h2>
                        <p>
                            Müşteri gizliliği çerçevemiz, gizli bilgilerin uygun kullanımına ilişkin net tanımlar ve yönergeler içerir.
                            Çıkar çatışmalarını önlemek ve bilgi güvenliğini sağlamak için katı standartlar uyguluyoruz.
                            Tüm personelimiz, işe alım süreçlerinde ve yıllık olarak tekrarlanan eğitimlerde bu standartları kabul ederler.
                        </p>

                        <h2>Bilgi Paylaşımı Kısıtlamaları</h2>
                        <p>
                            Aşağıdaki türdeki bilgileri, müşteri açıkça izin vermedikçe kesinlikle gizli tutarız:
                        </p>
                        <ul>
                            <li>Müşteri isimleri veya kimlikleri.</li>
                            <li>Müşteriye özel teslimatlar ve çalışma ürünleri (taslaklar ve analizler dahil).</li>
                            <li>Müşteri tarafından sağlanan veri setleri, teklif talepleri (RFP) veya iç dokümanlar.</li>
                            <li>Projeler sırasında edinilen strateji, operasyon ve diğer ticari bilgiler.</li>
                        </ul>

                        <h2>Güvenlik Protokolleri</h2>
                        <p>
                            Gizli verileri korumak için sağlam fiziksel ve BT güvenlik önlemleri uygulanmaktadır.
                            Küresel teknoloji altyapımız, uluslararası güvenlik standartlarına (ISO 27001) uyumlu şekilde yönetilmektedir.
                        </p>

                        <p className="legal-footer-note">
                            Son Güncelleme: Mart 2026
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientConfidentiality;
