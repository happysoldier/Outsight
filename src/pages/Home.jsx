import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Import Hero Image (using a fitting strategic/modern image)
import heroImg from '../assets/modern-marketing-hero.png';

// Import Insight Images
import insight1Img from '../assets/company-health-hero.png'; // Teams/Architecture
import insight2Img from '../assets/future-of-digital-marketing-hero.png'; // Digital Evolution
import insight3Img from '../assets/innovative-strategies-hero.png'; // Growth/Strategy

const Home = () => {
    return (
        <div className="home-page">
            {/* Editorial Hero Section */}
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content">
                        <span className="category-tag">VİZYON</span>
                        <h1 className="hero-title">
                            Geleceği, Bugünden Tasarlayan <br />
                            <span className="text-secondary">Strateji Merkezi.</span>
                        </h1>
                        <p className="hero-lead">
                            İş dünyasının hızla değişen dinamikleri karşısında markaların sadece hayatta kalmasını değil,
                            fark yaratarak büyümesini sağlıyoruz.
                        </p>
                        <Link to="/services" className="btn">Hizmetlerimizi Keşfedin</Link>
                    </div>
                    <div className="hero-image-wrapper">
                        <img
                            src={heroImg}
                            alt="Strategic Vision"
                            className="hero-image"
                        />
                    </div>
                </div>
            </section>

            {/* Latest Perspectives Grid */}
            <section className="section section-grey">
                <div className="container">
                    <div className="section-header">
                        <h2>Öngörüler</h2>
                        <div className="divider"></div>
                    </div>

                    <div className="insights-grid">
                        {/* Perspective Card 1 */}
                        <article className="insight-card">
                            <div className="card-image">
                                <img src={insight1Img} alt="Teamwork" />
                            </div>
                            <div className="card-content">
                                <span className="card-category">Perspektif</span>
                                <h3>Yüksek Performanslı Takımların Mimarisi</h3>
                                <p>Kültür inşası bir İK fonksiyonu değil, C-level için stratejik bir zorunluluktur.</p>
                                <Link to="/about" className="btn-link">Devamını Oku</Link>
                            </div>
                        </article>

                        {/* Perspective Card 2 */}
                        <article className="insight-card">
                            <div className="card-image">
                                <img src={insight2Img} alt="Digital" />
                            </div>
                            <div className="card-content">
                                <span className="card-category">Dijital</span>
                                <h3>Dönüşümün Ötesinde: Dijital Evrim</h3>
                                <p>Dijital dönüşüm projeleri neden başarısız olur ve sürekli evrim motoru nasıl kurulur?</p>
                                <Link to="/services" className="btn-link">Devamını Oku</Link>
                            </div>
                        </article>

                        {/* Perspective Card 3 */}
                        <article className="insight-card">
                            <div className="card-image">
                                <img src={insight3Img} alt="Growth" />
                            </div>
                            <div className="card-content">
                                <span className="card-category">Strateji</span>
                                <h3>Fraktal Ekonomide Sürdürülebilir Büyüme</h3>
                                <p>Modern küresel piyasaların karmaşık karşılıklı bağımlılıklarını yönetmek.</p>
                                <Link to="/services" className="btn-link">Devamını Oku</Link>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* Capabilities / Services List */}
            <section className="section">
                <div className="container">
                    <div className="split-layout">
                        <div className="layout-left">
                            <h2>Yeteneklerimiz</h2>
                            <p className="lead-text">Outsight, bütüncül bir stratejik müdahale setiyle değer yaratır.</p>
                        </div>
                        <div className="layout-right">
                            <ul className="capabilities-list">
                                <li>
                                    <Link to="/services">Stratejik İş Geliştirme <span className="arrow">→</span></Link>
                                </li>
                                <li>
                                    <Link to="/services">Finansal & Stratejik Danışmanlık <span className="arrow">→</span></Link>
                                </li>
                                <li>
                                    <Link to="/services">Deneyim Mimarisi <span className="arrow">→</span></Link>
                                </li>
                                <li>
                                    <Link to="/services">Operasyon & Satış Yapıları <span className="arrow">→</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
