export const translations = {
    pt: {
        nav: {
            about: "SOBRE",
            projects: "PROJETOS",
            skills: "HABILIDADES",
            contact: "CONTATO"
        },
        hero: {
            title1: "SOFTWARE & DATABASE ENGINEER",
            title2: "| ORACLE & POSTGRESQL | RMAN, DATA PUMP & LINUX SRE",
            subtitle: "Engenheiro de Banco de Dados e Desenvolvedor especializado em Oracle (19c/21c/ATP) e PostgreSQL (AWS RDS / Aurora). Forte atuação prática em Oracle RMAN (Point-in-Time Recovery, Archivelogs, Restore/Recover Validate), Oracle Data Pump (expdp/impdp), Linux SRE (Ubuntu/Oracle Linux), migrações heterogêneas de dados (AWS DMS / CDC) e automação de infraestrutura com Terraform e Docker.",
            remote: "Disponível para oportunidades Híbridas (SP) e Remotas Globais"
        },
        about: {
            title: "DESENVOLVEDOR DE SOFTWARE & ENGENHEIRO DE BANCO DE DADOS CLOUD",
            description: "Especialista em bancos de dados corporativos e confiabilidade de infraestrutura com 5+ anos de experiência na sustentação, automação e evolução de ambientes críticos. Forte domínio em Oracle Database (19c/21c/ATP/23ai) e PostgreSQL na AWS (RDS / Aurora Multi-AZ). Atuação comprovada em Disaster Recovery avançado com Oracle RMAN (Point-in-Time Recovery, gestão rigorosa de Archivelogs, validações físicas e simulações em modo Mount), migrações e movimentações lógicas com Oracle Data Pump (expdp/impdp com REMAP e compressão), administração Linux SRE (Ubuntu, Oracle Linux, Shell Scripting avançado), migrações heterogêneas (AWS DMS / CDC), query tuning (AWR, ASH, EXPLAIN ANALYZE) e IaC com Terraform. Experiência contínua com versionamento de schema em esteiras CI/CD com Flyway, microsserviços em Python e orquestração Docker. Inglês avançado para reuniões diárias e colaboração com times globais.",
            stats: [
                { label: "ANOS COM TECNOLOGIA & DADOS", value: "5+" },
                { label: "BANCOS OTIMIZADOS", value: "50+" },
                { label: "DISPONIBILIDADE EM PROD", value: "99.9%" }
            ]
        },
        skillLists: [
            {
                title: "ORACLE DBA & DATA PUMP",
                skills: ["Oracle Database (19c/21c/ATP/23ai)", "RMAN (PITR, Archivelogs, Validation)", "Data Pump (expdp / impdp)", "Multitenant (CDB / PDB)", "AWR, ADDM & ASH Performance Tuning"]
            },
            {
                title: "POSTGRESQL & CLOUD DATA",
                skills: ["PostgreSQL (AWS RDS / Aurora)", "AWS DMS & CDC Migrations", "Query Tuning (EXPLAIN ANALYZE)", "Autovacuum & Lock Mitigation", "PgBouncer & Read Replicas"]
            },
            {
                title: "LINUX SRE, IAC & CI/CD",
                skills: ["Linux SRE (Ubuntu / Oracle Linux / RHEL)", "Shell Scripting (Bash) & Python", "Terraform (IaC para Cloud)", "Flyway (Schema as Code)", "Docker & CI/CD Pipelines"]
            }
        ],
        skills: {
            title: "HABILIDADES & EXPERTISE",
            cards: [
                { title: "Oracle RMAN & Disaster Recovery", desc: "Arquitetura e execução de backups Full/Incremental com Archivelogs, Point-in-Time Recovery (PITR) a nível de CDB/PDB, validação de blocos (RESTORE/RECOVER VALIDATE) e abertura com RESETLOGS sem perda de integridade." },
                { title: "Oracle Data Pump & Migrações Lógicas", desc: "Movimentação em larga escala de dados corporativos via expdp/impdp, remapeamento de esquemas (REMAP_SCHEMA), migração de tablespaces, paralelismo e compressão de dump files." },
                { title: "Linux SRE & Automação Operacional", desc: "Administração aprofundada de servidores Linux (Ubuntu, Oracle Linux e RHEL), automação de rotinas críticas de DBA em Shell Scripting (Bash), diagnóstico de I/O, memória e gestão de containers Docker." },
                { title: "PostgreSQL & AWS RDS em Produção", desc: "Administração e sustentação de instâncias AWS RDS e Aurora PostgreSQL com Multi-AZ, Read Replicas, backups e alta disponibilidade." },
                { title: "Performance Tuning & Diagnóstico", desc: "Análise profunda via relatórios AWR/ASH/ADDM no Oracle e EXPLAIN ANALYZE/pg_stat_statements no PostgreSQL, tuning de autovacuum e mitigação de contenção de locks." },
                { title: "IaC, CI/CD & Schema com Flyway", desc: "Provisionamento declarativo de infraestrutura com Terraform e versionamento automatizado de schema (Database Migrations as Code) via Flyway integrado em pipelines de CI/CD." }
            ]
        },
        works: {
            title: "PROJETOS",
            details: "DETALHES",
            dragHint: "💡 Arraste os cards para reorganizar a ordem dos projetos.",
            featured: "DESTAQUE"
        },
        contact: {
            title: "VAMOS CONVERSAR?",
            name: "NOME",
            email: "E-MAIL",
            message: "MENSAGEM",
            send: "ENVIAR MENSAGEM"
        },
        footer: {
            rights: "Todos os direitos reservados."
        },
        projectDetails: {
            back: "VOLTAR PARA HOME",
            overview: "VISÃO GERAL DO PROJETO",
            year: "ANO",
            client: "CLIENTE",
            viewGithub: "VER NO GITHUB",
            viewLive: "VER NO SITE",
            notFound: "Projeto não encontrado"
        }
    },
    en: {
        nav: {
            about: "ABOUT",
            projects: "PROJECTS",
            skills: "SKILLS",
            contact: "CONTACT"
        },
        hero: {
            title1: "SOFTWARE & DATABASE ENGINEER",
            title2: "| ORACLE & POSTGRESQL | RMAN, DATA PUMP & LINUX SRE",
            subtitle: "Database Engineer and Software Developer specialized in Oracle (19c/21c/ATP) and PostgreSQL (AWS RDS / Aurora). Strong hands-on expertise in Oracle RMAN (Point-in-Time Recovery, Archivelogs, Restore/Recover Validate), Oracle Data Pump (expdp/impdp), Linux SRE (Ubuntu/Oracle Linux), heterogeneous database migrations (AWS DMS / CDC), and infrastructure automation with Terraform and Docker.",
            remote: "Available for Hybrid (SP) and Global Remote Opportunities"
        },
        about: {
            title: "SOFTWARE DEVELOPER & CLOUD DATABASE ENGINEER",
            description: "Enterprise database specialist and site reliability engineer with 5+ years of experience engineering, supporting, and migrating mission-critical workloads. Extensive experience in Oracle Database (19c/21c/ATP/23ai) and PostgreSQL on AWS (RDS / Aurora Multi-AZ). Proven track record in advanced Disaster Recovery with Oracle RMAN (Point-in-Time Recovery, strict archivelog policies, physical block validation, and Mount-state recovery simulations), logical data movement with Oracle Data Pump (expdp/impdp with REMAP and compression), Linux SRE administration (Ubuntu, Oracle Linux, advanced Bash scripting), heterogeneous migrations (AWS DMS / CDC), query profiling (AWR, ASH, EXPLAIN ANALYZE), and IaC with Terraform. Experienced managing database schema migrations as code with Flyway in automated CI/CD pipelines, Python microservices, and Docker. Advanced English for daily agile meetings with global teams.",
            stats: [
                { label: "YEARS WITH TECH & DATA", value: "5+" },
                { label: "OPTIMIZED DATABASES", value: "50+" },
                { label: "UPTIME IN PROD", value: "99.9%" }
            ]
        },
        skillLists: [
            {
                title: "ORACLE DBA & DATA PUMP",
                skills: ["Oracle Database (19c/21c/ATP/23ai)", "RMAN (PITR, Archivelogs, Validation)", "Data Pump (expdp / impdp)", "Multitenant (CDB / PDB)", "AWR, ADDM & ASH Performance Tuning"]
            },
            {
                title: "POSTGRESQL & CLOUD DATA",
                skills: ["PostgreSQL (AWS RDS / Aurora)", "AWS DMS & CDC Migrations", "Query Tuning (EXPLAIN ANALYZE)", "Autovacuum & Lock Mitigation", "PgBouncer & Read Replicas"]
            },
            {
                title: "LINUX SRE, IAC & CI/CD",
                skills: ["Linux SRE (Ubuntu / Oracle Linux / RHEL)", "Shell Scripting (Bash) & Python", "Terraform (IaC for Cloud)", "Flyway (Schema as Code)", "Docker & CI/CD Pipelines"]
            }
        ],
        skills: {
            title: "SKILLS & EXPERTISE",
            cards: [
                { title: "Oracle RMAN & Disaster Recovery", desc: "Architecture and execution of Full/Incremental backups with Archivelogs, Point-in-Time Recovery (PITR) at CDB/PDB level, block validation (RESTORE/RECOVER VALIDATE), and OPEN RESETLOGS with zero data corruption." },
                { title: "Oracle Data Pump & Logical Migrations", desc: "Large-scale enterprise data movement via expdp/impdp, schema remapping (REMAP_SCHEMA), tablespace migrations, parallel execution, and dump file compression." },
                { title: "Linux SRE & Operational Automation", desc: "In-depth Linux system administration (Ubuntu, Oracle Linux, RHEL), automated mission-critical DBA routines with Shell Scripting (Bash), I/O and memory troubleshooting, and Docker containerization." },
                { title: "PostgreSQL & AWS RDS in Production", desc: "Administration and reliability engineering for AWS RDS and Aurora PostgreSQL with Multi-AZ, Read Replicas, backups, and high availability." },
                { title: "Performance Tuning & Diagnostics", desc: "Deep profiling using AWR/ASH/ADDM reports in Oracle and EXPLAIN ANALYZE/pg_stat_statements in PostgreSQL, autovacuum fine-tuning, and transaction lock resolution." },
                { title: "IaC, CI/CD & Schema Evolution with Flyway", desc: "Declarative infrastructure provisioning with Terraform and automated database schema migrations as code using Flyway integrated into continuous delivery pipelines." }
            ]
        },
        works: {
            title: "PROJECTS",
            details: "DETAILS",
            dragHint: "💡 Drag the cards to reorder the projects.",
            featured: "FEATURED"
        },
        contact: {
            title: "LET'S TALK?",
            name: "NAME",
            email: "EMAIL",
            message: "MESSAGE",
            send: "SEND MESSAGE"
        },
        footer: {
            rights: "All rights reserved."
        },
        projectDetails: {
            back: "BACK TO HOME",
            overview: "PROJECT OVERVIEW",
            year: "YEAR",
            client: "CLIENT",
            viewGithub: "VIEW ON GITHUB",
            viewLive: "VIEW LIVE SITE",
            notFound: "Project not found"
        }
    }
};
