import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

const Contact = () => {
    const { language } = useLanguage();
    const t = translations[language].contact;

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2 className="section-title">{t.title}</h2>
                        <p className="contact-email">vviniciuslourenco@gmail.com</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/jose-vinicius-louren%C3%A7o-1a6b9014a/" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
                            <a href="https://github.com/ViniScooper" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
                        </div>
                    </div>
                    <form className="contact-form">
                        <div className="form-group">
                            <label>{t.name}</label>
                            <input type="text" placeholder={language === 'pt' ? "Seu nome" : "Your name"} />
                        </div>
                        <div className="form-group">
                            <label>{t.email}</label>
                            <input type="email" placeholder={language === 'pt' ? "seu@email.com" : "your@email.com"} />
                        </div>
                        <div className="form-group">
                            <label>{t.message}</label>
                            <textarea placeholder={language === 'pt' ? "Fale sobre seu projeto..." : "Tell me about your project..."}></textarea>
                        </div>
                        <button type="submit" className="submit-btn">{t.send}</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
