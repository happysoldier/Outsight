import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = () => {
    const { slug } = useParams();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // In a real app, fetch post by slug. Here we just show a template.
    return (
        <div className="blog-post-page">
            <article className="post-article">
                <header className="post-header">
                    <div className="container">
                        <Link to="/blog" className="back-link">← Kütüphaneye Dön</Link>
                        <span className="post-category">Blog</span>
                        <h1 className="post-title">Örnek Blog Yazısı Başlığı: {slug}</h1>
                        <div className="post-meta">
                            <span>Yazar: Admin</span> • <span>Tarih: 17 Ocak 2026</span>
                        </div>
                    </div>
                </header>

                <div className="post-image-hero">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" alt="Hero" />
                </div>

                <div className="container post-content-container">
                    <div className="post-content-body">
                        <p className="lead">
                            Bu bir örnek blog yazısı içeriğidir. Gerçek API veya CMS entegrasyonu olmadığı için statik bir şablon gösterilmektedir.
                        </p>
                        <p>
                            İş dünyasında stratejik dönüşüm, sadece teknolojiyle ilgili değildir. Kültür, süreçler ve liderlik anlayışının bütünüyle değişmesini gerektirir.
                            Outsight olarak biz, bu değişimin mimarı olmak için buradayız.
                        </p>
                        <h2>Stratejik Yaklaşım</h2>
                        <p>
                            Geleneksel yöntemler artık yeterli değil. Veri odaklı, insan merkezli ve geleceği öngören bir yapı kurmak zorundasınız.
                            Sürdürülebilir büyüme ancak bu şekilde mümkün olabilir.
                        </p>
                        <blockquote>
                            "Değişim kaçınılmazdır, gelişim ise bir tercihtir."
                        </blockquote>
                        <p>
                            Kurumsal hafızanızı koruyarak yeni nesil iş modellerine entegre olmak, günümüzün en büyük meydan okumalarından biridir.
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogPost;
