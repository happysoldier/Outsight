import React from 'react';
import { Link } from 'react-router-dom';
import './FinancialAdvisory.css';
import heroBg from '../assets/financial-advisory-hero.png';

const FinancialAdvisory = () => {
    return (
        <div className="financial-advisory-page">
            {/* Hero Section */}
            <section className="service-hero">
                <div className="service-hero-bg">
                    <img src={heroBg} alt="Finansal & Stratejik Danışmanlık" />
                </div>
                <div className="container service-hero-content">
                    <h1>Finansal & Stratejik Danışmanlık</h1>
                    <p className="hero-tagline">“Rakamların ötesini görün, geleceğinizi verilerle yönetin.”</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="intro-text">
                        <p className="lead-text">
                            İş dünyasında başarı, sadece iyi bir fikre sahip olmak değil, o fikri destekleyecek sağlam bir finansal yapı ve uzun vadeli bir strateji kurgulamaktır. Outsight olarak, finansal tablolarınızı sadece geçmişin bir raporu değil, geleceğin bir navigasyon aracı olarak görüyoruz. İşletmenizin finansal sağlığını korurken, sürdürülebilir büyüme ve yüksek karlılık hedeflerinize ulaşmanız için rasyonel yol haritaları sunuyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Section */}
            <section className="section bg-grey">
                <div className="container">
                    <h2 className="section-title">Neden Finansal ve Stratejik Danışmanlık?</h2>
                    <p className="subtitle">Karmaşık ekonomik konjonktürde doğru kararlar almak için “hissiyat” değil, “hesap” gerekir.</p>
                    <p className="description-text">
                        Finansal kaynakların yanlış yönetimi en parlak projeleri bile durdurabilir. Biz, sermayenizi optimize ediyor, risklerinizi yönetiyor ve stratejik hedeflerinizle finansal gerçekleriniz arasında kopmaz bir bağ kuruyoruz.
                    </p>
                </div>
            </section>

            {/* Service Components Section */}
            <section className="section bg-white">
                <div className="container">
                    <h2 className="section-title">Hizmet Kapsamımız</h2>
                    <div className="services-grid">
                        <div className="service-item">
                            <h3>Finansal Sağlık Analizi ve Check-up</h3>
                            <p>Mevcut finansal yapınızı, nakit akışınızı ve karlılık oranlarınızı derinlemesine inceleyerek iyileştirme alanlarını raporluyoruz.</p>
                        </div>
                        <div className="service-item">
                            <h3>Stratejik İş Planlama ve Bütçeleme</h3>
                            <p>Kısa, orta ve uzun vadeli hedeflerinizle uyumlu, gerçekçi bütçeler ve stratejik büyüme planları kurguluyoruz.</p>
                        </div>
                        <div className="service-item">
                            <h3>Maliyet Yönetimi ve Karlılık Analizi</h3>
                            <p>Gider kalemlerini optimize ederek verimliliği artırıyor, ürün ve hizmet bazlı karlılık analizleriyle stratejinizi güçlendiriyoruz.</p>
                        </div>
                        <div className="service-item">
                            <h3>Yatırım Danışmanlığı ve Sermaye Yönetimi</h3>
                            <p>Yeni yatırımların fizibilitesini yapıyor, sermaye yapınızı en verimli şekilde kullanmanız için rehberlik ediyoruz.</p>
                        </div>
                        <div className="service-item">
                            <h3>Risk Yönetimi ve Senaryo Analizleri</h3>
                            <p>Olası ekonomik dalgalanmalara ve sektörel risklere karşı “B Planı” senaryoları hazırlayarak işletmenizi güvenceye alıyoruz.</p>
                        </div>
                        <div className="service-item">
                            <h3>Birleşme, Satın Alma ve Çıkış Stratejileri</h3>
                            <p>Şirket değerleme ve stratejik ortaklık süreçlerinde profesyonel danışmanlık sunuyoruz.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="section bg-grey">
                <div className="container">
                    <h2 className="section-title">Outsight’ın Analitik Yaklaşımı</h2>
                    <div className="approach-grid">
                        <div className="approach-item">
                            <h3>Rasyonellik</h3>
                            <p>Kararlarımızı her zaman somut verilere ve matematiksel modellerine dayandırıyoruz.</p>
                        </div>
                        <div className="approach-item">
                            <h3>Bütünsel Bakış</h3>
                            <p>Finansı sadece bir departman olarak değil, pazarlamadan operasyona kadar tüm işin kalbi olarak konumlandırıyoruz.</p>
                        </div>
                        <div className="approach-item">
                            <h3>Rekabet Avantajı</h3>
                            <p>“Doğru stratejiyle yönetilen sermaye, en güçlü rekabet avantajıdır.”</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Audience Section */}
            <section className="section bg-white">
                <div className="container">
                    <h2 className="section-title">Kimler İçin Stratejik Destek Sağlıyoruz?</h2>
                    <ul className="service-bullet-list">
                        <li>Finansal yapısını modernize etmek ve profesyonelleştirmek isteyen aile şirketleri.</li>
                        <li>Hızlı büyüme aşamasında olup nakit akışını ve sermayesini yönetmekte zorlanan girişimler.</li>
                        <li>Yatırım yapmayı veya şirket evliliği gerçekleştirmeyi planlayan vizyoner işletmeler.</li>
                        <li>Global pazarlarda rekabet etmek için maliyet ve verimlilik optimizasyonu arayan markalar.</li>
                    </ul>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-white cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Finansal geleceğinizi birlikte tasarlayalım.</h2>
                        <p>Daha sağlıklı ve sürdürülebilir bir büyüme için Outsight uzmanlığıyla tanışın.</p>
                        <Link to="/contact" className="btn">İletişime Geçin</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FinancialAdvisory;
