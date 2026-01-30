import React from 'react';
import './LegalDisclaimer.css';

const LegalDisclaimer = () => {
    return (
        <div className="legal-page">
            <div className="legal-header">
                <div className="container">
                    <h1>Yasal Uyarı</h1>
                    <div className="divider"></div>
                </div>
            </div>

            <div className="container">
                <div className="legal-content">
                    <p>
                        Bu web sitesini kullanarak, aşağıdaki kullanım şartlarını ve yasal uyarıları kabul etmiş olursunuz.
                        Outsight, bu şartları dilediği zaman değiştirme hakkını saklı tutar.
                    </p>

                    <h2>Telif Hakkı</h2>
                    <p>
                        Bu web sitesindeki tüm içerik, metinler, grafikler, logolar, görseller ve yazılımlar Outsight'ın mülkiyetindedir
                        ve uluslararası telif hakkı yasalarıyla korunmaktadır. Outsight'ın önceden yazılı izni olmaksızın,
                        bu sitenin içeriğinin herhangi bir şekilde kopyalanması, çoğaltılması, yeniden yayımlanması, yüklenmesi,
                        gönderilmesi, iletilmesi veya dağıtılması yasaktır.
                    </p>

                    <h2>Garanti Reddi</h2>
                    <p>
                        Bu sitedeki bilgiler "olduğu gibi" sağlanmaktadır. Outsight, ticari elverişlilik, belirli bir amaca uygunluk
                        veya ihlal etmeme garantileri dahil ancak bunlarla sınırlı olmamak üzere, açık veya zımni hiçbir garanti vermez.
                        Outsight, bu sitedeki bilgilerin doğruluğu, eksiksizliği veya güvenilirliği konusunda herhangi bir beyanda bulunmaz.
                    </p>

                    <h2>Sorumluluk Sınırlaması</h2>
                    <p>
                        Outsight veya iştirakleri, bu sitenin kullanımından veya kullanılamamasından kaynaklanan doğrudan, dolaylı,
                        tesadüfi, özel veya netice kabilinden doğan zararlardan (kar kaybı, veri kaybı veya iş kesintisi dahil ancak
                        bunlarla sınırlı olmamak üzere) sorumlu tutulamaz. Bu sınırlama, sözleşme, haksız fiil veya başka bir yasal
                        teoriye dayanıp dayanmadığına bakılmaksızın geçerlidir.
                    </p>

                    <h2>Üçüncü Taraf Bağlantıları</h2>
                    <p>
                        Bu web sitesi, kullanıcıların kolaylığı için üçüncü taraf web sitelerine bağlantılar içerebilir.
                        Outsight, bu sitelerin içeriğini kontrol etmez ve bu sitelerdeki herhangi bir içerik, ürün veya hizmetten sorumlu değildir.
                        Üçüncü taraf bağlantılarına erişim riski tamamen size aittir.
                    </p>

                    <h2>Geçerli Hukuk</h2>
                    <p>
                        Bu yasal uyarı ve sitenin kullanımıyla ilgili her türlü ihtilaf, Türkiye Cumhuriyeti yasalarına tabi olacaktır.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LegalDisclaimer;
