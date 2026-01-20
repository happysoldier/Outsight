import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PersonBio.css';

const PersonBio = () => {
    const { name } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Sample data - can be replaced with dynamic data later
    const personData = {
        name: "Adil Khan",
        title: "Partner, Chicago",
        location: "Chicago, Illinois",
        email: "adil.khan@outsight.com.tr",
        phone: "+1 312 555 0100",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bio: [
            "Adil Khan is a Partner in Outsight's Chicago office and leads the firm's Consumer Goods and Retail practice in North America. He specializes in growth strategy, digital transformation, and operational excellence across the consumer sector.",
            "With over 15 years of experience, Adil has advised leading global brands on market entry strategies, organizational redesign, and performance improvement initiatives. His work spans diverse geographies including North America, Europe, and Asia Pacific.",
            "Prior to joining Outsight, Adil held senior strategy roles at Fortune 500 companies where he led large-scale transformation programs. He has deep expertise in e-commerce, omnichannel retail, and consumer analytics.",
            "Adil holds an MBA from Harvard Business School and a Bachelor's degree in Engineering from MIT. He is a frequent speaker at industry conferences on topics related to consumer behavior and digital disruption."
        ],
        expertise: [
            "Consumer Goods & Retail",
            "Growth Strategy",
            "Digital Transformation",
            "Operational Excellence",
            "E-commerce & Omnichannel"
        ]
    };

    return (
        <div className="person-bio-page">
            <div className="container">
                <div className="bio-layout">
                    {/* Left Sidebar - Photo and Contact */}
                    <aside className="bio-sidebar">
                        <div className="bio-photo">
                            <img src={personData.image} alt={personData.name} />
                        </div>
                        <div className="bio-contact">
                            <h3>İletişim</h3>
                            <div className="contact-item">
                                <span className="contact-label">Ofis</span>
                                <span className="contact-value">{personData.location}</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-label">E-posta</span>
                                <a href={`mailto:${personData.email}`} className="contact-value">{personData.email}</a>
                            </div>
                            <div className="contact-item">
                                <span className="contact-label">Telefon</span>
                                <a href={`tel:${personData.phone}`} className="contact-value">{personData.phone}</a>
                            </div>
                        </div>
                    </aside>

                    {/* Right Content - Bio */}
                    <main className="bio-content">
                        <div className="bio-header">
                            <h1>{personData.name}</h1>
                            <p className="bio-title">{personData.title}</p>
                            <div className="divider"></div>
                        </div>

                        <div className="bio-text">
                            {personData.bio.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="bio-expertise">
                            <h2>Uzmanlık Alanları</h2>
                            <ul>
                                {personData.expertise.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default PersonBio;
