import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

import { blogPosts } from '../data/blogData.jsx';

const Blog = () => {
    // Mock language state - in a real app this would come from context/props
    const language = 'tr'; // 'tr' or 'en'

    // State for filters
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedAuthor, setSelectedAuthor] = useState(null);
    const [openDropdown, setOpenDropdown] = useState(null); // 'category' or 'author'

    // Pagination State
    const [visibleCount, setVisibleCount] = useState(10);

    const filterRef = useRef(null);

    // Extract unique values for filters
    const categories = [...new Set(blogPosts.map(post => post.category))].sort();
    const authors = [...new Set(blogPosts.map(post => post.author))].sort();

    // Filter posts based on selection
    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
        const matchesAuthor = selectedAuthor ? post.author === selectedAuthor : true;
        return matchesCategory && matchesAuthor;
    });

    // Reset visible count when filters change
    useEffect(() => {
        setVisibleCount(10);
    }, [selectedCategory, selectedAuthor]);

    // Slice posts for pagination
    const displayedPosts = filteredPosts.slice(0, visibleCount);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = (dropdown) => {
        if (openDropdown === dropdown) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(dropdown);
        }
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category === selectedCategory ? null : category);
        setOpenDropdown(null);
    };

    const handleAuthorSelect = (author) => {
        setSelectedAuthor(author === selectedAuthor ? null : author);
        setOpenDropdown(null);
    };

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 10);
    };

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
                    <div className="filter-wrapper" ref={filterRef}>

                        {/* Category Filter */}
                        <div className="filter-group">
                            <button
                                className={`filter-dropdown ${openDropdown === 'category' ? 'open' : ''} ${selectedCategory ? 'active' : ''}`}
                                onClick={() => toggleDropdown('category')}
                            >
                                {selectedCategory || 'KATEGORİLER'}
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>
                            <div className={`dropdown-menu ${openDropdown === 'category' ? 'show' : ''}`}>
                                <button
                                    className={`dropdown-item ${!selectedCategory ? 'selected' : ''}`}
                                    onClick={() => handleCategorySelect(null)}
                                >
                                    Tümü
                                </button>
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        className={`dropdown-item ${selectedCategory === category ? 'selected' : ''}`}
                                        onClick={() => handleCategorySelect(category)}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Author Filter */}
                        <div className="filter-group">
                            <button
                                className={`filter-dropdown ${openDropdown === 'author' ? 'open' : ''} ${selectedAuthor ? 'active' : ''}`}
                                onClick={() => toggleDropdown('author')}
                            >
                                {selectedAuthor || 'YAZARLAR'}
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>
                            <div className={`dropdown-menu ${openDropdown === 'author' ? 'show' : ''}`}>
                                <button
                                    className={`dropdown-item ${!selectedAuthor ? 'selected' : ''}`}
                                    onClick={() => handleAuthorSelect(null)}
                                >
                                    Tümü
                                </button>
                                {authors.map(author => (
                                    <button
                                        key={author}
                                        className={`dropdown-item ${selectedAuthor === author ? 'selected' : ''}`}
                                        onClick={() => handleAuthorSelect(author)}
                                    >
                                        {author}
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <section className="section insights-section">
                <div className="container">
                    <div className="blog-list">
                        {displayedPosts.length > 0 ? (
                            <>
                                {displayedPosts.map(post => (
                                    <article key={post.id} className="blog-card">
                                        <Link to={`/blog/${post.slug}`} className="blog-card-link">
                                            <div className="blog-content">
                                                <h3 className="blog-title">{post.title}</h3>
                                                <div className="blog-meta">
                                                    <span className="blog-category">{post.category}</span>
                                                    <span className="meta-separator">|</span>
                                                    <span className="blog-date">{formatDate(post.date)}</span>
                                                    <span className="meta-separator">|</span>
                                                    <span className="blog-author">{post.author}</span>
                                                </div>
                                            </div>
                                            <div className="blog-image-wrapper">
                                                <img src={post.image} alt={post.title} />
                                            </div>
                                        </Link>
                                    </article>
                                ))}

                                {visibleCount < filteredPosts.length && (
                                    <div className="load-more-container">
                                        <button className="load-more-button" onClick={handleLoadMore}>
                                            DAHA FAZLA YÜKLE
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="no-posts">
                                <p>Seçilen kriterlere uygun yazı bulunamadı.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
