import React from 'react';
import TechHero from '../components/TechHero';
import Works from '../components/Works';

const Home = () => {
    return (
        <div className="home-page">
            <TechHero />
            <Works />
            <footer style={{ 
                textAlign: 'center', 
                padding: '2rem 1rem', 
                color: '#6b7280', 
                fontSize: '0.8rem', 
                fontFamily: 'monospace',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
                © {new Date().getFullYear()} Vinicius · Database & Cloud Ops Engineer
            </footer>
        </div>
    );
};

export default Home;
