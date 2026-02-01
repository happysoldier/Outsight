import React from 'react';
import { Link } from 'react-router-dom';
import './DigitalPerformance.css';
import heroBg from '../assets/digital-performance-hero.png';

const DigitalPerformance = () => {
    return (
        <div className="digital-performance-page">
            {/* Hero Section */}
            <section className="service-hero">
                <div className="service-hero-bg">
                    <img src={heroBg} alt="Dijital Performans" />
                </div>
                <div className="container service-hero-content">
                    <h1>Dijital Performans</h1>
                    <p className="hero-tagline">“Veriye dayalı stratejilerle, dijital varlığınızı somut bir büyüme motoruna dönüştürüyoruz.”</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="intro-text">
                        <p className="lead-text">
                            Geleneksel pazarlamanın sınırlarını aşarak, hedef kitlenizle en doğru kanalda ve en etkili mesajla buluşmanızı sağlıyoruz. Sadece trafik değil, yüksek dönüşüm ve sürdürülebilir başarı hedefliyoruz. Outsight olarak, dijital dünyadaki her temas noktasını markanız için bir değer yaratma alanına dönüştürüyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title mb-60">Çözüm Alanlarımız</h2>
                    <div className="scope-list">
                        <div className="scope-item">
                            <span className="scope-number">01</span>
                            <strong className="scope-title">Performans Pazarlaması</strong>
                            <p>Google, Instagram, Facebook ve LinkedIn’de nokta atışı reklam kampanyaları ile doğru kitleye, doğru bütçe ve optimum maliyetle ulaşıyoruz.</p>
                        </div>
                        <div className="scope-item">
                            <span className="scope-number">02</span>
                            <strong className="scope-title">İçerik Pazarlaması ve CRO</strong>
                            <p>Kullanıcı deneyimini odağa alarak web sitenizden maksimum verim elde etmenizi sağlıyoruz. Dönüşüm oranlarını optimize ederek her ziyareti kazanca dönüştürüyoruz.</p>
                        </div>
                        <div className="scope-item">
                            <span className="scope-number">03</span>
                            <strong className="scope-title">Sosyal Medya Yönetimi ve Stratejisi</strong>
                            <p>Marka sesinizi dijital topluluklara ulaştırıyor, etkileşimi artırıyor ve topluluk yönetimini stratejik bir zemine oturtuyoruz.</p>
                        </div>
                        <div className="scope-item">
                            <span className="scope-number">04</span>
                            <strong className="scope-title">E-posta Pazarlaması ve Otomasyon</strong>
                            <p>Müşteri yolculuğunu kişiselleştirilmiş dokunuşlarla otomatize ediyor, sadakati ve tekrar eden satın alımları artırıyoruz.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Block */}
            <section className="section bg-white">
                <div className="container">
                    <blockquote className="large-quote">
                        “Dijitalde görünen her nokta, potansiyel bir kazanç noktasıdır.”
                    </blockquote>
                </div>
            </section>

            {/* Approach Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="section-title">Outsight’ın Dijital Yaklaşımı</h2>
                            <p className="mb-40">Tahminlerle değil, gerçek zamanlı veriler ve analizlerle ilerliyoruz:</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="approach-list">
                                <div className="approach-item">
                                    <div className="approach-header">
                                        <div className="num-badge">01</div>
                                        <h3>Veri Odaklı Kararlar</h3>
                                    </div>
                                    <div className="approach-content">
                                        <p>Kampanya süreçlerimizi anlık verilerle besleyerek en yüksek verimi alacak şekilde dinamik olarak güncelliyoruz.</p>
                                    </div>
                                </div>
                                <div className="approach-item">
                                    <div className="approach-header">
                                        <div className="num-badge">02</div>
                                        <h3>ROI Odaklılık</h3>
                                    </div>
                                    <div className="approach-content">
                                        <p>Harcanan her kuruşun karşılığını ölçüyor, bütçenizi en yüksek getiriyi sağlayacak kanallara kanalize ediyoruz.</p>
                                    </div>
                                </div>
                                <div className="approach-item">
                                    <div className="approach-header">
                                        <div className="num-badge">03</div>
                                        <h3>Teknoloji ve Trend Takibi</h3>
                                    </div>
                                    <div className="approach-content">
                                        <p>Yapay zeka destekli araçlar ve en güncel dijital trendlerle markanızı rekabette her zaman bir adım önde tutuyoruz.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section cta-section bg-white">
                <div className="container">
                    <div className="cta-box">
                        <h2>Dijital dünyada rakiplerinizin önüne geçelim.</h2>
                        <p className="mb-40">Ölçülebilir başarılar ve sürdürülebilir büyüme için uzman ekibimizle tanışın.</p>
                        <Link to="/contact" className="btn">İletişime Geçin</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalPerformance;
