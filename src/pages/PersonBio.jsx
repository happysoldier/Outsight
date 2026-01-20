import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getPersonById } from '../data/peopleData';
import './PersonBio.css';

const PersonBio = () => {
    const { name } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Get person data dynamically
    const personData = getPersonById(name);

    // If person not found, redirect to people list
    if (!personData) {
        return <Navigate to="/about/people" replace />;
    }

    return (
        <div className="person-bio-page">
            {/* Hero Section */}
            <section className="bio-hero">
                <div className="container">
                    <div className="hero-grid">
                        <div className="hero-left">
                            <h1>{personData.name}</h1>
                            <p className="hero-title">{personData.title}</p>
                            <div className="hero-actions">
                                <Link to={`/contact/bio/${personData.id}`} className="btn-outline">İletişim</Link>
                                {personData.linkedin && (
                                    <a href={personData.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">LinkedIn</a>
                                )}
                            </div>
                        </div>
                        <div className="hero-right">
                            <img src={personData.image} alt={personData.name} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Bio Content */}
            <section className="bio-section">
                <div className="container">
                    <div className="bio-layout">
                        {/* Main Content - Left */}
                        <div className="bio-main">
                            <div className="bio-text">
                                {personData.quote && (
                                    <p className="bio-quote">{personData.quote}</p>
                                )}
                                {personData.bio.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar - Right */}
                        <aside className="bio-sidebar">
                            {personData.industries && personData.industries.length > 0 && (
                                <div className="sidebar-section">
                                    <h3>Endüstriler</h3>
                                    <ul>
                                        {personData.industries.map((industry, index) => (
                                            <li key={index}>{industry}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {personData.expertise && personData.expertise.length > 0 && (
                                <div className="sidebar-section">
                                    <h3>Uzmanlık Alanları</h3>
                                    <ul>
                                        {personData.expertise.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </aside>
                    </div>

                    {personData.insights && personData.insights.length > 0 && (
                        <div className="bio-insights">
                            <h2>İçgörüler</h2>
                            <div className="insights-list">
                                {personData.insights.map((insight, index) => (
                                    <div key={index} className="insight-item">
                                        <Link to={insight.link} className="insight-link">
                                            {insight.title}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default PersonBio;
