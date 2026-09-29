import React, { useState, useEffect } from 'react';
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
  Globe, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Activity, 
  ShieldCheck, 
  Layers, 
  Send,
  Copy,
  Check 
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
    const [showArchitecture, setShowArchitecture] = useState(false);

    // Interactive CLI State
    const [cliInput, setCliInput] = useState('');
    const [cliOutput, setCliOutput] = useState(null);
    const [cmdHistory, setCmdHistory] = useState([]);
    const [historyIdx, setHistoryIdx] = useState(-1);
    const [copiedEmail, setCopiedEmail] = useState(false);

    // Função para copiar o e-mail com feedback visual
    const handleCopyEmail = () => {
        navigator.clipboard.writeText('vviniciuslourenco@gmail.com');
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
    };

    // Navegação de Histórico com Setas (↑ / ↓) e Autocomplete com Tab
    const handleInputKeyDown = (e) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (cmdHistory.length === 0) return;
            const nextIdx = Math.min(historyIdx + 1, cmdHistory.length - 1);
            setHistoryIdx(nextIdx);
            setCliInput(cmdHistory[nextIdx]);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIdx > 0) {
                const nextIdx = historyIdx - 1;
                setHistoryIdx(nextIdx);
                setCliInput(cmdHistory[nextIdx]);
            } else if (historyIdx === 0) {
                setHistoryIdx(-1);
                setCliInput('');
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const val = cliInput.trim().toLowerCase();
            if (!val) return;
            const availableCmds = [
                'help', 'whoami', 'projects', 'about', 'arch', 
                'cv pt', 'cv en', 'contact', 'copy email', 'clear'
            ];
            const match = availableCmds.find(c => c.startsWith(val));
            if (match) {
                setCliInput(match);
            }
        }
    };

    // Animação de contagem dos números na aba Sobre Mim
    const [animatedYears, setAnimatedYears] = useState(0);
    const [animatedDbs, setAnimatedDbs] = useState(0);
    const [animatedUptime, setAnimatedUptime] = useState('0.0');

    // Atalhos Globais de Teclado (ESC: Voltar, Setas: Navegar, L: Idioma)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            if (e.key === 'Escape') {
                setView('card');
                setShowArchitecture(false);
            } else if (e.key === 'ArrowRight' && view === 'terminal_project' && !showArchitecture) {
                setCurrentImageIdx((prev) => (prev + 1) % cloudHubSlides.length);
            } else if (e.key === 'ArrowLeft' && view === 'terminal_project' && !showArchitecture) {
                setCurrentImageIdx((prev) => (prev - 1 + cloudHubSlides.length) % cloudHubSlides.length);
            } else if (e.key.toLowerCase() === 'l') {
                toggleLanguage();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [view, showArchitecture, toggleLanguage]);

    // Animação Count-up Sobre Mim
    useEffect(() => {
        if (view === 'terminal_about') {
            setAnimatedYears(0);
            setAnimatedDbs(0);
            setAnimatedUptime('0.0');

            const start = performance.now();
            const duration = 1200;

            const frame = (now) => {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 3);

                setAnimatedYears(Math.floor(ease * 5));
                setAnimatedDbs(Math.floor(ease * 50));
                setAnimatedUptime((ease * 99.9).toFixed(1));

                if (progress < 1) {
                    requestAnimationFrame(frame);
                } else {
                    setAnimatedYears(5);
                    setAnimatedDbs(50);
                    setAnimatedUptime('99.9');
                }
            };

            const reqId = requestAnimationFrame(frame);
            return () => cancelAnimationFrame(reqId);
        }
    }, [view]);

    const nextImage = () => {
        setShowArchitecture(false);
        setCurrentImageIdx((prev) => (prev + 1) % cloudHubSlides.length);
    };

    const prevImage = () => {
        setShowArchitecture(false);
        setCurrentImageIdx((prev) => (prev - 1 + cloudHubSlides.length) % cloudHubSlides.length);
    };

    // Processador de Comandos CLI
    const executeCliCommand = (cmdStr) => {
        const cleanCmd = cmdStr.trim().toLowerCase();
        if (!cleanCmd) return;

        // Adiciona ao histórico do terminal
        setCmdHistory((prev) => [cmdStr.trim(), ...prev.filter(c => c !== cmdStr.trim())]);
        setHistoryIdx(-1);

        if (cleanCmd === 'clear' || cleanCmd === 'cls') {
            setCliOutput(null);
            setCliInput('');
            return;
        }

        if (cleanCmd === 'help') {
            setCliOutput(
                language === 'pt'
                    ? "Comandos disponíveis:\n• whoami        -> Ver perfil profissional\n• projects      -> Abrir projeto CloudOps Hub\n• about         -> Ler sobre trajetória e carreira\n• arch          -> Visualizar arquitetura do sistema\n• cv pt / cv en -> Baixar currículo em PDF (Português / Inglês)\n• contact       -> Canais de contato direto\n• copy email    -> Copiar e-mail para a área de transferência\n• clear         -> Limpar saída\n(Dica: Pressione Tab para autocompletar e ↑/↓ para navegar no histórico)"
                    : "Available commands:\n• whoami        -> View professional profile\n• projects      -> Inspect CloudOps Hub project\n• about         -> Read career background\n• arch          -> View system architecture diagram\n• cv pt / cv en -> Download resume in PDF (Portuguese / English)\n• contact       -> Direct contact channels\n• copy email    -> Copy e-mail to clipboard\n• clear         -> Clear output\n(Tip: Press Tab to autocomplete and ↑/↓ to navigate history)"
            );
        } else if (cleanCmd === 'whoami') {
            setCliOutput(
                language === 'pt'
                    ? "José Vinícius Lourenço — Database Administrator & Cloud Infrastructure\n• 5+ anos com bancos de missão crítica (Oracle ATP/19c, MongoDB, SQL Server)\n• Migrações complexas de banco de dados com zero perda de dados\n• Engenharia de Confiabilidade (Linux SRE, Docker, OCI, Python & Bash)\n• Criador do CloudOps Hub — Console de Gestão Multi-Cloud com IA"
                    : "José Vinícius Lourenço — Database Administrator & Cloud Infrastructure\n• 5+ years managing mission-critical databases (Oracle ATP/19c, MongoDB, SQL Server)\n• End-to-end database migrations with zero data loss\n• Site Reliability Engineering (Linux SRE, Docker, OCI, Python & Bash)\n• Creator of CloudOps Hub — Multi-Cloud DevOps Control Plane with AI"
            );
        } else if (cleanCmd === 'projects' || cleanCmd === 'cloudops') {
            setView('terminal_project');
            setShowArchitecture(false);
            setCliOutput(language === 'pt' ? "Abrindo CloudOps Hub..." : "Opening CloudOps Hub...");
        } else if (cleanCmd === 'about' || cleanCmd === 'cat') {
            setView('terminal_about');
            setCliOutput(language === 'pt' ? "Abrindo sobre_mim.md..." : "Opening sobre_mim.md...");
        } else if (cleanCmd === 'arch' || cleanCmd === 'architecture') {
            setView('terminal_project');
            setShowArchitecture(true);
            setCliOutput(language === 'pt' ? "Exibindo diagrama de arquitetura..." : "Displaying architecture diagram...");
        } else if (cleanCmd.includes('cv') || cleanCmd.includes('curl') || cleanCmd.includes('pdf')) {
            if (cleanCmd.includes('pt') || (cleanCmd === 'cv' && language === 'pt')) {
                window.open('/curriculo_pt.pdf', '_blank');
                setCliOutput(language === 'pt' ? "Iniciando download de curriculo_pt.pdf (Português)..." : "Downloading curriculo_pt.pdf (Portuguese)...");
            } else {
                window.open('/curriculo_en.pdf', '_blank');
                setCliOutput(language === 'pt' ? "Iniciando download de curriculo_en.pdf (English)..." : "Downloading curriculo_en.pdf (English)...");
            }
        } else if (cleanCmd === 'contact') {
            setCliOutput(
                `José Vinícius Lourenço\n• E-mail: vviniciuslourenco@gmail.com\n• WhatsApp: +55 81 99512-6839\n• LinkedIn: linkedin.com/in/jose-vinicius-lourenço-1a6b9014a/\n• GitHub: github.com/ViniScooper\n• Local: Recife, PE, Brasil (Disponível para Trabalho Remoto Global)`
            );
        } else if (cleanCmd.includes('copy') || cleanCmd === 'email') {
            handleCopyEmail();
            setCliOutput(
                language === 'pt'
                    ? "vviniciuslourenco@gmail.com copiado para a área de transferência! ✅"
                    : "vviniciuslourenco@gmail.com copied to clipboard! ✅"
            );
        } else if (cleanCmd.startsWith('sudo')) {
            setCliOutput(
                language === 'pt'
                    ? "bash: sudo: permissão negada. Este nó está sob guarda e monitoramento ativo 24/7 pelo SRE Watchdog 🛡️"
                    : "bash: sudo: permission denied. This cluster is under 24/7 active SRE Watchdog protection 🛡️"
            );
        } else {
            setCliOutput(
                language === 'pt'
                    ? `bash: comando não encontrado: "${cleanCmd}". Digite "help" para ver a lista de comandos.`
                    : `bash: command not found: "${cleanCmd}". Type "help" to see available commands.`
            );
        }
        setCliInput('');
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        executeCliCommand(cliInput);
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
                        <span className="terminal-title-text">vini@cloud-ops: ~ (Recife, PE)</span>
                        
                        {/* Seletor de Idioma Bilíngue Segmentado */}
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
                            <div className="terminal-avatar-headings-group">
                                <div className="terminal-avatar-box">
                                    <Terminal size={26} />
                                </div>
                                <div className="terminal-rect-headings">
                                    <h1 className="terminal-user-name">José Vinícius Lourenço</h1>
                                    <p className="terminal-user-role">
                                        {language === 'pt' 
                                            ? 'Database Administrator | Cloud Infrastructure | Oracle, MongoDB & Relational DBs'
                                            : 'Database Administrator | Cloud Infrastructure | Oracle, MongoDB & Relational DBs'}
                                    </p>
                                </div>
                            </div>

                            {/* Status de Disponibilidade & Região no Topo */}
                            <div className="terminal-status-row">
                                <span className="pulse-green"></span>
                                <span>{language === 'pt' ? 'Disponível para trabalho remoto global' : 'Available for global remote work'}</span>
                            </div>
                        </div>

                        {/* Badges de Especialidade */}
                        <div className="terminal-tags-row">
                            <span className="terminal-pill"><Database size={12} /> Oracle ATP / 19c</span>
                            <span className="terminal-pill"><Database size={12} /> MongoDB & SQL Server</span>
                            <span className="terminal-pill"><Server size={12} /> Linux SRE & Docker</span>
                            <span className="terminal-pill"><Cloud size={12} /> OCI & Cloudflare</span>
                        </div>

                        {/* Telemetria SRE ao Vivo */}
                        <div className="terminal-live-status-bar">
                            <div className="status-item">
                                <span className="pulse-green"></span>
                                <span className="status-label">SYS:</span>
                                <strong className="status-value-ok">NOMINAL</strong>
                            </div>
                            <div className="status-item">
                                <MapPin size={11} className="status-icon" />
                                <span className="status-label">{language === 'pt' ? 'LOCAL' : 'LOC'}:</span>
                                <span className="status-value-cyan">Recife, BR</span>
                            </div>
                            <div className="status-item">
                                <Activity size={11} className="status-icon" />
                                <span className="status-label">LAT:</span>
                                <span className="status-value-cyan">18ms</span>
                            </div>
                            <div className="status-item">
                                <ShieldCheck size={11} className="status-icon" />
                                <span className="status-label">UPTIME:</span>
                                <span className="status-value-ok">99.98%</span>
                            </div>
                        </div>

                        {/* Redes Sociais & Download do CV */}
                        <div className="terminal-socials-row">
                            <a 
                                href="https://github.com/ViniScooper" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                title="GitHub" 
                                className="terminal-social-link"
                            >
                                <Github size={16} /> <span>GitHub</span>
                            </a>
                            <a 
                                href="https://linkedin.com/in/jose-vinicius-louren%C3%A7o-1a6b9014a/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                title="LinkedIn" 
                                className="terminal-social-link"
                            >
                                <Linkedin size={16} /> <span>LinkedIn</span>
                            </a>
                            <a 
                                href="https://wa.me/5581995126839" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                title="WhatsApp" 
                                className="terminal-social-link"
                            >
                                <Phone size={15} /> <span>WhatsApp</span>
                            </a>
                            <button 
                                type="button"
                                onClick={handleCopyEmail}
                                title={language === 'pt' ? 'Copiar E-mail' : 'Copy E-mail'} 
                                className="terminal-social-link copy-email-btn"
                                style={{
                                    cursor: 'pointer',
                                    borderColor: copiedEmail ? '#22c55e' : undefined,
                                    color: copiedEmail ? '#22c55e' : undefined,
                                    background: copiedEmail ? 'rgba(34, 197, 94, 0.12)' : undefined
                                }}
                            >
                                {copiedEmail ? <Check size={14} /> : <Mail size={14} />}
                                <span>{copiedEmail ? (language === 'pt' ? 'Copiado!' : 'Copied!') : 'E-mail'}</span>
                            </button>
                            <a 
                                href="/curriculo_pt.pdf" 
                                download="Jose_Vinicius_Lourenco_Curriculo.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Baixar Currículo em Português (PDF)" 
                                className="terminal-social-link cv-highlight"
                            >
                                <Download size={14} /> <span>Currículo (PT)</span>
                            </a>
                            <a 
                                href="/curriculo_en.pdf" 
                                download="Jose_Vinicius_Lourenco_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Download Resume in English (PDF)" 
                                className="terminal-social-link cv-highlight"
                            >
                                <Download size={14} /> <span>Resume (EN)</span>
                            </a>
                        </div>

                        {/* CLI Interativo com Chips de Comandos */}
                        <div className="terminal-interactive-cli">
                            <form onSubmit={handleFormSubmit} className="terminal-cli-form">
                                <span className="prompt-green">vini@recife</span>:<span className="prompt-blue">~</span>$&nbsp;
                                <input 
                                    type="text" 
                                    value={cliInput}
                                    onChange={(e) => {
                                        setCliInput(e.target.value);
                                        if (historyIdx !== -1) setHistoryIdx(-1);
                                    }}
                                    onKeyDown={handleInputKeyDown}
                                    placeholder={language === 'pt' ? 'Digite "help", "whoami", "cv pt", "cv en", "contact"... (Tab completa, ↑ histórico)' : 'Type "help", "whoami", "cv pt", "cv en", "contact"... (Tab to complete, ↑ history)'}
                                    className="terminal-cli-input"
                                />
                                <button type="submit" style={{ background: 'none', border: 'none', color: '#20d6c7', cursor: 'pointer', padding: 0 }} title="Executar">
                                    <Send size={14} />
                                </button>
                            </form>

                            {/* Chips Rápidos de Comandos */}
                            <div className="terminal-cmd-chips">
                                <span className="terminal-cmd-chip-label">{language === 'pt' ? 'Atalhos:' : 'Quick:'}</span>
                                <button type="button" className="terminal-cmd-chip" onClick={() => executeCliCommand('help')}>help</button>
                                <button type="button" className="terminal-cmd-chip" onClick={() => executeCliCommand('whoami')}>whoami</button>
                                <button type="button" className="terminal-cmd-chip" onClick={() => executeCliCommand('cv pt')}>curl cv_pt.pdf</button>
                                <button type="button" className="terminal-cmd-chip" onClick={() => executeCliCommand('cv en')}>curl cv_en.pdf</button>
                                <button type="button" className="terminal-cmd-chip" onClick={() => executeCliCommand('contact')}>contact</button>
                                <button type="button" className="terminal-cmd-chip" onClick={() => executeCliCommand('copy email')}>
                                    {copiedEmail ? '✓ email' : 'copy email'}
                                </button>
                                <button type="button" className="terminal-cmd-chip" onClick={() => executeCliCommand('arch')}>arch</button>
                            </div>

                            {/* Saída do Comando */}
                            {cliOutput && (
                                <div className="terminal-cli-response">
                                    {cliOutput}
                                </div>
                            )}
                        </div>

                        {/* Ações Principais: Sobre Mim & Ver Projetos */}
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
                                onClick={() => {
                                    setView('terminal_project');
                                    setShowArchitecture(false);
                                }}
                            >
                                <Radio size={15} />
                                {language === 'pt' ? 'Ver Projetos' : 'View Projects'}
                                <ArrowRight size={15} />
                            </button>
                        </div>
                    </div>

                    {/* Dica de Teclado no Rodapé */}
                    <div className="terminal-hotkey-hints">
                        <span><span className="hotkey-badge">L</span> {language === 'pt' ? 'Alternar Idioma' : 'Toggle Language'}</span>
                        <span><span className="hotkey-badge">ESC</span> {language === 'pt' ? 'Fechar/Voltar' : 'Close/Back'}</span>
                    </div>
                </div>
            )}

            {/* ===================================================
                VISÃO 2: TERMINAL SOBRE MIM (TRAJETÓRIA & EXPERIÊNCIA)
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
                            <span className="terminal-cursor-blink">▮</span>
                        </div>

                        <div className="terminal-text-flow">
                            <p className="terminal-highlight-line terminal-anim-step-1">
                                {language === 'pt' 
                                    ? '👋 Olá! Sou José Vinícius Lourenço, Database Administrator & Cloud Infrastructure Engineer.'
                                    : '👋 Hello! I am José Vinícius Lourenço, Database Administrator & Cloud Infrastructure Engineer.'}
                            </p>
                            
                            <p className="terminal-anim-step-2">
                                {language === 'pt'
                                    ? 'Atuo há mais de 5 anos gerenciando ambientes de banco de dados de missão crítica em produção em tecnologias relacionais e NoSQL (Oracle 19c/21c/ATP, Microsoft SQL Server, MongoDB e MySQL). Especialista em estratégias de Backup & Disaster Recovery, tuning fino de performance, otimização de consultas e planos de execução, além de automação de rotinas operacionais e CI/CD com Python e Shell Scripting.'
                                    : 'I have over 5 years of experience managing mission-critical production database environments across relational and NoSQL engines (Oracle 19c/21c/ATP, Microsoft SQL Server, MongoDB, and MySQL). Specialized in backup & disaster recovery, performance tuning, query optimization, and automating operational routines and CI/CD with Python and Shell Scripting.'}
                            </p>

                            {/* Timeline de Experiência Profissional Real */}
                            <div className="terminal-career-timeline terminal-anim-step-2">
                                <div className="career-item">
                                    <div className="career-header">
                                        <span className="career-role">Database Administrator</span>
                                        <span className="career-company">In Forma Software</span>
                                        <span className="career-period">Jul 2024 — Presente</span>
                                    </div>
                                    <p className="career-desc">
                                        {language === 'pt'
                                            ? 'Administração de ambientes de banco de missão crítica com alta disponibilidade, estratégias de backup/restore e disaster recovery, análise de execution plans, tuning de queries e automação de tarefas CI/CD com Python e Shell Scripting.'
                                            : 'Administering mission-critical production databases ensuring high availability, robust backup/disaster recovery strategies, advanced performance tuning, execution plan analysis, and CI/CD automation with Python and Shell.'}
                                    </p>
                                </div>

                                <div className="career-item">
                                    <div className="career-header">
                                        <span className="career-role">Database Administrator & Data Analyst</span>
                                        <span className="career-company">Cod.ERP Tecnologia LTDA</span>
                                        <span className="career-period">Mai 2023 — Mai 2024</span>
                                    </div>
                                    <p className="career-desc">
                                        {language === 'pt'
                                            ? 'Administração de bases Microsoft SQL Server para ERPs corporativos de grande porte, index tuning, queries complexas, segurança e rotinas analíticas para tomada de decisão.'
                                            : 'Administered Microsoft SQL Server for enterprise ERPs, index tuning, complex SQL query optimization, database security, and business data analytics.'}
                                    </p>
                                </div>
                            </div>

                            {/* Destaque do Projeto Flagship */}
                            <div className="terminal-code-box terminal-anim-step-3">
                                <div className="terminal-code-header">
                                    <Cpu size={15} style={{ color: '#20d6c7' }} />
                                    <strong style={{ color: '#20d6c7' }}>
                                        {language === 'pt' ? '🚀 O Projeto Flagship: CloudOps Hub' : '🚀 Flagship Project: CloudOps Hub'}
                                    </strong>
                                </div>
                                <p style={{ color: '#cbd5e1', fontSize: '0.85rem', lineHeight: '1.6', margin: '6px 0 0' }}>
                                    {language === 'pt'
                                        ? 'Cansado de abrir 10+ painéis dispersos (Oracle Cloud, AWS, Hostinger, Vercel, Cloudflare e terminais SSH), concebi e arquitetei o CloudOps Hub: um "Single Pane of Glass" para operações multi-cloud. Implementei arquitetura Zero-Agent via SSH2, sondas de auto-healing ativas que recuperam containers caídos e alertam via WhatsApp, além de persistência de telemetria no Oracle Autonomous Database (ATP Always Free) via ORDS REST API — com consumo inferior a 50 MB de RAM.'
                                        : 'Frustrated by juggling 10+ disconnected consoles (Oracle Cloud, AWS, Hostinger, Vercel, Cloudflare, and scattered SSH windows), I designed and built CloudOps Hub: a unified "Single Pane of Glass" for multi-cloud operations. It features Zero-Agent management over SSH2, active auto-healing probes with WhatsApp alerts, and analytical telemetry persisted in Oracle Autonomous Database (ATP Always Free) via ORDS REST API — under 50 MB host RAM overhead.'}
                                </p>
                            </div>

                            {/* Métricas Animadas */}
                            <div className="terminal-metrics-cards terminal-anim-step-4">
                                <div className="terminal-mcard">
                                    <span className="mcard-val">{animatedYears}+</span>
                                    <span className="mcard-lbl">{language === 'pt' ? 'Anos com Tecnologia & Dados' : 'Years with Tech & Data'}</span>
                                </div>
                                <div className="terminal-mcard">
                                    <span className="mcard-val">{animatedDbs}+</span>
                                    <span className="mcard-lbl">{language === 'pt' ? 'Bancos Otimizados' : 'Optimized Databases'}</span>
                                </div>
                                <div className="terminal-mcard">
                                    <span className="mcard-val">{animatedUptime}%</span>
                                    <span className="mcard-lbl">{language === 'pt' ? 'Disponibilidade em Prod' : 'Production Uptime'}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="terminal-bottom-bar">
                        <button className="terminal-btn-sm secondary" onClick={() => setView('card')}>
                            <ArrowLeft size={14} /> {language === 'pt' ? 'Voltar' : 'Back'}
                        </button>
                        <div className="terminal-bottom-actions-group">
                            <a 
                                href="/curriculo_pt.pdf" 
                                download="Jose_Vinicius_Lourenco_Curriculo.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="terminal-btn-sm secondary"
                                title="Baixar Currículo em Português (PDF)"
                            >
                                <Download size={14} /> <span>{language === 'pt' ? 'Currículo (PT)' : 'CV (PT)'}</span>
                            </a>
                            <a 
                                href="/curriculo_en.pdf" 
                                download="Jose_Vinicius_Lourenco_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="terminal-btn-sm secondary"
                                title="Download Resume in English (PDF)"
                            >
                                <Download size={14} /> <span>{language === 'pt' ? 'Currículo (EN)' : 'Resume (EN)'}</span>
                            </a>
                            <button 
                                className="terminal-btn-sm primary" 
                                onClick={() => {
                                    setView('terminal_project');
                                    setShowArchitecture(false);
                                }}
                            >
                                <Radio size={14} /> {language === 'pt' ? 'Ver CloudOps Hub' : 'Inspect CloudOps Hub'} <ArrowRight size={14} />
                            </button>
                        </div>
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

                        {/* TABS DE SELEÇÃO RÁPIDA DE PÁGINA + ABA DE ARQUITETURA */}
                        <div className="terminal-page-tabs">
                            {cloudHubSlides.map((slide, idx) => (
                                <button
                                    key={slide.id}
                                    className={`terminal-page-tab ${(!showArchitecture && currentImageIdx === idx) ? 'active' : ''}`}
                                    onClick={() => {
                                        setShowArchitecture(false);
                                        setCurrentImageIdx(idx);
                                    }}
                                >
                                    {language === 'pt' ? slide.tabTitlePt : slide.tabTitleEn}
                                </button>
                            ))}
                            <button
                                className={`terminal-page-tab ${showArchitecture ? 'active' : ''}`}
                                onClick={() => setShowArchitecture(true)}
                            >
                                <Layers size={13} style={{ display: 'inline', verticalAlign: '-2px', marginRight: '4px' }} />
                                {language === 'pt' ? '5. Arquitetura do Sistema' : '5. System Architecture'}
                            </button>
                        </div>

                        {/* CONTEÚDO PRINCIPAL: CARROSSEL OU DIAGRAMA DE ARQUITETURA */}
                        {!showArchitecture ? (
                            <>
                                {/* CARROSSEL DE IMAGENS EM FORMATO DE MONITOR DE TERMINAL */}
                                <div className="terminal-monitor-box">
                                    <div className="terminal-monitor-top">
                                        <span className="terminal-monitor-screen-title">
                                            🖥️ display_buffer_{currentImageIdx}: {language === 'pt' ? currentSlide.captionPt : currentSlide.captionEn}
                                        </span>
                                        <div className="terminal-monitor-nav">
                                            <button onClick={prevImage} className="monitor-nav-btn" title="Página Anterior (Seta Esquerda)">
                                                <ChevronLeft size={15} /> {language === 'pt' ? 'Anterior' : 'Prev'}
                                            </button>
                                            <span className="monitor-counter">
                                                {currentImageIdx + 1} / {cloudHubSlides.length}
                                            </span>
                                            <button onClick={nextImage} className="monitor-nav-btn" title="Próxima Página (Seta Direita)">
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
                            </>
                        ) : (
                            /* DIAGRAMA DE ARQUITETURA SISTÊMICA (ASCII FLOW) */
                            <div className="terminal-arch-box fade-in">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                                    <span className="terminal-slide-badge">SYSTEM ARCHITECTURE TOPOLOGY</span>
                                    <span style={{ fontSize: '0.72rem', color: '#9ca3af' }}>CloudOps Hub Flow</span>
                                </div>
                                <pre className="terminal-arch-pre">
{`┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              FRONTEND INTERACTION LAYER                                │
│   Next.js 16 (Turbopack) · React 19 · Tailwind CSS 4 · Cyber-Teal UI · xterm.js        │
└───────────────────────────────────────────┬────────────────────────────────────────────┘
                                            │ HTTPS / WSS (Zero Trust Anycast)
                                            ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        EDGE SECURITY & GATEWAY (Cloudflare)                            │
│   Cloudflare Zero Trust Tunnel · mTLS Enforced · Zero Exposed Public Ports on VMs      │
└───────────────────────────────────────────┬────────────────────────────────────────────┘
                                            │ Encrypted Tunnel Bridge
                                            ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                 BACKEND ORCHESTRATION & TELEMETRY ENGINE (Fastify)                     │
│   • SSH2 Engine: Zero-Agent remote command executor (no heavy target daemons)          │
│   • Dockerode: Real-time container start/stop/restart & live log streaming             │
│   • 24/7 Watchdog: Autonomous RAM 90% threshold check & auto-restart on container crash│
│   • Odisseu AI: LangChain RAG Copilot with telemetry index (Groq / Gemini / Ollama)    │
│   • Backup Service: MySQL 8.0 live dumps -> gzip -9 with 7-day rolling purge           │
└─────────────────────┬───────────────────────────────────────────┬──────────────────────┘
                      │ SSH2 Remote Pipeline                      │ ORDS REST API
                      ▼                                           ▼ (0 MB Host RAM)
┌──────────────────────────────────────────┐    ┌────────────────────────────────────────┐
│        TARGET CLOUD VMS / BARE-METAL     │    │       ORACLE AUTONOMOUS DB (ATP)       │
│   • Oracle Cloud (OCI Always Free)       │    │   • Exadata 20GB NVMe Cloud Always Free│
│   • AWS EC2 / Hostinger / VPS Linux      │    │   • Historical telemetry time-series   │
│   • Docker Compose & PM2 Microservices   │    │   • Encrypted credentials (AES-256-GCM)│
└──────────────────────────────────────────┘    └────────────────────────────────────────┘`}
                                </pre>
                            </div>
                        )}
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
