import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPeople } from '../data/peopleData';
import heroImage from '../assets/people-hero.png';
import './PeopleList.css';

const PeopleList = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Get people data
    const people = getAllPeople();

    // Debug check
    console.log('Hero Image path:', heroImage);
    people.forEach(p => console.log(`Image for ${p.name}:`, p.image));

    const handleImageError = (e, name) => {
        console.error(`Image failed to load for: ${name}`, e.target.src);
        // Fallback to a placeholder if it really breaks
        // e.target.src = 'https://via.placeholder.com/400x400?text=No+Photo';
    };

    return (
        <div className="people-list-page">
            <header className="people-hero">
                <div className="hero-bg-wrapper">
                    <img
                        src={heroImage}
                        alt=""
                        className="hero-bg-img"
                        onError={(e) => handleImageError(e, 'Hero Background')}
                    />
                    <div className="hero-overlay"></div>
                </div>
                <div className="container">
                    <div className="hero-content">
                        <span className="chapter-scent"></span>
                        <div className="hero-title-wrapper">
                            <h1 className="hero-title">Ekibimiz ve<br />lider kadromuz</h1>
                        </div>
                        <p className="hero-description">
                            Bizi biz yapan çalışanlarımızdır. Outsight ailesi kendine has doğallığı, içtenliği ve yenilikçi yaklaşımıyla fark yaratır. Bizi tanımaya vakit ayırdığınız için teşekkür ederiz.
                        </p>
                    </div>
                </div>
            </header>

            <div className="container people-intro-section">
                <h2 className="intro-title">Geleceği Veriyle, Başarıyı Uzmanlıkla Tasarlıyoruz</h2>
                <div className="intro-text">
                    <p>
                        Outsight olarak biz, her işletmeyi kendine özgü potansiyeli olan yaşayan bir organizma olarak görüyoruz. “Ekibimiz” sayfamızda gördüğünüz her bir profesyonel; finansal mühendislikten marka mimarisine, operasyonel verimlilikten dijital dönüşüme kadar farklı disiplinlerde derin uzmanlığa sahip stratejik çözüm ortaklarınızdır. Karmaşık iş sorunlarınıza rasyonel ve kalıcı çözümler üretmek için, ‘dışarıdan bir bakışın’ objektifliğini, işinizi kendi işi gibi gören bir sahiplenme duygusuyla birleştiriyoruz. Markanızın geleceğini, bu multidisipliner akıl gücüyle birlikte inşa ediyoruz.
                    </p>
                    <p>
                        En büyük sermayemiz, binalarımız değil; bu yapının içindeki kolektif akıl gücüdür. Burada, her biri kendi alanında uzmanlaşmış danışmanlarımızla, veriyi stratejiye, stratejiyi ise somut başarı hikayelerine dönüştürüyoruz.
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="people-grid-kearney">
                    {people.map(person => (
                        <div key={person.id} className="person-card-kearney">
                            <div className="card-content">
                                <div className="text-side">
                                    <Link to={`/about/people/${person.id}`} className="person-name-link">
                                        <h3>{person.name}</h3>
                                    </Link>
                                    <p className="person-title">{person.title}</p>
                                </div>
                                <div className="image-side">
                                    <Link to={`/about/people/${person.id}`}>
                                        <img
                                            src={person.image}
                                            alt={person.name}
                                            onError={(e) => handleImageError(e, person.name)}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PeopleList;
