import React from 'react';
import { Link } from 'react-router-dom';
import './StrategicBusinessDevelopment.css';
import heroBg from '../assets/strategic-biz-dev-hero.png';
import cycleImg from '../assets/strategic-cycle.jpg';
import hierarchyImg from '../assets/strategic-hierarchy.jpg';

const StrategicBusinessDevelopment = () => {
    const [fullScreenImage, setFullScreenImage] = React.useState(null);

    const openFullScreen = (imgSrc) => {
        setFullScreenImage(imgSrc);
    };

    const closeFullScreen = () => {
        setFullScreenImage(null);
    };

    return (
        <div className="strategic-biz-dev-page">
            {/* Hero Section */}
            <section className="service-hero">
                <div className="service-hero-bg">
                    <img src={heroBg} alt="Stratejik İş Geliştirme" />
                </div>
                <div className="container service-hero-content">
                    <h1>Stratejik İş Geliştirme & Büyüme Mimarlığı</h1>
                    <p className="hero-tagline">“Büyüme bir tesadüf değil, iyi tasarlanmış bir mühendislik sürecidir.”</p>
                </div>
            </section>

            {/* Definition Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="intro-text">
                        <h2 className="section-title">Büyüme Mimarlığı Nedir?</h2>
                        <p className="lead-text">
                            Bir işletmeyi büyütmek, bir yapıyı inşa etmek gibidir. Temelin sağlamlığı, kat planlarının verimliliği ve kullanılan malzemenin kalitesi binanın ömrünü belirler. Büyüme Mimarlığı; operasyonel kapasitenizi, pazar fırsatlarını ve finansal sürdürülebilirliğinizi bir bütün olarak tasarlama sürecidir. Outsight olarak biz, sadece fikir üretmiyor; o fikrin üzerinde yükselebileceği mimariyi kuruyoruz.
                        </p>
                        <div
                            className="content-image-container mt-40 fullscreen-trigger"
                            onClick={() => openFullScreen(cycleImg)}
                        >
                            <img src={cycleImg} alt="Stratejik Planlama Döngüsü" className="img-fluid rounded-shadow" />
                            <p className="image-caption">Stratejik Planlama Döngüsü</p>
                            <div className="expand-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Solutions Grid */}
            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title mb-60">Stratejik Çözümlerimiz</h2>
                    <div className="service-grid">
                        <div className="service-card">
                            <div className="service-card-number">01</div>
                            <h3 className="service-card-title">Analiz ve Pazar Konumlandırma</h3>
                            <p className="service-card-text">
                                Veriye dayalı analizlerle pazarın boşluklarını belirliyor, markanızı en karlı ve sürdürülebilir noktaya konumluyoruz.
                            </p>
                        </div>
                        <div className="service-card">
                            <div className="service-card-number">02</div>
                            <h3 className="service-card-title">Gelir Modeli Optimizasyonu</h3>
                            <p className="service-card-text">
                                Mevcut gelir kaynaklarını optimize ederken, yeni ve ölçeklenebilir kazanç modelleri inşa ediyoruz.
                            </p>
                        </div>
                        <div className="service-card">
                            <div className="service-card-number">03</div>
                            <h3 className="service-card-title">Stratejik Ortaklıklar ve Ağ Yönetimi</h3>
                            <p className="service-card-text">
                                İşinizi büyütecek doğru ekosistemleri kuruyor, kritik iş birlikleri ile kaldıraç etkisi yaratıyoruz.
                            </p>
                        </div>
                        <div className="service-card">
                            <div className="service-card-number">04</div>
                            <h3 className="service-card-title">Ölçeklenebilir Satış ve Pazarlama</h3>
                            <p className="service-card-text">
                                Büyümeyi destekleyen, teknoloji entegrasyonu yüksek ve ölçülebilir satış/pazarlama yapıları tasarlıyoruz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hierarchy Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="intro-text">
                        <h2 className="section-title">Stratejik Öncelik Hiyerarşisi</h2>
                        <p className="lead-text mb-60">
                            Becerilerin ve yetkinliklerin doğru bir hiyerarşide inşa edilmesi, kurumların sektör liderliğine giden yolunun temelini oluşturur. İşte Outsight’ın metodolojik yaklaşımı:
                        </p>
                    </div>
                    <div
                        className="hierarchy-container fullscreen-trigger"
                        onClick={() => openFullScreen(hierarchyImg)}
                    >
                        <img src={hierarchyImg} alt="Stratejik Öncelik Hiyerarşisi" className="img-fluid pyramid-image" />
                        <div className="expand-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Segments */}
            <section className="section segments-section">
                <div className="container">
                    <h2 className="section-title mb-60">Kimin İçin Mimarlık Yapıyoruz?</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="segment-card">
                                <h3>Hızlı Büyüyen Şirketler</h3>
                                <p>Büyüme sancıları çeken ve profesyonel bir yapıya ihtiyaç duyan işletmeler için.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="segment-card">
                                <h3>Durgunluk Dönemindekiler</h3>
                                <p>Mevcut yapısını yenileyip taze bir stratejik yön arayan köklü işletmeler için.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="segment-card">
                                <h3>Globalleşme Hedefi Olanlar</h3>
                                <p>Lokal başarısını uluslararası arenaya taşımak isteyen vizyoner markalar için.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-white cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Geleceğin mimarisini bugünden kurgulayalım.</h2>
                        <p>İşletmenizi bir sonraki seviyeye taşıyacak stratejik mühendislik için uzmanlarımızla görüşün.</p>
                        <Link to="/contact" className="btn">İletişime Geçin</Link>
                    </div>
                </div>
            </section>

            {/* Fullscreen Overlay */}
            {fullScreenImage && (
                <div className="fullscreen-overlay" onClick={closeFullScreen}>
                    <button className="close-icon" onClick={closeFullScreen}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                    <img
                        src={fullScreenImage}
                        alt="Fullscreen content"
                        className="fullscreen-image"
                        onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
                    />
                </div>
            )}
        </div>
    );
};

export default StrategicBusinessDevelopment;
