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
  ArrowLeft,
  User, 
  X, 
  CheckCircle2,
  ExternalLink,
  Cpu,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Activity,
  Radio
} from 'lucide-react';

const cloudHubImages = [
    {
        url: "/Gemini_Generated_Image_m3mlltm3mlltm3ml.png",
        captionPt: "Arquitetura CloudOps Hub: Observabilidade Privada e Telemetria em Nuvem",
        captionEn: "CloudOps Hub Architecture: Private Observability and Cloud Telemetry"
    },
    {
        url: "/bytedata_dashboard.png",
        captionPt: "Dashboard de Métricas em Tempo Real e Persistência no Oracle ATP",
        captionEn: "Real-time Metrics Dashboard & Persistence in Oracle ATP"
    },
    {
        url: "/DATA4.png",
        captionPt: "Sondas de Saúde HTTP e Monitoramento de Containers Docker",
        captionEn: "Active HTTP Health Probing & Docker Container Monitoring"
    }
];

const TechHero = () => {
    const { language, toggleLanguage } = useLanguage();
    const heroT = translations[language].hero;

    // 'card' | 'terminal_about' | 'terminal_project'
    const [view, setView] = useState('card');
    const [currentImageIdx, setCurrentImageIdx] = useState(0);

    const nextImage = () => {
        setCurrentImageIdx((prev) => (prev + 1) % cloudHubImages.length);
    };

    const prevImage = () => {
        setCurrentImageIdx((prev) => (prev - 1 + cloudHubImages.length) % cloudHubImages.length);
    };

    return (
        <section className="tech-terminal-section">
            {/* ===================================================
                VISÃO 1: O CARD CENTRAL RETANGULAR ESTILO TERMINAL
               =================================================== */}
            {view === 'card' && (
                <div className="terminal-rect-card fade-in">
                    {/* Barra de Título do Terminal */}
                    <div className="terminal-titlebar">
                        <div className="terminal-dots">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <span className="terminal-title-text">vini@cloud-ops: ~</span>
                        <button 
                            onClick={toggleLanguage} 
                            className="terminal-lang-btn"
                            title="Alternar Idioma / Switch Language"
                        >
                            {language.toUpperCase()}
                        </button>
                    </div>

                    {/* Conteúdo do Card Retangular */}
                    <div className="terminal-rect-body">
                        <div className="terminal-rect-top">
                            <div className="terminal-avatar-box">
                                <Terminal size={28} />
                            </div>
                            <div className="terminal-rect-headings">
                                <h1 className="terminal-user-name">Vinicius</h1>
                                <p className="terminal-user-role">Database & Cloud Ops Engineer</p>
                            </div>
                        </div>

                        {/* Badges de Especialidade */}
                        <div className="terminal-tags-row">
                            <span className="terminal-pill"><Database size={12} /> Oracle ATP / PL-SQL</span>
                            <span className="terminal-pill"><Server size={12} /> Docker & Linux SRE</span>
                            <span className="terminal-pill"><Cloud size={12} /> OCI / Cloudflare</span>
                        </div>

                        {/* Status de Disponibilidade */}
                        <div className="terminal-status-row">
                            <span className="pulse-green"></span>
                            <span>{language === 'pt' ? 'Disponível para oportunidades remotas globais' : 'Available for global remote opportunities'}</span>
                        </div>

                        {/* Redes Sociais */}
                        <div className="terminal-socials-row">
                            <a href="https://github.com/ViniScooper" target="_blank" rel="noopener noreferrer" title="GitHub" className="terminal-social-link">
                                <Github size={18} /> <span>GitHub</span>
                            </a>
                            <a href="https://linkedin.com/in/vini-scooper" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="terminal-social-link">
                                <Linkedin size={18} /> <span>LinkedIn</span>
                            </a>
                        </div>

                        {/* Ações: Sobre Mim & Ver Projetos */}
                        <div className="terminal-actions-grid">
                            <button 
                                className="terminal-btn secondary"
                                onClick={() => setView('terminal_about')}
                            >
                                <User size={15} />
                                {language === 'pt' ? 'Sobre Mim' : 'About Me'}
                            </button>
                            <button 
                                className="terminal-btn primary"
                                onClick={() => setView('terminal_project')}
                            >
                                <Radio size={15} />
                                {language === 'pt' ? 'Ver Projetos' : 'View Projects'}
                                <ArrowRight size={15} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ===================================================
                VISÃO 2: TERMINAL SOBRE MIM
               =================================================== */}
            {view === 'terminal_about' && (
                <div className="terminal-fullscreen-window fade-in">
                    <div className="terminal-titlebar">
                        <div className="terminal-dots">
                            <span className="dot red" onClick={() => setView('card')} style={{ cursor: 'pointer' }}></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <span className="terminal-title-text">bash - vini@cloud-ops: ~/sobre_mim.md</span>
                        <button className="terminal-close-action" onClick={() => setView('card')}>
                            <X size={16} />
                        </button>
                    </div>

                    <div className="terminal-console-content">
                        <div className="terminal-cli-prompt">
                            <span className="prompt-green">vini@cloud-ops</span>:<span className="prompt-blue">~</span>$ <span className="prompt-white">cat sobre_mim.md</span>
                        </div>

                        <div className="terminal-text-flow">
                            <p className="terminal-highlight-line">
                                {language === 'pt' 
                                    ? '👋 Olá! Sou José Vinicius, Database & Cloud Ops Engineer.'
                                    : '👋 Hello! I am José Vinicius, Database & Cloud Ops Engineer.'}
                            </p>
                            
                            <p>
                                {language === 'pt'
                                    ? 'Atuo há mais de 5 anos desenvolvendo e administrando ambientes de missão crítica. Minha especialidade combina Administração de Bancos de Dados (Oracle PL/SQL, MySQL, PostgreSQL), Engenharia de Dados e Práticas SRE/DevOps (Docker, Linux, Nuvem OCI e Redes).'
                                    : 'I have over 5 years of experience architecting and maintaining mission-critical systems, combining Database Administration (Oracle PL/SQL, MySQL, PostgreSQL), Data Engineering, and DevOps/SRE practices (Docker, Linux, OCI Cloud, and Networking).'}
                            </p>

                            <div className="terminal-code-box">
                                <div className="terminal-code-header">
                                    <Cpu size={15} style={{ color: '#20d6c7' }} />
                                    <strong style={{ color: '#20d6c7' }}>
                                        {language === 'pt' ? 'O Projeto Flagship: CloudOps Hub' : 'Flagship Project: CloudOps Hub'}
                                    </strong>
                                </div>
                                <p style={{ color: '#cbd5e1', fontSize: '0.85rem', lineHeight: '1.6', margin: '6px 0 0' }}>
                                    {language === 'pt'
                                        ? 'Um dos projetos que mais me orgulho de ter concebido e arquitetado é o CloudOps Hub: uma plataforma privada de observabilidade, auto-healing e gerenciamento de microsserviços. Nela, implementei auto-cura autônoma via sondas HTTP internas, live streaming de logs do Docker sem terminal SSH e persistência de telemetria histórica no Oracle Autonomous Database (ATP Always Free) — entregando poder de Datadog consumindo menos de 10 MB de RAM na VM.'
                                        : 'One of the projects I take the most pride in is CloudOps Hub: a private observability and self-healing SRE platform. It features autonomous container restarts via active HTTP probes, SSH-less live container logging, and historical time-series persisted directly into Oracle Autonomous Database (ATP Always Free) — delivering Datadog-level power with under 10 MB RAM overhead.'}
                                </p>
                            </div>

                            <div className="terminal-metrics-cards">
                                <div className="terminal-mcard">
                                    <span className="mcard-val">5+</span>
                                    <span className="mcard-lbl">{language === 'pt' ? 'Anos com Tecnologia & Dados' : 'Years with Tech & Data'}</span>
                                </div>
                                <div className="terminal-mcard">
                                    <span className="mcard-val">50+</span>
                                    <span className="mcard-lbl">{language === 'pt' ? 'Bancos Otimizados' : 'Optimized Databases'}</span>
                                </div>
                                <div className="terminal-mcard">
                                    <span className="mcard-val">99.9%</span>
                                    <span className="mcard-lbl">{language === 'pt' ? 'Disponibilidade em Prod' : 'Production Uptime'}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="terminal-bottom-bar">
                        <button className="terminal-btn secondary" onClick={() => setView('card')}>
                            <ArrowLeft size={15} /> {language === 'pt' ? 'Voltar ao Console' : 'Back to Console'}
                        </button>
                        <button className="terminal-btn primary" onClick={() => setView('terminal_project')}>
                            <Radio size={15} /> {language === 'pt' ? 'Ver CloudOps Hub' : 'Inspect CloudOps Hub'} <ArrowRight size={15} />
                        </button>
                    </div>
                </div>
            )}

            {/* ===================================================
                VISÃO 3: TERMINAL DO PROJETO CLOUDOPS HUB (EXCLUSIVO)
               =================================================== */}
            {view === 'terminal_project' && (
                <div className="terminal-fullscreen-window fade-in">
                    <div className="terminal-titlebar">
                        <div className="terminal-dots">
                            <span className="dot red" onClick={() => setView('card')} style={{ cursor: 'pointer' }}></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <span className="terminal-title-text">bash - vini@cloud-ops: ~/projects/cloudops-hub (main)</span>
                        <button className="terminal-close-action" onClick={() => setView('card')}>
                            <X size={16} />
                        </button>
                    </div>

                    <div className="terminal-console-content">
                        <div className="terminal-cli-prompt">
                            <span className="prompt-green">vini@cloud-ops</span>:<span className="prompt-blue">~/projects/cloudops-hub</span>$ <span className="prompt-white">./inspect-system.sh --verbose</span>
                        </div>

                        {/* Banner do Projeto no Terminal */}
                        <div className="terminal-project-header-box">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                                <span className="terminal-status-badge">
                                    <span className="pulse-green"></span> PRODUCTION ONLINE
                                </span>
                                <span className="terminal-spec-badge">
                                    SRE / CLOUD OPS / ORACLE ATP
                                </span>
                            </div>
                            <h2 className="terminal-project-heading">CloudOps Hub</h2>
                            <p className="terminal-project-subheading">
                                {language === 'pt'
                                    ? 'Plataforma privada de observabilidade, auto-healing de containers e confiabilidade de infraestrutura.'
                                    : 'Private cloud observability, container auto-healing, and infrastructure reliability platform.'}
                            </p>
                        </div>

                        {/* CARROSSEL DE IMAGENS EM FORMATO DE MONITOR DE TERMINAL */}
                        <div className="terminal-monitor-box">
                            <div className="terminal-monitor-top">
                                <span className="terminal-monitor-screen-title">
                                    🖥️ display_buffer_0: {cloudHubImages[currentImageIdx].captionPt}
                                </span>
                                <div className="terminal-monitor-nav">
                                    <button onClick={prevImage} className="monitor-nav-btn" title="Imagem Anterior">
                                        <ChevronLeft size={16} /> {language === 'pt' ? 'Anterior' : 'Prev'}
                                    </button>
                                    <span className="monitor-counter">
                                        {currentImageIdx + 1} / {cloudHubImages.length}
                                    </span>
                                    <button onClick={nextImage} className="monitor-nav-btn" title="Próxima Imagem">
                                        {language === 'pt' ? 'Próxima' : 'Next'} <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>
                            
                            <div className="terminal-screen-frame">
                                <img 
                                    src={cloudHubImages[currentImageIdx].url} 
                                    alt="CloudOps Hub" 
                                    className="terminal-screen-img"
                                />
                            </div>
                        </div>

                        {/* ESPECIFICAÇÕES TÉCNICAS EM FORMATO TERMINAL LOG */}
                        <div className="terminal-specs-output">
                            <div className="spec-log-line">
                                <span className="log-tag tag-info">[CORE STACK]</span>
                                <span className="log-text">Next.js 16 (Turbopack) · React 19 · Fastify · Docker Engine · SSH2</span>
                            </div>
                            <div className="spec-log-line">
                                <span className="log-tag tag-success">[AUTO-HEALING]</span>
                                <span className="log-text">Sonda HTTP ativa a cada 3 min nas portas internas. Reinicia containers caídos e notifica via WhatsApp.</span>
                            </div>
                            <div className="spec-log-line">
                                <span className="log-tag tag-accent">[ORACLE ATP]</span>
                                <span className="log-text">Métricas históricas gravadas via ORDS REST API na nuvem Oracle Always Free (0 MB RAM no host).</span>
                            </div>
                            <div className="spec-log-line">
                                <span className="log-tag tag-warn">[LIVE LOGS]</span>
                                <span className="log-text">Streaming em tempo real com busca e coloração de sintaxe direta no navegador sem acesso SSH.</span>
                            </div>
                            <div className="spec-log-line">
                                <span className="log-tag tag-security">[SECURITY]</span>
                                <span className="log-text">Cloudflare Tunnels protegendo tráfego TLS/HTTPS sem expor portas públicas na máquina virtual.</span>
                            </div>
                        </div>
                    </div>

                    {/* Barra de Ações do Terminal */}
                    <div className="terminal-bottom-bar">
                        <button className="terminal-btn secondary" onClick={() => setView('card')}>
                            <ArrowLeft size={15} /> {language === 'pt' ? 'Voltar ao Console' : 'Back'}
                        </button>
                        <a 
                            href="https://github.com/ViniScooper/CloudOps_Hub" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="terminal-btn secondary"
                        >
                            <Github size={15} /> GitHub Code
                        </a>
                        <a 
                            href="https://cloudops-hub-dun.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="terminal-btn primary"
                        >
                            <ExternalLink size={15} /> {language === 'pt' ? 'Executar Demo no Ar' : 'Launch Live Demo'} ➔
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
};

export default TechHero;
