import { ReactNode, useEffect, useRef, useState } from "react";
import {
  Bot,
  Cloud,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  Github,
  GitMerge,
  GraduationCap,
  Instagram,
  Languages,
  Laptop,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Route,
  X,
} from "lucide-react";
import {
  education,
  experience,
  hobbies,
  IconName,
  Lang,
  personalProjects,
  profile,
  Project,
  services,
  stats,
  ui,
  workProjects,
} from "./data";

const serviceIcons: Record<IconName, typeof Code2> = {
  web: Code2,
  cloud: Cloud,
  map: Route,
  ci: GitMerge,
  iot: Cpu,
  ai: Bot,
};

const sections = ["about", "services", "experience", "projects", "education", "contact"] as const;

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "pt" || saved === "en") return saved;
  } catch {
    /* storage blocked */
  }
  return navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
}

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setShown(true), delay);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, shown]);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${shown ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

function Title({ children, sub }: { children: ReactNode; sub?: string }) {
  return (
    <Reveal className="mb-12 text-center">
      <h2 className="text-3xl font-bold md:text-5xl">{children}</h2>
      {sub && <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">{sub}</p>}
    </Reveal>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span key={t} className="chip">
          {t}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ p, lang, index }: { p: Project; lang: Lang; index: number }) {
  return (
    <Reveal delay={index * 80}>
      <article className="card flex h-full flex-col">
        <h4 className="mb-2 text-lg font-bold">{p.title[lang]}</h4>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">{p.text[lang]}</p>
        <Chips items={p.tech} />
        {(p.code || p.live) && (
          <div className="mt-5 flex gap-3">
            {p.code && (
              <a className="btn-ghost !px-4 !py-1.5" href={p.code} target="_blank" rel="noopener noreferrer">
                <Github size={16} /> {ui.code[lang]}
              </a>
            )}
            {p.live && (
              <a className="btn-ghost !px-4 !py-1.5" href={p.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} /> {ui.live[lang]}
              </a>
            )}
          </div>
        )}
      </article>
    </Reveal>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* storage blocked */
    }
  }, [lang]);

  useEffect(() => {
    const onScroll = () => {
      let current = "about";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => setLang((l) => (l === "pt" ? "en" : "pt"));
  const contacts = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
    { icon: Github, label: "GitHub", href: profile.github },
    { icon: Instagram, label: "Instagram", href: profile.instagram },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />

      <header className="fixed top-0 z-50 w-full border-b border-line bg-ink/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#about" className="font-mono text-xl font-bold">
            <span className="gradient-text">&lt;JoãoPaulo /&gt;</span>
          </a>
          <ul className="hidden gap-7 md:flex">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`text-sm transition-colors hover:text-brand ${active === id ? "text-brand" : "text-text"}`}
                >
                  {ui.nav[id][lang]}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-semibold hover:border-brand"
              aria-label="Switch language"
            >
              <Languages size={14} /> {lang === "pt" ? "EN" : "PT"}
            </button>
            <button className="p-2 md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="border-t border-line px-4 pb-4 md:hidden">
            {sections.map((id) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block py-3 text-muted hover:text-brand">
                {ui.nav[id][lang]}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="relative mx-auto max-w-6xl px-4">
        {/* About */}
        <section id="about" className="grid items-center gap-12 pb-16 pt-28 md:pt-36 lg:min-h-[640px] lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="flex justify-center">
            <div className="animate-float rounded-full bg-gradient-to-br from-brand to-accent p-1 shadow-2xl shadow-brand/20">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="h-64 w-64 rounded-full border-4 border-ink object-cover md:h-80 md:w-80"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="space-y-6">
            <div>
              <p className="font-mono text-brand">{ui.hello[lang]}</p>
              <h1 className="mt-1 text-4xl font-extrabold md:text-6xl">{profile.name}</h1>
              <p className="mt-3 text-xl font-semibold gradient-text">{ui.role[lang]}</p>
            </div>
            <p className="text-lg leading-relaxed text-muted">{ui.about[lang]}</p>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { icon: MapPin, k: ui.locationLabel, v: ui.location },
                { icon: Laptop, k: ui.workLabel, v: ui.work },
                { icon: Languages, k: ui.langLabel, v: ui.langs },
              ].map(({ icon: Icon, k, v }) => (
                <div key={k.en} className="rounded-xl border border-line bg-panel p-4">
                  <div className="mb-1 flex items-center gap-2 text-sm font-semibold">
                    <Icon size={16} className="text-brand" /> {k[lang]}
                  </div>
                  <p className="text-sm text-muted">{v[lang]}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a className="btn-primary" href={profile.cv} target="_blank" rel="noopener noreferrer">
                <Download size={16} /> {ui.cv[lang]}
              </a>
              <a className="btn-ghost" href="#contact">
                <Mail size={16} /> {ui.talk[lang]}
              </a>
            </div>
          </Reveal>
        </section>

        {/* Stats */}
        <Reveal className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label.en} className="rounded-2xl border border-line bg-panel p-6 text-center">
              <div className="text-3xl font-extrabold gradient-text md:text-4xl">{typeof s.value === "string" ? s.value : s.value[lang]}</div>
              <div className="mt-1 text-sm text-muted">{s.label[lang]}</div>
            </div>
          ))}
        </Reveal>

        {/* Services */}
        <section id="services" className="scroll-mt-20 py-24">
          <Title sub={ui.servicesSub[lang]}>
            <span className="gradient-text">{ui.servicesTitle[lang]}</span>
          </Title>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.icon];
              return (
                <Reveal key={s.title.en} delay={i * 80}>
                  <article className="card h-full">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand">
                      <Icon size={24} />
                    </div>
                    <h3 className="mb-2 text-lg font-bold">{s.title[lang]}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-muted">{s.text[lang]}</p>
                    <Chips items={s.tech} />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-20 py-24">
          <Title>
            <span className="gradient-text">{ui.experienceTitle[lang]}</span>
          </Title>
          <ol className="relative mx-auto max-w-3xl border-l border-line">
            {experience.map((e, i) => (
              <li key={e.role.en} className="mb-10 ml-6">
                <span className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full border-2 border-ink bg-brand" />
                <Reveal delay={i * 60}>
                  <p className="font-mono text-xs text-accent">{e.period[lang]}</p>
                  <h3 className="mt-1 text-xl font-bold">{e.role[lang]}</h3>
                  <p className="mb-3 text-sm font-semibold text-brand">{e.org}</p>
                  <ul className="space-y-1.5 text-sm text-muted">
                    {e.points.map((p) => (
                      <li key={p.en} className="flex gap-2">
                        <span className="text-brand">▹</span>
                        {p[lang]}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20 py-24">
          <Title>
            <span className="gradient-text">{ui.projectsTitle[lang]}</span>
          </Title>
          <h3 className="mb-1 text-2xl font-bold">{ui.projectsWork[lang]}</h3>
          <p className="mb-6 text-sm text-muted">{ui.projectsWorkNote[lang]}</p>
          <div className="mb-14 grid gap-6 md:grid-cols-2">
            {workProjects.map((p, i) => (
              <ProjectCard key={p.title.en} p={p} lang={lang} index={i} />
            ))}
          </div>
          <h3 className="mb-6 text-2xl font-bold">{ui.projectsPersonal[lang]}</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {personalProjects.map((p, i) => (
              <ProjectCard key={p.title.en} p={p} lang={lang} index={i} />
            ))}
          </div>
        </section>

        {/* Education + hobbies */}
        <section id="education" className="scroll-mt-20 py-24">
          <Title>
            <span className="gradient-text">{ui.educationTitle[lang]}</span>
          </Title>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((e, i) => (
              <Reveal key={e.school} delay={i * 80}>
                <article className="card relative h-full">
                  <span className="absolute -top-3 right-4 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-ink">
                    {ui.done[lang]}
                  </span>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-lg font-bold">{e.title[lang]}</h3>
                  <p className="text-sm font-semibold text-brand">{e.school}</p>
                  <p className="mb-3 font-mono text-xs text-accent">{e.period}</p>
                  <p className="text-sm leading-relaxed text-muted">{e.text[lang]}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 text-center">
            <h3 className="mb-6 text-2xl font-bold">{ui.offTitle[lang]}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {hobbies.map((h) => (
                <div key={h.label.en} className="rounded-2xl border border-line bg-panel px-6 py-4 transition hover:border-brand">
                  <div className="text-3xl">{h.emoji}</div>
                  <div className="mt-1 text-sm text-muted">{h.label[lang]}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 py-24">
          <Title sub={ui.contactSub[lang]}>
            <span className="gradient-text">{ui.contactTitle[lang]}</span>
          </Title>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {contacts.map(({ icon: Icon, label, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="card flex items-center gap-4 !p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
                  <Icon size={22} />
                </span>
                <span className="break-all font-semibold">{label}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name} · {ui.footer[lang]}
      </footer>
    </div>
  );
}
