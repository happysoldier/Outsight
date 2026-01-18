import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SearchOverlay.css';

// Mock Search Index (Client-Side)
const searchIndex = [
    { id: 1, title: 'Stratejik İş Geliştirme', type: 'Hizmet', path: '/services' },
    { id: 2, title: 'Finansal Danışmanlık', type: 'Hizmet', path: '/services' },
    { id: 3, title: 'Deneyim Tasarımı & UX', type: 'Hizmet', path: '/services' },
    { id: 4, title: 'Operasyon ve Yürütme', type: 'Hizmet', path: '/services' },
    { id: 5, title: 'Outsight Hakkında', type: 'Sayfa', path: '/about' },
    { id: 6, title: 'Temel Değerlerimiz', type: 'Sayfa', path: '/about' },
    { id: 7, title: 'İletişim', type: 'Sayfa', path: '/contact' },
    { id: 8, title: 'Yüksek Performanslı Takımların Mimarisi', type: 'Öngörü', path: '/about' },
    { id: 9, title: 'Dijital Evrim Stratejileri', type: 'Öngörü', path: '/services' },
    { id: 10, title: 'Fraktal Ekonomide Sürdürülebilir Büyüme', type: 'Öngörü', path: '/services' },
];

const SearchOverlay = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current.focus(), 100);
        }
        // Lock body scroll when open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const handleSearch = (e) => {
        const term = e.target.value;
        setQuery(term);

        if (term.length > 1) {
            const filtered = searchIndex.filter(item =>
                item.title.toLowerCase().includes(term.toLowerCase())
            );
            setResults(filtered);
        } else {
            setResults([]);
        }
    };

    const handleClose = () => {
        setQuery('');
        setResults([]);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="search-overlay">
            <button className="close-btn" onClick={handleClose}>&times;</button>

            <div className="search-container">
                <input
                    ref={inputRef}
                    type="text"
                    className="search-input"
                    placeholder="Aramak için yazın..."
                    value={query}
                    onChange={handleSearch}
                />

                <div className="search-results">
                    {results.length > 0 ? (
                        <ul className="results-list">
                            {results.map(result => (
                                <li key={result.id} className="result-item">
                                    <Link to={result.path} onClick={handleClose}>
                                        <span className="result-type">{result.type}</span>
                                        <span className="result-title">{result.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : query.length > 1 ? (
                        <p className="no-results">"{query}" için sonuç bulunamadı</p>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default SearchOverlay;
