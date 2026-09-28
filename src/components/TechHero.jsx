import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
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
  Newspaper,
  Globe
} from 'lucide-react';

const cloudHubSlides = [
    {
        id: "dashboard",
        name: "Dashboard Multi-Cloud",
        tabTitlePt: "1. Dashboard & Hardware",
        tabTitleEn: "1. Dashboard & Hardware",
        url: "/cloud_imgs/dashboard.png",
        captionPt: "Painel unificado de monitoramento de instâncias, telemetria de CPU, RAM, NVMe e purge de cache de kernel Linux.",
        captionEn: "Unified multi-cloud instance monitoring, live CPU/RAM/NVMe telemetry, and Linux kernel cache purge.",
        badge: "SINGLE PANE OF GLASS · ULTRA-LOW OVERHEAD (< 50MB RAM)",
        detailsPt: [
            {
                tag: "[SINGLE PANE OF GLASS]",
                tagClass: "tag-info",
                title: "Visão Unificada Multi-Cloud:",
                desc: "Substitui ferramentas pesadas e fragmentadas (Portainer, Coolify, Datadog) por um console centralizado para Oracle Cloud (OCI), AWS EC2, Hostinger e VPS bare-metal com footprint inferior a 50 MB de RAM."
            },
            {
                tag: "[LIVE HARDWARE METRICS]",
                tagClass: "tag-accent",
                title: "Telemetria em Tempo Real & Zero Daemons:",
                desc: "Monitoramento sob demanda de consumo de CPU, memória física (usada/total), disco NVMe e conectividade na porta SSH 22 sem agentes residentes pesados."
            },
            {
                tag: "[1-CLICK RAM CACHE PURGE]",
                tagClass: "tag-success",
                title: "Otimização Ativa de Memória (drop_caches):",
                desc: "Libera com segurança caches inativos de páginas do kernel Linux, dentries e inodes com 1 clique, sem derrubar conexões ativas ou reiniciar containers."
            },
            {
                tag: "[MULTI-VM CLUSTER]",
                tagClass: "tag-warn",
                title: "Alternância Rápida de Nós:",
                desc: "Context switcher no topo para alternar instantaneamente entre nós do cluster: instance-bytedata (2 OCPUs · 1GB RAM) e cloudops-micro-02 (1 OCPU · 1GB + 1GB Swap)."
            }
        ],
        detailsEn: [
            {
                tag: "[SINGLE PANE OF GLASS]",
                tagClass: "tag-info",
                title: "Unified Multi-Cloud Control:",
                desc: "Replaces bulky, expensive enterprise tools (Portainer, Coolify, Datadog) with a streamlined console for Oracle Cloud (OCI), AWS EC2, Hostinger, and bare-metal VPS with under 50 MB host RAM overhead."
            },
            {
                tag: "[LIVE HARDWARE METRICS]",
                tagClass: "tag-accent",
                title: "Real-Time Telemetry & Zero Daemons:",
                desc: "On-demand CPU usage, physical RAM (used/total), NVMe storage, and SSH port 22 connectivity gathered over lightweight SSH rather than heavy background daemons."
            },
            {
                tag: "[1-CLICK RAM CACHE PURGE]",
                tagClass: "tag-success",
                title: "Active Memory Optimization (drop_caches):",
                desc: "Safely releases inactive Linux kernel page caches, dentries, and inodes in 1 click without restarting containers or dropping active connections."
            },
            {
                tag: "[MULTI-VM CLUSTER]",
                tagClass: "tag-warn",
                title: "Rapid Multi-Node Switching:",
                desc: "Topbar context switcher toggling instantly between cluster nodes: instance-bytedata (2 OCPUs · 1GB RAM) and cloudops-micro-02 (1 OCPU · 1GB + 1GB Swap)."
            }
        ]
    },
    {
        id: "deploy",
        name: "Deploy & CI/CD",
        tabTitlePt: "2. Deploy & CI/CD",
        tabTitleEn: "2. Deploy & CI/CD",
        url: "/cloud_imgs/deploy.png",
        captionPt: "Automação GitFlow orientada a SSH: merge de PRs, deploy atômico de containers sem downtime e rollback instantâneo.",
        captionEn: "SSH-driven GitFlow automation: PR merging, atomic zero-downtime container deploy, and instant rollback.",
        badge: "CONTINUOUS DEPLOYMENT · ZERO-DOWNTIME · INSTANT ROLLBACK",
        detailsPt: [
            {
                tag: "[GITFLOW & 1-CLICK MERGE]",
                tagClass: "tag-info",
                title: "Merge de Pull Requests em 1 Clique:",
                desc: "Mescla branches de develop ou hotfix diretamente para main com um clique sem precisar abrir o portal do GitHub."
            },
            {
                tag: "[ZERO-DOWNTIME DEPLOY]",
                tagClass: "tag-success",
                title: "Deploy Atômico via SSH2:",
                desc: "Conecta com segurança via SSH2 na máquina alvo para executar git pulls atômicos, instalação de dependências e reload de containers/processos sem indisponibilidade."
            },
            {
                tag: "[INSTANT 1-CLICK ROLLBACK]",
                tagClass: "tag-warn",
                title: "Reversão Imediata de Versão:",
                desc: "Se um deploy falhar ou apresentar regressão em produção, reverte para o commit estável anterior em 1 clique mantendo o ambiente íntegro."
            },
            {
                tag: "[LIVE BASH STREAMING & AUDIT]",
                tagClass: "tag-security",
                title: "Console de Logs & Trilha de Auditoria:",
                desc: "Streaming físico em tempo real das etapas de build no navegador + histórico completo com timestamp, branch, commit hash, autor, duração e status."
            }
        ],
        detailsEn: [
            {
                tag: "[GITFLOW & 1-CLICK MERGE]",
                tagClass: "tag-info",
                title: "1-Click Pull Request & Branch Merging:",
                desc: "Merge develop or hotfix branches directly into main with a single click without opening the GitHub web portal."
            },
            {
                tag: "[ZERO-DOWNTIME DEPLOY]",
                tagClass: "tag-success",
                title: "Atomic SSH2-Driven Deploy:",
                desc: "Connects securely over SSH to trigger atomic Git pulls, dependency installations, and container/process reloads with zero downtime."
            },
            {
                tag: "[INSTANT 1-CLICK ROLLBACK]",
                tagClass: "tag-warn",
                title: "Instant 1-Click Rollback:",
                desc: "If a deployment fails or causes production regressions, roll back to the previous stable release commit with one click."
            },
            {
                tag: "[LIVE BASH STREAMING & AUDIT]",
                tagClass: "tag-security",
                title: "Live Build Streaming & Comprehensive Audit Trail:",
                desc: "Stream physical bash pipeline outputs in real time inside the browser + full logging of deploy timestamp, author, commit hash, duration, and status."
            }
        ]
    },
    {
        id: "migracao",
        name: "Migração & Storage",
        tabTitlePt: "3. Migração & Storage",
        tabTitleEn: "3. Migration & Storage",
        url: "/cloud_imgs/migracao.png",
        captionPt: "Workspace de migração multi-cloud sem vendor lock-in, detecção de stack em tempo real e storage OCI / S3 unificado.",
        captionEn: "Multi-cloud migration workspace without vendor lock-in, real-time stack detection, and unified OCI / S3 storage.",
        badge: "MULTI-CLOUD PORTABILITY · TERRAFORM AUTO-GEN · S3/OCI STORAGE",
        detailsPt: [
            {
                tag: "[REAL-TIME STACK DETECTION]",
                tagClass: "tag-info",
                title: "Detecção Automática de Stack:",
                desc: "Descobre ativamente o que está rodando na VM conectada (Docker, MySQL 8.0, Object Storage, Nginx ou systemd). VMs limpas reportam 0 projetos sem dados mockados."
            },
            {
                tag: "[MULTI-CLOUD MIGRATION]",
                tagClass: "tag-success",
                title: "Migração entre Provedores em 1 Clique:",
                desc: "Transição e cutover automatizado entre Oracle Cloud (OCI), AWS EC2 e provedores VPS (Hostinger, Hetzner, DigitalOcean) com geração automática de scripts Terraform."
            },
            {
                tag: "[STORAGE EXPLORER]",
                tagClass: "tag-accent",
                title: "Gestão Unificada de Object Storage:",
                desc: "Painel único para inspecionar e criar buckets em OCI Object Storage e AWS S3, upload de assets e backups, eliminando o aprisionamento tecnológico."
            },
            {
                tag: "[INTEGRAÇÕES VERCEL & RENDER]",
                tagClass: "tag-warn",
                title: "Edge Frontends & Anti-Sleep Backend:",
                desc: "Acompanhamento de builds da Vercel Edge e monitoramento de microsserviços no Render com heartbeats cron para evitar hibernação de instâncias gratuitas."
            }
        ],
        detailsEn: [
            {
                tag: "[REAL-TIME STACK DETECTION]",
                tagClass: "tag-info",
                title: "Real-Time Stack Detection & Clean State:",
                desc: "Discovers what is actually running on your connected VM (Docker, MySQL 8.0, Object Storage, Nginx, or systemd). Fresh VMs report zero active projects cleanly."
            },
            {
                tag: "[MULTI-CLOUD MIGRATION]",
                tagClass: "tag-success",
                title: "1-Click Multi-Cloud Migration:",
                desc: "Automated cutover between Oracle Cloud (OCI), AWS EC2, and VPS providers (Hostinger, Hetzner, DigitalOcean) with automated Terraform script generation."
            },
            {
                tag: "[STORAGE EXPLORER]",
                tagClass: "tag-accent",
                title: "Centralized Object Storage Explorer:",
                desc: "Unified interface to inspect and create buckets in OCI Object Storage and AWS S3, asset uploads, and backups without vendor lock-in."
            },
            {
                tag: "[VERCEL & RENDER INTEGRATIONS]",
                tagClass: "tag-warn",
                title: "Edge Frontend Visibility & Anti-Sleep Crons:",
                desc: "Real-time visibility into Vercel production edge builds and automated Render backend heartbeats to prevent free instances from going to sleep."
            }
        ]
    },
    {
        id: "monitoramento",
        name: "Watchdog SRE & Odisseu AI",
        tabTitlePt: "4. Watchdog & IA",
        tabTitleEn: "4. Watchdog & AI",
        url: "/cloud_imgs/monitoramento.png",
        captionPt: "Guardião SRE 24/7 com auto-healing, alertas críticos via WhatsApp, Copiloto Odisseu AI (LangChain RAG) e backups MySQL.",
        captionEn: "24/7 SRE Watchdog with auto-healing, critical WhatsApp alerts, Odisseu AI Copilot (LangChain RAG), and MySQL backups.",
        badge: "24/7 WATCHDOG · WHATSAPP ALERTS · ODISSEU AI COPILOT · MYSQL GZIP",
        detailsPt: [
            {
                tag: "[24/7 SRE WATCHDOG]",
                tagClass: "tag-success",
                title: "Auto-Healing & Alertas via WhatsApp:",
                desc: "Loop de telemetria autônomo a cada 3 min. Dispara alerta de emergência ao atingir >= 90% de RAM (evitando Linux OOM killer), detecta queda de containers críticos e reinicia automaticamente com notificações CallMeBot."
            },
            {
                tag: "[ODISSEU AI COPILOT]",
                tagClass: "tag-info",
                title: "Copiloto DevOps com LangChain RAG:",
                desc: "Arquitetura RAG indexada na telemetria e estado real da infraestrutura. Suporta Groq (Llama 3.3 70B), Google Gemini e Ollama para diagnóstico e troubleshooting interativo."
            },
            {
                tag: "[ORACLE ATP ALWAYS FREE]",
                tagClass: "tag-accent",
                title: "Persistência de Telemetria no Oracle ATP:",
                desc: "Métricas históricas gravadas via ORDS REST API na nuvem Oracle Always Free (Exadata 20GB, mTLS :1522) com 0 MB de consumo de memória na máquina hospedeira."
            },
            {
                tag: "[MYSQL 8.0 GZIP BACKUPS]",
                tagClass: "tag-security",
                title: "Dumps Automatizados com Retenção de 7 Dias:",
                desc: "Dumps transacionais de banco MySQL compactados on the fly com gzip -9 e expurgo automático de arquivos com mais de 7 dias para preservar o armazenamento NVMe."
            }
        ],
        detailsEn: [
            {
                tag: "[24/7 SRE WATCHDOG]",
                tagClass: "tag-success",
                title: "Autonomous Auto-Healing & WhatsApp Alerts:",
                desc: "Background telemetry loop running every 3 min. Triggers emergency alerts if RAM reaches 90% (preventing OOM crashes), detects container failures, and restarts services automatically with CallMeBot rate limiting."
            },
            {
                tag: "[ODISSEU AI COPILOT]",
                tagClass: "tag-info",
                title: "Autonomous DevOps Copilot (LangChain RAG):",
                desc: "RAG architecture indexed on live telemetry, container states, and hardware metrics. Supports Groq (Llama 3.3 70B), Google Gemini, and local Ollama runtimes."
            },
            {
                tag: "[ORACLE ATP ALWAYS FREE]",
                tagClass: "tag-accent",
                title: "Zero-Overhead Oracle ATP Persistence:",
                desc: "Historical telemetry persisted via ORDS REST API into Oracle Autonomous Database Always Free tier (Exadata 20GB, mTLS :1522) with 0 MB host RAM overhead."
            },
            {
                tag: "[MYSQL 8.0 GZIP BACKUPS]",
                tagClass: "tag-security",
                title: "Automated Gzip Dumps & 7-Day Rolling Retention:",
                desc: "Transactional MySQL dumps piped to gzip -9 with automated rotation purging files older than 7 days to conserve Always Free NVMe disk space."
            }
        ]
    }
];

const TechHero = () => {
    const { language, toggleLanguage } = useLanguage();

    // 'card' | 'terminal_about' | 'terminal_project'
    const [view, setView] = useState('card');
    const [currentImageIdx, setCurrentImageIdx] = useState(0);

    const nextImage = () => {
        setCurrentImageIdx((prev) => (prev + 1) % cloudHubSlides.length);
    };

    const prevImage = () => {
        setCurrentImageIdx((prev) => (prev - 1 + cloudHubSlides.length) % cloudHubSlides.length);
    };

    const currentSlide = cloudHubSlides[currentImageIdx];
    const slideDetails = language === 'pt' ? currentSlide.detailsPt : currentSlide.detailsEn;

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
                        
                        {/* Seletor de Idioma Bilíngue em Destaque */}
                        <div className="terminal-lang-switch-group" role="group" aria-label="Idioma / Language">
                            <button 
                                type="button"
                                onClick={() => language !== 'pt' && toggleLanguage()} 
                                className={`terminal-lang-pill ${language === 'pt' ? 'active' : ''}`}
                                title="Mudar para Português"
                            >
                                🇧🇷 PT
                            </button>
                            <button 
                                type="button"
                                onClick={() => language !== 'en' && toggleLanguage()} 
                                className={`terminal-lang-pill ${language === 'en' ? 'active' : ''}`}
                                title="Switch to English"
                            >
                                🇺🇸 EN
                            </button>
                        </div>
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
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div className="terminal-lang-switch-group" role="group" aria-label="Idioma / Language">
                                <button 
                                    type="button"
                                    onClick={() => language !== 'pt' && toggleLanguage()} 
                                    className={`terminal-lang-pill ${language === 'pt' ? 'active' : ''}`}
                                    title="Mudar para Português"
                                >
                                    🇧🇷 PT
                                </button>
                                <button 
                                    type="button"
                                    onClick={() => language !== 'en' && toggleLanguage()} 
                                    className={`terminal-lang-pill ${language === 'en' ? 'active' : ''}`}
                                    title="Switch to English"
                                >
                                    🇺🇸 EN
                                </button>
                            </div>
                            <button className="terminal-close-action" onClick={() => setView('card')}>
                                <X size={16} />
                            </button>
                        </div>
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
                                    ? 'Atuo há mais de 5 anos desenvolvendo e administrando ambientes de missão crítica. Minha especialidade combina a solidez e consistência de bancos relacionais corporativos (Oracle Autonomous ATP, PL/SQL, PostgreSQL, MySQL) com a resiliência e agilidade de infraestruturas modernas (Docker, Linux SRE, Nuvem OCI/AWS, automação CI/CD e redes seguras via Cloudflare Zero Trust).'
                                    : 'I have over 5 years of hands-on experience architecting and maintaining mission-critical environments. My expertise bridges enterprise relational databases (Oracle Autonomous ATP, PL/SQL, PostgreSQL, MySQL) with modern cloud-native resilience (Docker, Linux SRE, OCI/AWS Cloud, CI/CD automation, and secure networking via Cloudflare Zero Trust).'}
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
                                        ? 'Cansado do gargalo operacional de abrir 10+ painéis isolados (Oracle Cloud, AWS, Hostinger, Vercel, Cloudflare e terminais SSH dispersos), concebi e arquitetei o CloudOps Hub: um "Single Pane of Glass" para operações multi-cloud. Nele implementei arquitetura Zero-Agent via SSH2, sondas de auto-healing ativas que recuperam containers caídos e alertam via WhatsApp, e persistência de telemetria analítica no Oracle Autonomous Database (ATP Always Free) via ORDS REST API — garantindo observabilidade corporativa com consumo inferior a 50 MB de RAM.'
                                        : 'Frustrated by the operational overhead of managing 10+ disconnected dashboards (Oracle Cloud, AWS, Hostinger, Vercel, Cloudflare, and scattered SSH windows), I designed and built CloudOps Hub: a unified "Single Pane of Glass" for multi-cloud operations. It features Zero-Agent management over SSH2, active auto-healing probes with WhatsApp alerts, and analytical telemetry persisted in Oracle Autonomous Database (ATP Always Free) via ORDS REST API — achieving enterprise-grade observability with under 50 MB RAM host overhead.'}
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
                        <button className="terminal-btn-sm secondary" onClick={() => setView('card')}>
                            <ArrowLeft size={14} /> {language === 'pt' ? 'Voltar' : 'Back'}
                        </button>
                        <button className="terminal-btn-sm primary" onClick={() => setView('terminal_project')}>
                            <Radio size={14} /> {language === 'pt' ? 'Ver CloudOps Hub' : 'Inspect CloudOps Hub'} <ArrowRight size={14} />
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
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div className="terminal-lang-switch-group" role="group" aria-label="Idioma / Language">
                                <button 
                                    type="button"
                                    onClick={() => language !== 'pt' && toggleLanguage()} 
                                    className={`terminal-lang-pill ${language === 'pt' ? 'active' : ''}`}
                                    title="Mudar para Português"
                                >
                                    🇧🇷 PT
                                </button>
                                <button 
                                    type="button"
                                    onClick={() => language !== 'en' && toggleLanguage()} 
                                    className={`terminal-lang-pill ${language === 'en' ? 'active' : ''}`}
                                    title="Switch to English"
                                >
                                    🇺🇸 EN
                                </button>
                            </div>
                            <button className="terminal-close-action" onClick={() => setView('card')}>
                                <X size={16} />
                            </button>
                        </div>
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
                                    SRE / CLOUD OPS / ORACLE ATP / ODISSEU AI
                                </span>
                            </div>
                            <h2 className="terminal-project-heading">CloudOps Hub</h2>
                            <p className="terminal-project-subheading">
                                {language === 'pt'
                                    ? 'Console web de orquestração de infraestrutura multi-cloud, gerenciamento Docker em tempo real, automação CI/CD e assistência SRE via IA (Odisseu AI).'
                                    : 'A lightweight web console for multi-cloud infrastructure orchestration, real-time Docker management, CI/CD GitFlow automation, and AI-driven SRE copilot.'}
                            </p>
                        </div>

                        {/* TABS DE SELEÇÃO RÁPIDA DE PÁGINA */}
                        <div className="terminal-page-tabs">
                            {cloudHubSlides.map((slide, idx) => (
                                <button
                                    key={slide.id}
                                    className={`terminal-page-tab ${currentImageIdx === idx ? 'active' : ''}`}
                                    onClick={() => setCurrentImageIdx(idx)}
                                >
                                    {language === 'pt' ? slide.tabTitlePt : slide.tabTitleEn}
                                </button>
                            ))}
                        </div>

                        {/* CARROSSEL DE IMAGENS EM FORMATO DE MONITOR DE TERMINAL */}
                        <div className="terminal-monitor-box">
                            <div className="terminal-monitor-top">
                                <span className="terminal-monitor-screen-title">
                                    🖥️ display_buffer_{currentImageIdx}: {language === 'pt' ? currentSlide.captionPt : currentSlide.captionEn}
                                </span>
                                <div className="terminal-monitor-nav">
                                    <button onClick={prevImage} className="monitor-nav-btn" title="Página Anterior">
                                        <ChevronLeft size={15} /> {language === 'pt' ? 'Anterior' : 'Prev'}
                                    </button>
                                    <span className="monitor-counter">
                                        {currentImageIdx + 1} / {cloudHubSlides.length}
                                    </span>
                                    <button onClick={nextImage} className="monitor-nav-btn" title="Próxima Página">
                                        {language === 'pt' ? 'Próxima' : 'Next'} <ChevronRight size={15} />
                                    </button>
                                </div>
                            </div>
                            
                            <div className="terminal-screen-frame">
                                <img 
                                    src={currentSlide.url} 
                                    alt={currentSlide.name} 
                                    className="terminal-screen-img"
                                />
                            </div>
                        </div>

                        {/* EXPLICAÇÃO TÉCNICA DINÂMICA DA PÁGINA SELECIONADA */}
                        <div className="terminal-slide-box">
                            <div className="terminal-slide-header">
                                <span className="terminal-slide-badge">{currentSlide.badge}</span>
                                <span style={{ fontSize: '0.72rem', color: '#6b7280' }}>
                                    {language === 'pt' ? `Página ${currentImageIdx + 1} de 4` : `Page ${currentImageIdx + 1} of 4`}
                                </span>
                            </div>

                            <p className="terminal-slide-caption">
                                {language === 'pt' ? currentSlide.captionPt : currentSlide.captionEn}
                            </p>

                            <div className="terminal-specs-output">
                                {slideDetails.map((detail, dIdx) => (
                                    <div key={dIdx} className="spec-log-line">
                                        <span className={`log-tag ${detail.tagClass}`}>{detail.tag}</span>
                                        <span className="log-text">
                                            <strong className="log-title">{detail.title}</strong>
                                            {detail.desc}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Barra de Ações Compacta do Terminal */}
                    <div className="terminal-bottom-bar">
                        <button className="terminal-btn-sm secondary" onClick={() => setView('card')}>
                            <ArrowLeft size={14} /> {language === 'pt' ? 'Voltar' : 'Back'}
                        </button>
                        
                        <div className="terminal-bottom-actions-group">
                            <a 
                                href="https://www.tabnews.com.br/viniScooper/cansei-de-abrir-10-paineis-oracle-aws-hostinger-vercel-criei-um-hub-multi-cloud-com-ia-para-controlar-tudo-em-1-lugar" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="terminal-btn-sm secondary"
                                title="Pitch no TabNews"
                            >
                                <Newspaper size={14} /> {language === 'pt' ? 'TabNews ➔' : 'TabNews Pitch ➔'}
                            </a>
                            <a 
                                href="https://github.com/ViniScooper/CloudOps_Hub" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="terminal-btn-sm secondary"
                            >
                                <Github size={14} /> GitHub
                            </a>
                            <a 
                                href="https://cloudops-hub-dun.vercel.app/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="terminal-btn-sm primary"
                            >
                                <ExternalLink size={14} /> {language === 'pt' ? 'site no ar ➔' : 'check live site ➔'}
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default TechHero;
