import React from 'react';
import './Values.css';

const Values = () => {
    return (
        <div className="values-page">
            <div className="values-hero-section">
                <div className="container">
                    <div className="values-hero-header">
                        <span className="chapter-scent">Kültür ve Değerler</span>
                        <h1>Değerlerimiz</h1>
                        <div className="divider"></div>
                        <p>
                            Sürdürülebilirlik, çeşitlilik ve toplumsal katılıma olan bağlılığımız, hem yerel hem de küresel ölçekte
                            olumlu bir etki yaratma taahhüdümüzü yansıtmaktadır.
                        </p>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="values-grid-editorial">
                        <div className="value-item-editorial">
                            <span className="value-num">01.</span>
                            <h3>Mükemmellik</h3>
                            <p>Tüm hizmetlerimizde en yüksek kaliteyi ve sürekli iyileştirmeyi hedefliyoruz.</p>
                        </div>
                        <div className="value-item-editorial">
                            <span className="value-num">02.</span>
                            <h3>İnovasyon</h3>
                            <p>Yeni teknolojileri benimseyerek müşterilerimizin her zaman bir adım önde olmasını sağlıyoruz.</p>
                        </div>
                        <div className="value-item-editorial">
                            <span className="value-num">03.</span>
                            <h3>Bütünlük</h3>
                            <p>İşlerimizi dürüstlük ve şeffaflıkla yürütüyor, güvene dayalı ilişkiler kuruyoruz.</p>
                        </div>
                        <div className="value-item-editorial">
                            <span className="value-num">04.</span>
                            <h3>İşbirliği</h3>
                            <p>Ekip içi ve müşteriyle olan güçlü iş birliğinin en iyi sonuçları getirdiğine inanıyoruz.</p>
                        </div>
                        <div className="value-item-editorial">
                            <span className="value-num">05.</span>
                            <h3>Hesap Verebilirlik</h3>
                            <p>Sonuçlarımızdan sorumluluk alıyor, taahhütlerimizi yerine getiriyoruz.</p>
                        </div>
                        <div className="value-item-editorial">
                            <span className="value-num">06.</span>
                            <h3>Sürdürülebilirlik</h3>
                            <p>Sosyal sorumluluğu destekleyen stratejiler geliştirmeye kendimizi adadık.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Values;
