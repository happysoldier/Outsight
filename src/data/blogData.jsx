import digitalMarketingHero from '../assets/digital-marketing-hero.png';
import digitalMarketingContent from '../assets/digital-marketing-content.png';
import hakanMisirli from '../assets/hakan-misirli.png';
import senerCavga from '../assets/sener-cavga.jpg';

export const blogPosts = [
    {
        id: 11,
        title: "Dijital Pazarlamada Uzmanlaşmak: Başarı Stratejileri",
        author: "Admin",
        category: "Pazarlama & Marka Yönetimi",
        image: digitalMarketingHero,
        slug: "dijital-pazarlamada-uzmanlasmak-basari-stratejileri",
        date: "2026-01-22",
        content: (
            <>
                <p className="lead">
                    Dijital Pazarlamada Uzmanlaşmak: Araçlardan Stratejiye Başarı Yolculuğu
                </p>
                <p>
                    Dijital pazarlama evreni, sürekli değişen algoritmalar ve her gün yenisi eklenen platformlarla dolu bir labirenttir. Bu labirentte “kaybolan” bir operatör olmakla, labirenti yukarıdan izleyen bir “Büyüme Mimarı” olmak arasındaki fark, uzmanlık tanımınızda gizlidir.
                </p>
                <div className="post-image-content">
                    <img src={digitalMarketingContent} alt="Başarılı Dijital Kampanya Stratejileri" />
                </div>
                <p>
                    Gerçek bir uzman, sadece reklam bütçesini yöneten değil; o bütçeyi şirketin geleceğine yapılan bir yatırıma dönüştüren kişidir. İşte bu yolculukta başarıyı getirecek temel stratejiler:
                </p>
                <h3>1. Bütünsel (Holistik) Bakış Açısı Geliştirmek</h3>
                <p>
                    Uzmanlaşmanın ilk adımı, dijital pazarlamanın sadece bir “kanal” değil, bir “ekosistem” olduğunu anlamaktır. SEO, performans pazarlaması, içerik stratejisi ve veri analitiği birbirine bağlı dişlilerdir. Bir uzman, SEO’daki bir değişikliğin Google Ads maliyetlerini nasıl etkileyeceğini öngörebilen kişidir.
                </p>
                <h3>2. Veri Okuryazarlığı ve Analitik Derinlik</h3>
                <p>
                    Veri, dijital pazarlamanın dilidir. Ancak uzmanlık, raporlardaki rakamları okumak değil, o rakamların arkasındaki kullanıcı psikolojisini anlamaktır.
                </p>
                <p>
                    <strong>Strateji:</strong> “Tıklama oranı (CTR) neden düştü?” sorusuna sadece teknik değil, pazar dinamikleri ve yaratıcı içerik açısından da yanıt verebilmelisiniz.
                </p>
                <h3>3. Teknolojik Adaptasyon ve AI Entegrasyonu</h3>
                <p>
                    2026 dünyasında uzmanlık, yapay zekaya karşı durmak değil, onu bir “verimlilik kaldıracı” olarak kullanmaktır. Rutin işleri otomatize edip, zamanınızı stratejik düşünmeye ve “Outsight” (dışarıdan bakış) geliştirmeye ayırmalısınız.
                </p>
                <h3>4. Empati ve İnsan Psikolojisi</h3>
                <p>
                    Algoritmalar değişir ama insan psikolojisi binlerce yıldır aynıdır. Uzmanlaşmak, teknolojiyi bilmek kadar insanın “neden satın aldığını” bilmeyi gerektirir. En iyi kampanya, en gelişmiş araçla kurulan değil; hedef kitlenin kalbine ve zihnine en doğru noktadan dokunan kampanyadır.
                </p>
                <h3>5. Sürekli Öğrenme ve “Un-learning” (Ezber Bozma)</h3>
                <p>
                    Dijital pazarlamada uzmanlık durağan değildir. Dünün “altın kuralı” bugünün hatası olabilir. Uzman kalabilmenin sırrı, gerektiğinde bildiklerini unutabilmek (un-learning) ve yeniye hızla adapte olabilmektir.
                </p>
                <blockquote>
                    “Uzmanlık, karmaşıklığı basitliğe; veriyi ise kâra dönüştürme sanatıdır.”
                </blockquote>
            </>
        ),
        authors: [
            {
                name: "Hakan Mısırlı",
                title: "Kurucu Ortak",
                image: hakanMisirli
            },
            {
                name: "Şener Çavga",
                title: "Teknoloji Danışmanı",
                image: senerCavga
            }
        ]
    },
    {
        id: 1,
        title: "Hepimiz Birimiz, Birimiz Hepimiz İçin",
        author: "Emre Yazıcı",
        category: "Dijital Dönüşüm",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
        slug: "hepimiz-birimiz-birimiz-hepimiz-icin",
        date: "2026-01-22"
    },
    {
        id: 2,
        title: "Bakkaldan Algoritmaya",
        author: "Levent Kasman",
        category: "İş Dünyası",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        slug: "bakkaldan-algoritmaya",
        date: "2026-01-20"
    },
    {
        id: 3,
        title: "2026: İş Dünyası İçin Yüksek Adaptasyon ve Çok Boyutlu Riskler Yılı",
        author: "Hamit Saçan",
        category: "Strateji",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        slug: "2026-is-dunyasi-icin-yuksek-adaptasyon",
        date: "2026-01-18"
    },
    {
        id: 4,
        title: "Türkiye’de Gıda İşletmelerinde Genel Yaklaşım",
        author: "Murat Tolga Eser",
        category: "Satın Alma Yönetimi",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
        slug: "turkiye-de-gida-isletmelerinde-genel-yaklasim",
        date: "2026-01-15"
    },
    {
        id: 5,
        title: "Merkezi Satın Almaya Geçiş Yapalım Ama Nasıl?",
        author: "Hamit Saçan",
        category: "Tedarik Zinciri",
        image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1974&auto=format&fit=crop",
        slug: "merkezi-satin-almaya-gecis-yapalim-ama-nasil",
        date: "2026-01-10"
    },
    {
        id: 6,
        title: "Tedarik Zinciri: Formalite mi, Stratejik bir Zorunluluk mu?",
        author: "Emre Yazıcı",
        category: "Check Up",
        image: "https://images.unsplash.com/photo-1494412651409-ae5e0dce1c0d?q=80&w=2070&auto=format&fit=crop",
        slug: "tedarik-zinciri-formalite-mi",
        date: "2026-01-05"
    },
    {
        id: 7,
        title: "Şirketiniz Ne Kadar Sağlıklı?",
        author: "Admin",
        category: "Pazarlama",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        slug: "sirketiniz-ne-kadar-saglikli",
        date: "2025-12-28"
    },
    {
        id: 8,
        title: "Dijital Pazarlamanın Geleceği: Sırada Ne Var?",
        author: "Admin",
        category: "Dijital Pazarlama",
        image: "https://images.unsplash.com/photo-1432888622947-70352548327c?q=80&w=2074&auto=format&fit=crop",
        slug: "dijital-pazarlamanin-gelecegi",
        date: "2025-12-20"
    },
    {
        id: 9,
        title: "Başarılı Dijital Pazarlama Kampanyalarının Sırları",
        author: "Admin",
        category: "Web & Sosyal Medya",
        image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2106&auto=format&fit=crop",
        slug: "basarili-dijital-pazarlama-kampanyalarinin-sirlari",
        date: "2025-12-15"
    },
    {
        id: 10,
        title: "Trafik ve Dönüşümleri Artıran SEO Stratejileri",
        author: "Admin",
        category: "SEO",
        image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=2080&auto=format&fit=crop",
        slug: "trafik-ve-donusumleri-artiran-seo-stratejileri",
        date: "2025-12-10"
    }
];

export const getPostBySlug = (slug) => {
    return blogPosts.find(post => post.slug === slug);
};
