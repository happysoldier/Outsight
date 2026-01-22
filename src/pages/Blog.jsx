import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const blogPosts = [
    {
        id: 1,
        title: "Hepimiz Birimiz, Birimiz Hepimiz İçin",
        author: "Emre Yazıcı",
        category: "Dijital Dönüşüm",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
        slug: "hepimiz-birimiz-birimiz-hepimiz-icin"
    },
    {
        id: 2,
        title: "Bakkaldan Algoritmaya",
        author: "Levent Kasman",
        category: "İş Dünyası",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        slug: "bakkaldan-algoritmaya"
    },
    {
        id: 3,
        title: "2026: İş Dünyası İçin Yüksek Adaptasyon ve Çok Boyutlu Riskler Yılı",
        author: "Hamit Saçan",
        category: "Strateji",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        slug: "2026-is-dunyasi-icin-yuksek-adaptasyon"
    },
    {
        id: 4,
        title: "Türkiye’de Gıda İşletmelerinde Genel Yaklaşım",
        author: "Murat Tolga Eser",
        category: "Satın Alma Yönetimi",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
        slug: "turkiye-de-gida-isletmelerinde-genel-yaklasim"
    },
    {
        id: 5,
        title: "Merkezi Satın Almaya Geçiş Yapalım Ama Nasıl?",
        author: "Hamit Saçan",
        category: "Tedarik Zinciri",
        image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1974&auto=format&fit=crop",
        slug: "merkezi-satin-almaya-gecis-yapalim-ama-nasil"
    },
    {
        id: 6,
        title: "Tedarik Zinciri: Formalite mi, Stratejik bir Zorunluluk mu?",
        author: "Emre Yazıcı",
        category: "Check Up",
        image: "https://images.unsplash.com/photo-1494412651409-ae5e0dce1c0d?q=80&w=2070&auto=format&fit=crop",
        slug: "tedarik-zinciri-formalite-mi"
    },
    {
        id: 7,
        title: "Şirketiniz Ne Kadar Sağlıklı?",
        author: "Admin",
        category: "Pazarlama",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        slug: "sirketiniz-ne-kadar-saglikli"
    },
    {
        id: 8,
        title: "Dijital Pazarlamanın Geleceği: Sırada Ne Var?",
        author: "Admin",
        category: "Dijital Pazarlama",
        image: "https://images.unsplash.com/photo-1432888622947-70352548327c?q=80&w=2074&auto=format&fit=crop",
        slug: "dijital-pazarlamanin-gelecegi"
    },
    {
        id: 9,
        title: "Başarılı Dijital Pazarlama Kampanyalarının Sırları",
        author: "Admin",
        category: "Web & Sosyal Medya",
        image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2106&auto=format&fit=crop",
        slug: "basarili-dijital-pazarlama-kampanyalarinin-sirlari"
    },
    {
        id: 10,
        title: "Trafik ve Dönüşümleri Artıran SEO Stratejileri",
        author: "Admin",
        category: "SEO",
        image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=2080&auto=format&fit=crop",
        slug: "trafik-ve-donusumleri-artiran-seo-stratejileri"
    }
];

const Blog = () => {
    return (
        <div className="blog-page">
            <div className="blog-hero">
                <div className="container">
                    <h1>Öngörülerimiz</h1>
                    <p className="hero-description">
                        Düşüncelerimize ve ürettiğimiz fikirlere doğrudan sizin ihtiyaçlarınız yön veriyor. Paylaştığımız makaleler, iş dünyasında sizin için gerçekten fark yaratan konulara taze ve uygulanabilir bir bakış açısı sunuyor.
                    </p>
                </div>
            </div>

            <div className="insights-filter-bar">
                <div className="container">
                    <div className="filter-wrapper">
                        <button className="filter-dropdown">
                            Industries and services
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </button>
                        <button className="filter-dropdown">
                            Topics
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <section className="section insights-section">
                <div className="container">
                    <div className="blog-list">
                        {blogPosts.map(post => (
                            <article key={post.id} className="blog-card">
                                <Link to={`/blog/${post.slug}`} className="blog-card-link">
                                    <div className="blog-content">
                                        <h3 className="blog-title">{post.title}</h3>
                                        <div className="blog-meta">
                                            <span className="blog-category">{post.category}</span>
                                            <span className="meta-separator">|</span>
                                            <span className="blog-date">Oct 24, 2024</span>
                                        </div>
                                    </div>
                                    <div className="blog-image-wrapper">
                                        <img src={post.image} alt={post.title} />
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
