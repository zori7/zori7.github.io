"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
  Github,
  Linkedin,
  Globe,
  Mail,
  MapPin,
  Server,
  Code2,
  Database,
  Layout,
  Shield,
  Cpu,
  ChevronDown,
  ExternalLink,
  Star,
  Terminal,
  Layers,
  Zap,
  ArrowRight,
} from "lucide-react";

/* ─── Animations helpers ─── */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number): { opacity: number; y: number; transition: { delay: number; duration: number; ease: "easeOut" } } => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── Background blobs ─── */
function FloatingBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      {/* Primary glow */}
      <motion.div
        className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
        animate={{ background: ["rgba(59,130,246,0.12)", "rgba(139,92,246,0.10)", "rgba(59,130,246,0.12)"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      {/* Secondary glow */}
      <motion.div
        className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full blur-[100px]"
        animate={{ background: ["rgba(52,211,153,0.08)", "rgba(59,130,246,0.10)", "rgba(52,211,153,0.08)"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      {/* Tertiary glow bottom */}
      <motion.div
        className="absolute -bottom-40 left-1/3 w-[600px] h-[400px] rounded-full blur-[150px]"
        animate={{ background: ["rgba(139,92,246,0.08)", "rgba(96,165,250,0.10)", "rgba(139,92,246,0.08)"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPTYwIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNjAgMCAwIDYwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTQ4LDE2MywxODUsMC4wNikiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
    </div>
  );
}

/* ─── Animated terminal widget ─── */
function TerminalWidget() {
  const lines = [
    { label: "> stack", color: "#60a5fa" },
    { indent: 1, key: "language", value: "TypeScript", theme: "blue" },
    { indent: 1, key: "runtime", value: "Node.js / Deno", theme: "green" },
    { indent: 1, key: "framework", value: "Next.js 15 (App Router)", theme: "purple" },
    { indent: 1, key: "mobile", value: "React Native / Expo", theme: "pink" },
    { indent: 1, key: "database", value: "PostgreSQL + Redis", theme: "cyan" },
    { indent: 1, key: "infra", value: "Docker · AWS · CI/CD", theme: "yellow" },
    { indent: 1, key: "ai", value: "OpenAI · RAG · Function Calling", theme: "green" },
    { label: "> status:", color: "#34d399" },
    { indent: 1, key: "availability", value: "ready-to-build", theme: "green" },
    { indent: 1, key: "response-time", value: "<2h", theme: "blue" },
  ];

  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const total = lines.length + 1;
    let current = 0;
    const speed = Math.max(40, 280 - current * 15);
    const interval = setInterval(() => {
      current++;
      if (current > total) clearInterval(interval);
      else setVisibleLines(current);
    }, speed);
    return () => clearInterval(interval);
  }, []);

  const themeColors: Record<string, string> = {
    blue: "#60a5fa",
    green: "#34d399",
    purple: "#a78bfa",
    pink: "#f472b6",
    cyan: "#22d3ee",
    yellow: "#fbbf24",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-lg mx-auto"
    >
      {/* Terminal body */}
      <div
        className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10"
        style={{ background: "rgba(3,7,18,0.85)", border: "1px solid rgba(59,130,246,0.2)" }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5" style={{ background: "rgba(17,24,39,0.8)" }}>
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <span className="ml-2 text-xs text-white/40 font-mono">zori@portfolio ~ stack</span>
        </div>
        {/* Terminal body */}
        <pre className="p-5 font-mono text-sm leading-relaxed min-h-[300px] overflow-hidden">
          {lines.slice(0, visibleLines).map((line, i) => {
            if (typeof line.label === "string") {
              return (
                <div key={i} style={{ color: line.color }}>
                  {line.label}
                </div>
              );
            }
            return (
              <div key={i} className="whitespace-pre" style={{ paddingLeft: `${(line.indent ?? 0) * 1.25}rem` }}>
                <span style={{ color: "#7dd3fc" }}>{line.key}</span>
                <span style={{ color: "rgba(255,255,255,0.4)" }}>: </span>
                <span style={{ color: themeColors[line.theme ?? "white"] }}>{line.value}</span>
              </div>
            );
          })}
          {visibleLines <= lines.length && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
              className="inline-block w-2.5 h-5 align-middle mx-[2px]"
              style={{ background: "#3b82f6" }}
            />
          )}
        </pre>
      </div>
    </motion.div>
  );
}

/* ─── Skill icon map ─── */
const skillIcons: Record<string, React.ElementType> = {
  TypeScript: Code2,
  JavaScript: Code2,
  "React": Code2,
  "Next.js": Globe,
  Node: Server,
  Express: Layers,
  "React Native": Zap,
  Supabase: Database,
  PostgreSQL: Database,
  Redis: Cpu,
  Docker: Server,
  Caddy: Shield,
  Tailwind: Layout,
  Shadcn: Code2,
};

/* ─── Skill Card ─── */
function SkillCard({ name, delay }: { name: string; delay: number }) {
  const Icon = skillIcons[name] || Code2;
  return (
    <motion.div
      variants={fadeInUp}
      custom={delay}
      whileHover={{ scale: 1.05, y: -4 }}
      className="group relative flex items-center gap-3 p-4 rounded-xl card"
    >
      {/* glow on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative flex items-center justify-center w-10 h-10 rounded-lg" style={{ background: "rgba(59,130,246,0.1)" }}>
        <Icon className="w-5 h-5 text-blue-400" />
      </div>
      <span className="relative text-white/80 font-medium group-hover:text-white transition-colors">{name}</span>
    </motion.div>
  );
}

/* ─── Review Card ─── */
function ReviewCard({ title, company, review, delay }: { title: string; company: string; review: string; delay: number }) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={delay}
      className="p-6 card rounded-2xl flex flex-col gap-4"
    >
      {/* stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} className="star-filled" />
        ))}
      </div>
      {/* text */}
      <p className="text-white/70 leading-relaxed flex-1 italic">{review}</p>
      {/* attrib */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/5">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-sm font-bold text-blue-400">
          {title.charAt(0)}
        </div>
        <div>
          <p className="text-white/80 text-sm font-medium">{company}</p>
          <p className="text-white/40 text-xs">Verified · Upwork</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Skill category icon + name mapping ─── */
interface Category {
  title: string;
  icon: React.FC<{ className?: string }>;
  skills: string[];
}

const categories: Category[] = [
  {
    title: "Frontend & Mobile",
    icon: Layout,
    skills: ["TypeScript", "JavaScript", "React", "Next.js", "React Native (Expo)", "Tailwind CSS", "Shadcn"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["Node.js", "Express", "NestJS", "Python (FastAPI)", "Laravel"],
  },
  {
    title: "Database & Cache",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    title: "DevOps & Infra",
    icon: Globe,
    skills: ["Docker", "GitHub Actions", "AWS", "Caddy", "Nginx", "Linux"],
  },
];

/* ─── Main page ─── */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Ref-based in-view check for hero section */
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });

  return (
    <div className="relative min-h-screen">
      <FloatingBlobs />

      {/* ─── Navbar ─── */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`rounded-2xl flex items-center justify-between px-6 py-3 transition-all duration-300 ${scrolled ? "glass-card glow-primary" : ""}`}
            style={{ border: scrolled ? "1px solid rgba(59,130,246,0.15)" : "none", background: scrolled ? "rgba(3,7,18,0.7)" : "transparent" }}
          >
            <a href="#hero" className="text-xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">&lt;Zori/&gt;</span>
            </a>
            <div className="flex items-center gap-6">
              <a href="#skills" className="text-sm text-white/50 hover:text-white transition-colors">Skills</a>
              <a href="#portfolio" className="text-sm text-white/50 hover:text-white transition-colors">Portfolio</a>
              <a href="#contact" className="text-sm text-white/50 hover:text-white transition-colors">Contact</a>
              <a href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
                >
                  Hire Me
                </motion.button>
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ─── HERO ─── */}
      <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* Left: typing text */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={heroInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            <motion.p
              animate={{ opacity: [0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="text-blue-400 font-medium mb-4 flex items-center gap-2 text-sm uppercase tracking-wider"
            >
              <span className="w-8 h-[1px] bg-blue-400 inline-block" />
              Available for new projects
            </motion.p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-3">
              Hi, I'm{" "}
              <span className="relative">
                <span className="gradient-text z-10 relative">Zori</span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ width: 0 }}
                  animate={heroInView ? { width: "100%" } : {}}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </span>
            </h1>

            <div className="h-[52px] sm:h-[60px] mb-6">
              <Typewriter
                options={{
                  strings: [
                    "Senior Full-Stack Software Engineer",
                    "Next.js & React Native Expert",
                    "Infrastructure & AI Integrations",
                  ],
                  autoStart: true,
                  delay: 50,
                  deleteSpeed: 30,
                  loop: true,
                  cursor: "", // hide default cursor; we render a custom one below
                }}
              />
            </div>

            {/* inline cursor */}
            <h2 className="text-lg sm:text-xl text-white/40 mb-8 font-light">
              Based in Yerevan, Armenia · Working worldwide &nbsp;<MapPin size={16} className="inline-block align-middle opacity-60" />
            </h2>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#contact" className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-shadow inline-flex items-center gap-2">
                Let's Talk <ArrowRight size={18} />
              </motion.a>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/zori7", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/zori-yeghikyan", label: "LinkedIn" },
                  { icon: Globe, href: "https://www.upwork.com/freelancers/~01582310b8eb792daf", label: "Upwork" },
                ].map(({ icon: Icn, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    className="w-12 h-12 flex items-center justify-center rounded-xl card opacity-70 hover:opacity-100 transition-opacity"
                    aria-label={label}
                  >
                    <Icn size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div className="flex gap-8">
              {([["8+", "Years Exp."], ["15+", "Projects"], ["100k+", "DAU Scaled"]] as const).map(([num, label]) => (
                <motion.div key={num} initial={{ opacity: 0 }} animate={heroInView ? { opacity: 1 } : {}} transition={{ delay: 1.2 }}>
                  <p className="text-2xl font-bold gradient-text">{num}</p>
                  <p className="text-xs text-white/40">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: terminal */}
          <TerminalWidget />
        </div>

        {/* Scroll-down indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs text-white/30 uppercase tracking-widest">Scroll</span>
          <ChevronDown size={16} className="text-white/30" />
        </motion.div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-blue-400 font-medium mb-3 uppercase tracking-wider text-sm">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Beyond Writing Code —{" "}
            <span className="gradient-text">Building Systems That Scale</span>
          </h2>
          <div className="space-y-5 text-white/60 leading-relaxed max-w-3xl mx-auto">
            <p>I have over 8 years of hands-on experience building web and mobile applications from the ground up. My background goes beyond writing application code — I understand how systems work at the infrastructure level, from Linux configuration and network routing to high-load databases and modern AI integrations.</p>
            <p>Whether you need to design a clean backend architecture, optimize database queries, set up a secure CI/CD pipeline, or integrate LLMs into an existing product — I handle the entire scope without needing constant oversight.</p>
          </div>
        </motion.div>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <p className="text-blue-400 font-medium mb-3 uppercase tracking-wider text-sm">Arsenal</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What I{" "}
              <span className="gradient-text">Work With</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">Only active, production-tested technologies — no relics.</p>
          </motion.div>

          {/* Category cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14" id="skills-grid">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                variants={fadeInUp}
                custom={ci * 0.15}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-6 card rounded-2xl flex flex-col gap-4"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-white/90 font-semibold text-sm">{cat.title}</h3>
                </div>
                <ul className="space-y-2 flex-1">
                  {cat.skills.map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400/40" />
                      <span className="text-white/60 text-sm">{s}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Extra / individual skill chips */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.7 }}>
            <div className="flex flex-wrap justify-center gap-3">
              {/* All skills as chips */}
              {["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Express", "React Native (Expo)", "Supabase", "PostgreSQL", "Redis", "Docker", "Caddy", "Tailwind CSS", "Shadcn"].map((name, i) => (
                <SkillCard key={name} name={name} delay={i * 0.05} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── APPROACH ─── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <p className="text-blue-400 font-medium mb-3 uppercase tracking-wider text-sm">Approach</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              How I{" "}
              <span className="gradient-text">Approach Projects</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Full-stack Ownership", desc: "I can look at a problem from the network and database layer all the way to the frontend UI. Fewer handoffs, faster resolution.", icon: Layers },
              { title: "Pragmatic Architecture", desc: "Maintainable, well-typed code that scales when needed — no over-engineering, no unnecessary complexity.", icon: Server },
              { title: "Clear Communication", desc: "I explain technical trade-offs in plain terms so we make the right decisions for your budget and timeline.", icon: Zap },
            ].map((item, i) => (
              <motion.div key={item.title} variants={fadeInUp} custom={i * 0.15} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center p-8 card rounded-2xl group hover:border-blue-500/30 transition-colors">
                <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white/90">{item.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO & REVIEWS ─── */}
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <p className="text-blue-400 font-medium mb-3 uppercase tracking-wider text-sm">Proof of Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Projects &{" "}
              <span className="gradient-text">Client Reviews</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">Every project delivered with measurable impact — and verified reviews to prove it.</p>
          </motion.div>

          {/* Projects */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}>
            <h3 className="text-xl font-semibold mb-8 text-white/80 flex items-center gap-2">
              <Code2 size={20} className="text-blue-400" /> Featured Work
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
              {[
                { title: "Experienced Web Frontend Dev", desc: "Scaled from 10K to 100K DAU using Next.js. Delivered critical features for a high-traffic platform.", icon: Globe, color: "from-blue-600 to-cyan-500" },
                { title: "Exploding Topics — Full-Stack", desc: "Speedy and dependable full-stack delivery. Built core platform features with reliable CI/CD pipelines.", icon: Zap, color: "from-purple-600 to-pink-500" },
                { title: "Full Stack Platform", desc: "End-to-end system design — database architecture, API layer, and responsive frontend UI.", icon: Layers, color: "from-emerald-600 to-teal-400" },
                { title: "Team Contractor — Full Stack", desc: "Seamless team integration with quick iterations on pull requests and proactive communication.", icon: Code2, color: "from-orange-600 to-yellow-500" },
              ].map((p, i) => (
                <motion.div key={p.title} variants={fadeInUp} custom={i * 0.12} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group relative card rounded-2xl overflow-hidden cursor-default">
                  {/* top gradient bar */}
                  <div className={`h-1 bg-gradient-to-r ${p.color}`} />
                  <div className="p-6">
                    <div className="w-11 h-11 mb-4 rounded-xl bg-white/[0.05] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <p.icon className="w-5 h-5 text-white/60" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">{p.title}</h4>
                    <p className="text-sm text-white/45 leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Upwork Reviews */}
            <h3 className="text-xl font-semibold mb-8 text-white/80 flex items-center gap-2">
              <Star size={20} className="star-filled" /> Upwork Review Highlights
            </h3>

            <motion.div layout variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-5">
              {[
                { title: "Experienced Web Front", company: "Scaling Platform Engineer", review: "Zori was a part of our frontend team where we scaled from 10k DAU to 100k DAU. He did many important features for our website which uses Next.js. He is a skilled frontend developer. We thanked him for working with us." },
                { title: "Exploding Topics", company: "Full-Stack Developer", review: "Zori is super speedy and dependable and a pleasure to work with!" },
                { title: "Full Stack Dev", company: "Quality Engineer", review: "Zori is an outstanding developer that consistently delivers quality work." },
                {
                  title: "Full Stack Work",
                  company: "Team Contractor",
                  review: "Zori was an amazing contractor. He communicated well and did great work. He was very willing to listen to feedback and make fixes to pull requests which is always part of the process of working in a team. I'd highly recommend working with Zori.",
                },
              ].map((r, i) => (
                <ReviewCard key={i} title={r.title} company={r.company} review={r.review} delay={i * 0.12} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTACT CTA ─── */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}>
            {/* Big CTA card */}
            <div className="relative p-10 sm:p-14 rounded-3xl overflow-hidden" style={{ background: "rgba(3,7,18,0.6)", border: "1px solid rgba(59,130,246,0.15)" }}>
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.06] via-transparent to-purple-500/[0.06]" />

              <div className="relative z-10">
                <p className="text-blue-400 font-medium mb-3 uppercase tracking-wider text-sm">Get in Touch</p>
                <h2 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
                  Ready to Build Something Great?
                </h2>
                <p className="text-white/50 text-lg max-w-2xl mx-auto mb-12">
                  If you are looking for a reliable engineer to take ownership of a feature or an entire product stack — send me a message and let's discuss your project.
                </p>

                <div className="flex flex-wrap justify-center gap-5 mb-8">
                  {/* Upwork button */}
                  <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://www.upwork.com/freelancers/~01582310b8eb792daf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#14a800] to-[#3fd594] text-white font-semibold text-lg hover:shadow-lg hover:shadow-green-500/25 transition-shadow flex items-center gap-3">
                    <Globe size={22} /> On Upwork
                  </motion.a>

                  {/* LinkedIn button */}
                  <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://www.linkedin.com/in/zori-yeghikyan" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl card text-white font-semibold text-lg hover:border-blue-500/30 transition-colors flex items-center gap-3">
                    <Linkedin size={22} /> LinkedIn
                  </motion.a>

                  {/* GitHub button */}
                  <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://github.com/zori7" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl card text-white font-semibold text-lg hover:border-blue-500/30 transition-colors flex items-center gap-3">
                    <Github size={22} /> GitHub
                  </motion.a>
                </div>

                <p className="text-white/30 text-sm">
                  Typically responds within a few hours · Yerevan, Armenia
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-sm text-white/30">
            © {new Date().getFullYear()} Zori. Built with Next.js · Tailwind · Framer Motion.
          </span>
          <div className="flex gap-6">
            {[
              { icon: Github, href: "https://github.com/zori7" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/zori-yeghikyan" },
              { icon: Globe, href: "https://www.upwork.com/freelancers/~01582310b8eb792daf" },
            ].map(({ icon: Icn, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white/60 transition-colors">
                <Icn size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
