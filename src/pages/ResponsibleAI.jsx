import React, { useEffect } from 'react';
import './ResponsibleAI.css';

const ResponsibleAI = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <div className="legal-header">
                <div className="container">
                    <h1>Sorumlu Yapay Zeka Kullanımı</h1>
                    <div className="divider"></div>
                </div>
            </div>

            <div className="container">
                <div className="legal-content">
                    <p>
                        Yapay zeka (AI), iş dünyasını ve toplumu dönüştürme konusunda muazzam bir potansiyele sahiptir. Outsight olarak, bu teknolojinin gücünün farkındayız ve onu sorumlu, etik ve güvenli bir şekilde kullanmayı taahhüt ediyoruz. Sorumlu yapay zeka yaklaşımımız, inovasyonu teşvik ederken aynı zamanda riskleri yönetmeyi ve insani değerleri korumayı amaçlar.
                    </p>

                    <h2>İlkelerimiz</h2>
                    <p>
                        Yapay zeka sistemlerini geliştirirken ve kullanırken aşağıdaki temel ilkelere bağlı kalıyoruz:
                    </p>

                    <ul>
                        <li><strong>Şeffaflık ve Açıklanabilirlik:</strong> Kullandığımız AI sistemlerinin nasıl karar verdiğini anlamaya ve gerektiğinde bu süreçleri müşterilerimize ve paydaşlarımıza açıklamaya önem veriyoruz. "Kara kutu" algoritmalar yerine, şeffaf ve denetlenebilir modelleri tercih ediyoruz.</li>
                        <li><strong>Adalet ve Tarafsızlık:</strong> Yapay zeka modellerinin veri kaynaklı önyargıları (bias) barındırabileceğinin farkındayız. Bu nedenle, modellerimizi düzenli olarak test ediyor ve ayrımcılığı önlemek için gerekli düzeltmeleri yapıyoruz. Herkes için adil sonuçlar üretmeyi hedefliyoruz.</li>
                        <li><strong>Gizlilik ve Güvenlik:</strong> AI sistemlerimizde kullanılan verilerin gizliliği bizim için önceliklidir. Müşteri verilerini ve kişisel bilgileri korumak için en üst düzey güvenlik protokollerini uyguluyoruz.</li>
                        <li><strong>İnsan Gözetimi:</strong> Yapay zeka, insan yeteneklerini artırmak için bir araçtır, onların yerine geçmek için değil. Kritik kararların alındığı süreçlerde her zaman insan gözetimini ve müdahalesini mümkün kılıyoruz.</li>
                    </ul>

                    <h2>Uygulama Alanları</h2>
                    <p>
                        Müşterilerimize sunduğumuz hizmetlerde yapay zekayı şu şekillerde kullanıyoruz:
                    </p>
                    <ul>
                        <li>Büyük veri setlerinden içgörü elde etme ve trend analizi.</li>
                        <li>Operasyonel verimliliği artırmak için süreç otomasyonu.</li>
                        <li>Kişiselleştirilmiş müşteri deneyimleri tasarlama.</li>
                        <li>Risk yönetimi ve senaryo planlaması.</li>
                    </ul>

                    <h2>Taahhüdümüz</h2>
                    <p>
                        Outsight olarak, yapay zeka teknolojilerinin gelişimini yakından takip ediyor ve etik standartlarımızı sürekli olarak güncelliyoruz. Teknolojiyi sadece iş sonuçlarını iyileştirmek için değil, aynı zamanda topluma ve dünyaya olumlu katkı sağlamak için kullanmaya kararlıyız.
                    </p>

                    <p className="legal-footer-note">
                        Son Güncelleme: Ocak 2026
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ResponsibleAI;
