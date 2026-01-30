import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <div className="legal-header">
                <div className="container">
                    <h1>Gizlilik Politikası</h1>
                    <div className="divider"></div>
                </div>
            </div>

            <div className="container">
                <div className="legal-content">
                    <p className="lead">
                        Outsight olarak gizliliğinize saygı duyuyor ve kişisel verilerinizin güvenliğini ciddiye alıyoruz.
                        Bu Gizlilik Politikası, web sitemizi kullandığınızda veya hizmetlerimizden yararlandığınızda
                        bilgilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.
                    </p>

                    <h2>Topladığımız Bilgiler</h2>
                    <p>
                        Hizmetlerimizi sunarken ve geliştirmek amacıyla çeşitli türde bilgiler toplayabiliriz:
                    </p>
                    <ul>
                        <li><strong>Kişisel Bilgiler:</strong> Adınız, e-posta adresiniz, telefon numaranız ve bizimle iletişime geçtiğinizde sağladığınız diğer bilgiler.</li>
                        <li><strong>Teknik Veriler:</strong> IP adresiniz, tarayıcı türünüz, cihaz bilgileriniz ve web sitemizi kullanımınıza dair log kayıtları.</li>
                        <li><strong>Çerezler ve İzleme Teknolojileri:</strong> Kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek için kullandığımız veriler.</li>
                    </ul>

                    <h2>Bilgilerin Kullanımı</h2>
                    <p>
                        Topladığımız bilgileri şu amaçlarla kullanırız:
                    </p>
                    <ul>
                        <li>Hizmetlerimizi sağlamak, sürdürmek ve iyileştirmek.</li>
                        <li>Sizinle iletişime geçmek ve taleplerinizi yanıtlamak.</li>
                        <li>Yasal yükümlülüklerimizi yerine getirmek.</li>
                        <li>Sitemizin güvenliğini sağlamak ve dolandırıcılığı önlemek.</li>
                    </ul>

                    <h2>Bilgi Paylaşımı</h2>
                    <p>
                        Kişisel bilgilerinizi, yasal zorunluluklar veya hizmet sağlayıcılarımızla olan iş süreçlerimiz (örneğin, barındırma hizmetleri)
                        haricinde üçüncü taraflarla paylaşmayız. Verileriniz asla izniniz olmadan pazarlama amacıyla satılmaz.
                    </p>

                    <h2>Veri Güvenliği</h2>
                    <p>
                        Bilgilerinizi yetkisiz erişime, kaybolmaya veya ifşaya karşı korumak için endüstri standardı güvenlik önlemleri uyguluyoruz.
                        Ancak, internet üzerinden yapılan hiçbir veri iletiminin %100 güvenli olmadığını unutmayınız.
                    </p>

                    <h2>Haklarınız</h2>
                    <p>
                        Kişisel verileriniz üzerinde erişim, düzeltme, silme ve işlemeyi kısıtlama haklarına sahipsiniz.
                        Bu haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.
                    </p>

                    <p className="legal-footer-note">
                        Son Güncelleme: Mart 2026
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
