import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BrandStructure.css';

import brandStructureHeroBg from '../assets/brand-structure-hero-bg.png';

const BrandStructure = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    return (
        <div className="brand-structure-page">
            {/* Hero Section */}
            <section className="service-hero">
                <div className="service-hero-bg">
                    <img
                        src={brandStructureHeroBg}
                        alt="Yeni Marka & Yapı Kurulumu"
                    />
                </div>
                <div className="container service-hero-content">
                    <h1>Yeni Marka &<br />Yapı Kurulumu</h1>
                    <p className="hero-tagline">“Sadece bir isim değil, yaşayan bir sistem kuruyoruz.”</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="intro-grid">
                        <div className="intro-text">
                            <p className="lead-text">
                                Bir markanın doğuşu, sadece bir logo veya slogandan ibaret değildir. Rekabetin yoğun olduğu günümüz pazarlarında başarılı olmak için, sağlam bir stratejik temel üzerine inşa edilmiş, sürdürülebilir bir operasyonel yapıya ihtiyaç vardır. Outsight olarak, fikir aşamasından pazar liderliğine uzanan yolculukta markanızın mimarlığını üstleniyoruz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Scope */}
            <section className="section bg-white">
                <div className="container">
                    <h2 className="section-title">Hizmet Kapsamımız</h2>
                    <p className="subtitle">Sıfırdan bir marka inşa ederken veya mevcut bir yapıyı yeniden kurgularken sunduğumuz uçtan uca çözümler:</p>

                    <ul className="service-bullet-list">
                        <li><strong>Pazar Analizi ve Konumlandırma:</strong> Sektörel boşlukları tespit ediyor, hedef kitle davranışlarını analiz ederek markanızın “eşsiz değer önerisini” (USP) belirliyoruz.</li>
                        <li><strong>Marka Kimliği ve Hikayeleştirme:</strong> Markanızın ruhunu yansıtan bir isim, görsel kimlik ve akılda kalıcı bir hikaye oluşturuyoruz.</li>
                        <li><strong>Organizasyonel Yapı Tasarımı:</strong> Markanın vaadini yerine getirebilmesi için gerekli olan ekiplerin, iş akışlarının ve hiyerarşik yapının kurulumuna rehberlik ediyoruz.</li>
                        <li><strong>Go-to-Market (Pazara Giriş) Stratejisi:</strong> Ürününüzün veya hizmetinizin doğru kanallardan, doğru fiyatlandırmayla ve doğru mesajla hedef kitleye ulaşmasını sağlıyoruz.</li>
                        <li><strong>Dijital ve Fiziksel Altyapı Kurulumu:</strong> Markanın temas noktalarını (web sitesi, CRM sistemleri, operasyonel araçlar) modern dünyaya uyumlu hale getiriyoruz.</li>
                    </ul>
                </div>
            </section>

            {/* Values Section (Gray Block) */}
            <section className="section">
                <div className="container">
                    <div
                        className="brand-values-block fullscreen-trigger"
                        onClick={toggleFullScreen}
                        style={{ padding: 0, backgroundColor: 'transparent' }}
                    >
                        <img
                            src="https://outsight.com.tr/wp-content/uploads/2026/01/Marka-Stratejisi-3-1.jpg"
                            alt="Temel Marka Değerleri"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                        <div className="expand-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Fullscreen Overlay */}
                {isFullScreen && (
                    <div className="fullscreen-overlay" onClick={toggleFullScreen}>
                        <button className="close-icon" onClick={toggleFullScreen}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                        <img
                            src="https://outsight.com.tr/wp-content/uploads/2026/01/Marka-Stratejisi-3-1.jpg"
                            alt="Temel Marka Değerleri Fullscreen"
                            className="fullscreen-image"
                            onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
                        />
                    </div>
                )}
            </section>

            {/* Why Needed / Outsight Difference */}
            <section className="section bg-white differences-section">
                <div className="container">
                    <h2 className="section-title">Outsight Farkı: “Dışarıdan Bir Bakış, İçeriden Bir Sahiplenme”</h2>
                    <p className="mb-4">Yeni bir yapı kurarken objektif bir gözle bakmak, hataları henüz oluşmadan engeller. Outsight olarak biz:</p>
                    <ul className="simple-bullet-list">
                        <li><strong>1. Veri Odaklıyız:</strong> Kararlarımızı sezgilerle değil, pazar verileriyle alıyoruz.</li>
                        <li><strong>2. Bütünsel Bakıyoruz:</strong> Sadece pazarlamaya değil, işin operasyonel ve finansal sürdürülebilirliğine odaklanıyoruz.</li>
                        <li><strong>3. Çeviğiz:</strong> Değişen pazar koşullarına hızla uyum sağlayan esnek yapılar kuruyoruz.</li>
                    </ul>
                    <p className="mt-4">Geleceğin markasını bugünden, sağlam temeller üzerine inşa edelim.</p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-white cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Hayalinizdeki yapıyı hayata geçirmeye hazır mısınız?</h2>
                        <p>Geleceğin markasını bugünden, sağlam temeller üzerine inşa edelim.</p>
                        <Link to="/contact" className="btn">İletişime Geçin</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BrandStructure;
