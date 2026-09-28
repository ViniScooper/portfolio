import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

const projectsData = {
    pt: {
        1: {
            title: "Oracle PL/SQL Performance Lab",
            category: "DBA / ORACLE",
            desc: `Otimização extrema de performance em ambiente Oracle, reduzindo o tempo de execução de consultas complexas de 12s para 300ms (97% de melhoria).
            
🛠️ ENGENHARIA DE PERFORMANCE:
• Análise de Execution Plans: Identificação de gargalos em Full Table Scans e gargalos de I/O em joins ineficientes.
• Reestruturação de Índices: Implementação de índices compostos e funcionais baseados no comportamento real da aplicação.
• Tuning de PL/SQL: Refatoração de loops e cursores lentos para operações em massa (Bulk Collect / Forall), reduzindo o overhead de troca de contexto.
• Estatísticas & Histogramas: Calibração de estatísticas para garantir que o otimizador escolha o melhor caminho para dados com alta dispersão.`,
            year: "2024",
            client: "Tech Solutions",
            stack: ["Oracle Database", "PL/SQL", "AWR / ASH Reports", "Execution Plans", "Performance Tuning"]
        },
        2: {
            title: "Microsserviços Escaláveis & Dados",
            category: "BACKEND / DATABASE",
            desc: "Arquitetura de microsserviços usando Node.js e Docker, integrada with PostgreSQL. Foco em garantir a consistência eventual e alta disponibilidade dos dados em ambientes distribuídos.",
            year: "2023",
            client: "Global Fintech",
            stack: ["Node.js", "Docker", "PostgreSQL", "Redis", "Microservices"]
        },
        3: {
            title: "Financial DB Migration",
            category: "DATABASE ENGINEER",
            desc: `Migração crítica de banco de dados financeiro para a nuvem, garantindo zero perda de dados e disponibilidade contínua durante a transição.
            
🚀 IMPACTO & RESULTADOS:
• Ajuste de Schemas: Re-modelagem de tabelas legadas para otimizar o armazenamento e a performance em ambientes Cloud.
• Automação de Deploy: Pipelines automatizados para migração controlada de esquemas e dados, reduzindo o erro humano.
• Integridade de Dados: Validação rigorosa via scripts PL/SQL para garantir a paridade total entre o sistema de origem e o destino.`,
            year: "2023",
            client: "Sovereign Bank",
            stack: ["SQL Server", "Oracle Cloud (OCI)", "Shell Scripting", "Schema Mapping"]
        },
        4: {
            title: "Database Monitoring Tool",
            category: "DBA / AUTOMATION",
            desc: "Dashboard de monitoramento para status de instâncias de banco de dados, alertas de integridade e predição de crescimento de storage utilizando Shell Automation e Node.js.",
            year: "2024",
            client: "DataWatch Corp",
            stack: ["Node.js", "Shell Scripting", "Prometheus", "Grafana"]
        },
        5: {
            title: "Oracle PL-SQL Report Monitor",
            category: "BACKEND / ORACLE PL-SQL",
            desc: `Sistema de monitoramento robusto focado em performance extrema e integridade de dados para gestão de grandes volumes de informações (Livros, Autores e Vendas).
            
📈 PERFORMANCE & ESCALABILIDADE:
• Paginação via Oracle/SQL: Redução drástica de memória ao carregar apenas o necessário por página (OFFSET/FETCH).
• Ingestão Atmosférica: Utilização de Stored Procedures complexas para centralizar a lógica de importação de 80k+ registros, eliminando "round-trips" de rede.
• Latência O(1): Resposta constante e rápida, independentemente de a base ter milhares ou milhões de registros.`,
            year: "2026",
            client: "Projeto Open Source",
            stack: ["Python", "Flask", "Oracle PL/SQL", "Stored Procedures", "AJAX", "Pandas"],
            link: "https://github.com/ViniScooper/monitor_relatorios"
        },
        6: {
            title: "ByteDataEngine Lakehouse",
            category: "DATA ENGINEERING / OCI",
            desc: `O ByteData é um Motor de Abstração de Dados (Data Fabric) projetado para orquestração de pipelines e governança ativa em ambientes OCI. A plataforma foi construída com uma arquitetura metadata-driven, onde o sistema se adapta automaticamente à estrutura dos dados — eliminando trabalho manual de configuração.

📊 DASHBOARD
• Visualização Automática: Gráficos e tabelas gerados em tempo real com base no esquema das Views SQL.
• Sugestões Inteligentes: O sistema infere automaticamente eixos X (categorias) e Y (valores/métricas).
• Análise Temporal (Time Series): Pivotamento de dados para evolução de séries numéricas.
• Flexibilidade: Dados relacionais e NoSQL (JSON) renderizados de forma unificada.

⚙️ ENGENHARIA DE DADOS

  📁 Datasets
  • SmartImporter: Interface para upload de CSV/Excel com sanitização automática e fuzzy matching de colunas.
  • Catálogo de Dados: Listagem de Tabelas Brutas e Views prontas para consumo.
  • Geração de Templates: Exporta planilhas modelo conforme o esquema atual.

  🔌 Integrações
  • Universal Connectors: Conectores genéricos para APIs JSON públicas e privadas.
  • OData v4 / Power BI: Endpoint nativo para consumo autenticado em ferramentas de BI.
  • API Key: Acesso programático para inserção e resgate de dados por sistemas externos.
  • Segurança (SSRF): Proteção contra acesso indevido à rede interna.

  🔀 Pipelines
  • Schedulers: Disparo automatizado e programado de extrações.
  • Camadas ELT: Gestão do fluxo de tabelas brutas para Views processadas.
  • Resiliência: Consistência transacional garantida em falhas parciais.

🛡️ GOVERNANÇA

  📝 Auditoria
  • Audit Logs Imutáveis: Histórico completo de acessos, alterações e exclusões.
  • Rastreabilidade & LGPD: Busca por quem, quando e o que foi realizado — garantindo compliance.

  👥 Usuários
  • Controle RBAC: Permissões granulares por função (Role) e grupos de acesso a relatórios.
  • Gestão de Identidade: Criação e revogação de senhas e chaves sistêmicas.

  🛠️ Configurações
  • Health Checks: Status em tempo real dos schedulers e da conexão com o banco de dados.
  • Visão Macro: Parâmetros de customização geral e links da plataforma.`,
            year: "2026",
            client: "ByteData Inc.",
            stack: ["Python (Flask)", "React 18", "MySQL 8 (JSON)", "OCI", "Docker", "OData v4"],
            link: "https://github.com/ViniScooper/bytedata-order-api"
        },
        7: {
            title: "PDV Byte - Sistema Completo",
            category: "FULL STACK / AZURE DB",
            desc: `O PDV Byte é um sistema moderno de gestão e frente de caixa para cantinas e lanchonetes, construído com tecnologias robustas e de alta performance.

🛠️ TECNOLOGIAS E ARQUITETURA:
• Frontend (React.js + Vite): Interface ultra-rápida utilizando Context API (Optimistic Updates) e design clean com lucide-react.
• Backend (Node.js + Express): Cérebro rodando regras complexas, processos financeiros e baixas de estoque via REST API protegida.
• Banco de Dados (Azure SQL): Estabilidade ACID na infraestrutura da Microsoft conectada via driver mssql nativo, sem as limitações de performance comuns a ORMs (Zero Prisma).
• Segurança e Perfis: Controle severo de rotas com JWT (12h expiration) e bcrypt para roles de ADMIN (Tudo) e CAIXA (Operações).

📊 FLUXOS & FUNCIONALIDADES:
• 1. Gestão de Turnos (Fluxo Financeiro): Operações travadas com "Caixa Fechado". Requer "Saldo Inicial" de Dinheiro informando exatamente as quebras, sobras e auditoria no fechar de caixa.
• 2. Ponto de Venda (PDV ágil): Adições rápidas ao carrinho, modificação de opcionais (Ex: "Turbinado"), seleção de pagamento na via Cozinha x Via Cliente em impressora.
• 3. Pagamentos / Despesas: Retiradas e pagamentos do mês (ex: Compras). Permite "Anexar NF" e "Alimentar Estoque" automaticamente na hora da despesa.
• 4. Fichas Técnicas & Estoques: Configuração complexa de insumos. Uma venda abate fracionadamente o que o cliente comprou ("-80g Carne", "-1 Pão") e calcula custo total.
• 5. Dashboard Gerencial: Onde se bate o martelo em Faturamento Diário, Lucro Líquido Real, e análise financeira profunda dos turnos.`,
            year: "2026",
            client: "Lanchonetes e Cantinas",
            stack: ["React 18", "Node.js (Express)", "Azure SQL", "JWT / RBAC", "Vite", "mssql"],
            link: "https://github.com/ViniScooper/pdv_byte"
        },
        8: {
            title: "Sistema de Gestão Acadêmica",
            category: "FULL STACK / MERN",
            desc: `Sistema de Gestão Acadêmica focado em acompanhamento de projetos e avaliações. Este projeto foi desenvolvido e apresentado para uma Escola Técnica de Design de Interiores, visando facilitar o uso por professores e alunos no dia a dia acadêmico.

🚀 PRINCIPAIS FUNCIONALIDADES:
• Visão do Aluno: Criação de escopo (Briefing), submissão de entregas, interação via Feedbacks (fórum/chat) e solicitação de revisão.
• Visão do Professor: Painel administrativo de projetos, avaliação com Checklist de requisitos e ditar a Nota Final.
• Ciclo de Vida: Funil de status (Briefing, Prototype, Review, Finalization).
• Notificações & Proteção: Alertas visuais e proteção de rotas via JWT, garantindo total privacidade entre alunos.

🛠️ TECNOLOGIAS E ARQUITETURA:
• Frontend (React 19 + Vite): Single Page Application (SPA), React Router DOM v7, Context API e CSS puro com lucide-react.
• Backend (Node.js + Express): API RESTful autônoma desacoplada do frontend.
• Banco de Dados (MongoDB + Prisma ORM): Integração NoSQL escalável com integridade referencial nativa (@db.ObjectId).
• Segurança: JWT e Bcrypt.js nas rotas protegidas.`,
            year: "2026",
            client: "Instituições de Ensino",
            stack: ["React 19", "Node.js (Express)", "MongoDB", "Prisma ORM", "JWT", "Vite"]
        },
        9: {
            title: "Hub de Gerenciamento de Carreira (Job Tracker)",
            category: "FRONTEND / REACT",
            desc: `O Job Tracker é uma aplicação Single Page Application (SPA) projetada para ajudar profissionais a gerenciar suas candidaturas a vagas de emprego, visualizar recomendações de vagas e analisar dinamicamente o nível de compatibilidade de seus currículos.

🚀 PRINCIPAIS FUNCIONALIDADES:
• Integração Externa (APIs): Busca em paralelo de vagas remotas pelo Remotive e Arbeitnow, normalizando os dados em tempo real.
• Match Dinâmico de Currículo: Algoritmo que compara Habilidades Requisitadas, Senioridade e Cargo, gerando uma porcentagem de aderência (+ Skills Gaps).
• Kanban Interativo: Gestão visual de candidaturas com Drag-and-Drop.
• Exportação para IA: Transforme o currículo em JSON e faça refinamentos focados com IA (ChatGPT/Claude), otimizando-o contra sistemas ATS em segundos.

🛠️ TECNOLOGIAS E UI/UX:
• Frontend: React 19, Vite, React Router DOM, Axios, Lucide React, e CSS puro.
• Autenticação: Armazenamento e interceptação via tokens JWT associados à API no Render.
• Experiência Visual: Loading states (Skeleton Screens), Toast Notifications (Sonner) e Visualização de Dados Interativa (Recharts).

☁️ INFRAESTRUTURA E DEPLOY (HOSPEDAGEM):
Para garantir alta disponibilidade e um fluxo de CI/CD moderno, a arquitetura foi dividida em dois serviços independentes (Decoupled Architecture):
• Frontend (Vercel): A aplicação React/Vite (UI) está hospedada na Vercel (Edge Network) com Continuous Deployment automático a cada Push na branch main. Um \`vercel.json\` garante que as rotas da SPA não resultem em erros 404, servindo unicamente o \`index.html\`.
• Backend (Render): A API REST principal (Node.js/Express) que abriga lógica de negócio e queries autenticadas via Prisma ORM opera sob a plataforma em nuvem do Render. Separar o front-end na Vercel e o back-end em PaaS como o Render demonstra o domínio de boas práticas corporativas de microsserviços.`,
            year: "2026",
            client: "Projeto Pessoal",
            stack: ["React 19", "Vite", "Axios", "Recharts", "dnd-kit", "Lucide", "Vercel", "Render"],
            liveLink: "https://job-tracker-lac-five.vercel.app/login"
        },
        10: {
            title: "CloudOps Hub — Plataforma de Observabilidade & SRE",
            category: "SRE / CLOUD OPS / ORACLE ATP",
            desc: `Plataforma privada de observabilidade, auto-healing e gestão de microsserviços em nuvem, desenvolvida com foco em altíssima eficiência de recursos (< 10 MB de RAM no host).

🛡️ AUTO-HEALING & SRE (ALTA CONFIABILIDADE):
• Sondas HTTP Inteligentes: Monitoramento ativo de saúde interna dos microsserviços. Detecta de forma proativa processos travados (zombie processes) e falhas consecutivas de HTTP 500.
• Auto-Recuperação Autônoma: Reinício preventivo do container via SSH/Docker caso ocorram falhas consecutivas, restabelecendo o serviço em segundos.
• Guardião WhatsApp 24/7: Notificações em tempo real enviadas para o WhatsApp quando a RAM ultrapassa o threshold de 90% ou após ações de auto-cura.

📈 TELEMETRIA HISTÓRICA NO ORACLE ATP (ALWAYS FREE):
• Zero-Overhead na VM: Amostragem temporal periódica de métricas persistida diretamente na nuvem Oracle Autonomous Database (ATP) via ORDS REST API.
• Gráficos Interativos em SVG: Séries temporais responsivas de CPU, Memória RAM, Espaço em Disco e containers ativos com visual moderno e minimalista.

🔍 LIVE CONTAINER LOGS & DOCKER OPS:
• Streaming de Logs sem SSH: Visualização e tail em tempo real de logs de containers diretamente no navegador.
• Filtro de Texto Dinâmico: Busca instantânea por códigos de erro (500, exception, timeout) com coloração de sintaxe no terminal web.
• Edge Security: Integração nativa com Cloudflare Tunnels para tráfego seguro HTTPS ponta a ponta sem expor portas públicas na VM.`,
            year: "2026",
            client: "Infraestrutura Privada / Open Source",
            stack: ["Next.js", "React 19", "Fastify", "Docker", "Oracle Cloud (OCI)", "Oracle ATP", "ORDS REST", "Cloudflare Tunnels", "SSH2", "SRE"],
            link: "https://github.com/ViniScooper/CloudOps_Hub",
            liveLink: "https://cloudops-hub-dun.vercel.app/"
        },
        11: {
            title: "FinControl — Gestão Financeira com Oracle ATP",
            category: "FINTECH / ORACLE ATP / DOCKER",
            desc: `Sistema completo de controle e inteligência financeira corporativa com arquitetura desacoplada e banco de dados transacional autônomo na nuvem.

💳 RECURSOS FINANCEIROS:
• Gestão de Lançamentos & Contas: Fluxo de caixa diário, conciliação e categorização inteligente de despesas e receitas.
• Dashboards e Indicadores: Visão consolidada de saldos, previsões financeiras e gráficos analíticos de desempenho em tempo real.

☁️ ARQUITETURA EM NUVEM:
• Backend Conteinerizado: Microsserviço Node.js isolado em container Docker na VM Oracle Cloud Infrastructure (OCI).
• Persistência em Nuvem Autônoma (Oracle ATP): Banco de dados transacional de missão crítica com transações ACID no Oracle Cloud Always Free, integrado via ORDS REST API.
• Segurança de Borda: Roteamento criptografado via Cloudflare Tunnel dispensando portas abertas no firewall da nuvem.`,
            year: "2026",
            client: "Projeto Fintech",
            stack: ["Node.js", "Express", "Docker", "Oracle Autonomous Database", "ORDS REST", "Oracle Cloud (OCI)", "Cloudflare Tunnels"]
        },
        12: {
            title: "Boteco do Severino — PDV & Gestão Comercial",
            category: "FULL STACK / MYSQL / DOCKER",
            desc: `Sistema comercial completo para gestão de pedidos, cardápio digital, estoque e fechamento de caixa para o setor gastronômico.

🍻 FUNCIONALIDADES OPERACIONAIS:
• Ponto de Venda (PDV Rápido): Lançamento ágil de pedidos, mesas e comandas com emissão rápida e cálculo de taxas e descontos.
• Controle de Caixa & Vendas: Fechamento de turno, relatórios de lucratividade e histórico detalhado de movimentações.

🚀 INFRAESTRUTURA & RESILIÊNCIA:
• Multi-Container Docker: Separação de camadas entre o backend Node.js e a base relacional MySQL dedicada (boteco_db).
• Rotinas de Backup Automatizado (.sql.gz): Pipeline integrado no CloudOps Hub para dump e compactação gzip regular garantindo recuperação contra desastres.
• Tráfego de Borda Seguro: Exposição pública via Cloudflare Tunnel garantindo alta velocidade e segurança HTTPS.`,
            year: "2026",
            client: "Comércio / Gastronomia",
            stack: ["Node.js", "Express", "MySQL 8.0", "Docker", "Oracle Cloud (OCI)", "Cloudflare Tunnels", "Bash Automation"]
        },
    },
    en: {
        1: {
            title: "Oracle PL/SQL Performance Lab",
            category: "DBA / ORACLE",
            desc: `Extreme performance optimization in an Oracle environment, reducing complex query execution time from 12s to 300ms (97% improvement).
            
🛠️ PERFORMANCE ENGINEERING:
• Execution Plan Analysis: Identification of bottlenecks in Full Table Scans and I/O overhead in inefficient joins.
• Index Restructuring: Implementation of composite and functional indexes based on real application workload.
• PL/SQL Tuning: Refactoring slow loops and cursors into set-based operations (Bulk Collect / Forall), reducing context-switching overhead.
• Statistics & Histograms: Calibration of stats to ensure the optimizer chooses the best path for skewed data distributions.`,
            year: "2024",
            client: "Tech Solutions",
            stack: ["Oracle Database", "PL/SQL", "AWR / ASH Reports", "Execution Plans", "Performance Tuning"]
        },
        2: {
            title: "Scalable Microservices & Data",
            category: "BACKEND / DATABASE",
            desc: "Microservices architecture using Node.js and Docker, integrated with PostgreSQL. Focus on ensuring eventual consistency and high availability of data in distributed environments.",
            year: "2023",
            client: "Global Fintech",
            stack: ["Node.js", "Docker", "PostgreSQL", "Redis", "Microservices"]
        },
        3: {
            title: "Financial DB Migration",
            category: "DATABASE ENGINEER",
            desc: `Mission-critical financial database migration to the cloud, ensuring zero data loss and continuous availability during transition.
            
🚀 IMPACT & RESULTS:
• Schema Adjustments: Remodeling legacy tables to optimize storage and performance in Cloud environments.
• Deploy Automation: Automated pipelines for controlled schema and data migration, reducing human error.
• Data Integrity: Rigorous validation via PL/SQL scripts to ensure 100% parity between source and destination systems.`,
            year: "2023",
            client: "Sovereign Bank",
            stack: ["SQL Server", "Oracle Cloud (OCI)", "Shell Scripting", "Schema Mapping"]
        },
        4: {
            title: "Database Monitoring Tool",
            category: "DBA / AUTOMATION",
            desc: "Monitoring dashboard for database instance status, integrity alerts, and storage growth prediction using Shell Automation and Node.js.",
            year: "2024",
            client: "DataWatch Corp",
            stack: ["Node.js", "Shell Scripting", "Prometheus", "Grafana"]
        },
        5: {
            title: "Oracle PL-SQL Report Monitor",
            category: "BACKEND / ORACLE PL-SQL",
            desc: `Robust monitoring system focused on extreme performance and data integrity for managing large volumes of information (Books, Authors, and Sales).
            
📈 PERFORMANCE & SCALABILITY:
• Oracle/SQL Pagination: Drastic memory reduction by loading only what is needed per page (OFFSET/FETCH).
• Atomic Ingestion: Using complex Stored Procedures to centralize import logic for 80k+ records, eliminating network round-trips.
• O(1) Latency: Constant and fast response, regardless of whether the database has thousands or millions of records.`,
            year: "2026",
            client: "Open Source Project",
            stack: ["Python", "Flask", "Oracle PL/SQL", "Stored Procedures", "AJAX", "Pandas"],
            link: "https://github.com/ViniScooper/monitor_relatorios"
        },
        6: {
            title: "ByteDataEngine Lakehouse",
            category: "DATA ENGINEERING / OCI",
            desc: `ByteData is a Data Fabric & Abstraction Engine designed for pipeline orchestration and active governance in OCI environments. Built on a metadata-driven architecture, the platform self-adapts to data structures — eliminating manual configuration overhead.

📊 DASHBOARD
• Automatic Visualization: Charts and tables generated in real time based on SQL View schemas.
• Intelligent Suggestions: The system automatically infers X (categories) and Y (values/metrics) axes.
• Time Series Analysis: Easy data pivoting to display numeric series evolution.
• Flexibility: Relational and NoSQL (JSON) data rendered in a unified interface.

⚙️ DATA ENGINEERING

  📁 Datasets
  • SmartImporter: Upload interface for CSV/Excel with automatic sanitization and fuzzy column matching.
  • Data Catalog: Listing of Raw Tables and Views ready for consumption.
  • Template Generation: Exports blank spreadsheet templates based on the current schema.

  🔌 Integrations
  • Universal Connectors: Generic connectors for public and private JSON APIs.
  • OData v4 / Power BI: Native endpoint for authenticated consumption in BI tools.
  • API Key: Programmatic access for external systems to insert or retrieve data.
  • Security (SSRF): Protection against unauthorized access to the internal network.

  🔀 Pipelines
  • Schedulers: Automated and scheduled extraction triggers.
  • ELT Layers: Manages flow from raw tables to processed Views.
  • Resilience: Transactional consistency guaranteed even on partial failures.

🛡️ GOVERNANCE

  📝 Audit
  • Immutable Audit Logs: Complete history of accesses, changes, and deletions.
  • Traceability & Compliance: Search by who, when, and what was done — ensuring LGPD compliance.

  👥 Users
  • RBAC Control: Granular permissions by role and access groups for reports and resources.
  • Identity Management: Creation and revocation of passwords and system keys.

  🛠️ Settings
  • Health Checks: Real-time status of schedulers and database connectivity.
  • Macro View: General customization parameters and platform links.`,
            year: "2026",
            client: "ByteData Inc.",
            stack: ["Python (Flask)", "React 18", "MySQL 8 (JSON)", "OCI", "Docker", "OData v4"],
            link: "https://github.com/ViniScooper/bytedata-order-api"
        },
        7: {
            title: "PDV Byte - Point of Sale",
            category: "FULL STACK / AZURE DB",
            desc: `PDV Byte is a complete Point of Sale (POS) and management system for canteens and snack bars, built with robust and high-performing technologies.

🛠️ TECHNOLOGIES & ARCHITECTURE:
• Frontend (React.js + Vite): Ultra-fast interface using Context API (Optimistic Updates) and clean design with lucide-react.
• Backend (Node.js + Express): Brain processing complex rules, financial operations, and stock deductions via secure REST API.
• Database (Azure SQL): ACID stability on Microsoft infrastructure connected via native mssql driver, bypassing common ORM performance limitations.
• Security & Profiles: Strict route control using JWT (12h expiration) and bcrypt for ADMIN (All) and CASHIER (Operations) roles.

📊 FLOWS & FEATURES:
• 1. Shift Management (Financial Flow): Operations are locked when "Shift Closed". Requires setting "Initial Balance" and tracks overages, shortages, and audits upon closing.
• 2. Agile POS: Fast cart additions, modifiers (e.g., "Extra bacon"), and payment selection with split printing routing (Kitchen vs Customer receipt).
• 3. Payments & Expenses: Outbound cash flows securely. Allows attaching receipt images and automatically "Feeding Stock" upon expense registration.
• 4. Complex Recipes & Stock: Advanced ingredient mapping. Selling a meal performs fractional deductions ("-80g Meat", "-1 Bun") and calculates true cost.
• 5. Managerial Dashboard: Real-time look at Daily Revenue, Real Net Profit, and in-depth financial analysis of past shifts.`,
            year: "2026",
            client: "Snack Bars",
            stack: ["React", "Express", "Azure SQL", "JWT / RBAC", "Vite", "mssql"],
            link: "https://github.com/ViniScooper/pdv_byte"
        },
        8: {
            title: "Academic Management System",
            category: "FULL STACK / MERN",
            desc: `Academic Management System focused on project tracking and evaluations. This project was developed and presented for an Interior Design Technical School, ensuring easy daily use for both students and teachers.

🚀 CORE FEATURES:
• Student View: Scope creation (Briefing), assignment submissions, continuous interaction via Feedbacks (chat/forum), and review requests.
• Teacher View: Administrative dashboard for pending projects, dynamic evaluation with Checklists, and Final Grade assignment.
• Project Lifecycle: Status funnel (Briefing, Prototype, Review, Finalization).
• Notifications & Security: Visual alerts and route protection via JWT, ensuring complete privacy among students.

🛠️ TECHNOLOGIES & ARCHITECTURE:
• Frontend (React 19 + Vite): Single Page Application (SPA), React Router DOM v7, Context API, and pure CSS with lucide-react.
• Backend (Node.js + Express): Autonomous RESTful API decoupled from the frontend.
• Database (MongoDB + Prisma ORM): Scalable NoSQL integration with native referential integrity (@db.ObjectId).
• Security: JWT and Bcrypt.js on protected routes.`,
            year: "2026",
            client: "Educational Institutions",
            stack: ["React 19", "Node.js (Express)", "MongoDB", "Prisma ORM", "JWT", "Vite"]
        },
        9: {
            title: "Career Management Hub (Job Tracker)",
            category: "FRONTEND / REACT",
            desc: `Job Tracker is a SPA application designed to help professionals manage job applications, visualize job recommendations, and dynamically analyze their resume compatibility.

🚀 CORE FEATURES:
• External APIs Integration: Parallel fetch of remote jobs via Remotive and Arbeitnow with real-time data normalization.
• Dynamic Resume Matching: Algorithm comparing Requested Skills, Seniority, and Title match, resulting in an adherence score (+ Skills Gaps).
• Interactive Kanban: Visual drag-and-drop board to manage job application statuses.
• AI Export Ready: Turn the resume into JSON format for focused AI (ChatGPT/Claude) enhancements, optimizing it for ATS systems in seconds.

🛠️ TECHNOLOGIES & UI/UX:
• Frontend: React 19, Vite, React Router DOM, Axios, Lucide React, and Custom CSS.
• Authentication: JWT token interceptors validating state against a custom Render API.
• User Experience: Loading states (Skeleton Screens), Toast Notifications (Sonner) and Interactive Data Viz (Recharts).

☁️ INFRASTRUCTURE AND DEPLOYMENT (HOSTING):
To ensure high availability and modern CI/CD flow, the architecture uses Decoupled independent services:
• Frontend (Vercel): The visual React/Vite layer lives on Vercel's global Edge Network featuring automatic Continuous Deployment hooked to GitHub \`main\` branch pushes. A customized \`vercel.json\` bypasses SPA 404 Routing errors.
• Backend (Render): A dedicated Node.js/Express RESTful API routing, authenticating and querying data via Prisma ORM operates on the Render Cloud. Choosing explicit physical separation of services (Vercel + Render) mirrors strict corporate IT decoupling best practices.`,
            year: "2026",
            client: "Personal Project",
            stack: ["React 19", "Vite", "Axios", "Recharts", "dnd-kit", "Lucide", "Vercel", "Render"],
            liveLink: "https://job-tracker-lac-five.vercel.app/login"
        },
        10: {
            title: "CloudOps Hub — Observability & SRE Platform",
            category: "SRE / CLOUD OPS / ORACLE ATP",
            desc: `Private cloud observability, auto-healing, and container management platform engineered for radical resource efficiency (< 10 MB RAM overhead on the host).

🛡️ AUTO-HEALING & SRE (HIGH AVAILABILITY):
• Active HTTP Health Probing: Continuous monitoring of microservice endpoints. Proactively detects zombie processes and consecutive HTTP 500 errors.
• Autonomous Self-Healing: Instant SSH/Docker container restart if consecutive health checks fail, restoring services in seconds.
• 24/7 WhatsApp Watchdog: Real-time incident alerts sent directly to WhatsApp when host RAM exceeds 90% or upon self-healing trigger.

📈 HISTORICAL METRICS IN ORACLE ATP (ALWAYS FREE):
• Zero VM Storage Overhead: Periodic telemetry sampling persisted directly into Oracle Autonomous Database (ATP) cloud via ORDS REST API.
• Interactive SVG Charts: Native responsive time-series charts for CPU, RAM, Disk usage, and container count.

🔍 LIVE CONTAINER LOGS & DOCKER OPS:
• SSH-Less Log Streaming: Real-time container log tailing directly in the web browser.
• Dynamic Text Search: Instant keyword and error code filtering (500, exception, timeout) with terminal syntax highlighting.
• Edge Security: Cloudflare Tunnels integration ensuring end-to-end TLS/HTTPS without opening public ingress ports.`,
            year: "2026",
            client: "Private Infrastructure / Open Source",
            stack: ["Next.js", "React 19", "Fastify", "Docker", "Oracle Cloud (OCI)", "Oracle ATP", "ORDS REST", "Cloudflare Tunnels", "SSH2", "SRE"],
            link: "https://github.com/ViniScooper/CloudOps_Hub",
            liveLink: "https://cloudops-hub-dun.vercel.app/"
        },
        11: {
            title: "FinControl — Financial Management with Oracle ATP",
            category: "FINTECH / ORACLE ATP / DOCKER",
            desc: `Corporate financial intelligence and cash-flow platform featuring a decoupled architecture and cloud autonomous database storage.

💳 FINANCIAL FEATURES:
• Transaction & Account Management: Daily cash flow, reconciliation, and automated categorization of income and expenses.
• Analytics Dashboard: Consolidated balances, financial projections, and real-time performance indicators.

☁️ CLOUD ARCHITECTURE:
• Containerized Backend: Node.js microservice running in an isolated Docker container on Oracle Cloud Infrastructure (OCI).
• Autonomous Cloud Persistence: Mission-critical relational storage with ACID transactions in Oracle ATP Always Free via ORDS REST API.
• Edge Security: Encrypted routing via Cloudflare Tunnel without public ingress ports.`,
            year: "2026",
            client: "Fintech Project",
            stack: ["Node.js", "Express", "Docker", "Oracle Autonomous Database", "ORDS REST", "Oracle Cloud (OCI)", "Cloudflare Tunnels"]
        },
        12: {
            title: "Boteco do Severino — POS & Commercial Management",
            category: "FULL STACK / MYSQL / DOCKER",
            desc: `Commercial management system for orders, digital menu, inventory, and point-of-sale operations in gastronomy.

🍻 OPERATIONAL FEATURES:
• Rapid POS (Point of Sale): Fast order dispatching for tables and customer tabs with discounts and tax calculation.
• Cashier & Sales Auditing: Shift closings, profitability analytics, and detailed sales history.

🚀 INFRASTRUCTURE & RESILIENCE:
• Multi-Container Docker: Decoupled architecture separating Node.js API from dedicated MySQL container (boteco_db).
• Automated Backup Pipeline: Snapshot routines integrated into CloudOps Hub creating compressed .sql.gz archives for disaster recovery.
• Secure Edge Traffic: Cloudflare Tunnel edge routing providing HTTPS without requiring expensive static public IPs.`,
            year: "2026",
            client: "Retail / Gastronomy",
            stack: ["Node.js", "Express", "MySQL 8.0", "Docker", "Oracle Cloud (OCI)", "Cloudflare Tunnels", "Bash Automation"]
        },
    }
};

const images = {
    "1": "/Gemini_Generated_Image_tx135ptx135ptx13.png",
    "6": "/bytedata_login.png",
    "7": "/Gemini_Generated_Image_uuie5duuie5duuie.png",
    "8": "/ETE4444.png",
    "9": "/job_tracker1.png",
    "10": "/Gemini_Generated_Image_m3mlltm3mlltm3ml.png",
    "11": "/monitor_relatorios.png",
    "12": "/pdv.png"
};

const ProjectDetails = () => {
    const { id } = useParams();
    const { language } = useLanguage();
    const t = translations[language].projectDetails;
    const project = projectsData[language][id];
    
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const projectImages = {
        '6': [
            "/Gemini_Generated_Image_m3mlltm3mlltm3ml.png",
            "/bytedata_login.png",
            "/bytedata_dashboard.png",
            "/DATA.png",
            "/DATA4.png",
            "/DATA23321.png",
            "/DATA2321321.png",
            "/DATAA2321.png",
            "/DSAD3224239.png",
            "/GRADIFCOSA.png"
        ],
        '7': [
            "/Gemini_Generated_Image_uuie5duuie5duuie.png",
            "/Captura de tela 2026-03-09 175238.png",
            "/Captura de tela 2026-03-09 175307.png"
        ],
        '8': [
            "/ETE4444.png",
            "/ETE8888.png",
            "/ETE560040040.jpeg",
            "/ETE34349.jpeg",
            "/ETE66666.png"
        ],
        '9': [
            "/job_tracker1.png",
            "/tracker02.png",
            "/tracker002.png",
            "/tracker.....png",
            "/Captura de tela 2026-03-10 213010.png",
            "/Captura de tela 2026-03-10 213041.png"
        ],
        '10': [
            "/Gemini_Generated_Image_m3mlltm3mlltm3ml.png",
            "/bytedata_dashboard.png"
        ],
        '11': [
            "/monitor_relatorios.png",
            "/bytedata_dashboard.png"
        ],
        '12': [
            "/pdv.png",
            "/BYTE_PDV.png"
        ]
    };

    if (!project) return <div className="container" style={{ padding: '20rem 0' }}>{t.notFound}</div>;

    const currentImages = projectImages[id] || [images[id]];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
    };

    return (
        <div className="project-details">
            <div className="container">
                <Link to="/" className="back-link">
                    <ArrowLeft size={20} /> {t.back}
                </Link>

                <header className="project-header">
                    <span className="work-category">{project.category}</span>
                    <h1 className="project-title">{project.title}</h1>
                </header>

                <div className="project-main-image carousel-container">
                    <img src={currentImages[currentImageIndex]} alt={project.title} />
                    
                    {currentImages.length > 1 && (
                        <>
                            <button className="carousel-btn prev" onClick={prevImage}>
                                <ChevronLeft size={24} />
                            </button>
                            <button className="carousel-btn next" onClick={nextImage}>
                                <ChevronRight size={24} />
                            </button>
                            <div className="carousel-dots">
                                {currentImages.map((_, idx) => (
                                    <span 
                                        key={idx} 
                                        className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                                        onClick={() => setCurrentImageIndex(idx)}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div className="project-info-grid">
                    <div className="project-description">
                        <h3>{t.overview}</h3>
                        <p style={{ whiteSpace: 'pre-line' }}>{project.desc}</p>

                        {project.stack && (
                            <div className="project-stack">
                                {project.stack.map((tech, index) => (
                                    <span key={index} className="stack-tag">{tech}</span>
                                ))}
                            </div>
                        )}

                        <div className="project-links" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                    <Github size={18} /> {t.viewGithub}
                                </a>
                            )}
                            
                            {project.liveLink && (
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                    <ExternalLink size={18} /> {t.viewLive}
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="project-meta">
                        <div className="meta-item">
                            <h4>{t.year}</h4>
                            <span>{project.year}</span>
                        </div>
                        <div className="meta-item">
                            <h4>{t.client}</h4>
                            <span>{project.client}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
