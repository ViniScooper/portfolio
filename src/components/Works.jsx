import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';
import { 
  ExternalLink, 
  Github, 
  ChevronDown, 
  ChevronUp, 
  Zap, 
  Layers, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

const featuredHeroProject = {
    id: 10,
    title: "CloudOps Hub — Plataforma de Observabilidade & SRE",
    category: "CLOUD SRE / ORACLE ATP / DOCKER",
    image: "/Gemini_Generated_Image_m3mlltm3mlltm3ml.png",
    descPt: "Plataforma privada de observabilidade e confiabilidade de infraestrutura (SRE) com auto-healing ativo por sondas HTTP, streaming de Docker logs sem SSH e séries temporais no Oracle Autonomous Database (ATP Always Free) com praticamente zero impacto de RAM no servidor.",
    descEn: "Private cloud observability and SRE platform featuring active HTTP probing auto-healing, SSH-less live container logging, and historical time-series persisted in Oracle Autonomous Database (ATP Always Free) with under 10 MB RAM host overhead.",
    stack: ["Next.js 16", "React 19", "Fastify", "Docker", "Oracle ATP", "ORDS REST", "Cloudflare Tunnels", "SRE"],
    demoUrl: "https://cloudops-hub-dun.vercel.app/",
    githubUrl: "https://github.com/ViniScooper/CloudOps_Hub"
};

const otherProjects = [
    {
        id: 11,
        title: "FinControl — Gestão Financeira Cloud",
        category: "FINTECH / ORACLE ATP / DOCKER",
        image: "/monitor_relatorios.png",
        descPt: "Controle financeiro corporativo desacoplado com API Node.js conteinerizada em Docker e banco transacional Oracle ATP via ORDS REST.",
        descEn: "Decoupled financial management system with Dockerized Node.js API and Oracle Autonomous Database (ATP) persistence via ORDS REST.",
        stack: ["Node.js", "Express", "Docker", "Oracle ATP", "ORDS REST", "Cloudflare Tunnels"]
    },
    {
        id: 12,
        title: "Boteco do Severino — PDV & Gestão",
        category: "FULL STACK / MYSQL / DOCKER",
        image: "/pdv.png",
        descPt: "Sistema comercial e PDV ágil para setor gastronômico com MySQL dedicado em Docker e pipeline de backup automatizado .sql.gz no CloudOps Hub.",
        descEn: "Commercial POS and inventory management system with dedicated MySQL in Docker and automated .sql.gz snapshot pipelines in CloudOps Hub.",
        stack: ["Node.js", "Express", "MySQL 8.0", "Docker", "Cloudflare Tunnels", "Bash"]
    },
    {
        id: 6,
        title: "ByteDataEngine Lakehouse",
        category: "DATA ENGINEERING / OCI",
        image: "/bytedata_dashboard.png",
        descPt: "Motor de abstração e governança de dados (Data Fabric) metadata-driven para orquestração de pipelines e analytics em OCI.",
        descEn: "Metadata-driven Data Fabric engine for pipeline orchestration and analytics governance in Oracle Cloud Infrastructure.",
        stack: ["Python", "FastAPI", "Oracle Cloud (OCI)", "SQL", "Data Pipelines"]
    },
    {
        id: 7,
        title: "PDV Byte System",
        category: "FULL STACK / AZURE",
        image: "/Gemini_Generated_Image_uuie5duuie5duuie.png",
        descPt: "Sistema integrado de frente de caixa e retaguarda com suporte a alta concorrência e fechamento fiscal.",
        descEn: "Integrated point-of-sale and backoffice system built for high-concurrency retail operations.",
        stack: ["React", "Node.js", "Azure", "SQL Database"]
    },
    {
        id: 9,
        title: "Career Management Hub (Job Tracker)",
        category: "FRONTEND / REACT",
        image: "/job_tracker1.png",
        descPt: "Hub de gestão de carreira com Kanban interativo drag-and-drop, métricas e integração de autenticação.",
        descEn: "Interactive career management platform with drag-and-drop kanban boards, metrics, and auth integration.",
        stack: ["React 19", "Vite", "dnd-kit", "Recharts", "Vercel"]
    }
];

const Works = () => {
    const { language } = useLanguage();
    const t = translations[language].works;
    const [showMore, setShowMore] = useState(false);

    return (
        <section id="works" className="works-section">
            <div className="container">
                <div className="section-title-wrapper">
                    <span className="section-eyebrow">
                        <Zap size={14} /> {language === 'pt' ? 'Portfólio & Engenharia' : 'Portfolio & Engineering'}
                    </span>
                    <h2 className="section-main-title">
                        {language === 'pt' ? 'Projetos em Destaque' : 'Featured Projects'}
                    </h2>
                    <p className="section-subtitle">
                        {language === 'pt' 
                            ? 'Sistemas reais em produção, arquitetados com alta disponibilidade, resiliência e foco em performance.'
                            : 'Real-world production systems built for high availability, resilience, and maximum performance.'}
                    </p>
                </div>

                {/* PROJETO ESTRELA: CLOUDOPS HUB (Card Grande em Destaque) */}
                <div className="flagship-project-card">
                    <div className="flagship-badge">
                        <ShieldCheck size={14} /> {language === 'pt' ? 'PROJETO PRINCIPAL (FLAGSHIP)' : 'FLAGSHIP PROJECT'}
                    </div>

                    <div className="flagship-grid">
                        <div className="flagship-image-wrapper">
                            <img 
                                src={featuredHeroProject.image} 
                                alt={featuredHeroProject.title} 
                                className="flagship-image" 
                            />
                            <div className="flagship-image-overlay">
                                <Link to={`/project/${featuredHeroProject.id}`} className="flagship-details-link">
                                    {t.details} <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>

                        <div className="flagship-content">
                            <span className="flagship-category">{featuredHeroProject.category}</span>
                            <h3 className="flagship-title">{featuredHeroProject.title}</h3>
                            <p className="flagship-desc">
                                {language === 'pt' ? featuredHeroProject.descPt : featuredHeroProject.descEn}
                            </p>

                            <div className="flagship-stack">
                                {featuredHeroProject.stack.map((tech, idx) => (
                                    <span key={idx} className="stack-pill">{tech}</span>
                                ))}
                            </div>

                            <div className="flagship-actions">
                                <a 
                                    href={featuredHeroProject.demoUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flagship-btn primary"
                                >
                                    <ExternalLink size={16} />
                                    {language === 'pt' ? 'Ver Demo no Ar' : 'Live Demo'}
                                </a>
                                <a 
                                    href={featuredHeroProject.githubUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flagship-btn secondary"
                                >
                                    <Github size={16} />
                                    {language === 'pt' ? 'Repositório GitHub' : 'GitHub Code'}
                                </a>
                                <Link 
                                    to={`/project/${featuredHeroProject.id}`} 
                                    className="flagship-btn tertiary"
                                >
                                    {language === 'pt' ? 'Arquitetura Completa' : 'Architecture Specs'} ➔
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTÃO PARA EXPANDIR / OCULTAR OUTROS PROJETOS */}
                <div className="toggle-projects-wrapper">
                    <button 
                        className="toggle-projects-btn"
                        onClick={() => setShowMore(!showMore)}
                    >
                        <Layers size={18} />
                        {showMore 
                            ? (language === 'pt' ? 'Ocultar Outros Projetos' : 'Hide Other Projects')
                            : (language === 'pt' ? `Ver Mais Projetos (${otherProjects.length})` : `View More Projects (${otherProjects.length})`)}
                        {showMore ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                </div>

                {/* GRADE DE OUTROS PROJETOS (Expansível) */}
                {showMore && (
                    <div className="other-projects-grid fade-in">
                        {otherProjects.map((p) => (
                            <div key={p.id} className="sub-project-card">
                                <div className="sub-project-img-wrapper">
                                    <img src={p.image} alt={p.title} />
                                    <Link to={`/project/${p.id}`} className="sub-project-overlay">
                                        <span>{t.details} ➔</span>
                                    </Link>
                                </div>
                                <div className="sub-project-body">
                                    <span className="sub-project-cat">{p.category}</span>
                                    <h4 className="sub-project-title">{p.title}</h4>
                                    <p className="sub-project-desc">
                                        {language === 'pt' ? p.descPt : p.descEn}
                                    </p>
                                    <div className="sub-project-stack">
                                        {p.stack.slice(0, 4).map((tech, idx) => (
                                            <span key={idx} className="sub-stack-pill">{tech}</span>
                                        ))}
                                    </div>
                                    <Link to={`/project/${p.id}`} className="sub-project-link">
                                        {language === 'pt' ? 'Ver Detalhes do Projeto' : 'View Project Details'} ➔
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Works;
