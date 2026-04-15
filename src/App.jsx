import React from "react";
import { motion } from "framer-motion";

const skills = [
  "C++",
  "Python",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "Machine Learning",
  "DSA",
  "Servlets",
  "React",
  "Tailwind",
  "SQL",
];

const projects = [
  {
    title: "Movie Recommender System",
    description:
      "A recommendation engine built with machine learning, metadata processing, and similarity-based search to suggest relevant movies.",
    stack: ["Python", "Pandas", "Scikit-learn", "Jupyter"],
    tag: "ML Project",
  },
  {
    title: "Java Servlet Web Apps",
    description:
      "A collection of dynamic web applications featuring login validation, calculator logic, form handling, and registration workflows.",
    stack: ["Java", "Servlets", "Tomcat", "HTML", "CSS"],
    tag: "Backend + Web",
  },
  {
    title: "DSA Problem Solving Journey",
    description:
      "A structured coding journey focused on algorithms, STL, arrays, graphs, recursion, and interview-style problem solving.",
    stack: ["C++", "STL", "Algorithms"],
    tag: "Core CS",
  },
];

const stats = [
  { value: "3+", label: "Project Areas" },
  { value: "180-Day", label: "DSA Discipline" },
  { value: "CSE", label: "Student Builder" },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl leading-8 text-slate-400">{subtitle}</p> : null}
    </div>
  );
}

function runSelfTests() {
  const results = [];
  results.push({ name: "skills list has items", pass: skills.length > 0 });
  results.push({ name: "projects list has items", pass: projects.length > 0 });
  results.push({ name: "nav contains contact", pass: navItems.some((item) => item.href === "#contact") });
  return results;
}

const selfTests = runSelfTests();
if (selfTests.some((test) => !test.pass)) {
  throw new Error("Internal test failure: portfolio data is incomplete.");
}

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 text-slate-100 selection:bg-cyan-400/30 selection:text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_26%),radial-gradient(circle_at_left,rgba(168,85,247,0.12),transparent_28%),linear-gradient(to_bottom,rgba(15,23,42,1),rgba(2,6,23,1))]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 md:px-10 lg:px-12">
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="text-lg font-bold tracking-tight text-white">
              Mayukh Ghosh
            </a>

            <a
              href="#contact"
              className="hidden rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/20 md:inline-flex"
            >
              Let’s Connect
            </a>
          </div>

          <nav className="mt-4 flex flex-wrap gap-2 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <nav className="mt-4 hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl border border-transparent px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <motion.section
        id="top"
        className="relative overflow-hidden border-b border-white/10 scroll-mt-24"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_26%),radial-gradient(circle_at_left,rgba(168,85,247,0.10),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="mb-6 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm text-cyan-300 shadow-sm shadow-cyan-500/10">
                My Portfolio
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
                Mayukh Ghosh
                <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Web Developer • ML Enthusiast • Problem Solver
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                I build clean web experiences, solve data structures problems consistently, and explore machine learning through practical projects. My aim is to grow into a strong software engineer with depth in problem solving and product building.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:shadow-xl"
                >
                  View Projects
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  Contact Me
                </motion.a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.25 + index * 0.1 }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                  >
                    <div className="text-2xl font-bold text-white">{item.value}</div>
                    <div className="mt-1 text-sm text-slate-400">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.2 }}
            >
              <div className="absolute -inset-8 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-2xl shadow-cyan-950/20">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Currently focused on</p>
                      <h3 className="mt-1 text-xl font-bold text-white">Web Dev + DSA + ML</h3>
                    </div>
                    <motion.div
                      className="h-3 w-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-500/50"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                    />
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-slate-400">Primary Strength</p>
                      <p className="mt-1 font-semibold text-white">Consistent problem solving and hands-on learning</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-slate-400">Development Stack</p>
                      <p className="mt-1 font-semibold text-white">Java, Python, C++, Web Technologies</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-slate-400">Career Direction</p>
                      <p className="mt-1 font-semibold text-white">Software Engineering / Full Stack / ML-Driven Products</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16 md:px-10 lg:px-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            eyebrow="About Me"
            title="Building skills with consistency, curiosity, and execution."
          />
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 text-slate-300 backdrop-blur-sm">
            <p className="leading-8">
              I am a computer science student who enjoys creating practical projects and improving through steady daily work. My journey combines web development, data structures and algorithms, and machine learning.
            </p>
            <p className="mt-4 leading-8">
              I am especially interested in writing clean code, understanding the logic behind systems, and building projects that reflect both technical ability and growth mindset.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-8 md:px-10 lg:px-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <SectionTitle
              eyebrow="Skills"
              title="Technical Toolkit"
              subtitle="A balanced mix of programming, development, and analytical problem-solving skills."
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16 md:px-10 lg:px-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle
          eyebrow="Projects"
          title="Featured Work"
          subtitle="A few selected areas that represent my learning, technical foundation, and practical execution."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/5 p-6 transition duration-300 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-950/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-200">
                  {project.tag}
                </span>
                <span className="text-slate-500 transition group-hover:text-cyan-300">↗</span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-white/10 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <SectionTitle eyebrow="Education" title="Academic Snapshot" />
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-sm text-slate-400">Current</p>
                <p className="mt-1 text-lg font-semibold text-white">B.Tech in Computer Science(KIIT)</p>
                <p className="mt-1 text-sm text-slate-400">Focused on software development, machine learning, and problem solving</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm text-slate-400">CGPA(out of 10)</p>
                  <p className="mt-1 text-xl font-bold text-white">7.0</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm text-slate-400">12th Score(CBSE)</p>
                  <p className="mt-1 text-xl font-bold text-white">80%</p>
                </div>
              </div>
            </div>
          </div>

          <div id="contact" className="scroll-mt-24 rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-8 backdrop-blur-sm">
            <SectionTitle eyebrow="Contact" title="Let’s build something meaningful." />
            <p className="mt-4 max-w-xl leading-8 text-slate-300">
              I am open to internships, collaborations, and opportunities where I can learn, contribute, and grow as a developer.
            </p>

            <div className="mt-6 space-y-4 text-sm text-slate-200">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <span className="text-slate-400">Email</span>
                <div className="mt-1 font-medium">23052334@kiit.ac.in</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <span className="text-slate-400">Phone</span>
                <div className="mt-1 font-medium">+91 9432416468</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <span className="text-slate-400">LinkedIn</span>
                <div className="mt-1 break-all font-medium">www.linkedin.com/in/mayukh-ghosh-0259153b5</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <footer className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-slate-500 md:px-10 lg:px-12">
        Designed to showcase projects, consistency, and growth.
      </footer>
    </div>
  );
}
