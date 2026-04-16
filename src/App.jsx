import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const profile = {
  name: "Mayukh Ghosh",
  title: "Student • Problem Solver • Builder",
  tagline: "I build clean, thoughtful projects across DSA, web development, and machine learning.",
  about:
    "I enjoy solving hard problems, learning deeply, and turning ideas into polished projects. This portfolio is designed to feel personal, fast, and easy to explore.",
  education: "B.Tech student • KIIT",
  email: "23052334@kiit.ac.in",
  github: "https://github.com/MAECDWBG",
  linkedin: "https://linkedin.com/in/mayukh-ghosh-0259153b5",
  resume: "#",
};

const projects = [
  {
    title: "Movie Recommender System",
    type: "ML Project",
    description:
      "A content-based recommender using movie metadata, similarity search, and a clean result interface.",
    stack: ["Python", "Pandas", "Scikit-learn", "TMDB Dataset"],
    links: { live: "#", code: "#" },
    featured: true,
  },
  {
    title: "Servlet Assignment Hub",
    type: "Java Web",
    description:
      "A collection of servlet mini-apps including login validation, student registration, calculator, and dynamic pages.",
    stack: ["Java", "Servlets", "Tomcat 9", "Eclipse"],
    links: { live: "#", code: "#" },
    featured: true,
  },
  {
    title: "180-Day DSA Tracker",
    type: "Productivity",
    description:
      "A tracker for daily DSA practice with topic tags, solved problems, streaks, and revision sections.",
    stack: ["React", "TypeScript", "Tailwind"],
    links: { live: "#", code: "#" },
    featured: false,
  },
];

const skills = [
  "C++",
  "Python",
  "Java",
  "SQL",
  "React",
  "Tailwind",
  "Machine Learning",
  "DSA",
  "Git",
  "Tomcat",
];

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function cn(...values) {
  return values.filter(Boolean).join(" ");
}

function getAutoThemeFromHour(hour) {
  return hour >= 7 && hour < 18 ? "light" : "dark";
}

function runSelfTests() {
  const results = [];
  results.push({ name: "sections include contact", pass: sections.some((section) => section.id === "contact") });
  results.push({ name: "daytime is light", pass: getAutoThemeFromHour(10) === "light" });
  results.push({ name: "night is dark", pass: getAutoThemeFromHour(22) === "dark" });
  results.push({ name: "skills exist", pass: skills.length >= 6 });
  results.push({ name: "projects exist", pass: projects.length >= 3 });
  return results;
}

const selfTests = runSelfTests();
if (selfTests.some((test) => !test.pass)) {
  throw new Error("Internal test failure: portfolio data is incomplete.");
}

function Panel({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function PanelBody({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function ActionButton({ children, className = "", ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium transition duration-200",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function Tag({ children, className = "" }) {
  return (
    <span className={cn("inline-flex items-center rounded-xl border px-3 py-1 text-sm font-medium", className)}>
      {children}
    </span>
  );
}

function Icon({ name, className = "h-4 w-4" }) {
  const shared = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (name) {
    case "github":
      return (
        <svg {...shared}>
          <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.7A5.2 5.2 0 0 0 19 4.8 4.8 4.8 0 0 0 18.9 1S17.7.7 15 2.5a13.4 13.4 0 0 0-6 0C6.3.7 5.1 1 5.1 1A4.8 4.8 0 0 0 5 4.8 5.2 5.2 0 0 0 3.8 8.8c0 5.2 3.1 6.4 6.1 6.7a3.4 3.4 0 0 0-.9 2.6V22" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...shared}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "mail":
      return (
        <svg {...shared}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "external":
      return (
        <svg {...shared}>
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      );
    case "code":
      return (
        <svg {...shared}>
          <path d="m16 18 6-6-6-6" />
          <path d="m8 6-6 6 6 6" />
        </svg>
      );
    case "user":
      return (
        <svg {...shared}>
          <path d="M20 21a8 8 0 1 0-16 0" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case "moon":
      return (
        <svg {...shared}>
          <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
        </svg>
      );
    case "sun":
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      );
    case "rain":
      return (
        <svg {...shared}>
          <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
          <path d="M8 19v2" />
          <path d="M12 17v4" />
          <path d="M16 19v2" />
        </svg>
      );
    case "snow":
      return (
        <svg {...shared}>
          <path d="m10 4 2 2 2-2" />
          <path d="M12 2v20" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h20" />
          <path d="m4.93 19.07 1.41-1.41" />
          <path d="m17.66 6.34 1.41-1.41" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...shared}>
          <path d="M12 3 13.8 8.2 19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z" />
        </svg>
      );
    default:
      return null;
  }
}

function FloatingAmbience({ mode, theme }) {
  const items = useMemo(() => Array.from({ length: mode === "snow" ? 24 : 18 }, (_, i) => i), [mode]);
  const particleColor = theme === "dark" ? "bg-white/40" : "bg-slate-400/30";
  const rainColor = theme === "dark" ? "bg-white/25" : "bg-slate-500/20";
  const snowColor = theme === "dark" ? "text-white/80" : "text-slate-500/70";

  if (mode === "clear") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {items.map((i) => (
          <motion.div
            key={i}
            className={cn("absolute rounded-full blur-[1px]", particleColor)}
            initial={{ opacity: 0.08, y: 20, scale: 0.8 }}
            animate={{ opacity: [0.05, 0.22, 0.08], y: [20, -30, 20], x: [0, i % 2 === 0 ? 24 : -24, 0], scale: [0.8, 1.2, 0.9] }}
            transition={{ duration: 7 + (i % 5), repeat: Infinity, delay: i * 0.25 }}
            style={{ width: `${4 + (i % 3) * 2}px`, height: `${4 + (i % 3) * 2}px`, left: `${(i * 7) % 100}%`, top: `${(i * 11) % 100}%` }}
          />
        ))}
      </div>
    );
  }

  if (mode === "rain") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {items.map((i) => (
          <motion.div
            key={i}
            className={cn("absolute w-px rounded-full", rainColor)}
            initial={{ y: -120, opacity: 0.12 }}
            animate={{ y: [0, 900], opacity: [0.12, 0.35, 0.12] }}
            transition={{ duration: 1 + (i % 4) * 0.18, repeat: Infinity, delay: i * 0.08, ease: "linear" }}
            style={{ height: `${44 + (i % 4) * 14}px`, left: `${(i * 6) % 100}%`, top: `-${(i % 6) * 30}px`, rotate: "14deg" }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((i) => (
        <motion.div
          key={i}
          className={cn("absolute select-none", snowColor)}
          initial={{ y: -40, opacity: 0.15, rotate: 0 }}
          animate={{ y: [0, 820], x: [0, i % 2 === 0 ? 26 : -26, 0], opacity: [0.15, 0.9, 0.2], rotate: [0, 120, 240] }}
          transition={{ duration: 7 + (i % 6), repeat: Infinity, delay: i * 0.22, ease: "linear" }}
          style={{ left: `${(i * 5) % 100}%`, top: `-${(i % 6) * 28}px`, fontSize: `${10 + (i % 4) * 4}px` }}
        >
          ✦
        </motion.div>
      ))}
    </div>
  );
}

export default function MayukhPortfolioSite() {
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState("dark");
  const [ambience, setAmbience] = useState("clear");
  const [themeMode, setThemeMode] = useState("auto");

  useEffect(() => {
    if (themeMode === "auto") {
      setTheme(getAutoThemeFromHour(new Date().getHours()));
    }
  }, [themeMode]);

  const isDark = theme === "dark";
  const pageBg = isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900";
  const panel = isDark ? "border-white/20 bg-white/10 shadow-lg" : "border-slate-200 bg-white/85 shadow-sm";
  const subText = isDark ? "text-slate-200" : "text-slate-600";
  const headerGlass = isDark ? "border-white/20 supports-[backdrop-filter]:bg-slate-900/60" : "border-slate-200 supports-[backdrop-filter]:bg-white/75";
  const ghostButton = isDark ? "text-slate-100 hover:bg-white/10 hover:text-white border-white/30 bg-white/5" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 border-slate-300 bg-white";
  const softBadge = isDark ? "border border-white/15 bg-white/15 text-slate-100" : "border border-slate-200 bg-slate-100 text-slate-800";
  const stackBadge = isDark ? "border border-white/20 bg-white/5 text-slate-100" : "border border-slate-200 bg-white text-slate-700";
  const socialLink = isDark ? "border border-white/30 bg-white/10 text-slate-50 hover:bg-white/15 hover:text-white" : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900";

  function SocialLink({ href, label, icon, children }) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className={cn("inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm shadow-sm transition hover:scale-[1.02]", socialLink)}
      >
        <Icon name={icon} className="h-4 w-4" />
        {children || label}
      </a>
    );
  }

  const sectionContent = {
    home: (
      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
        <Panel className={cn("rounded-3xl border shadow-xl backdrop-blur", panel)}>
          <PanelBody className="p-8 md:p-10">
            <div className={cn("mb-4 flex items-center gap-2 text-sm uppercase tracking-[0.25em]", isDark ? "text-slate-300" : "text-slate-500")}>
              <Icon name="sparkles" className="h-4 w-4" /> Portfolio
            </div>
            <h1 className={cn("max-w-2xl text-4xl font-bold leading-tight md:text-6xl", isDark ? "text-white" : "text-slate-900")}>{profile.name}</h1>
            <p className={cn("mt-3 text-xl md:text-2xl", isDark ? "text-slate-100" : "text-slate-800")}>{profile.title}</p>
            <p className={cn("mt-5 max-w-2xl text-base leading-7", subText)}>{profile.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionButton className="rounded-2xl bg-blue-600 text-white hover:bg-blue-500" onClick={() => setActive("projects")}>View Projects</ActionButton>
              <ActionButton className={cn("rounded-2xl", ghostButton)} onClick={() => setActive("about")}>About Me</ActionButton>
              <a
                href={profile.resume}
                target={profile.resume !== "#" ? "_blank" : undefined}
                rel={profile.resume !== "#" ? "noreferrer" : undefined}
                className={cn("inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium transition duration-200", ghostButton)}
              >
                Resume <Icon name="external" className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {skills.slice(0, 6).map((skill) => (
                <Tag key={skill} className={cn("rounded-xl px-3 py-1 text-sm", softBadge)}>
                  {skill}
                </Tag>
              ))}
            </div>
          </PanelBody>
        </Panel>

        <div className="grid gap-6">
          <Panel className={cn("rounded-3xl border shadow-xl backdrop-blur", panel)}>
            <PanelBody className="p-6">
              <div className={cn("mb-4 flex items-center gap-2 text-lg font-semibold", isDark ? "text-white" : "text-slate-900")}>
                <Icon name="user" className="h-5 w-5" /> Snapshot
              </div>
              <div className={cn("space-y-3 text-sm", subText)}>
                <p>{profile.about}</p>
                <p>{profile.education}</p>
                <p>Focused on building a strong base in DSA, development, and applied ML.</p>
              </div>
            </PanelBody>
          </Panel>

          <Panel className={cn("rounded-3xl border shadow-xl backdrop-blur", panel)}>
            <PanelBody className="p-6">
              <div className={cn("mb-4 flex items-center gap-2 text-lg font-semibold", isDark ? "text-white" : "text-slate-900")}>
                <Icon name="code" className="h-5 w-5" /> Links
              </div>
              <div className="flex flex-wrap gap-3">
                <SocialLink href={profile.github} label="GitHub" icon="github" />
                <SocialLink href={profile.linkedin} label="LinkedIn" icon="linkedin" />
                <SocialLink href={`mailto:${profile.email}`} label="Email" icon="mail" />
                <SocialLink href={profile.resume} label="Resume" icon="external" />
              </div>
            </PanelBody>
          </Panel>
        </div>
      </div>
    ),
    about: (
      <div className="grid gap-6 lg:grid-cols-2">
        <Panel className={cn("rounded-3xl border", panel)}>
          <PanelBody className="p-8">
            <h2 className={cn("text-2xl font-bold", isDark ? "text-white" : "text-slate-900")}>About Me</h2>
            <p className={cn("mt-4 leading-7", subText)}>{profile.about}</p>
            <p className={cn("mt-4 leading-7", subText)}>
              I like websites that feel human, not robotic. That is why this design blends personality, motion, and clarity.
            </p>
          </PanelBody>
        </Panel>
        <Panel className={cn("rounded-3xl border", panel)}>
          <PanelBody className="p-8">
            <h2 className={cn("text-2xl font-bold", isDark ? "text-white" : "text-slate-900")}>Skills</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Tag key={skill} className={cn("rounded-xl px-3 py-1 text-sm", softBadge)}>{skill}</Tag>
              ))}
            </div>
          </PanelBody>
        </Panel>
      </div>
    ),
    projects: (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <motion.div key={project.title} whileHover={{ y: -6 }}>
            <Panel className={cn("h-full overflow-hidden rounded-3xl border", panel)}>
              <PanelBody className="flex h-full flex-col p-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <Tag className={cn("rounded-xl border border-blue-400/30", isDark ? "bg-blue-500/20 text-blue-100" : "bg-blue-50 text-blue-700")}>{project.type}</Tag>
                  {project.featured && <Tag className={cn("rounded-xl border border-emerald-400/30", isDark ? "bg-emerald-500/20 text-emerald-100" : "bg-emerald-50 text-emerald-700")}>Featured</Tag>}
                </div>
                <h3 className={cn("text-xl font-semibold", isDark ? "text-white" : "text-slate-900")}>{project.title}</h3>
                <p className={cn("mt-3 flex-1 text-sm leading-6", subText)}>{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Tag key={item} className={cn("rounded-xl", stackBadge)}>{item}</Tag>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={project.links.live}
                    target={project.links.live !== "#" ? "_blank" : undefined}
                    rel={project.links.live !== "#" ? "noreferrer" : undefined}
                    className={cn("inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition", isDark ? "border-white/10 bg-white/5 text-blue-300 hover:bg-white/10 hover:text-blue-200" : "border-slate-200 bg-white text-blue-700 hover:bg-slate-50 hover:text-blue-800")}
                  >
                    Live <Icon name="external" className="h-4 w-4" />
                  </a>
                  <a
                    href={project.links.code}
                    target={project.links.code !== "#" ? "_blank" : undefined}
                    rel={project.links.code !== "#" ? "noreferrer" : undefined}
                    className={cn("inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition", isDark ? "border-white/10 bg-white/5 text-blue-300 hover:bg-white/10 hover:text-blue-200" : "border-slate-200 bg-white text-blue-700 hover:bg-slate-50 hover:text-blue-800")}
                  >
                    Code <Icon name="github" className="h-4 w-4" />
                  </a>
                </div>
              </PanelBody>
            </Panel>
          </motion.div>
        ))}
      </div>
    ),
    contact: (
      <Panel className={cn("rounded-3xl border", panel)}>
        <PanelBody className="p-8">
          <h2 className={cn("text-2xl font-bold", isDark ? "text-white" : "text-slate-900")}>Contact</h2>
          <p className={cn("mt-3", subText)}>For collaborations, project discussions, or just to say hello.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <SocialLink href={`mailto:${profile.email}`} label={profile.email} icon="mail" />
            <SocialLink href={profile.github} label="GitHub" icon="github" />
            <SocialLink href={profile.linkedin} label="LinkedIn" icon="linkedin" />
            <SocialLink href={profile.resume} label="Resume" icon="external" />
          </div>
        </PanelBody>
      </Panel>
    ),
  };

  return (
    <div className={cn("min-h-screen transition-colors duration-500", pageBg)}>
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.15),transparent_24%)]" />
        <div className={cn("absolute inset-0 opacity-60", isDark ? "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" : "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_30%)]")} />
        <FloatingAmbience mode={ambience} theme={theme} />

        <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <header className={cn("sticky top-4 z-20 mb-8 rounded-3xl border backdrop-blur", headerGlass)}>
            <div className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className={cn("text-lg font-bold tracking-tight", isDark ? "text-white" : "text-slate-900")}>Mayukh.dev</div>
                <div className={cn("text-sm", isDark ? "text-slate-200" : "text-slate-600")}>Personal portfolio</div>
              </div>

              <nav className="flex flex-wrap gap-2">
                {sections.map((section) => (
                  <ActionButton
                    key={section.id}
                    className={cn(
                      "rounded-2xl",
                      active === section.id ? "bg-blue-600 text-white hover:bg-blue-500" : ghostButton
                    )}
                    onClick={() => setActive(section.id)}
                  >
                    {section.label}
                  </ActionButton>
                ))}
              </nav>

              <div className="flex flex-wrap gap-2">
                <ActionButton
                  className={cn("rounded-2xl", ghostButton)}
                  onClick={() => {
                    if (themeMode === "auto") setThemeMode("manual");
                    setTheme(isDark ? "light" : "dark");
                  }}
                >
                  {isDark ? <Icon name="sun" className="h-4 w-4" /> : <Icon name="moon" className="h-4 w-4" />}
                </ActionButton>
                <ActionButton
                  className={cn("rounded-2xl text-xs", themeMode === "auto" ? "bg-blue-600 text-white hover:bg-blue-500" : ghostButton)}
                  onClick={() => setThemeMode(themeMode === "auto" ? "manual" : "auto")}
                >
                  Auto
                </ActionButton>
                <ActionButton
                  className={cn("rounded-2xl", ambience === "clear" ? "bg-blue-600 text-white hover:bg-blue-500" : ghostButton)}
                  onClick={() => setAmbience("clear")}
                >
                  <Icon name="sparkles" className="h-4 w-4" />
                </ActionButton>
                <ActionButton
                  className={cn("rounded-2xl", ambience === "rain" ? "bg-blue-600 text-white hover:bg-blue-500" : ghostButton)}
                  onClick={() => setAmbience("rain")}
                >
                  <Icon name="rain" className="h-4 w-4" />
                </ActionButton>
                <ActionButton
                  className={cn("rounded-2xl", ambience === "snow" ? "bg-blue-600 text-white hover:bg-blue-500" : ghostButton)}
                  onClick={() => setAmbience("snow")}
                >
                  <Icon name="snow" className="h-4 w-4" />
                </ActionButton>
              </div>
            </div>
          </header>

          <AnimatePresence mode="wait">
            <motion.main
              key={active}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.28 }}
            >
              {sectionContent[active]}
            </motion.main>
          </AnimatePresence>

          <footer className={cn("mt-10 rounded-3xl border p-5 text-sm", panel)}>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div className={cn(isDark ? "text-slate-100" : "text-slate-700")}>Built for clarity, personality, and better project discovery.</div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
