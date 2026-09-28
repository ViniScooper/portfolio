import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

const SkillLists = () => {
    const { language } = useLanguage();
    const categories = translations[language].skillLists;

    return (
        <section className="skill-lists">
            <div className="container">
                <div className="skill-lists-grid">
                    {categories.map((cat, index) => (
                        <div key={index} className="skill-list-category">
                            <h3 className="category-title">{cat.title}</h3>
                            <ul className="skills-ul">
                                {cat.skills.map((skill, si) => (
                                    <li key={si}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillLists;
