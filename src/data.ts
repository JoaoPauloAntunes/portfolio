// Every text on the page lives here, in both languages. Edit this file to update the site.

export type Lang = "pt" | "en";
type T = Record<Lang, string>;

const base = import.meta.env.BASE_URL;

export const profile = {
  name: "João Paulo Antunes",
  avatar: `${base}images/profile.jpg`,
  email: "jpantunesdesouza@gmail.com",
  whatsapp: "https://wa.me/5519991608670",
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
    pt: "Há mais de 5 anos transformo dados do campo em software que funciona onde a agricultura acontece. Do mapa na tela ao servidor na nuvem — e até o build do firmware da máquina —, entrego de ponta a ponta, de olho no resultado e no custo.",
    en: "For more than 5 years I have been turning field data into software that works where farming happens. From the map on screen to the cloud server — all the way to the machine's firmware build — I deliver end to end, with an eye on results and cost.",
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
    pt: "Um desenvolvedor que resolve o problema inteiro — não só uma camada dele.",
    en: "A developer who solves the whole problem — not just one layer of it.",
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
  { value: "5+", label: { pt: "anos construindo para o agro", en: "years building for agriculture" } },
  { value: { pt: "1.000+", en: "1,000+" }, label: { pt: "pull requests aceitos", en: "merged pull requests" } },
  { value: "10+", label: { pt: "firmwares no CI/CD que criei", en: "firmwares on the CI/CD I built" } },
  { value: "AWS", label: { pt: "serverless em produção", en: "serverless in production" } },
];

export type IconName = "web" | "cloud" | "map" | "ci" | "iot" | "ai";

export const services: { icon: IconName; title: T; text: T; tech: string[] }[] = [
  {
    icon: "web",
    title: { pt: "Interfaces que se entendem de primeira", en: "Interfaces people get at first sight" },
    text: {
      pt: "Mapas interativos, painéis de operação e acompanhamento ao vivo — para quem precisa decidir rápido.",
      en: "Interactive maps, operation dashboards and live tracking — for people who need to decide fast.",
    },
    tech: ["Next.js", "React", "TypeScript", "Leaflet", "React Native"],
  },
  {
    icon: "cloud",
    title: { pt: "Nuvem que escala e custa pouco", en: "Cloud that scales and costs little" },
    text: {
      pt: "APIs serverless na AWS que crescem sozinhas e só cobram pelo uso, com login e permissões por perfil.",
      en: "Serverless APIs on AWS that scale on their own and only bill for use, with role-based sign-in and permissions.",
    },
    tech: ["Python", "FastAPI", "Lambda", "API Gateway", "DynamoDB", "Cognito", "S3", "EventBridge", "AWS CDK"],
  },
  {
    icon: "map",
    title: { pt: "Rotas calculadas, não desenhadas", en: "Routes computed, not drawn" },
    text: {
      pt: "Rotas de cobertura geradas automaticamente sobre o talhão, desviando de obstáculos e prontas para o QGIS.",
      en: "Coverage routes generated automatically over the field, avoiding obstacles and ready for QGIS.",
    },
    tech: ["Fields2Cover", "Shapely", "GeoJSON", "GeoTIFF", "QGIS", "QField"],
  },
  {
    icon: "ci",
    title: { pt: "CI/CD próprio e conta da AWS menor", en: "Own CI/CD and a smaller AWS bill" },
    text: {
      pt: "Criei o servidor de build que substituiu o AWS CodeBuild — mais de 10 firmwares compilados e publicados sem depender do serviço gerenciado. E corto custo com base em métricas, não em palpite.",
      en: "I built the build server that replaced AWS CodeBuild — 10+ firmwares built and published without depending on a managed service. And I cut cost based on metrics, not guesses.",
    },
    tech: ["Docker", "Linux", "systemd", "CodeBuild", "CloudWatch", "Cost Explorer", "pytest"],
  },
  {
    icon: "iot",
    title: { pt: "Máquinas que avisam pelo WhatsApp", en: "Machines that text you on WhatsApp" },
    text: {
      pt: "Telemetria em tempo real e integração com o WhatsApp: o alerta chega a quem precisa, com um menu para agir na hora.",
      en: "Real-time telemetry plus WhatsApp integration: alerts reach the right person, with a menu to act on the spot.",
    },
    tech: ["AWS IoT Core", "MQTT", "WhatsApp Cloud API", "Webhooks", "ESP-IDF", "PlatformIO"],
  },
  {
    icon: "ai",
    title: { pt: "Mais velocidade com IA", en: "More speed with AI" },
    text: {
      pt: "Agentes de IA no dia a dia para entregar mais rápido — sem abrir mão de revisar e testar cada entrega.",
      en: "AI agents every day to ship faster — without skipping review and testing on every delivery.",
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
        pt: "Criei o planejamento automático de rotas de cobertura, com desvio de obstáculos e exportação para QGIS.",
        en: "Built automatic coverage path planning, with obstacle avoidance and QGIS export.",
      },
      {
        pt: "Coloquei várias máquinas na mesma operação, com telemetria ao vivo na tela.",
        en: "Put several machines on the same operation, with live telemetry on screen.",
      },
      {
        pt: "Integrei o WhatsApp: alertas certeiros, sem mensagens repetidas, e menus de comando com confirmação.",
        en: "Integrated WhatsApp: targeted alerts, no duplicates, and command menus with confirmation.",
      },
      {
        pt: "Troquei o AWS CodeBuild por um CI/CD próprio que compila e publica mais de 10 firmwares.",
        en: "Replaced AWS CodeBuild with my own CI/CD, building and publishing 10+ firmwares.",
      },
      {
        pt: "Reduzi a conta da AWS com Lambdas no tamanho certo, retenção de dados, leituras mais baratas e ciclo de vida no S3.",
        en: "Shrank the AWS bill with right-sized Lambdas, data retention, cheaper reads and S3 lifecycle rules.",
      },
      {
        pt: "Protegi os sistemas com login e permissões por perfil no Amazon Cognito.",
        en: "Secured systems with role-based sign-in and permissions on Amazon Cognito.",
      },
      {
        pt: "Automatizei relatórios de campo com mapas e gráficos, entregues prontos.",
        en: "Automated field reports with maps and charts, delivered ready to use.",
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
    title: { pt: "Rotas que o operador não precisa desenhar", en: "Routes operators don't have to draw" },
    text: {
      pt: "A rota de cobertura sai pronta do contorno do talhão: desvia de obstáculos, segue a linha AB, inclui pontos de amostragem e vai direto para o QGIS.",
      en: "The coverage route comes straight from the field boundary: it avoids obstacles, follows the AB line, includes sampling points and goes straight into QGIS.",
    },
    tech: ["Python", "Fields2Cover", "Shapely", "Next.js", "Leaflet"],
  },
  {
    title: { pt: "Um CodeBuild só nosso", en: "Our very own CodeBuild" },
    text: {
      pt: "Servidor que compila e publica mais de 10 firmwares com build reproduzível e aviso no Discord — o serviço gerenciado virou só plano B.",
      en: "A server that builds and publishes 10+ firmwares with reproducible builds and Discord notifications — the managed service is now just plan B.",
    },
    tech: ["Python", "Docker", "systemd", "DynamoDB", "CloudWatch"],
  },
  {
    title: { pt: "A máquina chama no WhatsApp", en: "The machine messages you on WhatsApp" },
    text: {
      pt: "Quando algo sai do esperado, o responsável recebe o alerta na hora — uma vez só — e responde por um menu, sem abrir sistema nenhum.",
      en: "When something goes off track, the right person is alerted right away — just once — and replies through a menu, without opening any system.",
    },
    tech: ["WhatsApp Cloud API", "AWS IoT Core", "Lambda", "DynamoDB"],
  },
  {
    title: { pt: "Conta da AWS no regime", en: "AWS bill on a diet" },
    text: {
      pt: "Medi onde o dinheiro ia, cortei o desperdício e provei o resultado com métricas: Lambdas no tamanho certo, retenção de dados, leituras por chave e ciclo de vida no S3.",
      en: "Measured where the money went, cut the waste and proved the result with metrics: right-sized Lambdas, data retention, key lookups and S3 lifecycle rules.",
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
