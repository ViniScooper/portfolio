import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';
import { Github, Linkedin, Terminal, Server, Database, Cloud } from 'lucide-react';

const About = () => {
    const { language } = useLanguage();
    const t = translations[language].about;
    const navT = translations[language].nav;
    const heroT = translations[language].hero;

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-title-wrapper">
                        <h2 className="section-title">{navT.about}</h2>
                        
                        {/* Tech Identity Card (Minimalista, moderno, sem foto pessoal) */}
                        <div className="about-image-container fade-in" style={{ animationDelay: '0.3s' }}>
                            <div className="about-tech-card">
                                <div className="tech-card-header">
                                    <div className="tech-card-dots">
                                        <span className="dot red"></span>
                                        <span className="dot yellow"></span>
                                        <span className="dot green"></span>
                                    </div>
                                    <span className="tech-card-badge">vini@cloud-ops ~</span>
                                </div>
                                <div className="tech-card-body">
                                    <div className="tech-avatar-icon">
                                        <Terminal size={28} />
                                    </div>
                                    <h3 className="tech-card-name">Vinicius</h3>
                                    <p className="tech-card-role">Software & Cloud Database Engineer</p>
                                    
                                    <div className="tech-card-tags">
                                        <span><Database size={13} /> PostgreSQL (RDS) & Oracle</span>
                                        <span><Server size={13} /> Terraform & Flyway CI/CD</span>
                                        <span><Cloud size={13} /> AWS / OCI & Docker</span>
                                    </div>
                                </div>
                                
                                <div className="about-availability">
                                    <span className="pulse-green"></span> {heroT.remote}
                                </div>

                                <div className="about-socials">
                                    <a href="https://github.com/ViniScooper" target="_blank" rel="noopener noreferrer" title="GitHub"><Github size={20} /></a>
                                    <a href="https://linkedin.com/in/vini-scooper" target="_blank" rel="noopener noreferrer" title="LinkedIn"><Linkedin size={20} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-content">
                        <p className="large-text">
                            {t.title}
                        </p>
                        <p className="secondary-text">
                            {t.description}
                        </p>
                        <div className="about-stats">
                            {t.stats.map((stat, index) => (
                                <div key={index} className="stat-item">
                                    <span className="stat-number">{stat.value}</span>
                                    <span className="stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
