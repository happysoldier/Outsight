import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        reason: '',
        name: '',
        email: '',
        company: '',
        jobTitle: '',
        subject: '',
        message: '',
        subscribe: false
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Mesajınız için teşekkürler. En kısa sürede size dönüş yapacağız.');
        setFormData({ reason: '', name: '', email: '', company: '', jobTitle: '', subject: '', message: '' });
    };

    return (
        <div className="contact-page">
            <div className="contact-hero">
                <div className="container">
                    <h1>İletişim</h1>
                    <p className="required-note">Doldurulması zorunlu alanlar (*)</p>
                </div>
            </div>

            <section className="section" style={{ paddingTop: '1rem' }}>
                <div className="container">
                    <div className="contact-layout">
                        {/* Left Main Column: Form */}
                        <div className="contact-main">

                            <form onSubmit={handleSubmit} className="form-minimal">
                                {/* Reason for Contacting Radio Buttons */}
                                <div className="form-group-reason">
                                    <label className="reason-label">Outsight ile iletişime geçme nedeniniz *</label>
                                    <div className="radio-group">
                                        <label className="radio-option">
                                            <input
                                                type="radio"
                                                name="reason"
                                                value="Danışmanlık Hizmetleri"
                                                checked={formData.reason === 'Danışmanlık Hizmetleri'}
                                                onChange={handleChange}
                                                required
                                            />
                                            <span className="radio-text">Danışmanlık Hizmetleri</span>
                                        </label>
                                        <label className="radio-option">
                                            <input
                                                type="radio"
                                                name="reason"
                                                value="Basın / Medya"
                                                checked={formData.reason === 'Basın / Medya'}
                                                onChange={handleChange}
                                            />
                                            <span className="radio-text">Basın / Medya</span>
                                        </label>
                                        <label className="radio-option">
                                            <input
                                                type="radio"
                                                name="reason"
                                                value="Kariyer"
                                                checked={formData.reason === 'Kariyer'}
                                                onChange={handleChange}
                                            />
                                            <span className="radio-text">Kariyer</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="form-group-minimal">
                                    <label htmlFor="name">Ad Soyad *</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="form-group-minimal">
                                    <label htmlFor="email">E-posta Adresi *</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="form-group-minimal">
                                    <label htmlFor="company">Şirket Adı *</label>
                                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required />
                                </div>
                                <div className="form-group-minimal">
                                    <label htmlFor="jobTitle">Unvan</label>
                                    <input type="text" id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
                                </div>
                                <div className="form-group-minimal">
                                    <label htmlFor="subject">Konu *</label>
                                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                                </div>
                                <div className="form-group-minimal">
                                    <label htmlFor="message">Mesajınız *</label>
                                    <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
                                </div>

                                <div className="form-group-checkbox">
                                    <label className="checkbox-container">
                                        <input
                                            type="checkbox"
                                            name="subscribe"
                                            checked={formData.subscribe}
                                            onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
                                        />
                                        <span className="checkmark"></span>
                                        <span className="checkbox-text">Etkinlikler, anketler ve haberleri içeren Outsight bültenlerini almak istiyorum.</span>
                                    </label>
                                </div>

                                <p className="form-disclaimer">
                                    Bu formu göndererek, Outsight'ın kullanım koşullarını kabul etmiş olursunuz ve Outsight'ın ürün ve hizmetlerimiz hakkında sizinle iletişime geçmek için sağladığınız bilgileri kullanabileceğini onaylamış olursunuz. Bu iletişimlerden istediğiniz zaman aboneliğinizi iptal edebilirsiniz. Aboneliğinizi nasıl iptal edeceğiniz, gizlilik uygulamalarımız ve gizliliğinizi koruma taahhüdümüz hakkında bilgi için lütfen <a href="/privacy-policy">gizlilik politikamızı</a> inceleyin.
                                </p>

                                <button type="submit" className="contact-btn">GÖNDER</button>
                            </form>
                        </div>

                        <div className="contact-sidebar">
                            <h3 className="sidebar-title">Outsight’ta kariyer yapmaya ne dersiniz?</h3>
                            <a href="/careers" className="sidebar-btn">Kariyer sayfamızı ziyaret edin</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
