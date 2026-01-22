import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostBySlug } from '../data/blogData.jsx';
import './BlogPost.css';

const BlogPost = () => {
    const { slug } = useParams();
    const post = getPostBySlug(slug);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // Mock language state
    const language = 'tr';

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        if (language === 'tr') {
            return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
        } else {
            return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        }
    };

    if (!post) {
        return (
            <div className="blog-post-page">
                <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                    <h1>Yazı bulunamadı</h1>
                    <Link to="/blog" className="back-link">← Kütüphaneye Dön</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-post-page">
            <article className="post-article">
                <header className="post-header-hero" style={{ backgroundImage: `url(${post.image})` }}>
                    <div className="hero-overlay"></div>
                    <div className="container hero-content">
                        <div className="title-wrapper">
                            <h1 className="post-title">{post.title}</h1>
                        </div>
                    </div>
                </header>

                <div className="container post-content-container">
                    <div className="post-content-body">
                        <div className="post-date-content">
                            {formatDate(post.date)}
                        </div>
                        {post.content ? post.content : (
                            <p>İçerik hazırlanıyor...</p>
                        )}

                        {post.authors && post.authors.length > 0 && (
                            <div className="post-authors-section">
                                <hr className="authors-separator" />
                                <h3 className="authors-title">Yazarlar</h3>
                                <div className="authors-grid">
                                    {post.authors.map((author, index) => (
                                        <div key={index} className="author-card">
                                            <div className="author-image-wrapper">
                                                <img src={author.image} alt={author.name} />
                                            </div>
                                            <h4 className="author-name">{author.name}</h4>
                                            <p className="author-title">{author.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogPost;
