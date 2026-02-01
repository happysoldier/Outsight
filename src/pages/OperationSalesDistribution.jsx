import React from 'react';
import { Link } from 'react-router-dom';
import './OperationSalesDistribution.css';

const OperationSalesDistribution = () => {
    return (
        <div className="operation-sales-page">
            {/* Hero Section */}
            <section className="service-hero">
                <div className="service-hero-bg">
                    <img
                        src="https://outsight.com.tr/wp-content/uploads/2026/01/Gemini_Generated_Image_dnjoktdnjoktdnjo-scaled.png"
                        alt="Operasyon, Satış & Dağıtım Yapıları"
                    />
                </div>
                <div className="container service-hero-content">
                    <h1>Operasyon, Satış &<br />Dağıtım Yapıları</h1>
                    <p className="hero-tagline">“Strateji kağıt üzerinde başlar, sahada kazanılır.”</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="intro-grid">
                        <div className="intro-text">
                            <h2 className="section-title">Verimlilik Odaklı Operasyonel Tasarım</h2>
                            <p className="lead-text">
                                Bir yapının hızı, en yavaş halkası kadardır. Biz, işletmenizin tüm süreçlerini uçtan uca inceleyerek tıkanıklıkları gideriyor ve her birim için maksimum verimlilik sağlayan operasyonel modeller tasarlıyoruz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Scope */}
            <section className="section bg-white">
                <div className="container">
                    <h2 className="section-title">Hizmet Alanlarımız</h2>
                    <p className="subtitle">Sahadaki gücünüzü ve operasyonel kapasitenizi artırmak için sunduğumuz çözümler:</p>

                    <div className="scope-list">
                        <div className="scope-item">
                            <span className="scope-number">01</span>
                            <strong className="scope-title">Satış Gücü ve Organizasyon Kurulumu</strong>
                            <p>Doğru prim sistemleri, bölge yönetimi ve hedef kitle odaklı satış ekiplerinin kurgulanması.</p>
                        </div>
                        <div className="scope-item">
                            <span className="scope-number">02</span>
                            <strong className="scope-title">Kanallara Göre Dağıtım Stratejileri</strong>
                            <p>Geleneksel kanallardan modern perakendeye, e-ticaretten doğrudan satışa kadar her kanal için özelleştirilmiş dağıtım modelleri.</p>
                        </div>
                        <div className="scope-item">
                            <span className="scope-number">03</span>
                            <strong className="scope-title">Tedarik Zinciri ve Lojistik Optimizasyonu</strong>
                            <p>Hammaddeden son kullanıcıya kadar olan akışın maliyet etkin ve hızlı bir şekilde yönetilmesi.</p>
                        </div>
                        <div className="scope-item">
                            <span className="scope-number">04</span>
                            <strong className="scope-title">Saha Denetim ve Performans Sistemleri</strong>
                            <p>Satış ve dağıtım ekiplerinin sahadaki etkinliğini ölçen, gerçek zamanlı veri sağlayan raporlama altyapılarının kurulması.</p>
                        </div>
                        <div className="scope-item">
                            <span className="scope-number">05</span>
                            <strong className="scope-title">Satış Sonrası Operasyonel Destek</strong>
                            <p>Müşteri memnuniyetini sadakata dönüştüren servis ve destek ağlarının yapılandırılması.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Needed / Outsight Difference */}
            <section className="section bg-white differences-section">
                <div className="container">
                    <h2 className="section-title">Neden Outsight’ın Operasyonel Yaklaşımı?</h2>
                    <p className="mb-4">Biz sadece teorik modeller kurmuyoruz; sahanın gerçeklerini biliyoruz:</p>
                    <div className="approach-list">
                        <div className="approach-item">
                            <div className="approach-header">
                                <div className="num-badge">01</div>
                                <h3>Maliyet Liderliği</h3>
                            </div>
                            <div className="approach-content">
                                <p>Operasyonel süreçlerdeki gizli maliyetleri tespit ediyor ve karlılığı artıran tasarruf noktaları yaratıyoruz.</p>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-header">
                                <div className="num-badge">02</div>
                                <h3>Ölçeklenebilirlik</h3>
                            </div>
                            <div className="approach-content">
                                <p>Küçük bir bölgeden tüm ülkeye (veya dünyaya) hızla yayılabilen esnek yapılar kuruyoruz.</p>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-header">
                                <div className="num-badge">03</div>
                                <h3>Teknoloji Entegrasyonu</h3>
                            </div>
                            <div className="approach-content">
                                <p>Manuel süreçleri dijitalleştirerek insan hatasını minimize ediyor, karar verme süreçlerini hızlandırıyoruz.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Audience */}
            <section className="section bg-white">
                <div className="container">
                    <h2 className="section-title">Kimler İçin Çözüm Üretiyoruz?</h2>
                    <div className="scope-list">
                        <div className="scope-item">
                            <span className="scope-number">01</span>
                            <strong className="scope-title">Yeni Pazarlara Giren Markalar</strong>
                            <p>Sahada hızlıca yapılanmak ve dağıtım ağını sıfırdan kurmak isteyenler.</p>
                        </div>
                        <div className="scope-item">
                            <span className="scope-number">02</span>
                            <strong className="scope-title">Karmaşık Bayi Ağını Yönetenler</strong>
                            <p>Mevcut bayi veya distribütör yapısını daha verimli ve şeffaf hale getirmek isteyenler.</p>
                        </div>
                        <div className="scope-item">
                            <span className="scope-number">03</span>
                            <strong className="scope-title">E-Ticaret ve Omnichannel Dönüşümü Yapanlar</strong>
                            <p>Lojistik ve operasyon süreçlerini dijital dünya ile entegre etmek isteyen perakendeciler.</p>
                        </div>
                    </div>
                    <blockquote className="large-quote">
                        “Kusursuz bir operasyon, en güçlü pazarlama silahıdır.”
                    </blockquote>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-white cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Saha gücünüzü ve operasyonel kapasitenizi optimize edelim.</h2>
                        <p>Markanızın her noktada kusursuz bir şekilde var olması için gereken yapıyı birlikte kuralım.</p>
                        <Link to="/contact" className="btn">İletişime Geçin</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OperationSalesDistribution;
