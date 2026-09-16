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
    pt: "Há mais de 6 anos transformo dados do campo em software útil. Desenvolvo sistemas em nuvem que coletam, processam e mostram dados de máquinas agrícolas, sensores e mapas, e cuido de cada entrega de ponta a ponta: do banco de dados à tela, da primeira versão à operação em produção.",
    en: "For 6+ years I have been turning field data into useful software. I build cloud systems that collect, process and display data from farm machines, sensors and maps, and I own each delivery end to end: from database to screen, from first version to production.",
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
    pt: "Do mapa na tela ao servidor na nuvem, com os pés no campo.",
    en: "From the map on screen to the cloud server, with my feet in the field.",
  },
  experienceTitle: { pt: "Experiência", en: "Experience" },
  projectsTitle: { pt: "Projetos", en: "Projects" },
  projectsWork: { pt: "Problemas que resolvo no trabalho", en: "Problems I solve at work" },
  projectsWorkNote: {
    pt: "Os detalhes são confidenciais; aqui está o tipo de solução que entrego.",
    en: "The details are confidential; this is the kind of solution I deliver.",
  },
  projectsPersonal: { pt: "Pessoais", en: "Personal" },
  code: { pt: "Código", en: "Code" },
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
  { value: "Full stack", label: { pt: "do banco de dados à tela", en: "from database to screen" } },
  { value: "AWS", label: { pt: "arquiteturas sem servidor", en: "serverless architectures" } },
  { value: "GIS", label: { pt: "mapas e dados espaciais", en: "maps and spatial data" } },
];

export type IconName = "web" | "cloud" | "map" | "ci" | "iot" | "ai";

export const services: { icon: IconName; title: T; text: T; tech: string[] }[] = [
  {
    icon: "web",
    title: { pt: "Interfaces web", en: "Web interfaces" },
    text: {
      pt: "Aplicações responsivas com mapas interativos, painéis e gráficos que ajudam a decidir.",
      en: "Responsive apps with interactive maps, dashboards and charts that help people decide.",
    },
    tech: ["Next.js", "React", "TypeScript", "Leaflet", "React Native"],
  },
  {
    icon: "cloud",
    title: { pt: "Back end e nuvem", en: "Back end & cloud" },
    text: {
      pt: "APIs sem servidor, bancos NoSQL, login e controle de acesso, e infraestrutura como código.",
      en: "Serverless APIs, NoSQL databases, authentication and access control, and infrastructure as code.",
    },
    tech: ["Python", "FastAPI", "AWS Lambda", "DynamoDB", "Cognito", "S3", "AWS CDK"],
  },
  {
    icon: "map",
    title: { pt: "Dados espaciais", en: "Spatial data" },
    text: {
      pt: "Mapas, planejamento do trabalho em campo, camadas raster e projetos prontos para QGIS e QField.",
      en: "Maps, field work planning, raster layers and ready-to-use QGIS and QField projects.",
    },
    tech: ["GeoJSON", "Shapely", "GeoTIFF", "QGIS", "QField"],
  },
  {
    icon: "ci",
    title: { pt: "CI/CD e DevOps", en: "CI/CD & DevOps" },
    text: {
      pt: "Build, testes e implantação automáticos, com monitoramento e custo de nuvem sob controle.",
      en: "Automated build, test and deploy, with monitoring and cloud cost under control.",
    },
    tech: ["Docker", "Linux", "pytest", "CloudWatch", "GitHub Actions"],
  },
  {
    icon: "iot",
    title: { pt: "IoT e integrações", en: "IoT & integrations" },
    text: {
      pt: "Dados de máquinas e sensores em tempo real, integração com APIs de terceiros e avisos automáticos.",
      en: "Real-time machine and sensor data, third-party API integrations and automatic notifications.",
    },
    tech: ["MQTT", "AWS IoT Core", "REST APIs", "Webhooks"],
  },
  {
    icon: "ai",
    title: { pt: "Desenvolvimento com IA", en: "AI-assisted development" },
    text: {
      pt: "Uso agentes de IA no dia a dia para entregar mais rápido, sempre revisando e testando o que sai deles.",
      en: "I use AI agents daily to ship faster, always reviewing and testing what they produce.",
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
        pt: "Sistemas em nuvem para coletar, processar e visualizar dados de máquinas agrícolas, sensores e imagens.",
        en: "Cloud systems that collect, process and visualise data from farm machines, sensors and imagery.",
      },
      {
        pt: "Mapas, planejamento do trabalho em campo e relatórios gerados automaticamente.",
        en: "Maps, field work planning and automatically generated reports.",
      },
      {
        pt: "APIs e integrações entre sistemas, inclusive de terceiros.",
        en: "APIs and integrations between systems, including third-party services.",
      },
      {
        pt: "Controle de acesso, automação de implantação e otimização de custo na nuvem.",
        en: "Access control, deployment automation and cloud cost optimisation.",
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

export type Project = { title: T; text: T; tech: string[]; code?: string; live?: string };

export const workProjects: Project[] = [
  {
    title: { pt: "Máquinas em tempo real", en: "Machines in real time" },
    text: {
      pt: "O que a máquina faz no campo chega à tela em segundos, e quem precisa é avisado quando algo sai do esperado.",
      en: "What a machine does in the field reaches the screen in seconds, and the right people are notified when something goes off track.",
    },
    tech: ["MQTT", "Python", "AWS", "React"],
  },
  {
    title: { pt: "Mapas e planejamento de campo", en: "Maps and field planning" },
    text: {
      pt: "Ferramentas para planejar e revisar o trabalho no talhão, que conversam com QGIS e QField.",
      en: "Tools to plan and review work across a field, compatible with QGIS and QField.",
    },
    tech: ["Python", "Shapely", "GeoJSON", "Leaflet", "QGIS"],
  },
  {
    title: { pt: "Relatórios automáticos", en: "Automatic reports" },
    text: {
      pt: "Mapas, figuras e gráficos gerados na nuvem e entregues prontos, sem trabalho manual.",
      en: "Maps, figures and charts rendered in the cloud and delivered ready to use, with no manual work.",
    },
    tech: ["Python", "Matplotlib", "GeoTIFF", "AWS Lambda"],
  },
  {
    title: { pt: "Entrega contínua e custo sob controle", en: "Continuous delivery, cost under control" },
    text: {
      pt: "Build e implantação automáticos, e decisões de custo tomadas com base em métricas, não em palpite.",
      en: "Automated build and deploy, and cost decisions based on metrics, not guesses.",
    },
    tech: ["Docker", "CI/CD", "CloudWatch", "Cost Explorer"],
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
