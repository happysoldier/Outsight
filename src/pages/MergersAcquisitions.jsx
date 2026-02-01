import React from 'react';
import { Link } from 'react-router-dom';
import './MergersAcquisitions.css';
import heroBg from '../assets/ma-hero-bg.png';

const MergersAcquisitions = () => {
    return (
        <div className="ma-page">
            {/* Hero Section */}
            <section className="ma-hero">
                <div className="ma-hero-bg">
                    <img
                        src={heroBg}
                        alt="Birleşme ve Devralmalar"
                    />
                </div>
                <div className="container ma-hero-content">
                    <h1>Birleşme ve Devralmalar</h1>
                    <p className="hero-tagline">“İnorganik büyümeyi sürdürülebilir başarıya dönüştürüyoruz.”</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section bg-white">
                <div className="container">
                    <p className="lead-text">
                        Bir sonraki satın alımınız için kaynak bulmaktan, işlemleri yönetmeye ve entegrasyon stratejileri geliştirmeye kadar, birleşme ve devralma yolculuğunun her adımında güvenilir ortağınızız. Kearney'nin küresel birikimini Outsight'ın yerel uzmanlığıyla birleştirerek, işlemlerinizin sadece kapanmasını değil, gerçek değer yaratmasını sağlıyoruz.
                    </p>
                </div>
            </section>

            {/* Impact Section */}
            <section className="section ma-impact-section">
                <div className="container">
                    <div className="impact-grid">
                        <div className="impact-item">
                            <span className="impact-num">2+</span>
                            <p>Yıllık olarak desteklenen birleşme ve devralma işlemi</p>
                        </div>
                        <div className="impact-item">
                            <span className="impact-num">%60</span>
                            <p>Müşterilerimiz tarafından elde edilen ortalama daha yüksek sinerji</p>
                        </div>
                        <div className="impact-item">
                            <span className="impact-num">%20+</span>
                            <p>Kapanıştan bir yıl sonraki ortalama toplam hissedar getirisi</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="section bg-white">
                <div className="container">
                    <h2 className="section-title">Uzmanlık Alanlarımız</h2>
                    <div className="expertise-grid">
                        <div className="expertise-card">
                            <h3>Birleşme ve Devralma Stratejisi</h3>
                            <p>Müşterilerimizin organik olmayan büyümenin başarılarını nasıl artırabileceğini anlamalarına yardımcı oluyor ve verimli işlemler sağlayan bir strateji belirliyoruz.</p>
                        </div>
                        <div className="expertise-card">
                            <h3>Devir İşlemleri</h3>
                            <p>Varlık satışlarına yönelik yaklaşımımızı; anlaşma hazırlığı, ayrılma planlaması ve TSA yönetimi süreçlerini içeren bir yöntemle değer yaratmaya odaklıyoruz.</p>
                        </div>
                        <div className="expertise-card">
                            <h3>Birleşme Entegrasyonu</h3>
                            <p>Stratejik netlik, entegrasyon sürecine hakimiyet ve kapsamlı deneyimimizle entegrasyonlarda başarıya ulaşmanıza yardımcı oluyoruz.</p>
                        </div>
                        <div className="expertise-card">
                            <h3>Hedef Taraması</h3>
                            <p>İş zekası ve analiz yeteneklerimizi, tescilli araçlarımızla birleştirerek hedef belirleme sürecini hızlandırıyoruz.</p>
                        </div>
                        <div className="expertise-card">
                            <h3>Birleşme ve Devralma Motoru</h3>
                            <p>Müşterilerimizin bir M&A operasyon modeli oluşturmalarına ve ekibi eğitmek için ölçeklenebilir bir kılavuz oluşturmalarına yardımcı oluyoruz.</p>
                        </div>
                        <div className="expertise-card">
                            <h3>Durum Tespiti (Due Diligence)</h3>
                            <p>Detaylı incelemelerimiz; gelir artışını korumaya, sinerjileri belirlemeye ve maliyet iyileştirme fırsatlarını doğrulamaya odaklanır.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-white cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Stratejik büyüme yolculuğuna başlamaya hazır mısınız?</h2>
                        <p>Birleşme ve devralma süreçlerinizde Outsight uzmanlığıyla fark yaratın.</p>
                        <Link to="/contact" className="btn">İletişime Geçin</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MergersAcquisitions;
