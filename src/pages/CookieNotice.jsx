import React, { useEffect } from 'react';
import './CookieNotice.css';

const CookieNotice = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <div className="legal-header">
                <div className="container">
                    <h1>Çerez Bildirimi</h1>
                    <div className="divider"></div>
                </div>
            </div>

            <div className="container">
                <div className="legal-content">
                    <p>
                        Outsight olarak, web sitemizdeki deneyiminizi geliştirmek, site trafiğini analiz etmek ve hizmetlerimizi kişiselleştirmek amacıyla çerezler (cookies) ve benzeri izleme teknolojileri kullanmaktayız. Bu Çerez Bildirimi; çerezlerin ne olduğunu, nasıl kullanıldığını ve tercihlerinizi nasıl yönetebileceğinizi açıklamaktadır.
                    </p>

                    <h2>Çerez Nedir?</h2>
                    <p>
                        Çerezler, bir web sitesini ziyaret ettiğinizde bilgisayarınıza veya mobil cihazınıza kaydedilen küçük metin dosyalaradır. Bu dosyalar, web sitesinin tercihlerinizi (oturum bilgileri, dil ayarları vb.) hatırlamasına ve size daha iyi bir kullanıcı deneyimi sunmasına yardımcı olur.
                    </p>

                    <h2>Kullandığımız Çerez Türleri</h2>
                    <p>Web sitemizde aşağıdaki çerez kategorilerini kullanabiliriz:</p>

                    <ul>
                        <li><strong>Zorunlu Çerezler:</strong> Web sitesinin düzgün çalışması için gereklidir. Güvenli alanlara erişim sağlamak ve oturum güvenliğini korumak gibi temel işlevleri yerine getirirler. Bu çerezler olmadan site düzgün çalışmayabilir.</li>
                        <li><strong>Performans ve Analiz Çerezleri:</strong> Ziyaretçilerin web sitemizi nasıl kullandığına dair bilgi toplar (örneğin, en çok ziyaret edilen sayfalar, hata mesajları). Bu veriler anonimdir ve sadece sitemizi geliştirmek için kullanılır.</li>
                        <li><strong>İşlevsel Çerezler:</strong> Dil seçimi veya bölge gibi tercihlerinizi hatırlayarak size daha kişiselleştirilmiş bir deneyim sunmamızı sağlar.</li>
                        <li><strong>Hedefleme ve Reklam Çerezleri:</strong> İlgi alanlarınıza daha uygun reklamlar göstermek ve reklam kampanyalarının etkinliğini ölçmek için kullanılabilir.</li>
                    </ul>

                    <h2>Çerezleri Nasıl Yönetebilirsiniz?</h2>
                    <p>
                        Çoğu web tarayıcısı çerezleri otomatik olarak kabul eder, ancak tarayıcı ayarlarınızı değiştirerek çerezleri reddedebilir veya silebilirsiniz. Ancak, çerezleri devre dışı bırakmanız durumunda web sitemizin bazı özelliklerinin düzgün çalışmayabileceğini lütfen unutmayın.
                    </p>
                    <p>
                        Tarayıcınızın "Yardım" menüsünden çerez yönetimi hakkında daha fazla bilgi edinebilirsiniz.
                    </p>

                    <h2>Değişiklikler</h2>
                    <p>
                        Bu Çerez Bildirimi zaman zaman güncellenebilir. Herhangi bir değişiklik yaptığımızda, güncelleme tarihini bu sayfanın altında belirteceğiz. Web sitemizi kullanmaya devam etmeniz, bu değişiklikleri kabul ettiğiniz anlamına gelir.
                    </p>

                    <p className="legal-footer-note">
                        Son Güncelleme: Mart 2026
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CookieNotice;
