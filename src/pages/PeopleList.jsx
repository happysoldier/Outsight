import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPeople } from '../data/peopleData';
import './PeopleList.css';

const PeopleList = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Get people data
    const people = getAllPeople();

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
