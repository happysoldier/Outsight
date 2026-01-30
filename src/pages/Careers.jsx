import React from 'react';
import { Link } from 'react-router-dom';
import './Careers.css';
import heroBg from '../assets/careers_hero_bg.png';

const Careers = () => {
    return (
        <div className="careers-page">
            {/* Hero Section */}
            <header className="careers-hero" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="container">
                    <h1>Outsight'ta Kariyer</h1>
                    <p className="careers-hero-subtitle">Potansiyelini harekete geçir.</p>
                </div>
            </header>

            {/* Sticky Navigation */}
            <nav className="careers-nav">
                <div className="container">
                    <span className="careers-nav-title">Kariyer</span>
                    <div className="careers-nav-links">
                        <a href="#opportunities">Fırsatlar</a>
                        <a href="#culture">Kültürümüz</a>
                        <a href="#apply">Başvuru</a>
                    </div>
                </div>
            </nav>

            {/* Content Section 1: Opportunities */}
            <section id="opportunities" className="career-section">
                <div className="container">
                    <div className="career-grid">
                        <div className="career-content">
                            <h2>Sınırları Zorlayın</h2>
                            <p>
                                Outsight'ta, karmaşık sorunları çözmek için tutkuyla çalışan, meraklı ve hırslı zihinler arıyoruz.
                                Burada, ilk günden itibaren gerçek sorumluluklar alacak, küresel projelerde yer alacak ve
                                kariyerinizin yönünü kendiniz belirleyeceksiniz.
                            </p>
                            <button className="career-btn">Açık Pozisyonları İncele</button>
                        </div>
                        <div className="career-img-wrapper">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600" alt="Team collaboration" className="section-img" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section 2: Culture (Grey Background) */}
            <section id="culture" className="career-section bg-grey">
                <div className="container">
                    <div className="career-grid">
                        <div className="career-img-wrapper">
                            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600" alt="Office culture" className="section-img" />
                        </div>
                        <div className="career-content">
                            <h2>Birlikte Büyüyen Bir Ekip</h2>
                            <p>
                                Biz sadece iş arkadaşı değil, birbirini destekleyen bir topluluğuz.
                                Çeşitliliğe değer veriyor, her fikrin duyulduğu kapsayıcı bir ortam yaratıyoruz.
                                Sürekli öğrenme ve gelişim, kültürümüzün merkezinde yer alır.
                            </p>
                            <Link to="/values" className="btn-link">Değerlerimizi Keşfedin</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section 3: Related Content Grid */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>İlginizi Çekebilecekler</h2>
                    </div>
                    <div className="related-grid">
                        {/* Card 1 */}
                        <div className="related-card">
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Blog post" className="related-img" />
                            <span className="related-tag">Blog</span>
                            <h3>Danışmanlıkta İlk Yıl</h3>
                            <p>Yeni mezun bir danışmanın gözünden Outsight deneyimi ve ilk yıl öğrenimleri.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="related-card">
                            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" alt="Interview tips" className="related-img" />
                            <span className="related-tag">Rehber</span>
                            <h3>Mülakat Süreci</h3>
                            <p>Outsight mülakatlarına nasıl hazırlanmalısınız? İpuçları ve beklentiler.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="related-card">
                            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" alt="Impact story" className="related-img" />
                            <span className="related-tag">Etki Hikayeleri</span>
                            <h3>Dijital Dönüşüm Projesi</h3>
                            <p>Perakende sektöründe gerçekleştirdiğimiz büyük ölçekli dönüşüm projesinin detayları.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Careers;
