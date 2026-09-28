import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

const Footer = () => {
    const { language } = useLanguage();
    const t = translations[language].footer;
    const navT = translations[language].nav;

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <span className="footer-logo">VINI PORT</span>
                    <div className="footer-nav">
                        <a href="#about">{navT.about}</a>
                        <a href="#works">{navT.projects}</a>
                        <a href="#skills">{navT.skills}</a>
                        <a href="#contact">{navT.contact}</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 VINI PORT. {t.rights.toUpperCase()}</p>
                    <div className="footer-btm-links">
                        <a href="#contact">{language === 'pt' ? 'CONTATO' : 'CONTACT'}</a>
                        <span>•</span>
                        <a href="#works">{language === 'pt' ? 'PROJETOS' : 'PROJECTS'}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
