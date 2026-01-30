import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SiteMap.css';

const SiteMap = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="sitemap-page">
            <div className="sitemap-header">
                <div className="container">
                    <h1>Site Haritası</h1>
                    <div className="divider"></div>
                </div>
            </div>

            <div className="container">
                <div className="sitemap-content">

                    <div className="sitemap-section">
                        <h2>Genel</h2>
                        <ul className="sitemap-list">
                            <li><Link to="/">Anasayfa</Link></li>
                            <li><Link to="/about">Hakkımızda</Link></li>
                            <li><Link to="/services">Hizmetler</Link></li>
                            <li><Link to="/contact">İletişim</Link></li>
                        </ul>
                    </div>

                    <div className="sitemap-section">
                        <h2>Kurumsal</h2>
                        <ul className="sitemap-list">
                            <li><Link to="/about">Hikayemiz</Link></li>
                            <li><Link to="/values">Kültür ve Değerler</Link></li>
                            <li><Link to="/about/people">Ekibimiz</Link></li>
                            <li><Link to="/about">Liderlik Ekibi</Link></li>
                        </ul>
                    </div>

                    <div className="sitemap-section">
                        <h2>İçerik</h2>
                        <ul className="sitemap-list">
                            <li><Link to="/blog">Öngörüler (Blog)</Link></li>
                            <li><Link to="/media">Medya</Link></li>
                            <li><Link to="/sustainability">Sürdürülebilirlik</Link></li>

                            <li><Link to="/about">Kariyer</Link></li>
                        </ul>
                    </div>

                    <div className="sitemap-section">
                        <h2>Yasal & Politikalar</h2>
                        <ul className="sitemap-list">
                            <li><Link to="/legal-disclaimer">Yasal Uyarı</Link></li>
                            <li><Link to="/privacy-policy">Gizlilik Politikası</Link></li>
                            <li><Link to="/cookie-notice">Çerez Bildirimi</Link></li>
                            <li><Link to="/client-confidentiality">Müşteri Gizliliği</Link></li>
                            <li><Link to="/responsible-ai">Sorumlu Yapay Zeka Kullanımı</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SiteMap;
