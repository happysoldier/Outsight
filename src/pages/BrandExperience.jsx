import React from 'react';
import { Link } from 'react-router-dom';
import './BrandExperience.css';
import heroBg from '../assets/brand-experience-hero.png';

const BrandExperience = () => {
    return (
        <div className="brand-experience-page">
            {/* Hero Section */}
            <section className="service-hero">
                <div className="service-hero-bg">
                    <img src={heroBg} alt="Marka, İletişim & Deneyim Tasarımı" />
                </div>
                <div className="container service-hero-content">
                    <h1>Marka, İletişim &<br />Deneyim Tasarımı</h1>
                    <p className="hero-tagline">“Kalpte başlayan bir yolculuk, akılda kalıcı bir iz bırakır.”</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="intro-text">
                        <p className="lead-text">
                            Günümüz dünyasında bir ürün veya hizmet sunmak yeterli değil; bir hikaye anlatmak, bir duygu uyandırmak ve unutulmaz bir deneyim yaratmak gerekiyor. Outsight olarak, markanızın sadece ne söylediğini değil, nasıl göründüğünü, nasıl hissettirdiğini ve her temas noktasında nasıl bir bağ kurduğunu tasarlıyoruz. Markanızın özünü yakalayan, hedef kitlenizin zihnine ve kalbine dokunan bütünsel bir Marka, İletişim ve Deneyim Mimarisi yaratıyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Scope Section */}
            <section className="section bg-grey">
                <div className="container">
                    <h2 className="section-title">Marka Temelinizi Oluşturuyoruz</h2>
                    <p className="subtitle">Stratejik planlama ve uygulama yoluyla güçlü bir marka kimliği oluşturuyoruz.</p>

                    <ul className="service-bullet-list">
                        <li>
                            <strong>Tanımlama:</strong>
                            Misyon, vizyon, değerler ve benzersiz konumlandırma bildiriminizi netleştiriyoruz.
                        </li>
                        <li>
                            <strong>Tasarım:</strong>
                            Renkler, yazı tipleri ve tüm grafik standartları dahil olmak üzere markanızın görsel dünyasını kurguluyoruz.
                        </li>
                        <li>
                            <strong>Değerlendirme:</strong>
                            Marka performansını sürekli izleyerek stratejinizi değişen pazar koşullarına göre geliştiriyoruz.
                        </li>
                    </ul>
                </div>
            </section>

            {/* Creative Difference Section */}
            <section className="section bg-white">
                <div className="container">
                    <h2 className="section-title">Outsight’ın Yaratıcı Farkı</h2>
                    <div className="approach-list">
                        <div className="approach-item">
                            <div className="approach-header">
                                <div className="num-badge">01</div>
                                <h3>İçgörü Odaklı</h3>
                            </div>
                            <div className="approach-content">
                                <p>Hedef kitlenizin düşünce yapısını ve ihtiyaçlarını derinlemesine analiz ediyoruz.</p>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-header">
                                <div className="num-badge">02</div>
                                <h3>Duygusal Bağ</h3>
                            </div>
                            <div className="approach-content">
                                <p>Zihinde ve kalpte kalıcı yer edinen, marka sadakati yaratan deneyimler tasarlıyoruz.</p>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-header">
                                <div className="num-badge">03</div>
                                <h3>Tutarlılık</h3>
                            </div>
                            <div className="approach-content">
                                <p>Tüm kanallarda "tek ses, tek nefes" prensibiyle markanızın bütünlüğünü koruyoruz.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* For Whom Section */}
            <section className="section bg-grey">
                <div className="container">
                    <h2 className="section-title">Kimler İçin İdeal?</h2>
                    <div className="target-grid">
                        <div className="target-card">
                            <h4>Yeni Girişimler</h4>
                            <p>Pazara güçlü ve karakterli bir giriş yapmak isteyen markalar.</p>
                        </div>
                        <div className="target-card">
                            <h4>Köklü Şirketler</h4>
                            <p>Marka algısını yenilemek ve modern çağa uyum sağlamak isteyenler.</p>
                        </div>
                        <div className="target-card">
                            <h4>Dijital Odaklılar</h4>
                            <p>Dijital varlıklarını ve kullanıcı deneyimini mükemmelleştirmek isteyen işletmeler.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            {/* CTA Section */}
            <section className="section bg-white cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Markanızın hikayesini birlikte yazalım.</h2>
                        <p>Hedef kitlenizle duygusal ve kalıcı bir bağ kurmak için bizimle iletişime geçin.</p>
                        <Link to="/contact" className="btn">İletişime Geçin</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BrandExperience;
