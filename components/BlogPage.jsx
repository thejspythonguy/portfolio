import { useEffect, useState } from "react";
import { BLOGS } from "./data";
import SectionHeader from "./SectionHeader";

export default function BlogPage({ setPage }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <section style={{ background: "linear-gradient(135deg, #0a1c30 0%, #0f3352 60%, #0a1c30 100%)", padding: "3rem 24px 3.5rem", borderBottom: "4px solid #f5b042", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(245,176,66,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,176,66,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "2rem", position: "relative", zIndex: 1 }}>
          <div style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s ease" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: "#f5b042", letterSpacing: 3.5, textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>✍️ Blog & Insights</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#fff", marginBottom: 12 }}>
              Writings on Tech,<br /><span style={{ color: "#f5b042" }}>Leadership & Engineering</span>
            </h1>
            <p style={{ fontFamily: "'Lora', serif", fontSize: 15, color: "rgba(240,248,255,0.65)", maxWidth: 520, lineHeight: 1.75 }}>
              Exploring the intersections of modern web development, AI in FinTech, and the evolving role of engineers. Published on Medium.
            </p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(10px)", border: "1px solid rgba(245,176,66,0.2)", borderRadius: 20, padding: "1.6rem 2rem", opacity: mounted ? 1 : 0, transition: "opacity 1s ease 0.3s" }}>
            <button type="button" onClick={() => { setPage("home"); window.scrollTo({ top: 0 }); }} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "1px solid rgba(245,176,66,0.35)", borderRadius: 30, padding: "10px 20px", color: "#f5b042", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 600, cursor: "pointer", marginBottom: 14, transition: "all 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(245,176,66,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "none"; }}>
              ← Back to Portfolio
            </button>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "rgba(240,248,255,0.5)", letterSpacing: 0.5 }}>📝 Medium: @thejspythonguy</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "rgba(240,248,255,0.5)", marginTop: 6 }}>📧 thejspythonguy@gmail.com</p>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 860, margin: "3rem auto", padding: "0 24px" }}>
        {BLOGS.map((blog) => (
          <div key={blog.title} style={{
            background: "#fff",
            borderRadius: 24,
            padding: "2rem 2.2rem",
            marginBottom: "2rem",
            boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
            border: "1px solid #edf2f7",
            transition: "all 0.25s",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.05)"; }}>
            <div style={{ height: 4, background: `linear-gradient(90deg, ${blog.color}, transparent)`, borderRadius: 4, marginBottom: 20 }} />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.55rem", fontWeight: 800, color: "#0a1c30", marginBottom: 12, lineHeight: 1.3 }}>{blog.title}</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 16, alignItems: "center" }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "#94a3b8" }}>📅 {blog.date}</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "#94a3b8" }}>⏱️ {blog.readTime}</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "#94a3b8" }}>📰 Medium</span>
              {blog.tags.map((tag) => (
                <span key={tag} style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 600, color: blog.color, background: `${blog.color}10`, border: `1px solid ${blog.color}25`, padding: "2px 10px", borderRadius: 20 }}>
                  {tag}
                </span>
              ))}
            </div>
            <p style={{ fontFamily: "'Lora', serif", fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 20 }}>{blog.excerpt}</p>
            <a href={blog.url} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: `2px solid ${blog.color}`,
              color: blog.color,
              padding: "10px 22px",
              borderRadius: 30,
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = blog.color; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = blog.color; }}>
              Read on Medium ↗
            </a>
          </div>
        ))}
        <div style={{ textAlign: "center", padding: "2rem 0 3rem", fontFamily: "'Outfit', sans-serif", fontSize: 14, color: "#94a3b8" }}>
          📡 More technical deep-dives coming soon — follow on Medium for updates.
        </div>
      </div>
    </div>
  );
}
