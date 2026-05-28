import { useEffect, useState } from "react";
import { scrollTo } from "./utils";

const CONTACTS = [
  { icon: "📧", label: "thejspythonguy@gmail.com", href: "mailto:thejspythonguy@gmail.com" },
  { icon: "📞", label: "+1-904-566-3331", href: "tel:+19045663331" },
  { icon: "📍", label: "Jacksonville, FL, USA", href: null },
  { icon: "🐦", label: "@thejspythonguy", href: "https://twitter.com/thejspythonguy" },
  { icon: "🔗", label: "LinkedIn", href: "https://www.linkedin.com/in/thejspythonguy/" },
  { icon: "💻", label: "GitHub", href: "https://github.com/thejspythonguy" },
];

export default function Hero({ setPage }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" style={{
      background: "linear-gradient(135deg, #0a1c30 0%, #0f3352 60%, #0a1c30 100%)",
      padding: "4rem 24px 4.5rem",
      borderBottom: "4px solid #f5b042",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(245,176,66,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,176,66,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 600, height: 600, background: "radial-gradient(circle, rgba(245,176,66,0.06) 0%, transparent 70%)", top: -200, right: -100, borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "2.5rem", position: "relative", zIndex: 1 }}>
        <div style={{ flex: "1 1 400px", opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(28px)", transition: "all 0.75s cubic-bezier(.16,1,.3,1)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,176,66,0.12)", border: "1px solid rgba(245,176,66,0.25)", borderRadius: 30, padding: "5px 16px", marginBottom: 20 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4caf50", boxShadow: "0 0 6px #4caf50" }} />
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "#f5b042", letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 600 }}>Available for new opportunities</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 800, color: "#fff", lineHeight: 1.08, marginBottom: 10 }}>
            Shailender<br />
            <span style={{ color: "#f5b042" }}>Singh</span>
          </h1>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: "1.15rem", color: "rgba(240,248,255,0.75)", marginBottom: 18, letterSpacing: 0.3 }}>
            Senior Full Stack Engineer · FinTech & AI/ML · Credit Risk Systems
          </p>
          <p style={{ fontFamily: "'Lora', serif", fontSize: "1.05rem", color: "rgba(240,248,255,0.65)", maxWidth: 580, lineHeight: 1.75, marginBottom: 32 }}>
            12+ years architecting scalable, mission-critical financial systems for global banking institutions. Specialist in AI-driven credit decisioning engines, fraud detection, and digital wealth services.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button type="button" onClick={() => scrollTo("experience")} style={{ background: "#f5b042", color: "#0a1c30", padding: "13px 28px", border: "none", borderRadius: 40, fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 14, cursor: "pointer", letterSpacing: 0.4, transition: "all 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#ffca5a"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#f5b042"; }}>
              💼 View Experience
            </button>
            <button type="button" onClick={() => { setPage("blogs"); window.scrollTo({ top: 0 }); }} style={{ background: "transparent", color: "#f5b042", padding: "13px 28px", border: "2px solid rgba(245,176,66,0.45)", borderRadius: 40, fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 14, cursor: "pointer", letterSpacing: 0.4, transition: "all 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#f5b042"; e.currentTarget.style.background = "rgba(245,176,66,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(245,176,66,0.45)"; e.currentTarget.style.background = "transparent"; }}>
              ✍️ Read My Blog
            </button>
          </div>
        </div>

        <div style={{
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(245,176,66,0.2)",
          borderRadius: 24,
          padding: "1.8rem 2rem",
          minWidth: 260,
          opacity: mounted ? 1 : 0,
          transition: "opacity 1s ease 0.4s",
        }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: "#f5b042", letterSpacing: 3, textTransform: "uppercase", fontWeight: 700, marginBottom: 18 }}>Contact</p>
          {CONTACTS.map((c) => (
            <div key={c.label} style={{ marginBottom: 14 }}>
              {c.href ? (
                <a href={c.href} style={{ display: "flex", alignItems: "center", gap: 12, color: "rgba(240,248,255,0.8)", fontFamily: "'Outfit', sans-serif", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#f5b042"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(240,248,255,0.8)"; }}>
                  <span style={{ fontSize: 18, width: 28, textAlign: "center" }}>{c.icon}</span>{c.label}
                </a>
              ) : (
                <div style={{ display: "flex", alignItems: "center", gap: 12, color: "rgba(240,248,255,0.8)", fontFamily: "'Outfit', sans-serif", fontSize: 14 }}>
                  <span style={{ fontSize: 18, width: 28, textAlign: "center" }}>{c.icon}</span>{c.label}
                </div>
              )}
            </div>
          ))}
          <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(245,176,66,0.15)" }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: "rgba(240,248,255,0.4)", letterSpacing: 1 }}>🎖️ FinTech Certified · MongoDB Certified</p>
          </div>
        </div>
      </div>
    </section>
  );
}
