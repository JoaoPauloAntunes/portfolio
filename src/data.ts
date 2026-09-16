// Every text on the page lives here, in both languages. Edit this file to update the site.

export type Lang = "pt" | "en";
type T = Record<Lang, string>;

const base = import.meta.env.BASE_URL;

export const profile = {
  name: "João Paulo Antunes",
  avatar: `${base}images/profile.jpg`,
  email: "jpantunesdesouza@gmail.com",
  github: "https://github.com/JoaoPauloAntunes",
  linkedin: "https://www.linkedin.com/in/joao-paulo-antunes",
  instagram: "https://www.instagram.com/jpantunes13/",
  cv: `${base}cv/CV_Joao_Paulo_Antunes_EN.pdf`,
};

export const ui = {
  nav: {
    about: { pt: "Sobre", en: "About" },
    services: { pt: "O que faço", en: "What I do" },
    experience: { pt: "Experiência", en: "Experience" },
    projects: { pt: "Projetos", en: "Projects" },
    education: { pt: "Formação", en: "Education" },
    contact: { pt: "Contato", en: "Contact" },
  },
  hello: { pt: "Olá, eu sou", en: "Hi, I'm" },
  role: { pt: "Engenheiro de Computação · Desenvolvedor Full Stack", en: "Computer Engineer · Full Stack Developer" },
  about: {
    pt: "Há mais de 6 anos construo software em nuvem para agricultura de precisão. Desenvolvo sistemas que coletam, processam e mostram dados de máquinas agrícolas, planejam rotas de trabalho no campo e avisam as pessoas certas pelo WhatsApp. Cuido de cada entrega de ponta a ponta: dados, API, interface, implantação, monitoramento e custo.",
    en: "For 6+ years I have been building cloud software for precision agriculture. I build systems that collect, process and display farm machine data, plan field work routes and notify the right people over WhatsApp. I own each delivery end to end: data, API, user interface, deployment, monitoring and cost.",
  },
  location: { pt: "São Paulo, Brasil", en: "São Paulo, Brazil" },
  locationLabel: { pt: "Localização", en: "Location" },
  workLabel: { pt: "Modelo de trabalho", en: "Work model" },
  work: { pt: "Somente remoto", en: "Remote only" },
  langLabel: { pt: "Idiomas", en: "Languages" },
  langs: { pt: "Português (nativo) · Inglês", en: "Portuguese (native) · English" },
  cv: { pt: "Baixar CV (inglês)", en: "Download CV" },
  talk: { pt: "Vamos conversar", en: "Let's talk" },
  servicesTitle: { pt: "O que eu faço", en: "What I do" },
  servicesSub: {
    pt: "Do mapa na tela ao servidor na nuvem — e até o build do firmware da máquina.",
    en: "From the map on screen to the cloud server — all the way to the machine's firmware build.",
  },
  experienceTitle: { pt: "Experiência", en: "Experience" },
  projectsTitle: { pt: "Projetos", en: "Projects" },
  projectsWork: { pt: "No trabalho", en: "At work" },
  projectsWorkNote: {
    pt: "Código proprietário — descrevo o que construí, sem expor detalhes internos.",
    en: "Proprietary code — I describe what I built without exposing internal details.",
  },
  projectsPersonal: { pt: "Pessoais", en: "Personal" },
  code: { pt: "Código", en: "Code" },
  privateCode: { pt: "Código privado", en: "Private code" },
  featured: { pt: "Destaque", en: "Featured" },
  live: { pt: "Ver online", en: "Live" },
  educationTitle: { pt: "Formação", en: "Education" },
  done: { pt: "Concluído", en: "Completed" },
  offTitle: { pt: "Fora do código", en: "Off the keyboard" },
  contactTitle: { pt: "Contato", en: "Contact" },
  contactSub: {
    pt: "Tem uma vaga remota ou um projeto em mente? Me mande uma mensagem.",
    en: "Have a remote role or a project in mind? Send me a message.",
  },
  footer: { pt: "Feito com React, Vite e Tailwind CSS.", en: "Built with React, Vite and Tailwind CSS." },
} satisfies Record<string, T | Record<string, T>>;

export const stats: { value: string | T; label: T }[] = [
  { value: "6+", label: { pt: "anos de experiência", en: "years of experience" } },
  { value: { pt: "1.000+", en: "1,000+" }, label: { pt: "pull requests aceitos", en: "merged pull requests" } },
  { value: "AWS", label: { pt: "arquiteturas sem servidor", en: "serverless architectures" } },
  { value: "GIS", label: { pt: "mapas e dados espaciais", en: "maps and spatial data" } },
];

export type IconName = "web" | "cloud" | "map" | "ci" | "iot" | "ai";

export const services: { icon: IconName; title: T; text: T; tech: string[] }[] = [
  {
    icon: "web",
    title: { pt: "Interfaces web", en: "Web interfaces" },
    text: {
      pt: "Aplicações responsivas com mapas interativos, painéis de operação e acompanhamento ao vivo.",
      en: "Responsive apps with interactive maps, operation dashboards and live tracking.",
    },
    tech: ["Next.js", "React", "TypeScript", "Leaflet", "React Native"],
  },
  {
    icon: "cloud",
    title: { pt: "Back end e AWS", en: "Back end & AWS" },
    text: {
      pt: "APIs sem servidor, modelagem no DynamoDB, login e permissões por perfil, e infraestrutura como código.",
      en: "Serverless APIs, DynamoDB data modelling, role-based authentication and infrastructure as code.",
    },
    tech: ["Python", "FastAPI", "Lambda", "API Gateway", "DynamoDB", "Cognito", "S3", "EventBridge", "AWS CDK"],
  },
  {
    icon: "map",
    title: { pt: "Mapas e rotas", en: "Maps & routes" },
    text: {
      pt: "Planejamento de rotas de cobertura em talhões, desvio de obstáculos, camadas raster e exportação para QGIS e QField.",
      en: "Coverage path planning for crop fields, obstacle avoidance, raster layers and export to QGIS and QField.",
    },
    tech: ["Fields2Cover", "Shapely", "GeoJSON", "GeoTIFF", "QGIS", "QField"],
  },
  {
    icon: "ci",
    title: { pt: "CI/CD, DevOps e custo", en: "CI/CD, DevOps & cost" },
    text: {
      pt: "Montei um servidor próprio de build que substituiu o AWS CodeBuild na compilação de firmware. Implantação automática com reversão, e redução de custo na AWS medida antes e depois.",
      en: "Built a self-hosted build server that replaced AWS CodeBuild for firmware builds. Automated deploys with rollback, and AWS cost cuts measured before and after.",
    },
    tech: ["Docker", "Linux", "systemd", "CodeBuild", "CloudWatch", "Cost Explorer", "pytest"],
  },
  {
    icon: "iot",
    title: { pt: "IoT e WhatsApp", en: "IoT & WhatsApp" },
    text: {
      pt: "Telemetria de máquinas em tempo real, alertas automáticos e menus de comando pelo WhatsApp.",
      en: "Real-time machine telemetry, automatic alerts and command menus over WhatsApp.",
    },
    tech: ["AWS IoT Core", "MQTT", "WhatsApp Cloud API", "Webhooks", "ESP-IDF", "PlatformIO"],
  },
  {
    icon: "ai",
    title: { pt: "Desenvolvimento com IA", en: "AI-assisted development" },
    text: {
      pt: "Uso agentes de IA no dia a dia para investigar, programar e revisar mais rápido, sempre conferindo e testando o resultado.",
      en: "I use AI agents daily to investigate, code and review faster, always checking and testing the result.",
    },
    tech: ["Claude Code", "ChatGPT"],
  },
];

export const experience: { role: T; org: string; period: T; points: T[] }[] = [
  {
    role: { pt: "Desenvolvedor Full Stack Pleno", en: "Full Stack Developer (Mid-level)" },
    org: "Zait (ex-Smart Agri / Smart Sensing)",
    period: { pt: "ago 2022 – hoje", en: "Aug 2022 – present" },
    points: [
      {
        pt: "Planejamento de rotas de cobertura para máquinas agrícolas, com desvio de obstáculos e exportação para QGIS.",
        en: "Coverage path planning for farm machines, with obstacle avoidance and QGIS export.",
      },
      {
        pt: "Operações com várias máquinas e telemetria em tempo real na tela.",
        en: "Multi-machine operations and real-time telemetry on screen.",
      },
      {
        pt: "Login, grupos de permissão e gestão de usuários no Amazon Cognito.",
        en: "Authentication, permission groups and user management on Amazon Cognito.",
      },
      {
        pt: "Alertas automáticos e menus de comando pelo WhatsApp (API oficial da Meta).",
        en: "Automatic alerts and command menus over WhatsApp (Meta Cloud API).",
      },
      {
        pt: "Servidor próprio de CI/CD que substituiu o AWS CodeBuild na compilação de firmware, com avisos no Discord.",
        en: "Self-hosted CI/CD server that replaced AWS CodeBuild for firmware builds, with Discord notifications.",
      },
      {
        pt: "Redução de custo na AWS: Lambdas no tamanho certo, prazo de retenção de dados, leituras mais baratas e regras de ciclo de vida no S3.",
        en: "AWS cost reduction: right-sized Lambdas, data retention, cheaper reads and S3 lifecycle rules.",
      },
      {
        pt: "Relatórios de campo gerados na nuvem, com mapas e gráficos.",
        en: "Cloud-rendered field reports with maps and charts.",
      },
    ],
  },
  {
    role: { pt: "Desenvolvedor Full Stack Júnior", en: "Full Stack Developer (Junior)" },
    org: "Zait (ex-Smart Agri)",
    period: { pt: "dez 2021 – ago 2022", en: "Dec 2021 – Aug 2022" },
    points: [
      {
        pt: "Interfaces web com mapas interativos em React e Leaflet.",
        en: "Web interfaces with interactive maps in React and Leaflet.",
      },
      {
        pt: "APIs REST em Python (FastAPI) sem servidor na AWS.",
        en: "Serverless REST APIs in Python (FastAPI) on AWS.",
      },
    ],
  },
  {
    role: { pt: "Estagiário de T.I.", en: "IT Intern" },
    org: "Zait (ex-Smart Agri)",
    period: { pt: "dez 2020 – dez 2021", en: "Dec 2020 – Dec 2021" },
    points: [
      {
        pt: "Primeiras APIs em FastAPI, interfaces em React, Docker e AWS.",
        en: "First FastAPI services, React interfaces, Docker and AWS.",
      },
    ],
  },
  {
    role: { pt: "Analista de Sistemas Jr.", en: "Junior Systems Analyst" },
    org: "Farm Solutions",
    period: { pt: "jun 2019 – set 2020", en: "Jun 2019 – Sep 2020" },
    points: [{ pt: "Desenvolvimento web com HTML, CSS, JavaScript e Git.", en: "Web development with HTML, CSS, JavaScript and Git." }],
  },
];

export type Project = { title: T; text: T; tech: string[]; code?: string; live?: string; featured?: boolean };

export const workProjects: Project[] = [
  {
    title: { pt: "Rotas para máquinas agrícolas", en: "Routes for farm machines" },
    text: {
      pt: "Rotas de cobertura calculadas sobre o contorno do talhão, com desvio de obstáculos, linha AB, rotas de amostragem e exportação para QGIS.",
      en: "Coverage routes over field boundaries, with obstacle avoidance, AB lines, sampling routes and QGIS export.",
    },
    tech: ["Python", "Fields2Cover", "Shapely", "Next.js", "Leaflet"],
  },
  {
    title: { pt: "CI/CD próprio no lugar do CodeBuild", en: "Self-hosted CI/CD replacing CodeBuild" },
    text: {
      pt: "Servidor que compila e publica firmware embarcado com build reproduzível, conferência dos binários e avisos no Discord — sem pagar o serviço gerenciado.",
      en: "Server that builds and publishes embedded firmware with reproducible builds, binary checks and Discord notifications — without paying for the managed service.",
    },
    tech: ["Python", "Docker", "systemd", "DynamoDB", "CloudWatch"],
  },
  {
    title: { pt: "Alertas e comandos pelo WhatsApp", en: "WhatsApp alerts and commands" },
    text: {
      pt: "Avisa os responsáveis quando uma máquina sai do esperado, sem mensagens repetidas, e oferece um menu para agir na hora.",
      en: "Notifies the right people when a machine goes off track, without duplicates, and offers a menu to act right away.",
    },
    tech: ["WhatsApp Cloud API", "AWS IoT Core", "Lambda", "DynamoDB"],
  },
  {
    title: { pt: "Custo da AWS sob controle", en: "AWS cost under control" },
    text: {
      pt: "Medi o que pesava na conta e cortei: Lambdas no tamanho certo, dados com prazo de retenção, leituras por chave no lugar de varreduras e ciclo de vida no S3.",
      en: "Measured what drove the bill and cut it: right-sized Lambdas, data retention, key lookups instead of scans and S3 lifecycle rules.",
    },
    tech: ["Cost Explorer", "CloudWatch", "DynamoDB", "S3", "Lambda"],
  },
];

export const personalProjects: Project[] = [
  {
    featured: true,
    title: { pt: "App de promotor de eventos", en: "Event promoter app" },
    text: {
      pt: "App instalável no celular (PWA) para promotores registrarem o dia de trabalho em segundos. Funciona sem internet e sincroniza depois, entra com a conta Google, gera PDF para compartilhar, preenche o formulário a partir de uma foto usando IA, lembra dos retornos por notificação e monta a planilha do gestor automaticamente. Em uso real.",
      en: "Installable mobile app (PWA) for event promoters to log their workday in seconds. Works offline and syncs later, signs in with Google, exports shareable PDFs, fills the form from a photo using AI, sends follow-up reminders as push notifications and builds the manager's spreadsheet automatically. In real use.",
    },
    tech: ["PWA", "TypeScript", "Serverless (Vercel)", "PostgreSQL", "Google OAuth", "Claude API", "Web Push", "Google Sheets"],
  },
  {
    title: { pt: "Transmissão de tela sem fio", en: "Wireless screen casting" },
    text: {
      pt: "Envia a tela do computador para um celular ou navegador, na mesma rede ou pela internet. O celular conecta lendo um QR code.",
      en: "Casts a computer screen to a phone or browser, on the same network or over the internet. Phones pair by scanning a QR code.",
    },
    tech: ["Node.js", "WebRTC", "WebSocket", "Cloudflare Workers", "PWA"],
  },
  {
    title: { pt: "App de corrida", en: "Running app" },
    text: {
      pt: "Aplicação web para corredores, com mapas e login Google, e uma API própria com banco relacional e migrações.",
      en: "Web app for runners with maps and Google sign-in, backed by its own API with a relational database and migrations.",
    },
    tech: ["React", "TypeScript", "Mantine", "Leaflet", "FastAPI", "SQLModel", "PostgreSQL"],
  },
  {
    title: { pt: "Bot de finanças no Telegram", en: "Personal finance Telegram bot" },
    text: {
      pt: "Registra gastos por uma conversa guiada no Telegram e guarda tudo num banco na nuvem, sem custo por mensagem.",
      en: "Logs expenses through a guided Telegram conversation and stores them in a cloud database, at no cost per message.",
    },
    tech: ["Node.js", "Serverless (Vercel)", "PostgreSQL", "Telegram Bot API"],
  },
  {
    title: { pt: "Site institucional (freelance)", en: "Business website (freelance)" },
    text: {
      pt: "Site responsivo para uma profissional da saúde, publicado com deploy automático.",
      en: "Responsive website for a healthcare professional, with automatic deployment.",
    },
    tech: ["Next.js", "Mantine", "Tailwind CSS", "GitHub Actions"],
  },
  {
    title: { pt: "Oh My Map", en: "Oh My Map" },
    text: {
      pt: "Mapa web com desenho de áreas, busca de endereços, cálculo de rotas e camadas por período.",
      en: "Web map with area drawing, address search, routing and time-based layers.",
    },
    tech: ["Next.js", "React", "Leaflet", "Vercel"],
    code: "https://github.com/JoaoPauloAntunes/oh-my-map",
    live: "https://oh-my-map.vercel.app/",
  },
  {
    title: { pt: "Display TFT com MicroPython", en: "TFT display with MicroPython" },
    text: {
      pt: "Imagens e textos num display TFT ligado a um ESP32, programado em MicroPython.",
      en: "Images and text on a TFT display driven by an ESP32, written in MicroPython.",
    },
    tech: ["MicroPython", "ESP32"],
    code: "https://github.com/JoaoPauloAntunes/micropython-tft_display",
  },
  {
    title: { pt: "Jogo da memória Genius", en: "Genius memory game" },
    text: {
      pt: "Circuito em que o jogador repete a sequência de LEDs; cada nível fica mais rápido.",
      en: "Circuit where the player repeats a LED sequence; each level gets faster.",
    },
    tech: ["C++", "Arduino", "Tinkercad"],
    code: "https://github.com/JoaoPauloAntunes/memory_game_genius",
    live: "https://www.tinkercad.com/things/6EbvTMHYBED",
  },
];

export const education: { title: T; school: string; period: string; text: T }[] = [
  {
    title: { pt: "Bacharelado em Engenharia de Computação", en: "Bachelor's in Computer Engineering" },
    school: "IFSP — Instituto Federal de São Paulo",
    period: "2018 – 2023",
    text: {
      pt: "Participei do grupo de treino para maratonas de programação e do grupo de desenvolvimento de aplicações Windows (C# e MySQL).",
      en: "Member of the competitive programming training group and the Windows application group (C# and MySQL).",
    },
  },
  {
    title: { pt: "Técnico em Eletroeletrônica", en: "Technical course in Electronics" },
    school: "Etec Prof. Armando Bayeux da Silva",
    period: "2015 – 2017",
    text: {
      pt: "Base em eletrônica e circuitos que hoje me ajuda a entender o hardware e as máquinas.",
      en: "Electronics and circuits background that now helps me understand hardware and machines.",
    },
  },
];

export const hobbies: { emoji: string; label: T }[] = [
  { emoji: "🎬", label: { pt: "Filmes", en: "Movies" } },
  { emoji: "🍥", label: { pt: "Animes", en: "Anime" } },
  { emoji: "🏋️", label: { pt: "Academia", en: "Gym" } },
  { emoji: "🏃", label: { pt: "Corridas de rua", en: "Running races" } },
];
