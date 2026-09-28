import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';
import { 
  Terminal, 
  Database, 
  Server, 
  Cloud, 
  Github, 
  Linkedin, 
  ArrowRight, 
  User, 
  X, 
  CheckCircle2,
  ExternalLink,
  Cpu
} from 'lucide-react';

const TechHero = () => {
    const { language, toggleLanguage } = useLanguage();
    const heroT = translations[language].hero;
    const [showTerminal, setShowTerminal] = useState(false);

    const scrollToProjects = () => {
        const el = document.getElementById('works');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="tech-hero-section">
            <div className="tech-hero-container">
                {/* Tech Identity Card Centralizado */}
                <div className="main-tech-card">
                    <div className="main-tech-header">
                        <div className="tech-card-dots">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <span className="main-tech-badge">vini@cloud-ops ~</span>
                        <button 
                            onClick={toggleLanguage} 
                            style={{
                                background: 'rgba(255, 255, 255, 0.04)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: '#20d6c7',
                                borderRadius: '4px',
                                padding: '2px 7px',
                                fontSize: '10px',
                                cursor: 'pointer',
                                fontWeight: 700,
                                fontFamily: 'monospace'
                            }}
                            title="Alternar Idioma / Switch Language"
                        >
                            {language.toUpperCase()}
                        </button>
                    </div>

                    <div className="main-tech-body">
                        <div className="main-tech-avatar">
                            <Terminal size={32} />
                        </div>
                        <h1 className="main-tech-name">Vinicius</h1>
                        <p className="main-tech-title">Database & Cloud Ops Engineer</p>

                        <div className="main-tech-tags">
                            <span><Database size={13} /> Oracle ATP / PL-SQL</span>
                            <span><Server size={13} /> Docker & Linux SRE</span>
                            <span><Cloud size={13} /> OCI / Cloudflare</span>
                        </div>

                        <div className="main-tech-status">
                            <span className="pulse-green"></span>
                            {language === 'pt' ? 'Disponível para oportunidades remotas globais' : 'Available for global remote opportunities'}
                        </div>

                        <div className="main-tech-socials">
                            <a href="https://github.com/ViniScooper" target="_blank" rel="noopener noreferrer" title="GitHub">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/vini-scooper" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                        </div>

                        {/* Botões de Ação Principais */}
                        <div className="main-tech-actions">
                            <button 
                                className="tech-btn primary"
                                onClick={() => setShowTerminal(true)}
                            >
                                <User size={16} />
                                {language === 'pt' ? 'Sobre Mim' : 'About Me'}
                            </button>
                            <button 
                                className="tech-btn secondary"
                                onClick={scrollToProjects}
                            >
                                {language === 'pt' ? 'Ver Projetos' : 'View Projects'}
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL EM FORMATO DE TERMINAL (Animação Sobre Mim) */}
            {showTerminal && (
                <div className="terminal-modal-overlay" onClick={() => setShowTerminal(false)}>
                    <div className="terminal-window" onClick={(e) => e.stopPropagation()}>
                        <div className="terminal-window-header">
                            <div className="tech-card-dots">
                                <span className="dot red" onClick={() => setShowTerminal(false)} style={{ cursor: 'pointer' }}></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <span className="terminal-window-title">bash - vini@cloud-ops: ~/sobre_mim.md</span>
                            <button className="terminal-close-btn" onClick={() => setShowTerminal(false)}>
                                <X size={16} />
                            </button>
                        </div>

                        <div className="terminal-window-content">
                            <div className="terminal-prompt">
                                <span className="prompt-user">vini@cloud-ops</span>:<span className="prompt-path">~</span>$ <span className="prompt-cmd">cat sobre_mim.md</span>
                            </div>

                            <div className="terminal-text-block">
                                <p className="terminal-highlight">
                                    {language === 'pt' 
                                        ? '👋 Olá! Sou José Vinicius, Database & Cloud Ops Engineer.'
                                        : '👋 Hello! I am José Vinicius, Database & Cloud Ops Engineer.'}
                                </p>
                                
                                <p>
                                    {language === 'pt'
                                        ? 'Tenho mais de 5 anos de experiência atuando na intersecção entre Engenharia de Dados, Administração de Bancos de Dados (Oracle PL/SQL, MySQL, PostgreSQL) e Cultura DevOps/SRE (Docker, Linux, Nuvem OCI e Redes).'
                                        : 'I have over 5 years of experience bridging Data Engineering, Database Administration (Oracle PL/SQL, MySQL, PostgreSQL), and DevOps/SRE practices (Docker, Linux, OCI Cloud, and Networking).'}
                                </p>

                                <div className="terminal-subblock">
                                    <h4 style={{ color: '#20d6c7', margin: '14px 0 6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <Cpu size={16} /> {language === 'pt' ? 'O Projeto Flagship: CloudOps Hub' : 'Flagship Project: CloudOps Hub'}
                                    </h4>
                                    <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
                                        {language === 'pt'
                                            ? 'Um dos projetos que mais me orgulho de ter arquitetado é o CloudOps Hub: uma plataforma privada de observabilidade, auto-healing e gerenciamento de infraestrutura. Nela, implementei um sistema de sentinela com sondas HTTP ativas para reiniciar containers travados (auto-cura autônoma), visualização de live logs sem terminal SSH e gravação de séries temporais históricas na nuvem Oracle Autonomous Database (ATP Always Free) — entregando poder de Datadog consumindo menos de 10 MB de RAM na VM.'
                                            : 'One of the projects I take the most pride in is CloudOps Hub: a private observability, auto-healing, and infrastructure reliability platform. It features active HTTP probing that automatically restarts hung containers (autonomous self-healing), SSH-less live container logging, and historical time-series telemetry persisted directly into Oracle Autonomous Database (ATP Always Free) — delivering Datadog-level insights with under 10 MB RAM overhead on the host.'}
                                    </p>
                                </div>

                                <div className="terminal-stats-grid">
                                    <div className="t-stat">
                                        <span className="t-stat-val">5+</span>
                                        <span className="t-stat-lbl">{language === 'pt' ? 'Anos com Tecnologia & Dados' : 'Years with Tech & Data'}</span>
                                    </div>
                                    <div className="t-stat">
                                        <span className="t-stat-val">50+</span>
                                        <span className="t-stat-lbl">{language === 'pt' ? 'Bancos Otimizados' : 'Optimized Databases'}</span>
                                    </div>
                                    <div className="t-stat">
                                        <span className="t-stat-val">99.9%</span>
                                        <span className="t-stat-lbl">{language === 'pt' ? 'Disponibilidade em Produção' : 'Uptime in Production'}</span>
                                    </div>
                                </div>

                                <div className="terminal-footer-cmd">
                                    <span className="prompt-user">vini@cloud-ops</span>:<span className="prompt-path">~</span>$ <span className="cursor-blink">_</span>
                                </div>
                            </div>
                        </div>

                        <div className="terminal-actions-bar">
                            <button 
                                className="tech-btn primary"
                                onClick={() => {
                                    setShowTerminal(false);
                                    scrollToProjects();
                                }}
                            >
                                {language === 'pt' ? 'Conferir Projetos' : 'Explore Projects'} <ArrowRight size={15} />
                            </button>
                            <button 
                                className="tech-btn secondary"
                                onClick={() => setShowTerminal(false)}
                            >
                                {language === 'pt' ? 'Fechar Terminal' : 'Close Terminal'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default TechHero;
