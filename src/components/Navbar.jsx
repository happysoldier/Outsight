
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import SearchOverlay from './SearchOverlay';

import logo from '../assets/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mega menu on route change
    useEffect(() => {
        setMegaMenuOpen(false);
    }, [location]);

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''} `}>
                <div className="container navbar-container">
                    <Link to="/" className="logo-link">
                        <img src={logo} alt="Outsight" className="logo-img" />
                    </Link>

                    <div className="nav-menu">
                        <div
                            className={`nav-item-wrapper ${megaMenuOpen ? 'menu-open' : ''}`}
                            onMouseEnter={() => setMegaMenuOpen(true)}
                            onMouseLeave={() => setMegaMenuOpen(false)}
                        >
                            <Link to="/about" className="nav-item">Hakkımızda</Link>
                            <div className="mega-menu">
                                <div className="container">
                                    <div className="mega-menu-grid">
                                        <div className="mega-column">
                                            <span className="mega-header">Biz Kimiz</span>
                                            <ul className="mega-list">
                                                <li><Link to="/about/people">İnsanlarımız</Link></li>
                                                <li><Link to="/about">Hikayemiz</Link></li>
                                                <li><Link to="/about">Kültür ve Değerler</Link></li>
                                                <li><Link to="/about">Liderlik Ekibi</Link></li>
                                            </ul>
                                        </div>
                                        <div className="mega-column">
                                            <span className="mega-header">Neden Outsight</span>
                                            <ul className="mega-list">
                                                <li><Link to="/about">Stratejik Ortaklıklar</Link></li>
                                                <li><Link to="/about">Sürdürülebilirlik</Link></li>
                                            </ul>
                                        </div>
                                        <div className="mega-column">
                                            <span className="mega-header">Etki Ağları</span>
                                            <ul className="mega-list">
                                                <li><Link to="/blog">Outsight Öngörü</Link></li>
                                                <li><Link to="/services">Outsight İnovasyon</Link></li>
                                            </ul>
                                        </div>
                                        <div className="mega-column">
                                            <span className="mega-header">Daha Fazlası</span>
                                            <ul className="mega-list">
                                                <li><Link to="/about">Mezunlar</Link></li>
                                                <li><Link to="/contact">Ofisler</Link></li>
                                                <li><Link to="/about">Medya</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to="/services" className="nav-item">Hizmetler</Link>
                        <Link to="/blog" className="nav-item">Öngörüler</Link>
                        <Link to="/contact" className="nav-item">İletişim</Link>
                    </div>

                    <div className="nav-actions">
                        <button className="search-trigger" onClick={() => setIsSearchOpen(true)} aria-label="Search">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                    </div>
                </div>
            </nav>
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
};

export default Navbar;
