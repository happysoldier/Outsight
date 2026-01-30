import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PrivacyModal.css';

const PrivacyModal = ({ isOpen, onClose }) => {
    // Initialize state from localStorage (default to false if not set)
    const [optOut, setOptOut] = useState(() => {
        const savedPreference = localStorage.getItem('privacy_opt_out');
        return savedPreference === 'true';
    });

    if (!isOpen) return null;

    const handleSave = () => {
        // Save preference to localStorage
        localStorage.setItem('privacy_opt_out', optOut);
        console.log("User privacy preference saved. Opt-out:", optOut);
        onClose();
    };

    return (
        <div className={`privacy-modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className="privacy-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="privacy-modal-header">
                    <div className="privacy-modal-title">
                        Gizlilik Seçenekleriniz
                        <svg className="privacy-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#3B82F6" fillOpacity="0.1" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9 12L11 14L15 10" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <button className="privacy-close-btn" onClick={onClose} aria-label="Kapat">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>

                <div className="privacy-modal-body">
                    <div className="privacy-info-box">
                        Belirli çevrimiçi reklamcılık ortaklarının, size daha uygun reklamlar sunmak ve reklamla ilgili analizlerde bize yardımcı olmak için çerezler ve benzer teknolojiler aracılığıyla hizmetlerimizden bilgi toplamasına izin veriyoruz. Bu, belirli yasalar kapsamında hedeflenen reklamcılık amacıyla "satış" veya "paylaşım" olarak kabul edilebilir. Bu etkinliği devre dışı bırakmak için aşağıdaki anahtarı kullanın.
                    </div>

                    <p>
                        Politikalarımızı inceleyerek gizlilik uygulamalarımız hakkında daha fazla bilgi edinebilirsiniz:
                        <br />
                        <Link to="/cookie-notice" className="privacy-link" onClick={onClose}>Çerez politikası</Link>
                    </p>

                    <div className="privacy-toggle-section">
                        <span className="toggle-label">Kişisel Bilgilerimi Satmayın veya Paylaşmayın</span>
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={optOut}
                                onChange={(e) => setOptOut(e.target.checked)}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>

                    <p>
                        Düğmeyi sağa çevirerek ve kaydet'e tıklayarak, kişisel bilgilerinizi satmamızı veya kişisel bilgilerinizi çevrimiçi hedefli reklam faaliyetleri için paylaşmamızı istemediğinizi belirtmiş olursunuz. Farklı bilgisayarlar veya tarayıcılar kullanıyorsanız, hizmetlerimize erişmek için kullanılan her bilgisayar veya tarayıcıda tercihlerinizi yeniden belirtmeniz gerektiğini lütfen unutmayın.
                    </p>
                </div>

                <div className="privacy-modal-footer">
                    <button className="privacy-save-btn" onClick={handleSave}>Kaydet</button>
                    <div className="privacy-powered-by">Outsight tarafından desteklenmektedir</div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyModal;
