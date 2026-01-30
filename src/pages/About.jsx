import React from 'react';
import './About.css';
import aboutImage from '../assets/about-meeting.png';
import aboutHeroBg from '../assets/about-hero-new.png';

import hakanMisirli from '../assets/hakan-misirli.png';
import muratTolgaEser from '../assets/murat-tolga-eser.png';
import kubilayOzvardar from '../assets/kubilay-ozvardar.png';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-page">
            <div className="page-header" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${aboutHeroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff' }}>
                <div className="container">
                    <span className="chapter-scent" style={{ color: '#fff' }}>Hikayemiz</span>
                    <h1 style={{ color: '#fff' }}>Geleceği, bugünden tasarlayan bir iş mimarisi ve strateji merkezi.</h1>
                    <div className="divider" style={{ backgroundColor: '#fff' }}></div>
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



            <section className="section section-grey">
                <div className="container">
                    <div className="section-header">
                        <h2>Liderlik Ekibi</h2>
                        <div className="divider"></div>
                    </div>
                    <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <div className="team-member">
                            <Link to="/about/people/hakan-misirli" className="team-member-link">
                                <div className="team-image-wrapper">
                                    <img src={hakanMisirli} alt="Hakan Mısırlı" />
                                </div>
                                <h3>Hakan Mısırlı</h3>
                                <p>CEO / Kurucu Ortak</p>
                            </Link>
                        </div>
                        <div className="team-member">
                            <Link to="/about/people/murat-tolga-eser" className="team-member-link">
                                <div className="team-image-wrapper">
                                    <img src={muratTolgaEser} alt="Murat Tolga Eser" />
                                </div>
                                <h3>Murat Tolga Eser</h3>
                                <p>Kıdemli Ortak</p>
                            </Link>
                        </div>
                        <div className="team-member">
                            <Link to="/about/people/kubilay-ozvardar" className="team-member-link">
                                <div className="team-image-wrapper">
                                    <img src={kubilayOzvardar} alt="Kubilay Özvardar" />
                                </div>
                                <h3>Kubilay Özvardar</h3>
                                <p>Kıdemli Ortak</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
