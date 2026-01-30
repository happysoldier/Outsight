import React, { useEffect } from 'react';
import './Media.css';
import mediaHeroBg from '../assets/media_hero_bg.png'; // Will use the generated image

const Media = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Placeholder data for media appearances
    const newsItems = [
        {
            id: 1,
            date: "14 OCAK 2026",
            title: "Outsight, Gelişmekte Olan Pazarlarda Dijital Dönüşüm Raporunu Yayınladı",
            source: "Bloomberg HT"
        },
        {
            id: 2,
            date: "22 ARALIK 2025",
            title: "Murat Tolga Eser: \"Yapay Zeka, İş Gücünü Nasıl Dönüştürecek?\"",
            source: "Harvard Business Review Türkiye"
        },
        {
            id: 3,
            date: "10 KASIM 2025",
            title: "Sürdürülebilirlik Odaklı Stratejilerde Yeni Dönem",
            source: "Dünya Gazetesi"
        },
        {
            id: 4,
            date: "05 EKİM 2025",
            title: "Hakan Mısırlı: \"Global Krizlerde Liderlik ve Dayanıklılık\"",
            source: "CNBC-e"
        },
        {
            id: 5,
            date: "15 EYLÜL 2025",
            title: "Outsight'tan Teknoloji Sektörüne Dev Yatırım Hamlesi",
            source: "Webrazzi"
        },
        {
            id: 6,
            date: "30 AĞUSTOS 2025",
            title: "Yönetim Danışmanlığında Yeni Yaklaşımlar ve Trendler",
            source: "Capital Dergisi"
        }
    ];

    return (
        <div className="media-page">
            {/* Hero Section */}
            <div className="media-hero" style={{ backgroundImage: `url(${mediaHeroBg})` }}>
                <div className="container">
                    <h1>Basında Outsight</h1>
                </div>
            </div>



            {/* Content Section */}
            <section className="media-content-section">
                <div className="container">
                    <div className="news-grid">
                        {newsItems.map(item => (
                            <a href="#" key={item.id} className="news-card">
                                <span className="news-date">{item.date}</span>
                                <h3>{item.title}</h3>
                                <span className="news-source">{item.source}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Media;
