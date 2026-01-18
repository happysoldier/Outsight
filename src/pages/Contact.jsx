import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Mesajınız için teşekkürler. En kısa sürede size dönüş yapacağız.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="contact-page">
            <div className="page-header">
                <div className="container">
                    <span className="chapter-scent">İletişim</span>
                    <h1>Önemli bir konuşma<br />başlatalım.</h1>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="contact-editorial-layout">
                        <div className="contact-text-side">
                            <h3>Bize Ulaşın</h3>
                            <p>
                                Organizasyonunuzu nasıl büyütebileceğimiz hakkında daha fazla bilgi almak ister misiniz?
                                Ekibimize doğrudan ulaşın.
                            </p>

                            <div className="info-block">
                                <h4>Adres</h4>
                                <p>Gürpınar Mahallesi, Şafak Sokak</p>
                                <p>Villa No: 8, Beylikdüzü / İstanbul</p>
                            </div>

                            <div className="info-block">
                                <h4>Bağlantı</h4>
                                <p>+90 533 582 02 16</p>
                                <p>bilgi@outsight.com.tr</p>
                            </div>
                        </div>

                        <div className="contact-form-side">
                            <form onSubmit={handleSubmit} className="form-editorial">
                                <div className="form-group-editorial">
                                    <label htmlFor="name">İsim Soyisim</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="form-group-editorial">
                                    <label htmlFor="email">E-posta Adresi</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="form-group-editorial">
                                    <label htmlFor="subject">Konu</label>
                                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                                </div>
                                <div className="form-group-editorial">
                                    <label htmlFor="message">Mesajınız</label>
                                    <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                                </div>
                                <button type="submit" className="btn">Gönder</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
