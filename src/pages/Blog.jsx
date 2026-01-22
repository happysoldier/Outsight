import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

import { blogPosts } from '../data/blogData.jsx';

const Blog = () => {
    // Mock language state - in a real app this would come from context/props
    const language = 'tr'; // 'tr' or 'en'

    const formatDate = (dateString) => {
        const date = new Date(dateString);

        if (language === 'tr') {
            // TR format: 22 Ocak 2026
            return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
        } else {
            // EN format: January 22, 2026
            return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        }
    };

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
                            ENDUSTRİ ve SERVİSLER
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </button>
                        <button className="filter-dropdown">
                            KONULAR
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
                                            <span className="blog-date">{formatDate(post.date)}</span>
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
