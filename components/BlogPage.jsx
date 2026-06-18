import { useEffect, useState } from "react";
import { BLOGS } from "./data";

// Takaway summaries to render inside the interactive modal
const BLOG_SUMMARIES = {
  "Mastering Angular Signals: A Beginner's Guide to Reactive State Management": {
    takeaways: [
      "Signals are reactive primitives that track state changes and automatically notify dependencies.",
      "They eliminate Zone.js overhead by triggering fine-grained, localized DOM updates rather than checking the entire component tree.",
      "Computed signals automatically track nested dependencies and cache values, re-evaluating only when needed."
    ],
    code: `// Define a reactive state primitive
const count = signal(0);
const double = computed(() => count() * 2);

// side-effect updates automatically
effect(() => console.log('Current value is:', count()));

count.set(5); // Logs: Current value is: 5`
  },
  "The Full Stack Paradox: Jack of All Trades, Master of None?": {
    takeaways: [
      "While full-stack generalists offer broad versatility, expecting mastery in both frontend and backend domains can lead to cognitive burnout.",
      "The complexity of modern build chains, security setups, and database layers has expanded, making true generalist expertises rarer.",
      "High-performing tech teams balance T-shaped generalists with focused domain specialists rather than relying on generalists exclusively."
    ],
    quote: "A generalist is critical for connecting dots, but specialists are essential for drilling holes. Respect both boundaries to scale software engineering teams."
  },
  "From Signals to AI: How Angular Quietly Became Cool Again (v16 to v21)": {
    takeaways: [
      "Angular underwent a complete renaissance by removing modules (NgModule) in favor of lightweight Standalone Components.",
      "Reactive Signals and built-in @defer blocks enabled high-performance dynamic lazy-loading out of the box.",
      "Migration from custom tools to standard build tools like Vite, Esbuild, and Hydration systems reduced overall load-times."
    ],
    quote: "Angular quietly shed its bureaucratic reputation, transforming into one of the leanest, most reactive frameworks in the modern web ecosystem."
  },
  "Mastering Angular Signal Effects: A Practical Guide with a Todo App": {
    takeaways: [
      "Effects are side-effect handlers that execute functions automatically when any dependent signals change.",
      "They are best utilized for DOM operations, writing to localStorage cache, or pushing tracking logs.",
      "Writing state updates directly inside effects is a major anti-pattern, often causing infinite compilation digest loops."
    ],
    code: `// Sync todos state to local storage
const todos = signal(JSON.parse(localStorage.getItem('todos') || '[]'));

effect(() => {
  localStorage.setItem('todos', JSON.stringify(todos()));
});`
  }
};

export default function BlogPage({ setPage }) {
  const [mounted, setMounted] = useState(false);
  
  // Interactive search & filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  
  // React state claps dictionary
  const [claps, setClaps] = useState({});
  const [clappingPost, setClappingPost] = useState(null);

  // Takeaway Summary modal state
  const [activeSummary, setActiveSummary] = useState(null);

  useEffect(() => {
    setMounted(true);
    // Initialize clap counts locally
    const initialClaps = {};
    BLOGS.forEach(b => {
      initialClaps[b.title] = Math.floor(Math.random() * 20) + 5;
    });
    setClaps(initialClaps);
  }, []);

  // Filter logic
  const filteredBlogs = BLOGS.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === "All" || blog.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  // Extract all unique tags
  const allTags = ["All", ...new Set(BLOGS.flatMap(b => b.tags))];

  const handleClap = (title) => {
    setClaps(prev => ({
      ...prev,
      [title]: (prev[title] || 0) + 1
    }));
    setClappingPost(title);
    setTimeout(() => setClappingPost(null), 300);
  };

  return (
    <div className="relative">
      
      {/* Blog Page Hero Header */}
      <section className="relative overflow-hidden py-12 md:py-16 px-6 md:px-12 border-b border-card-border bg-gradient-mesh">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--card-border)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
          <div className={`transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}>
            <p className="font-display text-xs tracking-widest uppercase font-black text-accent-purple mb-2">
              ✍️ Blog & Insights
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 leading-none">
              Writings on Tech,<br />
              <span className="bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">
                Leadership & Engineering
              </span>
            </h1>
            <p className="font-sans text-sm md:text-base text-text-muted max-w-xl leading-relaxed">
              Explore real-time filtered articles, dynamic summary snippets, and reactions. Originally published on Medium.
            </p>
          </div>

          <div className="glass-panel bg-card-bg/25 border border-card-border rounded-2xl p-5 flex flex-col gap-3 min-w-[260px]">
            <button 
              type="button" 
              onClick={() => { 
                setPage("home"); 
                window.scrollTo({ top: 0 }); 
              }} 
              className="px-5 py-2.5 rounded-full border border-accent-purple/35 text-accent-purple hover:bg-accent-purple/5 font-display text-xs font-bold transition-all flex items-center gap-2 justify-center"
            >
              ← Back to Portfolio
            </button>
            <div className="font-sans text-[11px] text-text-muted mt-2 border-t border-card-border/60 pt-3 space-y-1.5">
              <p>📝 Medium: <span className="text-foreground/90 font-medium">@thejspythonguy</span></p>
              <p>📧 Email: <span className="text-foreground/90 font-medium">thejspythonguy@gmail.com</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Toolbar: Search & Tag filters */}
      <section className="max-w-4xl mx-auto px-6 pt-10 flex flex-col md:flex-row gap-5 justify-between items-center">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2.5 pl-10 rounded-xl border border-card-border bg-card-bg/30 text-foreground placeholder-text-muted focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/30 outline-none text-sm transition-all"
          />
          <span className="absolute left-3.5 top-3 text-text-muted select-none">🔍</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-2.5 text-text-muted hover:text-foreground text-sm"
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Tag Filters Row */}
        <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold font-display transition-all duration-200 ${
                selectedTag === tag
                  ? "bg-accent-purple text-white shadow-sm"
                  : "bg-foreground/5 dark:bg-white/5 border border-card-border text-foreground/75 hover:border-accent-purple/35"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Blogs list results */}
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col gap-6">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div 
              key={blog.title} 
              className="glass-panel p-6 md:p-8 rounded-2xl border border-card-border shadow-sm relative overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.01] bg-card-bg/25"
            >
              <div 
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: `linear-gradient(90deg, ${blog.color}, transparent)` }}
              />
              
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3 leading-snug">
                {blog.title}
              </h2>
              
              {/* Meta information row */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4 items-center text-xs text-text-muted font-sans font-medium">
                <span>📅 {blog.date}</span>
                <span className="hidden sm:inline text-card-border">•</span>
                <span>⏱️ {blog.readTime}</span>
                <div className="flex flex-wrap gap-1.5 ml-1">
                  {blog.tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className="font-sans text-[10px] font-semibold border px-2 py-0.5 rounded-lg hover:brightness-110 transition-all"
                      style={{ 
                        color: blog.color, 
                        backgroundColor: `${blog.color}08`, 
                        borderColor: `${blog.color}18` 
                      }}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              
              <p className="font-sans text-sm md:text-[15px] text-text-muted mb-6 leading-relaxed">
                {blog.excerpt}
              </p>
              
              {/* Interactive buttons row */}
              <div className="flex flex-wrap items-center justify-between gap-4 mt-auto border-t border-card-border/60 pt-4">
                
                {/* Actions: Takeaway & Read */}
                <div className="flex items-center gap-3">
                  <a 
                    href={blog.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-full border font-display text-xs font-bold transition-all duration-200"
                    style={{ 
                      color: blog.color, 
                      borderColor: `${blog.color}50`,
                      backgroundColor: `${blog.color}04`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = blog.color;
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `${blog.color}04`;
                      e.currentTarget.style.color = blog.color;
                    }}
                  >
                    Read on Medium ↗
                  </a>
                  
                  {BLOG_SUMMARIES[blog.title] && (
                    <button
                      type="button"
                      onClick={() => setActiveSummary(blog.title)}
                      className="px-4.5 py-2.5 rounded-full border border-card-border bg-foreground/5 dark:bg-white/5 hover:bg-accent-purple/10 text-foreground/80 hover:text-accent-purple font-display text-xs font-bold transition-all"
                    >
                      Quick Summary 💡
                    </button>
                  )}
                </div>

                {/* Clap Counter (Reaction state) */}
                <button
                  type="button"
                  onClick={() => handleClap(blog.title)}
                  className={`inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full border border-card-border bg-card-bg/25 text-xs font-display font-semibold transition-all duration-150 active:scale-95 ${
                    clappingPost === blog.title 
                      ? "text-accent-purple border-accent-purple bg-accent-purple/10 scale-105" 
                      : "text-foreground/80 hover:text-accent-purple hover:border-accent-purple/30"
                  }`}
                >
                  <span className={`inline-block ${clappingPost === blog.title ? "animate-bounce" : ""}`}>👏</span>
                  <span>{claps[blog.title] || 0} claps</span>
                </button>

              </div>
            </div>
          ))
        ) : (
          <div className="glass-panel text-center py-16 rounded-2xl border border-card-border bg-card-bg/10">
            <span className="text-4xl block mb-4">🔍</span>
            <p className="font-display text-lg font-bold text-foreground mb-1">No articles found</p>
            <p className="font-sans text-sm text-text-muted">Try clearing your filters or testing another query.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedTag("All");
              }}
              className="mt-5 px-5 py-2 rounded-full bg-accent-purple text-white text-xs font-bold font-display"
            >
              Reset Filters
            </button>
          </div>
        )}

        <div className="text-center py-8 font-sans text-xs text-text-muted border-t border-card-border/60 mt-4">
          📡 More technical deep-dives coming soon — follow on Medium for updates.
        </div>
      </div>

      {/* Interactive Takaway Preview Modal */}
      {activeSummary && BLOG_SUMMARIES[activeSummary] && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-6 transition-all duration-300">
          <div className="glass-panel bg-card-bg border border-card-border rounded-2xl w-full max-w-xl shadow-2xl p-6 md:p-8 animate-float relative">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveSummary(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-foreground/5 dark:bg-white/5 border border-card-border hover:bg-rose-500/10 hover:text-rose-500 text-foreground/72 flex items-center justify-center text-sm transition-all"
              title="Close modal"
            >
              ✕
            </button>

            {/* Modal Header */}
            <p className="font-display text-[10px] tracking-widest uppercase font-black text-accent-purple mb-2">
              Article Takeaway Preview
            </p>
            <h3 className="font-display text-xl font-bold text-foreground mb-6 pr-6 leading-snug">
              {activeSummary}
            </h3>

            {/* Modal Content - Bullet Takeaways */}
            <div className="space-y-4 mb-6">
              <h4 className="font-display text-xs tracking-wider uppercase font-black text-text-muted">Key Insights:</h4>
              <ul className="space-y-3">
                {BLOG_SUMMARIES[activeSummary].takeaways.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm text-text-muted leading-relaxed">
                    <span className="text-accent-pink text-base mt-0.5 select-none">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Code Snippet or Visual Quote */}
            {BLOG_SUMMARIES[activeSummary].code ? (
              <div className="mb-6">
                <h4 className="font-display text-xs tracking-wider uppercase font-black text-text-muted mb-2">Example / Reference:</h4>
                <pre className="p-4 rounded-xl bg-foreground/5 dark:bg-white/5 border border-card-border font-mono text-xs text-foreground/90 overflow-x-auto leading-relaxed">
                  <code>{BLOG_SUMMARIES[activeSummary].code}</code>
                </pre>
              </div>
            ) : BLOG_SUMMARIES[activeSummary].quote ? (
              <div className="mb-6 p-4 rounded-xl bg-accent-purple/5 border border-accent-purple/20 border-l-4 border-l-accent-purple font-sans italic text-sm text-text-muted leading-relaxed">
                "{BLOG_SUMMARIES[activeSummary].quote}"
              </div>
            ) : null}

            {/* Footer buttons */}
            <div className="flex justify-end gap-3 border-t border-card-border/60 pt-4">
              <button
                type="button"
                onClick={() => setActiveSummary(null)}
                className="px-5 py-2 rounded-full border border-card-border text-foreground/80 hover:bg-foreground/5 dark:hover:bg-white/5 font-display text-xs font-bold transition-all"
              >
                Close Summary
              </button>
              <a
                href={BLOGS.find(b => b.title === activeSummary)?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full bg-accent-purple hover:bg-accent-purple/90 text-white font-display text-xs font-bold transition-all shadow-sm"
              >
                Read Full Article ↗
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
