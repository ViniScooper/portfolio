import React from 'react';
import { Database, Code, Shield, Terminal, Zap, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

const Skills = () => {
    const { language } = useLanguage();
    const t = translations[language].skills;

    const skillIcons = [<Database size={40} />, <Code size={40} />, <Zap size={40} />, <Shield size={40} />, <Layers size={40} />, <Terminal size={40} />];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">{t.title}</h2>
                <div className="skills-carousel">
                    <div className="skills-track">
                        {t.cards.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <div className="skill-icon">{skillIcons[index]}</div>
                                <h3 className="skill-card-title">{skill.title}</h3>
                                <p className="skill-card-desc">{skill.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
