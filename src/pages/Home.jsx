import React from 'react';
import TechHero from '../components/TechHero';
import Works from '../components/Works';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className="home-page">
            <TechHero />
            <Works />
            <Contact />
        </div>
    );
};

export default Home;
