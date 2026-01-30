import React, { useEffect } from 'react';
import './Sustainability.css';
import sustainabilityHeroBg from '../assets/sustainability_hero_bg.png';

const Sustainability = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="sustainability-page">
            {/* Hero Section */}
            <div className="sustainability-hero" style={{ backgroundImage: `url(${sustainabilityHeroBg})` }}>
                <div className="container">
                    <h1>Sürdürülebilirlik ve Sosyal Etki</h1>
                </div>
            </div>

            {/* Content Section */}
            <section className="sustainability-content">
                <div className="container">
                    <p className="sustainability-intro">
                        Outsight olarak, iş başarısının sadece finansal sonuçlarla değil, aynı zamanda toplum ve çevre üzerinde yarattığımız pozitif etkiyle de ölçüldüğüne inanıyoruz. Geleceği şekillendirirken sorumluluklarımızın farkındayız.
                    </p>

                    <div className="pillars-grid">
                        <div className="pillar-card">
                            <h3>Çevresel Sorumluluk</h3>
                            <p>
                                Karbon ayak izimizi azaltmak ve operasyonlarımızı çevre dostu standartlara uygun hale getirmek için sürekli çalışıyoruz. Dijitalleşme ile kağıt tüketimini en aza indiriyor ve enerji verimliliğini ön planda tutuyoruz.
                            </p>
                        </div>
                        <div className="pillar-card">
                            <h3>Sosyal Etki</h3>
                            <p>
                                Toplumsal gelişime katkıda bulunmak için eğitim ve girişimcilik projelerini destekliyoruz. Çalışanlarımızın gönüllü faaliyetlerini teşvik ediyor ve kapsayıcı bir çalışma kültürü oluşturuyoruz.
                            </p>
                        </div>
                        <div className="pillar-card">
                            <h3>Yönetişim ve Etik</h3>
                            <p>
                                Şeffaflık, dürüstlük ve hesap verebilirlik ilkeleri doğrultusunda hareket ediyoruz. İş süreçlerimizde en yüksek etik standartları uyguluyor ve paydaşlarımızla güvene dayalı ilişkiler kuruyoruz.
                            </p>
                        </div>
                    </div>

                    <div className="sustainability-commitment">
                        <h2>Taahhüdümüz</h2>
                        <p>
                            Daha yaşanabilir bir dünya ve sürdürülebilir bir gelecek için kaynaklarımızı en verimli şekilde kullanmaya ve inovatif çözümler üretmeye kararlıyız. Birlikte, değişimin öncüsü olabiliriz.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sustainability;
