import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

const Hero = () => {
    const { language } = useLanguage();
    const t = translations[language].hero;

    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title fade-in">
                        {t.title1}
                        <span>{t.title2}</span>
                    </h1>
                    <p className="hero-description fade-in" style={{ animationDelay: '0.2s' }}>
                        {t.subtitle}
                    </p>
                </div>
                <div className="hero-scroll fade-in" style={{ animationDelay: '0.8s' }}>
                    <div className="scroll-line"></div>
                    <span>{language === 'pt' ? 'ROLANDO PARA BAIXO' : 'SCROLL DOWN'}</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
