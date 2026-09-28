import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';
import { Languages } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language].nav;
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, id) => {
        if (location.pathname !== '/') {
            e.preventDefault();
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="logo-wrapper">
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="navbar-logo-svg"
                    >
                        <path
                            d="M13 2L3 14H11L9 22L21 10H13L15 2Z"
                            className="logo-path"
                        />
                    </svg>
                    <span className="logo-text">Vini</span>
                </Link>
                <div className="nav-right">
                    <ul className="nav-links">
                        <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>{t.about}</a></li>
                        <li><a href="#works" onClick={(e) => handleNavClick(e, 'works')}>{t.projects}</a></li>
                        <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>{t.skills}</a></li>
                        <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>{t.contact}</a></li>
                    </ul>
                    <button onClick={toggleLanguage} className="lang-toggle" title="Switch Language">
                        <Languages size={20} />
                        <span>{language === 'pt' ? 'EN' : 'PT'}</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
