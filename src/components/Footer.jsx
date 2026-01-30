import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logoFooter from '../assets/logo-footer.png';

const Footer = ({ onOpenPrivacyModal }) => {
    return (
        <footer className="footer-dark">
            <div className="container">

                {/* Main Navigation Links */}
                <div className="footer-nav-row">
                    <Link to="/blog">Öngörüler</Link>
                    <Link to="/media">Medya</Link>


                    <Link to="/careers">Kariyer</Link>

                    <Link to="/contact">İletişim</Link>
                </div>

                {/* Social Icons */}
                <div className="footer-social-row">
                    <a href="https://www.linkedin.com/company/outsightconsultancy/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="https://x.com/outsightturkiye" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                    </a>
                    <span aria-label="Facebook" style={{ cursor: 'default' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </span>
                    <a href="https://www.instagram.com/outsightdanismanlik/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="https://www.youtube.com/@OutsightDan%C4%B1%C5%9Fmanl%C4%B1kHizmetleri" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                    </a>
                </div>

                {/* Legal Links Row 1 */}
                <div className="footer-legal-row">
                    <Link to="/site-map">Site Haritası</Link>
                    <Link to="/privacy-policy">Gizlilik Politikası</Link>
                    <Link to="/legal-disclaimer">Yasal Uyarı</Link>
                    <Link to="/client-confidentiality">Müşteri Gizliliği</Link>
                    <Link to="/cookie-notice">Çerez Bildirimi</Link>
                </div>

                {/* Legal Links Row 2 */}
                <div className="footer-legal-row">
                    <Link to="/responsible-ai">Sorumlu Yapay Zeka Kullanımı</Link>
                    <button className="footer-link-btn" onClick={onOpenPrivacyModal}>
                        Kişisel Bilgilerimi Satma veya Paylaşma
                    </button>
                </div>

                {/* Branding Logo */}
                <div className="footer-bottom-brand">
                    <img src={logoFooter} alt="Outsight" className="footer-brand-logo" />
                </div>

            </div>
        </footer>
    );
};

export default Footer;
