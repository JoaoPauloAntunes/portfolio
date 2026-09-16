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
    pt: "Construo software em nuvem para agricultura de precisão há mais de 6 anos. Trabalho em vários produtos da Zait, de máquinas agrícolas autônomas a relatórios de campo, e cuido de cada funcionalidade de ponta a ponta: dados, API, interface, implantação, monitoramento e custo.",
    en: "I have been building cloud software for precision agriculture for 6+ years. I work across several of Zait's products, from autonomous farm machines to field reports, and I own each feature end to end: data, API, user interface, deployment, monitoring and cost.",
  },
  location: { pt: "São Paulo, Brasil", en: "São Paulo, Brazil" },
  locationLabel: { pt: "Localização", en: "Location" },
  workLabel: { pt: "Modelo de trabalho", en: "Work model" },
  work: { pt: "Remoto, híbrido ou presencial", en: "Remote, hybrid or on-site" },
  langLabel: { pt: "Idiomas", en: "Languages" },
  langs: { pt: "Português (nativo) · Inglês", en: "Portuguese (native) · English" },
  cv: { pt: "Baixar CV (inglês)", en: "Download CV" },
  talk: { pt: "Vamos conversar", en: "Let's talk" },
  servicesTitle: { pt: "O que eu faço", en: "What I do" },
  servicesSub: {
    pt: "Do mapa na tela ao servidor na nuvem — e até o firmware da máquina no campo.",
    en: "From the map on screen to the cloud server — all the way to the firmware on the machine in the field.",
  },
  experienceTitle: { pt: "Experiência", en: "Experience" },
  projectsTitle: { pt: "Projetos", en: "Projects" },
  projectsWork: { pt: "No trabalho", en: "At work" },
  projectsWorkNote: {
    pt: "Código proprietário — descrevo o que construí, sem expor o produto.",
    en: "Proprietary code — I describe what I built without exposing the product.",
  },
  projectsPersonal: { pt: "Pessoais", en: "Personal" },
  code: { pt: "Código", en: "Code" },
  live: { pt: "Ver online", en: "Live" },
  educationTitle: { pt: "Formação", en: "Education" },
  done: { pt: "Concluído", en: "Completed" },
  offTitle: { pt: "Fora do código", en: "Off the keyboard" },
  contactTitle: { pt: "Contato", en: "Contact" },
  contactSub: {
    pt: "Tem uma vaga ou um projeto em mente? Me mande uma mensagem.",
    en: "Have a role or a project in mind? Send me a message.",
  },
  footer: { pt: "Feito com React, Vite e Tailwind CSS.", en: "Built with React, Vite and Tailwind CSS." },
} satisfies Record<string, T | Record<string, T>>;

export const stats: { value: string | T; label: T }[] = [
  { value: "6+", label: { pt: "anos de experiência", en: "years of experience" } },
  { value: { pt: "1.000+", en: "1,000+" }, label: { pt: "pull requests aceitos", en: "merged pull requests" } },
  { value: "13", label: { pt: "firmwares no CI que montei", en: "firmwares on the CI I built" } },
  { value: "AWS", label: { pt: "sem servidor, de ponta a ponta", en: "serverless, end to end" } },
];

export type IconName = "web" | "cloud" | "map" | "ci" | "iot" | "ai";

export const services: { icon: IconName; title: T; text: T; tech: string[] }[] = [
  {
    icon: "web",
    title: { pt: "Interfaces web", en: "Web interfaces" },
    text: {
      pt: "Aplicações responsivas com mapas interativos, painéis e telas de operação.",
      en: "Responsive apps with interactive maps, dashboards and operation screens.",
    },
    tech: ["Next.js", "React", "TypeScript", "Leaflet", "React Native"],
  },
  {
    icon: "cloud",
    title: { pt: "Back end e nuvem", en: "Back end & cloud" },
    text: {
      pt: "APIs sem servidor na AWS, login e permissões, modelagem de dados e infraestrutura como código.",
      en: "Serverless APIs on AWS, authentication and permissions, data modelling and infrastructure as code.",
    },
    tech: ["Python", "FastAPI", "Lambda", "DynamoDB", "Cognito", "S3", "AWS CDK"],
  },
  {
    icon: "map",
    title: { pt: "Mapas e rotas", en: "Maps & routes" },
    text: {
      pt: "Planejamento de rotas de cobertura em talhões, desvio de obstáculos e exportação para GIS.",
      en: "Coverage path planning for crop fields, obstacle avoidance and GIS export.",
    },
    tech: ["Fields2Cover", "Shapely", "GeoJSON", "GeoTIFF", "QGIS"],
  },
  {
    icon: "ci",
    title: { pt: "CI/CD e DevOps", en: "CI/CD & DevOps" },
    text: {
      pt: "Servidor próprio que compila e publica firmware, implantação com reversão e redução de custo medida.",
      en: "Self-hosted server that builds and publishes firmware, deploys with rollback and measured cost cuts.",
    },
    tech: ["Docker", "Linux", "systemd", "pytest", "CloudWatch", "Cost Explorer"],
  },
  {
    icon: "iot",
    title: { pt: "IoT e integrações", en: "IoT & integrations" },
    text: {
      pt: "Telemetria de máquinas em tempo real, alertas e comandos pelo WhatsApp.",
      en: "Real-time machine telemetry, alerts and commands over WhatsApp.",
    },
    tech: ["AWS IoT Core", "MQTT", "WhatsApp Cloud API", "ESP-IDF", "PlatformIO"],
  },
  {
    icon: "ai",
    title: { pt: "Desenvolvimento com IA", en: "AI-assisted development" },
    text: {
      pt: "Uso agentes de IA no dia a dia para investigar, programar e revisar com mais velocidade.",
      en: "I use AI agents daily to investigate, code and review faster.",
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
        pt: "Planejamento de rotas para máquinas autônomas, missões com várias máquinas e telemetria ao vivo.",
        en: "Route planning for autonomous machines, multi-machine missions and live telemetry.",
      },
      {
        pt: "Login e permissões por talhão e máquina no Amazon Cognito.",
        en: "Authentication and per-field, per-machine permissions on Amazon Cognito.",
      },
      {
        pt: "Alertas de falha e comandos à distância pelo WhatsApp.",
        en: "Failure alerts and remote commands over WhatsApp.",
      },
      {
        pt: "Servidor de CI que compila e publica o firmware de 13 projetos embarcados.",
        en: "CI server that builds and publishes firmware for 13 embedded projects.",
      },
      {
        pt: "Relatórios de campo gerados na nuvem e redução de custo na AWS.",
        en: "Cloud-rendered field reports and AWS cost reduction.",
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
        pt: "APIs REST em Python (FastAPI) no AWS Lambda, com DynamoDB e PostgreSQL.",
        en: "REST APIs in Python (FastAPI) on AWS Lambda, with DynamoDB and PostgreSQL.",
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

export type Project = { title: T; text: T; tech: string[]; code?: string; live?: string };

export const workProjects: Project[] = [
  {
    title: { pt: "Rotas para máquinas autônomas", en: "Routes for autonomous machines" },
    text: {
      pt: "Rotas de cobertura sobre o contorno do talhão, com desvio de obstáculos, linha AB, rotas de amostragem e exportação para QGIS e mapa HTML.",
      en: "Coverage routes over field boundaries with obstacle avoidance, AB lines, sampling routes and export to QGIS and HTML maps.",
    },
    tech: ["Python", "Fields2Cover", "Shapely", "Next.js", "Leaflet"],
  },
  {
    title: { pt: "CI de firmware próprio", en: "Self-hosted firmware CI" },
    text: {
      pt: "Substituiu o AWS CodeBuild: compila 13 firmwares (ESP-IDF, PlatformIO, STM32) com build reproduzível, conferência byte a byte e avisos no Discord.",
      en: "Replaced AWS CodeBuild: builds 13 firmwares (ESP-IDF, PlatformIO, STM32) with reproducible builds, byte-level checks and Discord notifications.",
    },
    tech: ["Python", "Docker", "systemd", "DynamoDB", "CloudWatch"],
  },
  {
    title: { pt: "Alertas e comandos pelo WhatsApp", en: "WhatsApp alerts and commands" },
    text: {
      pt: "Avisa quando a máquina sai do padrão de velocidade ou pressão, sem mensagens repetidas, e permite pausar e retomar a máquina com confirmação.",
      en: "Warns when a machine leaves its speed or pressure range, without duplicates, and lets operators pause and resume it with confirmation.",
    },
    tech: ["WhatsApp Cloud API", "AWS IoT Core", "Lambda", "DynamoDB"],
  },
  {
    title: { pt: "Custo da nuvem sob controle", en: "Cloud cost under control" },
    text: {
      pt: "Medi o que pesava na conta AWS e cortei: Lambdas no tamanho certo, telemetria com prazo de retenção, leituras por chave e regras de ciclo de vida no S3.",
      en: "Measured what drove the AWS bill and cut it: right-sized Lambdas, telemetry with retention, key lookups instead of scans and S3 lifecycle rules.",
    },
    tech: ["Cost Explorer", "CloudWatch", "DynamoDB", "S3"],
  },
];

export const personalProjects: Project[] = [
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
    title: { pt: "Seleção de área no mapa", en: "Map area selection" },
    text: {
      pt: "Controle para selecionar uma área no mapa e obter o retângulo de coordenadas.",
      en: "Control to select an area on a map and get its bounding box.",
    },
    tech: ["React", "Leaflet"],
    code: "https://github.com/JoaoPauloAntunes/react-leaflet-area-select",
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
      pt: "Base em eletrônica e circuitos que hoje ajuda no trabalho com firmware e máquinas.",
      en: "Electronics and circuits background that now helps with firmware and machines.",
    },
  },
];

export const hobbies: { emoji: string; label: T }[] = [
  { emoji: "🎬", label: { pt: "Filmes", en: "Movies" } },
  { emoji: "🍥", label: { pt: "Animes", en: "Anime" } },
  { emoji: "🏋️", label: { pt: "Academia", en: "Gym" } },
  { emoji: "🏃", label: { pt: "Corridas de rua", en: "Running races" } },
];
