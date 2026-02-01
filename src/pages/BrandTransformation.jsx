import React from 'react';
import { Link } from 'react-router-dom';
import './BrandTransformation.css';
import heroBg from '../assets/brand-transformation-hero.png';

const BrandTransformation = () => {
    return (
        <div className="brand-transformation-page">
            {/* Hero Section */}
            <section className="service-hero">
                <div className="service-hero-bg">
                    <img src={heroBg} alt="Mevcut Markaların Dönüşümü" />
                </div>
                <div className="container service-hero-content">
                    <h1>Mevcut Markaların Dönüşümü</h1>
                    <p className="hero-tagline">“Geçmişin gücüyle, geleceğin dünyasına uyum sağlayın.”</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="intro-text">
                        <p className="lead-text">
                            Zamanın ruhu değişiyor, tüketici alışkanlıkları evriliyor ve teknoloji oyunun kurallarını yeniden yazıyor. Köklü bir geçmişe sahip olmak büyük bir değerdir; ancak bu değeri korumak, markanın güncelliğini yitirmemesiyle mümkündür. Outsight olarak, mevcut markanızı “bugünün” gerçeklerine göre değil, “yarının” beklentilerine göre dönüştürüyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Transformation Section */}
            <section className="section bg-grey">
                <div className="container">
                    <h2 className="section-title">Neden Dönüşüm (Transformation)?</h2>
                    <p className="subtitle">Başarının getirdiği durağanlık bir marka için tehlikelidir. Pazardaki konumu korumak ve yeni nesil tüketicilere hitap edebilmek için köklü bir dönüşüm gerekebilir.</p>
                    <p className="description-text">
                        Biz bu süreci bir “risk” değil, markanın ömrünü uzatan bir “stratejik yatırım” olarak görüyoruz. Değişimi kontrol altına alıyor ve markanızın mirasını modern dünya ile harmanlıyoruz.
                    </p>
                </div>
            </section>

            {/* Service Scope Section */}
            <section className="section bg-white">
                <div className="container">
                    <h2 className="section-title">Dönüşüm Yolculuğumuzda Neler Var?</h2>
                    <ul className="service-bullet-list">
                        <li>
                            <strong>Stratejik Yeniden Konumlandırma:</strong>
                            Markanızın temel DNA'sını koruyarak, onu modern pazarın ihtiyaçlarına göre yeniden konumlandırıyoruz.
                        </li>
                        <li>
                            <strong>Görsel Kimlik ve Mimari Güncelleme:</strong>
                            Markanızın görsel dünyasını estetik ve işlevsel açıdan modernize ediyor, hiyerarşiyi (Brand Architecture) netleştiriyoruz.
                        </li>
                        <li>
                            <strong>Deneyim Tasarımı:</strong>
                            Müşterilerinizin markanızla temas ettiği her noktadaki deneyimi, güncel kullanıcı beklentilerine göre yeniden tasarlıyoruz.
                        </li>
                    </ul>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="section bg-grey">
                <div className="container">
                    <h2 className="section-title">Outsight’ın Dönüşüm Metodolojisi</h2>
                    <div className="approach-list">
                        <div className="approach-item">
                            <div className="approach-header">
                                <div className="num-badge">01</div>
                                <h3>Mirasın Korunması</h3>
                            </div>
                            <div className="approach-content">
                                <p>Temel değerleri ve sadık kitleyi kaybetmeden değişim yönetimi sağlıyoruz.</p>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-header">
                                <div className="num-badge">02</div>
                                <h3>Veri ile Doğrulama</h3>
                            </div>
                            <div className="approach-content">
                                <p>Pazar araştırmaları ve tüketici içgörüleriyle her adımı temellendiriyoruz.</p>
                            </div>
                        </div>
                        <div className="approach-item">
                            <div className="approach-header">
                                <div className="num-badge">03</div>
                                <h3>Sürdürülebilirlik</h3>
                            </div>
                            <div className="approach-content">
                                <p>Anlık trendler yerine zamansız ve uzun ömürlü marka yapıları kuruyoruz.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Signs of Transformation Section */}
            <section className="section bg-white">
                <div className="container">
                    <h2 className="section-title">Dönüşümün İşaretleri</h2>
                    <p className="subtitle">Eğer aşağıdaki durumları gözlemliyorsanız, markanız için dönüşüm vakti gelmiş olabilir:</p>
                    <ul className="service-bullet-list">
                        <li>Hedef kitlenizin yaşlanması ve yeni nesle ulaşmada zorluk.</li>
                        <li>Yeni rakipler karşısında pazar payı kaybı ve kan kaybı.</li>
                        <li>Marka algısının güncel ürün kalitesinin gerisinde kalması.</li>
                    </ul>
                </div>
            </section>

            {/* CTA Section */}
            {/* CTA Section */}
            {/* CTA Section */}
            <section className="section bg-white cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Markanızın geleceğini birlikte inşa edelim.</h2>
                        <p>Köklü markanızı yarına taşımak için Outsight uzmanlığıyla tanışın.</p>
                        <Link to="/contact" className="btn">İletişime Geçin</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BrandTransformation;
