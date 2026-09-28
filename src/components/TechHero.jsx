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
  ExternalLink,
  Cpu,
  ChevronLeft,
  ChevronRight,
  Radio,
  Newspaper
} from 'lucide-react';

const cloudHubImages = [
    {
        name: "dashboard",
        url: "/cloud_imgs/dashboard.png",
        captionPt: "Dashboard Multi-Cloud: Painel unificado de monitoramento de instâncias, CPU, RAM e status de serviços.",
        captionEn: "Multi-Cloud Dashboard: Unified overview of instances, CPU, RAM, and service health across providers."
    },
    {
        name: "deploy",
        url: "/cloud_imgs/deploy.png",
        captionPt: "Deploy Automatizado: Clonagem de repositórios, orquestração Docker Compose e gestão Zero-Agent via SSH2.",
        captionEn: "Automated Deploy: Repository cloning, Docker Compose orchestration, and Zero-Agent management via SSH2."
    },
    {
        name: "migracao",
        url: "/cloud_imgs/migracao.png",
        captionPt: "Migração & Storage: Gestão centralizada de buckets (OCI Object Storage / S3) e portabilidade multi-cloud.",
        captionEn: "Migration & Storage: Centralized bucket management (OCI Object Storage / S3) and cloud portability."
    },
    {
        name: "monitoramento",
        url: "/cloud_imgs/monitoramento.png",
        captionPt: "Monitoramento Ativo & Sondas: Observabilidade em tempo real, persistência no Oracle ATP e alertas via WhatsApp.",
        captionEn: "Active Probing & Monitoring: Real-time observability, Oracle ATP persistence, and automated WhatsApp alerts."
    }
];

const TechHero = () => {
    const { language, toggleLanguage } = useLanguage();

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
                                    ? 'Atuo há mais de 5 anos desenvolvendo e administrando ambientes de missão crítica. Minha especialidade combina a solidez e consistência de bancos relacionais corporativos (Oracle Autonomous ATP, PL/SQL, PostgreSQL, MySQL) com a resiliência e agilidade de infraestruturas modernas (Docker, Linux SRE, Nuvem OCI/AWS, automação CI/CD e redes seguras via Cloudflare).'
                                    : 'I have over 5 years of hands-on experience architecting and maintaining mission-critical environments. My expertise bridges enterprise relational databases (Oracle Autonomous ATP, PL/SQL, PostgreSQL, MySQL) with modern cloud-native resilience (Docker, Linux SRE, OCI/AWS Cloud, CI/CD automation, and secure networking via Cloudflare).'}
                            </p>

                            <div className="terminal-code-box">
                                <div className="terminal-code-header">
                                    <Cpu size={15} style={{ color: '#20d6c7' }} />
                                    <strong style={{ color: '#20d6c7' }}>
                                        {language === 'pt' ? '🚀 O Projeto Flagship: CloudOps Hub' : '🚀 Flagship Project: CloudOps Hub'}
                                    </strong>
                                </div>
                                <p style={{ color: '#cbd5e1', fontSize: '0.85rem', lineHeight: '1.6', margin: '6px 0 0' }}>
                                    {language === 'pt'
                                        ? 'Cansado do gargalo operacional de abrir 10+ painéis isolados (Oracle Cloud, AWS, Hostinger, Vercel, Cloudflare e terminais SSH dispersos), concebi e arquitetei o CloudOps Hub: um "Single Pane of Glass" para operações multi-cloud. Nele implementei arquitetura Zero-Agent via SSH2, sondas de auto-healing ativas que recuperam containers caídos e alertam via WhatsApp, e persistência de telemetria analítica no Oracle Autonomous Database (ATP Always Free) via ORDS REST API — garantindo observabilidade de nível corporativo com custo zero de infraestrutura.'
                                        : 'Frustrated by the operational overhead of managing 10+ disconnected dashboards (Oracle Cloud, AWS, Hostinger, Vercel, Cloudflare, and scattered SSH windows), I designed and built CloudOps Hub: a unified "Single Pane of Glass" for multi-cloud operations. It features Zero-Agent management over SSH2, active auto-healing probes with WhatsApp alerts, and analytical telemetry persisted in Oracle Autonomous Database (ATP Always Free) via ORDS REST API — achieving enterprise-grade observability with zero infrastructure overhead.'}
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
                                    ? 'Plataforma privada de observabilidade, auto-healing de containers e confiabilidade de infraestrutura multi-cloud com Copiloto IA.'
                                    : 'Private multi-cloud observability, container auto-healing, and infrastructure reliability platform with AI Copilot.'}
                            </p>
                        </div>

                        {/* CARROSSEL DE IMAGENS EM FORMATO DE MONITOR DE TERMINAL */}
                        <div className="terminal-monitor-box">
                            <div className="terminal-monitor-top">
                                <span className="terminal-monitor-screen-title">
                                    🖥️ display_buffer_{currentImageIdx}: {language === 'pt' ? cloudHubImages[currentImageIdx].captionPt : cloudHubImages[currentImageIdx].captionEn}
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
                                    alt={cloudHubImages[currentImageIdx].name} 
                                    className="terminal-screen-img"
                                />
                            </div>
                        </div>

                        {/* ESPECIFICAÇÕES TÉCNICAS EM FORMATO TERMINAL LOG */}
                        <div className="terminal-specs-output">
                            <div className="spec-log-line">
                                <span className="log-tag tag-info">[CORE ARCHITECTURE]</span>
                                <span className="log-text">Next.js 14 · Fastify · Docker Engine · SSH2 · OCI SDK · LangChain & RAG AI Copilot</span>
                            </div>
                            <div className="spec-log-line">
                                <span className="log-tag tag-accent">[SINGLE PANE OF GLASS]</span>
                                <span className="log-text">
                                    {language === 'pt'
                                        ? 'Centralização de múltiplos provedores (AWS, Oracle Cloud OCI, Hostinger, Vercel e Cloudflare) em um só painel sem alternar abas.'
                                        : 'Unified management across multi-cloud providers (AWS, Oracle Cloud OCI, Hostinger, Vercel, Cloudflare) eliminating browser tab clutter.'}
                                </span>
                            </div>
                            <div className="spec-log-line">
                                <span className="log-tag tag-success">[AUTO-HEALING & HEALTH PROBES]</span>
                                <span className="log-text">
                                    {language === 'pt'
                                        ? 'Sondas HTTP ativas a cada 3 min nas portas internas. Reiniciação autônoma de containers com falha e alertas imediatos via WhatsApp.'
                                        : 'Active internal HTTP probes every 3 min. Autonomous failure recovery of containers with real-time WhatsApp alerts.'}
                                </span>
                            </div>
                            <div className="spec-log-line">
                                <span className="log-tag tag-accent">[ORACLE ATP & TELEMETRY]</span>
                                <span className="log-text">
                                    {language === 'pt'
                                        ? 'Telemetria e métricas históricas gravadas via ORDS REST API no Oracle Autonomous Database (Always Free) sem sobrecarga de RAM no host.'
                                        : 'Historical telemetry persisted via ORDS REST API into Oracle Autonomous Database (Always Free) with 0 MB host RAM overhead.'}
                                </span>
                            </div>
                            <div className="spec-log-line">
                                <span className="log-tag tag-warn">[ZERO-AGENT ORCHESTRATION]</span>
                                <span className="log-text">
                                    {language === 'pt'
                                        ? 'Deploy de repositórios GitHub, orquestração Docker Compose e inspeção de processos diretamente via SSH2 sem daemons pesados.'
                                        : 'Zero-agent GitHub deployments, Docker Compose orchestration, and process tracking directly over secure SSH2.'}
                                </span>
                            </div>
                            <div className="spec-log-line">
                                <span className="log-tag tag-security">[SECURITY & STORAGE]</span>
                                <span className="log-text">
                                    {language === 'pt'
                                        ? 'Cloudflare Zero Trust Tunnels (sem portas públicas expostas) + Gestão centralizada de Buckets S3 e OCI Object Storage.'
                                        : 'Cloudflare Zero Trust Tunnels (no exposed public ports) + Centralized S3 and OCI Object Storage management.'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Barra de Ações do Terminal */}
                    <div className="terminal-bottom-bar">
                        <button className="terminal-btn secondary" onClick={() => setView('card')}>
                            <ArrowLeft size={15} /> {language === 'pt' ? 'Voltar ao Console' : 'Back'}
                        </button>
                        <a 
                            href="https://www.tabnews.com.br/viniScooper/cansei-de-abrir-10-paineis-oracle-aws-hostinger-vercel-criei-um-hub-multi-cloud-com-ia-para-controlar-tudo-em-1-lugar" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="terminal-btn secondary"
                            title="Pitch no TabNews"
                        >
                            <Newspaper size={15} /> {language === 'pt' ? 'Artigo no TabNews' : 'TabNews Pitch'} ➔
                        </a>
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
                            <ExternalLink size={15} /> {language === 'pt' ? 'verificar site no ar' : 'check live site'} ➔
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
};

export default TechHero;
