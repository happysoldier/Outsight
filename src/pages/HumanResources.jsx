import React from 'react';
import { Link } from 'react-router-dom';
import './HumanResources.css';
import heroBg from '../assets/human-resources-hero.png';

const HumanResources = () => {
    return (
        <div className="human-resources-page">
            {/* Hero Section */}
            <section className="service-hero">
                <div className="service-hero-bg">
                    <img src={heroBg} alt="İnsan Kaynakları & Organizasyon" />
                </div>
                <div className="container service-hero-content">
                    <h1>İnsan Kaynakları & Organizasyon</h1>
                    <p className="hero-tagline">“En büyük sermayeniz binanız değil, o binanın içindeki akıl gücüdür.”</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="intro-text">
                        <p className="lead-text">
                            Harika stratejiler ve kusursuz iş planları, ancak doğru insanlar tarafından doğru bir organizasyon yapısı içinde icra edildiğinde başarıya ulaşır. Outsight olarak, insan kaynaklarını sadece bir idari birim değil, işin büyüme motoru olarak konumlandırıyoruz. Şirketinizin hedeflerine hizmet eden, yeteneği çeken, geliştiren ve aidiyeti yüksek tutan modern organizasyonel yapılar inşa ediyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Strategic Structure Section */}
            <section className="section bg-light">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-12 mb-50">
                            <h2 className="section-title">Neden Stratejik Organizasyonel Yapı?</h2>
                            <p className="section-subtitle">
                                Hiyerarşinin hantallaştığı, rollerin belirsizleştiği ve yeteneklerin potansiyelini sergileyemediği yapılar, ne kadar büyük olurlarsa olsunlar verimlilik kaybına mahkumdur. Biz, markanızın çevikliğini artıracak, iletişim kanallarını şeffaflaştıracak ve her çalışanın “doğru yerde, doğru işi” yapmasını sağlayacak bütünsel bir mimari kurguluyoruz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="section bg-white">
                <div className="container">
                    <h2 className="section-title mb-60">Organizasyonel Dönüşüm Çözümlerimiz</h2>
                    <div className="service-grid">
                        <div className="service-card">
                            <div className="service-card-number">01</div>
                            <h3 className="service-card-title">Stratejik Yetenek Yönetimi ve Seçme-Yerleştirme</h3>
                            <p className="service-card-text">
                                Marka kültürünüze en uygun yetenekleri keşfetmek, onları sisteme dahil etmek ve yüksek potansiyelli çalışanları elde tutmak için sistemler kuruyoruz.
                            </p>
                        </div>
                        <div className="service-card">
                            <div className="service-card-number">02</div>
                            <h3 className="service-card-title">Performans ve Ödüllendirme Sistemleri</h3>
                            <p className="service-card-text">
                                Çalışan motivasyonunu artıracak, adil, şeffaf ve başarıyı ödüllendiren performans değerlendirme metodolojileri geliştiriyoruz.
                            </p>
                        </div>
                        <div className="service-card">
                            <div className="service-card-number">03</div>
                            <h3 className="service-card-title">Kurum Kültürü ve Değişim Yönetimi</h3>
                            <p className="service-card-text">
                                Şirket birleşmeleri, büyüme sancıları veya dijital dönüşüm süreçlerinde çalışanların adaptasyonunu sağlayan kültür değişim stratejileri uyguluyoruz.
                            </p>
                        </div>
                        <div className="service-card">
                            <div className="service-card-number">04</div>
                            <h3 className="service-card-title">Eğitim ve Liderlik Gelişimi</h3>
                            <p className="service-card-text">
                                Geleceğin yöneticilerini hazırlamak ve ekiplerin teknik/sosyal becerilerini artırmak için sürekli gelişim programları tasarlıyoruz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Block */}
            <section className="section bg-dark text-white">
                <div className="container">
                    <blockquote className="large-quote">
                        “Doğru insanlarla yanlış bir yapı kurabilirsiniz, ancak yanlış insanlarla doğru bir yapı kuramazsınız.”
                    </blockquote>
                </div>
            </section>

            {/* Principles Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="section-title">Outsight’ın İnsan Odaklı Yaklaşımı</h2>
                            <p className="section-description mb-40">Biz organizasyonu bir makine olarak değil, yaşayan bir organizma olarak görüyoruz:</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="principle-list">
                                <div className="principle-item">
                                    <span className="principle-num">1</span>
                                    <div>
                                        <h4>Aidiyet Odaklılık</h4>
                                        <p>Çalışanların markanın vizyonuna ortak olduğu, “biz” duygusunun hakim olduğu yapılar kurguluyoruz.</p>
                                    </div>
                                </div>
                                <div className="principle-item">
                                    <span className="principle-num">2</span>
                                    <div>
                                        <h4>Verimlilik ve Mutluluk Dengesi</h4>
                                        <p>İş süreçlerinin hızı kadar, çalışanların esenliğini (well-being) de gözeterek sürdürülebilir bir performans hedefliyoruz.</p>
                                    </div>
                                </div>
                                <div className="principle-item">
                                    <span className="principle-num">3</span>
                                    <div>
                                        <h4>Geleceğe Hazırlık</h4>
                                        <p>Hibrit çalışma modelleri, dijital İK araçları ve yeni nesil yetenek beklentilerine uyumlu modern yapılar inşa ediyoruz.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Need Recognition Section */}
            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title mb-60">Hangi Durumlarda Bize İhtiyaç Duyarsınız?</h2>
                    <ul className="needs-list">
                        <li>Hızlı büyüme sonrası ekipler arası koordinasyon bozulduğunda.</li>
                        <li>Nitelikli çalışan kaybı (turnover) arttığında ve yetenekleri çekmekte zorlandığınızda.</li>
                        <li>Kurum içi iletişimde aksamalar ve yetki karmaşaları yaşandığında.</li>
                        <li>Mevcut organizasyon yapısı, yeni stratejik hedeflerinize dar gelmeye başladığında.</li>
                    </ul>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-white cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Şirketinizin en değerli varlığını, en güçlü rekabet avantajına dönüştürelim.</h2>
                        <p>Verimli, mutlu ve hedef odaklı bir organizasyon kurmak için bizimle iletişime geçin.</p>
                        <Link to="/contact" className="btn">İletişime Geçin</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HumanResources;
