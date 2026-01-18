import React from 'react';
import './About.css';
import aboutImage from '../assets/about-meeting.png';

const About = () => {
    return (
        <div className="about-page">
            <div className="page-header">
                <div className="container">
                    <span className="chapter-scent">Hakkımızda</span>
                    <h1>Geleceği, bugünden tasarlayan bir iş mimarisi ve strateji merkezi.</h1>
                    <div className="divider"></div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="split-content">
                        <div className="content-text">
                            <h3>Biz Kimiz?</h3>
                            <p>
                                Outsight, iş dünyasının hızla değişen dinamikleri karşısında markaların sadece hayatta kalmasını değil,
                                fark yaratarak büyümesini sağlamak amacıyla kurulmuş bir <strong>"İş Mimarisi ve Strateji Merkezidir"</strong>.
                                Bizim için her işletme, kendine özgü bir potansiyele sahip yaşayan bir organizmadır.
                            </p>
                            <p>
                                Kurulduğumuz günden bu yana, <strong>"dışarıdan bir bakışın" (Outsight)</strong> sağladığı objektifliği,
                                "içeriden bir sahiplenme" ile birleştiriyoruz. Marka kurulumundan finansal yapılandırmaya,
                                dijital performanstan organizasyonel dönüşüme kadar geniş bir yelpazede sunduğumuz hizmetlerle,
                                işletmelerin karmaşık sorunlarına rasyonel ve kalıcı çözümler üretiyoruz.
                            </p>
                            <p>
                                Biz sadece tavsiye veren bir danışmanlık firması değil, markanızın geleceğini inşa eden stratejik çözüm ortağınızız.
                            </p>
                        </div>
                        <div className="content-image">
                            <img src={aboutImage} alt="Outsight Ofis" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-grey">
                <div className="container">
                    <div className="section-header">
                        <h2>Vizyon & Misyon</h2>
                        <div className="divider"></div>
                    </div>
                    <div className="split-content">
                        <div className="content-text">
                            <h3>Vizyonumuz</h3>
                            <p>
                                Global iş ekosisteminde, stratejik dönüşümün ve sürdürülebilir büyümenin referans noktası olmak.
                                Markaların potansiyellerini keşfettikleri ve bu potansiyeli veriyle, akılla ve estetikle
                                gerçeğe dönüştürdükleri bir dünya kurgulamak.
                            </p>
                            <ul>
                                <li>Sektör trendlerinin önünde kalmak ve sürekli yenilik yapmak.</li>
                                <li>En yüksek dürüstlük standartlarını korumak, şeffaflık ve güven sağlamak.</li>
                            </ul>
                        </div>
                        <div className="content-text">
                            <h3>Misyonumuz</h3>
                            <p>
                                İş ortaklarımıza; veriye dayalı stratejiler, yenilikçi iş modelleri ve insan odaklı organizasyonel yapılar sunarak,
                                onların pazar lideri markalara dönüşme yolculuğuna rehberlik etmek.
                            </p>
                            <p>
                                <strong>"Mükemmellik"</strong> ve <strong>"ölçeklenebilirlik"</strong> ilkelerinden ödün vermeden, her aşamada değer yaratmak.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Değerlerimiz</h2>
                        <div className="divider"></div>
                        <p style={{ maxWidth: '800px', fontSize: '1.25rem', color: 'var(--color-text-secondary)' }}>
                            Sürdürülebilirlik, çeşitlilik ve toplumsal katılıma olan bağlılığımız, hem yerel hem de küresel ölçekte
                            olumlu bir etki yaratma taahhüdümüzü yansıtmaktadır.
                        </p>
                    </div>
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

            <section className="section section-grey">
                <div className="container">
                    <div className="section-header">
                        <h2>Liderlik Ekibi</h2>
                        <div className="divider"></div>
                    </div>
                    <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
                        <div className="team-member">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Hakan Mısırlı</h3>
                            <p style={{ color: 'var(--color-text-secondary)' }}>CEO / Kurucu Ortak</p>
                        </div>
                        <div className="team-member">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Murat Tolga Eser</h3>
                            <p style={{ color: 'var(--color-text-secondary)' }}>Kıdemli Ortak</p>
                        </div>
                        <div className="team-member">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Kubilay Özvardar</h3>
                            <p style={{ color: 'var(--color-text-secondary)' }}>Kıdemli Ortak</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
