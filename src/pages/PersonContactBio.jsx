import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getPersonById } from '../data/peopleData';
import './PersonContactBio.css';

const PersonContactBio = () => {
    const { name } = useParams();
    const personData = getPersonById(name);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        jobTitle: '',
        location: '',
        message: '',
        interest: '',
        subscribe: false
    });

    if (!personData) {
        return <Navigate to="/about/people" replace />;
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Talebiniz alınmıştır. En kısa sürede size dönüş yapılacaktır.');
        // Logic to send form data would go here
    };

    const locations = [
        "İstanbul",
        "Chicago",
        "Londra",
        "Dubai",
        "Berlin",
        "Paris"
    ];

    const interests = [
        "Havacılık ve Savunma",
        "Otomotiv",
        "Tüketici ve Perakende",
        "Dijital ve Analitik",
        "Enerji ve Kaynaklar",
        "Finansal Hizmetler",
        "Küresel İş Politikası Konseyi (GBPC)",
        "Sağlık ve Yaşam Bilimleri",
        "Endüstriyel Ürünler ve Hizmetler",
        "Altyapı",
        "Medya",
        "Birleşme ve Satın Almalar",
        "Operasyon ve Performans",
        "Organizasyon",
        "Özel Sermaye",
        "Tedarik",
        "Ürün Mükemmeliyeti ve Yenileme Laboratuvarı (PERLab)",
        "Kamu Sektörü",
        "Strateji ve Büyüme",
        "Sürdürülebilirlik",
        "Teknoloji",
        "Telekomünikasyon",
        "Dönüşüm",
        "Ulaşım ve Seyahat"
    ];

    return (
        <div className="person-contact-bio-page">
            <div className="container">
                <header className="contact-bio-header">
                    <h1>{personData.name} ile İletişime Geçin</h1>
                    <p className="required-note">Gerekli alanlar yıldız işareti (*) ile belirtilmiştir</p>
                </header>

                <form onSubmit={handleSubmit} className="kearney-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName">Ad *</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Soyad *</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">İş E-postası *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="company">Şirket Adı *</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="jobTitle">Unvan</label>
                        <input
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="location">Konum *</label>
                        <div className="select-wrapper">
                            <select
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Bir seçenek belirleyin</option>
                                {locations.map(loc => (
                                    <option key={loc} value={loc}>{loc}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Mesajınız *</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="interest">İletişime geçmek istediğim konu</label>
                        <div className="select-wrapper">
                            <select
                                id="interest"
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                            >
                                <option value="">Bir seçenek belirleyin</option>
                                {interests.map(item => (
                                    <option key={item} value={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="form-checkbox">
                        <input
                            type="checkbox"
                            id="subscribe"
                            name="subscribe"
                            checked={formData.subscribe}
                            onChange={handleChange}
                        />
                        <label htmlFor="subscribe">
                            Outsight'ın etkinlikler, anketler ve haberler içeren bültenlerini de almak istiyorum
                        </label>
                    </div>

                    <div className="form-footer-note">
                        <p>
                            Bu formdaki bilgileri göndererek Outsight'ın kullanım şartlarını kabul etmiş ve sağladığınız bilgilerin Outsight tarafından ürün ve hizmetlerimiz hakkında sizinle iletişime geçmek için kullanılabileceğini onaylamış olursunuz. Bu iletişimlerden istediğiniz zaman ayrılabilirsiniz. Abonelikten nasıl çıkacağınızın yanı sıra gizlilik uygulamalarımız ve gizliliğinizi koruma taahhüdümüz hakkında bilgi için lütfen <Link to="/privacy-policy">gizlilik politikamızı</Link> inceleyin.
                        </p>
                    </div>

                    <button type="submit" className="submit-btn">GÖNDER</button>
                </form>
            </div>
        </div>
    );
};

export default PersonContactBio;
