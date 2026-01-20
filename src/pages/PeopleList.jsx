import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PeopleList.css';

const PeopleList = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Sample people data - can be expanded
    const people = [
        {
            id: 'adil-khan',
            name: 'Adil Khan',
            title: 'Partner, Chicago',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
        },
        {
            id: 'hakan-misirli',
            name: 'Hakan Mısırlı',
            title: 'CEO / Kurucu Ortak',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop'
        },
        {
            id: 'murat-eser',
            name: 'Murat Tolga Eser',
            title: 'Kıdemli Ortak',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
        },
        {
            id: 'kubilay-ozvardar',
            name: 'Kubilay Özvardar',
            title: 'Kıdemli Ortak',
            image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=400&auto=format&fit=crop'
        }
    ];

    return (
        <div className="people-list-page">
            <div className="container">
                <div className="page-header">
                    <span className="chapter-scent">İnsanlarımız</span>
                    <h1>Liderlik ve ekibimizle tanışın.</h1>
                    <div className="divider"></div>
                </div>

                <div className="people-grid">
                    {people.map(person => (
                        <Link 
                            key={person.id} 
                            to={`/about/people/${person.id}`} 
                            className="person-card"
                        >
                            <div className="person-image">
                                <img src={person.image} alt={person.name} />
                            </div>
                            <div className="person-info">
                                <h3>{person.name}</h3>
                                <p>{person.title}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PeopleList;
