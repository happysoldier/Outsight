import React from 'react';
import { Link } from 'react-router-dom';
import './QualityManagement.css';
import heroBg from '../assets/quality-management-hero.png';

const QualityManagement = () => {
    return (
        <div className="quality-management-page">
            {/* Hero Section */}
            <section className="service-hero">
                <div className="service-hero-bg">
                    <img src={heroBg} alt="İş Süreçleri & Toplam Kalite" />
                </div>
                <div className="container service-hero-content">
                    <h1>İş Süreçleri & Toplam Kalite</h1>
                    <p className="hero-tagline">“Mükemmellik bir varış noktası değil, sürekli bir yolculuktur.”</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="intro-text">
                        <p className="lead-text">
                            Bir işletmenin gücü, en iyi ürün veya hizmeti sunmak kadar, bu ürün veya hizmeti tutarlı bir kalitede ve optimize edilmiş süreçlerle sunabilmesinden gelir. Outsight olarak, işinizin tüm operasyonel damarlarını analiz ediyor, gereksiz adımları elimine ediyor ve her bir sürecin "Toplam Kalite Yönetimi" felsefesiyle mükemmel bir şekilde işlemesini sağlıyoruz. İşletmenizin gizli potansiyelini açığa çıkararak sadece verimliliği değil, aynı zamanda müşteri memnuniyetini ve karlılığı artırıyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Service Section */}
            <section className="section bg-white">
                <div className="container">
                    <h2 className="section-title">Neden İş Süreçleri ve Kalite Yönetimi?</h2>
                    <p className="description-text">
                        Gelişen teknoloji ve artan rekabet ortamında, süreçlerinizi optimize etmek ve kalite standartlarınızı yükseltmek artık bir tercih değil, bir zorunluluktur. İyi yönetilmiş süreçler, hata oranlarını düşürür, maliyetleri azaltır ve müşteri beklentilerini aşan bir hizmet sunmanızı sağlar. Biz, işletmenizin her departmanında “sürekli iyileşme” kültürünü yerleştiriyoruz.
                    </p>
                </div>
            </section>

            {/* Service Scope Section */}
            <section className="section bg-white">
                <div className="container">
                    <h2 className="section-title">Dönüşüm Yolculuğumuzda Neler Var?</h2>
                    <p className="subtitle">İş süreçlerinizi analiz etmekten, toplam kalite felsefesini kurum kültürünüze entegre etmeye kadar sunduğumuz kapsamlı çözümler:</p>
                    <div className="transformation-journey-container">
                        <div className="journey-line"></div>
                        <div className="journey-step">
                            <div className="journey-marker"></div>
                            <div className="journey-content">
                                <strong>Süreç Analizi ve Haritalama</strong>
                                <p>Mevcut iş akışlarınızı detaylı bir şekilde inceliyor, darboğazları, gereksiz adımları ve iyileştirme alanlarını görselleştiriyoruz.</p>
                            </div>
                        </div>
                        <div className="journey-step">
                            <div className="journey-marker"></div>
                            <div className="journey-content">
                                <strong>Süreç Optimizasyonu (BPR)</strong>
                                <p>Daha hızlı, daha hatasız ve daha maliyet etkin süreçler tasarlayarak operasyonel verimliliği maksimize ediyoruz.</p>
                            </div>
                        </div>
                        <div className="journey-step">
                            <div className="journey-marker"></div>
                            <div className="journey-content">
                                <strong>TQM Entegrasyonu</strong>
                                <p>Müşteri odaklılığı, sürekli iyileşmeyi ve tüm çalışanların katılımını esas alan bir kalite kültürü oluşturuyoruz.</p>
                            </div>
                        </div>
                        <div className="journey-step">
                            <div className="journey-marker"></div>
                            <div className="journey-content">
                                <strong>Performans İzleme (KPI)</strong>
                                <p>Kilit performans göstergeleri belirleyerek süreçlerin etkinliğini sürekli izliyor ve proaktif mekanizmalar kuruyoruz.</p>
                            </div>
                        </div>
                        <div className="journey-step">
                            <div className="journey-marker"></div>
                            <div className="journey-content">
                                <strong>Risk Yönetimi ve Uyum</strong>
                                <p>Süreçlerinizdeki potansiyel riskleri belirliyor, yasal düzenlemelere ve standartlara tam uyum sağlıyoruz.</p>
                            </div>
                        </div>
                        <div className="journey-step">
                            <div className="journey-marker"></div>
                            <div className="journey-content">
                                <strong>Dijitalleşme ve Otomasyon</strong>
                                <p>Manuel ve tekrarlayan görevleri otomatikleştirerek insan kaynağınızı daha stratejik alanlara yönlendiriyoruz.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="section bg-white">
                <div className="container">
                    <h2 className="section-title">Outsight’ın Kalite Odaklı Yaklaşımı</h2>
                    <div className="approach-list">
                        <div className="approach-item">
                            <div className="approach-header">
                                <div className="num-badge">01</div>
                                <h3>Veri Temelli Kararlar</h3>
                            </div>
                            <div className="approach-content">
                                <p>Tüm süreç iyileştirme ve kalite adımlarımızı somut verilere dayandırıyoruz.</p>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-header">
                                <div className="num-badge">02</div>
                                <h3>Sürekli Öğrenme</h3>
                            </div>
                            <div className="approach-content">
                                <p>Pazarın ve teknolojinin sürekli değiştiğinin farkındayız; esnek ve öğrenen yapılar kuruyoruz.</p>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-header">
                                <div className="num-badge">03</div>
                                <h3>İnsan Odaklı</h3>
                            </div>
                            <div className="approach-content">
                                <p>Süreçlerin merkezine insanı koyarak, çalışanların katılımını ve motivasyonunu artırıyoruz.</p>
                            </div>
                        </div>
                    </div>
                    <div className="quote-box">
                        <p>“Kalite, bir ürünün veya hizmetin değil, onu üreten tüm sürecin sonucudur.”</p>
                    </div>
                </div>
            </section>

            {/* Who is it for Section */}
            <section className="section bg-white">
                <div className="container">
                    <h2 className="section-title">Kimler İçin İdeal Çözümler Sunuyoruz?</h2>
                    <ul className="service-bullet-list">
                        <li>Operasyonel maliyetlerini düşürmek isteyenler.</li>
                        <li>Hata oranlarını azaltarak müşteri memnuniyetini artırmayı hedefleyenler.</li>
                        <li>Uluslararası kalite standartlarına ulaşmak isteyen firmalar.</li>
                        <li>Dijital dönüşümle süreçlerini otomatikleştirmeyi amaçlayan işletmeler.</li>
                    </ul>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-white cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>İş süreçlerinizi mükemmelleştirelim.</h2>
                        <p>Verimlilik ve müşteri memnuniyetini bir arada sağlamak için ilk adımı atalım.</p>
                        <Link to="/contact" className="btn">İletişime Geçin</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default QualityManagement;
