import { useEffect, useState } from "react";
import { scrollTo } from "./utils";

const CONTACTS = [
  { icon: "📧", label: "Email", href: "mailto:thejspythonguy@gmail.com", val: "thejspythonguy@gmail.com" },
  { icon: "📞", label: "Phone", href: "tel:+19045663331", val: "+1 (904) 566-3331" },
  { icon: "📍", label: "Location", href: null, val: "Jacksonville, FL, USA" },
  { icon: "💻", label: "GitHub", href: "https://github.com/thejspythonguy", val: "github.com/thejspythonguy" },
  { icon: "🔗", label: "LinkedIn", href: "https://www.linkedin.com/in/thejspythonguy/", val: "linkedin.com/in/thejspythonguy" },
  { icon: "🐦", label: "Twitter", href: "https://twitter.com/thejspythonguy", val: "@thejspythonguy" },
];

const ROLES = [
  "Senior Full Stack Engineer",
  "FinTech & AI Systems Pioneer",
  "Credit Risk Integration Leader",
  "Lead Engineer @ CitiBank"
];

export default function Hero({ setPage }) {
  const [mounted, setMounted] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    let timer;
    const currentFullText = ROLES[roleIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
      }, 35);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
      }, 75);
    }

    if (!isDeleting && displayText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden py-16 md:py-24 px-6 md:px-12 border-b border-card-border bg-gradient-mesh">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--card-border)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-10">
        
        {/* Left Column: Text & Content */}
        <div className={`flex-1 transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/10 px-3.5 py-1.5 mb-6 animate-pulse-soft">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="font-display text-[10px] tracking-widest uppercase font-black text-emerald-600 dark:text-emerald-400">
              Open to Select Leadership Roles
            </span>
          </div>

          {/* Name & Animated Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">
              Shailender Singh
            </span>
          </h1>
          
          {/* Subtitle / Roles */}
          <div className="font-display text-xl sm:text-2xl font-bold text-accent-purple min-h-[36px] flex items-center mb-6">
            <span>{displayText}</span>
            <span className="w-0.5 h-6 bg-accent-purple ml-1 animate-pulse" />
          </div>

          {/* Intro Description */}
          <p className="font-sans text-base sm:text-lg text-text-muted max-w-2xl leading-relaxed mb-8">
            Senior full-stack engineer with 12+ years of experience building secure, high-scale FinTech applications. I specialize in launching AI risk engines, digital onboarding, automated compliance workflows, and cloud migrations.
          </p>

          {/* Achievement Badges */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            <span className="px-3.5 py-1.5 text-xs font-semibold rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400">
              ⚡ 12+ Years Experience
            </span>
            <span className="px-3.5 py-1.5 text-xs font-semibold rounded-full border border-accent-purple/20 bg-accent-purple/5 text-accent-purple dark:text-accent-purple">
              🛡️ CitiBank Lead Engineer
            </span>
            <span className="px-3.5 py-1.5 text-xs font-semibold rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-600 dark:text-cyan-400">
              💻 AWS & MongoDB Certified
            </span>
            <span className="px-3.5 py-1.5 text-xs font-semibold rounded-full border border-accent-pink/20 bg-accent-pink/5 text-accent-pink dark:text-accent-pink">
              📊 Global Delivery Leadership
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center">
            <button
              type="button"
              onClick={() => scrollTo("experience")}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-purple to-accent-pink hover:from-accent-purple hover:to-accent-purple text-white font-display text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              View Experience
            </button>
            <button
              type="button"
              onClick={() => {
                setPage("blogs");
                window.scrollTo({ top: 0 });
              }}
              className="px-6 py-3 rounded-full border border-card-border hover:border-accent-purple/40 hover:bg-accent-purple/5 text-foreground/80 hover:text-accent-purple font-display text-sm font-bold transition-all duration-200"
            >
              Read the Blog
            </button>
          </div>
        </div>

        {/* Right Column: Console Mockup Panel */}
        <div className={`w-full lg:w-[440px] transition-all duration-1000 delay-200 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          
          {/* Console Window */}
          <div className="rounded-2xl glass-panel bg-card-bg overflow-hidden border border-card-border shadow-xl">
            {/* Console Header Bar */}
            <div className="bg-foreground/5 dark:bg-white/5 px-4 py-3 border-b border-card-border flex items-center justify-between">
              <div className="flex gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3.5 h-3.5 rounded-full bg-amber-400/80 inline-block" />
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="font-mono text-xs text-text-muted">shailender.json</span>
              <div className="w-14" />
            </div>

            {/* Console Body */}
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto text-foreground/90 bg-card-bg/25">
              <span className="text-accent-pink">const</span> <span className="text-foreground">developer</span> = &#123;
              <div className="pl-4">
                <span className="text-text-muted">name:</span> <span className="text-accent-purple">"Shailender Singh"</span>,
                <br />
                <span className="text-text-muted">skills:</span> [
                <div className="pl-4">
                  <span className="text-emerald-500">"Angular"</span>, <span className="text-emerald-500">"React"</span>,
                  <br />
                  <span className="text-emerald-500">"Node.js"</span>, <span className="text-emerald-500">"FastAPI"</span>,
                  <br />
                  <span className="text-emerald-500">"ML Models"</span>, <span className="text-emerald-500">"AWS"</span>
                </div>
                ],
                <br />
                <span className="text-text-muted">focus:</span> <span className="text-accent-purple">"FinTech, Risk & AI Automation"</span>,
                <br />
                <span className="text-text-muted">provenTestCoverage:</span> <span className="text-accent-pink">"99%"</span>,
                <br />
                <span className="text-text-muted">cloudSavings:</span> <span className="text-accent-pink">"$40K/month"</span>,
                <br />
                <span className="text-text-muted">timezonesActive:</span> [
                <div className="pl-4">
                  <span className="text-emerald-500">"USA"</span>, <span className="text-emerald-500">"India"</span>, <span className="text-emerald-500">"Saudi Arabia"</span>
                </div>
                ]
              </div>
              &#125;;
            </div>
          </div>

          {/* Social / Info Links Grid under console */}
          <div className="mt-6 grid grid-cols-2 gap-3.5">
            {CONTACTS.map((c) => (
              c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-card-border hover:border-accent-purple/30 bg-card-bg/20 hover:bg-accent-purple/5 flex items-center gap-3 group transition-all duration-200"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-200">{c.icon}</span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-sans text-text-muted font-bold uppercase tracking-wider">{c.label}</span>
                    <span className="text-xs font-sans text-foreground/80 truncate">{c.val}</span>
                  </div>
                </a>
              ) : (
                <div
                  key={c.label}
                  className="p-3 rounded-xl border border-card-border bg-card-bg/20 flex items-center gap-3"
                >
                  <span className="text-lg">{c.icon}</span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-sans text-text-muted font-bold uppercase tracking-wider">{c.label}</span>
                    <span className="text-xs font-sans text-foreground/80 truncate">{c.val}</span>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
