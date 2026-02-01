import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Yeni Marka & Yapı Kurulumu",
            description: "Fikir aşamasından pazar liderliğine; sağlam stratejik temel ve sürdürülebilir operasyonel yapı kurulumu.",
            link: "/services/yeni-marka-yapi-kurulumu"
        },
        {
            id: 5,
            title: "Birleşme ve Devralmalar",
            description: "Bir sonraki satın alımınızdan entegrasyona kadar; inorganik büyümenin her adımında değer yaratan stratejik ortaklık.",
            link: "/services/birlesme-ve-devralmalar"
        },
        {
            id: 2,
            title: "Finansal & Stratejik Danışmanlık",
            description: "Sermaye dağılımı, risk yönetimi ve istikrar için finansal modelleme.",
            link: "/services/finansal-ve-stratejik-danismanlik"
        },
        {
            id: 3,
            title: "Deneyim Mimarisi",
            description: "Marka kimliği, müşteri yolculuğu haritalaması ve UX mimarisi.",
        },
        {
            id: 3,
            title: "Operasyon & Satış Yapıları",
            description: "Verimlilik, otomasyon ve satış ekiplerinin performans optimizasyonu.",
            link: "/services/operasyon-satis-dagitim-yapilari"
        },
        {
            id: 4,
            title: "Marka, İletişim & Deneyim Tasarımı",
            description: "Kalıcı duygusal bağlar ve akılda kalıcı marka deneyimleri kurgulamak.",
            link: "/services/marka-iletisim-deneyim-tasarimi"
        },
        {
            id: 6,
            title: "Mevcut Markaların Dönüşümü",
            description: "Köklü markaları yarının dünyasına hazırlamak için stratejik evrim.",
            link: "/services/mevcut-markalarin-donusumu"
        },
        {
            id: 7,
            title: "İş Süreçleri & Toplam Kalite",
            description: "Operasyonel verimlilik ve sürdürülebilir kalite standartları kurgulamak.",
            link: "/services/is-surecleri-toplam-kalite"
        },
        {
            id: 8,
            title: "İnsan Kaynakları & Organizasyon",
            description: "Yüksek performanslı ekipler ve çevik organizasyonel yapılar tasarlamak.",
            link: "/services/insan-kaynaklari-organizasyon"
        },
        {
            id: 10,
            title: "Dijital Performans",
            description: "Veri odaklı dijital büyüme ve performans pazarlaması stratejileri.",
            link: "/services/dijital-performans"
        },
        {
            id: 11,
            title: "Stratejik İş Geliştirme & Büyüme Mimarlığı",
            description: "Analiz, optimizasyon ve ölçeklenebilir büyüme kurguları tasarlamak.",
            link: "/services/stratejik-is-gelistirme-buyume-mimarligi"
        }
    ];

    return (
        <div className="services-page">
            <div className="page-header">
                <div className="container">
                    <span className="chapter-scent">Uzmanlık</span>
                    <h1>Karmaşık zorluklar için<br />kapsamlı çözümler.</h1>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    {services.map((service, index) => (
                        <div key={service.id} className="service-row">
                            <div className="service-num">0{index + 1}</div>
                            <div className="service-title">
                                <h3>{service.title}</h3>
                            </div>
                            <div className="service-desc">
                                <p>{service.description}</p>
                                <Link to={service.link || "/contact"} className="btn-link">Daha fazla bilgi</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;
