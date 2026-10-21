// Saídas estáticas dos comandos do terminal interativo (PT / EN).
// Cada função recebe o idioma e devolve o texto exibido (renderizado com white-space: pre-wrap).

const careerStart = new Date('2022-01-01T00:00:00-03:00');

export const getUptime = (lang) => {
    const diffMs = Date.now() - careerStart.getTime();
    const days = Math.floor(diffMs / 86400000);
    const years = Math.floor(days / 365);
    const remDays = days % 365;
    const now = new Date().toLocaleTimeString('pt-BR', { hour12: false });
    return lang === 'pt'
        ? ` ${now} up ${years} anos, ${remDays} dias,  1 user,  load average: 0.42, 0.38, 0.35\n (carreira em produção desde Jan/2022 — SLA atual: 99.98%)`
        : ` ${now} up ${years} years, ${remDays} days,  1 user,  load average: 0.42, 0.38, 0.35\n (production career since Jan/2022 — current SLA: 99.98%)`;
};

export const neofetch = (lang) => `        .--.          vini@dba-node-01
       |o_o |         ----------------
       |:_/ |         ${lang === 'pt' ? 'Nome' : 'Name'}:    José Vinícius Lourenço
      //   \\ \\        Role:    Database Administrator & Cloud Engineer
     (|     | )       OS:      Ubuntu 24.04 LTS / Oracle Linux 8
    /'\\_   _/\`\\       Kernel:  Oracle DBA (RMAN · Data Pump · Multitenant)
    \\___)=(___/       DBs:     Oracle 19c/21c/23ai · PostgreSQL · SQL Server · MongoDB
                      Cloud:   OCI · AWS (RDS/EC2/S3) · Cloudflare
                      IaC:     Terraform · Flyway · Docker · GitHub Actions
                      Shell:   bash 5.2 (rlwrap enabled)
                      Uptime:  ${new Date().getFullYear() - 2022}+ ${lang === 'pt' ? 'anos em produção' : 'years in production'} · SLA 99.98%
                      ${lang === 'pt' ? 'Local' : 'Location'}:   Recife, BR (${lang === 'pt' ? 'Remoto Global' : 'Global Remote'})

${lang === 'pt' ? 'Digite "help" para ver os comandos.' : 'Type "help" to list commands.'}`;

export const help = (lang) => lang === 'pt'
    ? `Comandos disponíveis:
  whoami            Perfil profissional
  neofetch          Resumo do sistema (eu 😄)
  git log           Histórico de carreira (experiência)
  kubectl get skills  Habilidades em formato de pods
  rman              Demo de Point-in-Time Recovery (RMAN)
  expdp             Demo de export com Data Pump
  uptime            Tempo de carreira em produção
  ls / cat README.md  Arquivos do portfólio
  projects | about | arch   Abrir janelas detalhadas
  cv pt / cv en     Baixar currículo PDF
  contact | copy email
  history | date | clear
(Tab autocompleta · ↑/↓ histórico)`
    : `Available commands:
  whoami            Professional profile
  neofetch          System summary (me 😄)
  git log           Career history (experience)
  kubectl get skills  Skills rendered as pods
  rman              Point-in-Time Recovery demo (RMAN)
  expdp             Data Pump export demo
  uptime            Time in production
  ls / cat README.md  Portfolio files
  projects | about | arch   Open detailed windows
  cv pt / cv en     Download PDF resume
  contact | copy email
  history | date | clear
(Tab autocompletes · ↑/↓ history)`;

export const whoami = (lang) => lang === 'pt'
    ? `José Vinícius Lourenço — Database Administrator & Cloud Engineer
• 5+ anos com bancos em produção (Oracle 19c/21c/ATP, PostgreSQL AWS RDS, SQL Server)
• Oracle RMAN: backups Full/Incremental, Archivelogs, PITR de PDB, RESTORE/RECOVER VALIDATE
• Oracle Data Pump (expdp/impdp): migrações, REMAP_SCHEMA, paralelismo e compressão
• Linux SRE (Ubuntu / Oracle Linux / RHEL) + automação em Bash e Python
• Terraform, Flyway, Docker e CI/CD · Criador do CloudOps Hub`
    : `José Vinícius Lourenço — Database Administrator & Cloud Engineer
• 5+ years running production databases (Oracle 19c/21c/ATP, PostgreSQL AWS RDS, SQL Server)
• Oracle RMAN: Full/Incremental backups, Archivelogs, PDB PITR, RESTORE/RECOVER VALIDATE
• Oracle Data Pump (expdp/impdp): migrations, REMAP_SCHEMA, parallelism & compression
• Linux SRE (Ubuntu / Oracle Linux / RHEL) + Bash and Python automation
• Terraform, Flyway, Docker & CI/CD · Creator of CloudOps Hub`;

export const gitLog = (lang) => lang === 'pt'
    ? `commit a7f3c21 (HEAD -> main, tag: dba-pleno)
Author: José Vinícius <vviniciuslourenco@gmail.com>
Date:   Jul 2024 — Presente
    feat: DBA Pleno @ In Forma Software
    - Oracle 19c/21c Multitenant + Data Guard (SLA 99.98%)
    - RMAN: PITR, Archivelogs, validação física de backups
    - Data Pump (expdp/impdp) em migrações e clonagens
    - Automação Linux em Bash/Python (-50% tarefas manuais)

commit 4e91b0d
Date:   Mai 2023 — Mai 2024
    feat: Software Dev & Database Engineer @ Cod.ERP
    - PostgreSQL AWS RDS · AWS DMS/CDC · Terraform · Flyway

commit 1c02e88
Date:   Jan 2022 — Mar 2023
    init: Estágio em Desenvolvimento @ KarneKeijo Logística`
    : `commit a7f3c21 (HEAD -> main, tag: mid-level-dba)
Author: José Vinícius <vviniciuslourenco@gmail.com>
Date:   Jul 2024 — Present
    feat: Mid-Level DBA @ In Forma Software
    - Oracle 19c/21c Multitenant + Data Guard (99.98% SLA)
    - RMAN: PITR, Archivelogs, physical backup validation
    - Data Pump (expdp/impdp) for migrations & cloning
    - Linux automation in Bash/Python (-50% manual toil)

commit 4e91b0d
Date:   May 2023 — May 2024
    feat: Software Dev & Database Engineer @ Cod.ERP
    - PostgreSQL AWS RDS · AWS DMS/CDC · Terraform · Flyway

commit 1c02e88
Date:   Jan 2022 — Mar 2023
    init: Software Development Intern @ KarneKeijo Logistics`;

export const kubectlSkills = () => `NAME                         READY   STATUS    RESTARTS   AGE
oracle-dba-19c-21c-23ai      1/1     Running   0          4y
oracle-rman-pitr             1/1     Running   0          4y
oracle-datapump-expdp        1/1     Running   0          4y
oracle-multitenant-cdb-pdb   1/1     Running   0          3y
postgresql-aws-rds-aurora    1/1     Running   0          3y
aws-dms-cdc-migrations       1/1     Running   0          3y
linux-sre-ubuntu-ol-rhel     1/1     Running   0          4y
bash-python-automation       1/1     Running   0          4y
terraform-iac                1/1     Running   0          3y
flyway-cicd                  1/1     Running   0          3y
docker-containers            1/1     Running   0          3y
sql-server-mongodb           1/1     Running   0          3y`;

export const rmanDemo = (lang) => `RMAN> ALTER PLUGGABLE DATABASE FREEPDB1 CLOSE;
Statement processed

RMAN> RUN {
  SET UNTIL TIME "TO_DATE('20/10/2026 22:45:00','DD/MM/YYYY HH24:MI:SS')";
  RESTORE PLUGGABLE DATABASE FREEPDB1;
  RECOVER PLUGGABLE DATABASE FREEPDB1;
}
channel ORA_DISK_1: restore complete, elapsed time: 00:00:41
starting media recovery
media recovery complete, elapsed time: 00:00:03
Finished recover at 21-OCT-26

RMAN> ALTER PLUGGABLE DATABASE FREEPDB1 OPEN RESETLOGS;
Statement processed

SQL> SELECT COUNT(*) FROM hr.clientes;
  COUNT(*)
----------
      1500   ✅ ${lang === 'pt' ? 'dados recuperados após TRUNCATE acidental' : 'data recovered after accidental TRUNCATE'}`;

export const expdpDemo = (lang) => `$ expdp system@FREEPDB1 schemas=HR directory=DP_DIR \\
    dumpfile=hr_%U.dmp logfile=hr_exp.log parallel=4 compression=ALL

Starting "SYSTEM"."SYS_EXPORT_SCHEMA_01"
Processing object type SCHEMA_EXPORT/TABLE/TABLE_DATA
. . exported "HR"."EMPLOYEES"        17.08 KB     107 rows
. . exported "HR"."CLIENTES"         48.21 KB    1500 rows
. . exported "HR"."VENDAS_2026"      92.55 KB    5000 rows
Master table "SYSTEM"."SYS_EXPORT_SCHEMA_01" successfully loaded/unloaded
Job "SYSTEM"."SYS_EXPORT_SCHEMA_01" successfully completed

$ impdp system@FREEPDB1 remap_schema=HR:HR_QA dumpfile=hr_%U.dmp
${lang === 'pt' ? '✅ Schema clonado para HR_QA (homologação)' : '✅ Schema cloned to HR_QA (staging)'}`;

export const ls = () => `drwxr-xr-x  projects/
drwxr-xr-x  rman_backups/
-rw-r--r--  README.md
-rw-r--r--  curriculo_pt.pdf
-rw-r--r--  curriculo_en.pdf
-rwxr-xr-x  inspect-system.sh`;

export const readme = (lang) => lang === 'pt'
    ? `# vini@dba-node-01
DBA Oracle & Cloud Engineer. Gosto de bancos que não caem
e de backups que realmente restauram.

Comece por:  neofetch · git log · rman · projects`
    : `# vini@dba-node-01
Oracle DBA & Cloud Engineer. I like databases that stay up
and backups that actually restore.

Start with:  neofetch · git log · rman · projects`;

export const sudoRm = (lang) => lang === 'pt'
    ? `[sudo] senha para visitante: ********
rm: recusando operar recursivamente em '/'
🛡️  SRE Watchdog: tentativa bloqueada e registrada no audit trail.
(Relaxa — e mesmo se apagasse, eu tenho backup RMAN 😉)`
    : `[sudo] password for guest: ********
rm: refusing to operate recursively on '/'
🛡️  SRE Watchdog: attempt blocked and logged to audit trail.
(Relax — even if it worked, I have an RMAN backup 😉)`;

export const AUTOCOMPLETE = [
    'help', 'whoami', 'neofetch', 'git log', 'kubectl get skills', 'rman', 'expdp',
    'uptime', 'ls', 'cat README.md', 'projects', 'about', 'arch',
    'cv pt', 'cv en', 'contact', 'copy email', 'history', 'date', 'clear'
];
