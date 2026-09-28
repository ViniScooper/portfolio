import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import SkillLists from '../components/SkillLists';
import Works from '../components/Works';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <About />
            <Works />
            <Skills />
            <SkillLists />
            <Contact />
        </div>
    );
};


export default Home;
