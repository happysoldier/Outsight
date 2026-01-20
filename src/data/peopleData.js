// People data for the organization
import adilKhanImage from '../assets/about-meeting.png';
import senerCavgaImage from '../assets/sener-cavga.jpg';

export const peopleData = {
    'adil-khan': {
        id: 'adil-khan',
        name: "Adil Khan",
        title: "Direktör, Chicago",
        location: "Chicago, Illinois",
        email: "adil.khan@outsight.com.tr",
        phone: "+1 312 555 0100",
        image: adilKhanImage,
        bio: [
            "Adil Khan, Outsight'ın Chicago ofisinde Direktör olarak görev yapmakta ve firmanın Kuzey Amerika'daki Tüketici Ürünleri ve Perakende uygulamalarına liderlik etmektedir. Tüketici sektöründe büyüme stratejisi, dijital dönüşüm ve operasyonel mükemmellik konularında uzmanlaşmıştır.",
            "15 yılı aşkın deneyimiyle Adil, pazara giriş stratejileri, organizasyonel yeniden yapılanma ve performans iyileştirme girişimleri konularında önde gelen küresel markalara danışmanlık yapmıştır. Çalışmaları Kuzey Amerika, Avrupa ve Asya-Pasifik'i kapsayan geniş bir coğrafyaya yayılmaktadır.",
            "Outsight'a katılmadan önce Adil, büyük ölçekli dönüşüm programlarını yönettiği Fortune 500 şirketlerinde üst düzey strateji rolleri üstlenmiştir. E-ticaret, çok kanallı perakende ve tüketici analitiği konularında derin uzmanlığa sahiptir.",
            "Adil, Harvard Business School'dan MBA ve MIT'den Mühendislik alanında lisans derecesine sahiptir. Tüketici davranışı ve dijital yıkım ile ilgili konularda sektörel konferanslarda sıkça konuşmacı olarak yer almaktadır."
        ],
        expertise: [
            "Tüketici Ürünleri & Perakende",
            "Büyüme Stratejisi",
            "Dijital Dönüşüm",
            "Operasyonel Mükemmellik",
            "E-ticaret & Çok Kanallı Perakende"
        ],
        industries: [
            "Finansal Hizmetler",
            "Tüketici Ürünleri",
            "Perakende"
        ]
    },
    'sener-cavga': {
        id: 'sener-cavga',
        name: "Şener Çavga",
        title: "Direktör, Istanbul",
        location: "Istanbul, Turkey",
        email: "sener.cavga@outsight.com.tr",
        phone: "+90 212 555 0100",
        image: senerCavgaImage,
        quote: "Hazır reçetelerle değil, açık bir zihin ve cesur adımlarla ilerlemeyi seviyorum. Benim için her proje, alışılmışın dışına çıkıp sektöre imzamı atmak için yeni bir fırsat.",
        bio: [
            "Şener Çavga, Outsight'ın İstanbul ofisinde Direktör olarak görev yapmakta ve firmanın Türkiye'deki Tüketici Ürünleri ve Perakende uygulamalarına liderlik etmektedir. Tüketici sektöründe büyüme stratejisi, dijital dönüşüm ve operasyonel mükemmellik konularında uzmanlaşmıştır.",
            "15 yılı aşkın deneyimiyle Şener, pazara giriş stratejileri, organizasyonel yeniden yapılanma ve performans iyileştirme girişimleri konularında önde gelen küresel markalara danışmanlık yapmıştır. Çalışmaları Türkiye, Avrupa ve Orta Doğu'yu kapsayan geniş bir coğrafyaya yayılmaktadır.",
            "Outsight'a katılmadan önce Şener, büyük ölçekli dönüşüm programlarını yönettiği Fortune 500 şirketlerinde üst düzey strateji rolleri üstlenmiştir. E-ticaret, çok kanallı perakende ve tüketici analitiği konularında derin uzmanlığa sahiptir.",
            "Şener, Harvard Business School'dan MBA ve MIT'den Mühendislik alanında lisans derecesine sahiptir. Tüketici davranışı ve dijital yıkım ile ilgili konularda sektörel konferanslarda sıkça konuşmacı olarak yer almaktadır."
        ],
        expertise: [
            "Dijital Dönüşüm",
            "İş Zekası"
        ],
        industries: [
            "Gıda",
            "İçecek",
            "Bilgisayar"
        ]
    }
};

// Get all people as array for listing
export const getAllPeople = () => Object.values(peopleData);

// Get person by ID
export const getPersonById = (id) => peopleData[id];
