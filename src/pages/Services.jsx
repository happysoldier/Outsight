import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Stratejik İş Geliştirme",
            description: "Pazar giriş stratejileri, büyüme haritaları ve rekabetçi konumlandırma.",
        },
        {
            id: 2,
            title: "Finansal & Stratejik Danışmanlık",
            description: "Sermaye dağılımı, risk yönetimi ve istikrar için finansal modelleme.",
        },
        {
            id: 3,
            title: "Deneyim Mimarisi",
            description: "Marka kimliği, müşteri yolculuğu haritalaması ve UX mimarisi.",
        },
        {
            id: 4,
            title: "Operasyon & Satış Yapıları",
            description: "Süreç optimizasyonu, satış kanalı verimliliği ve tedarik zinciri mantığı.",
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
                                <Link to="/contact" className="btn-link">Daha fazla bilgi</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;
