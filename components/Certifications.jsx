import { useInView } from "./utils";
import { CERTS, COURSE_CERTS } from "./data";
import SectionHeader from "./SectionHeader";

export default function Certifications() {
  const [ref, inView] = useInView();

  return (
    <section id="certifications" ref={ref} style={{ padding: "4rem 24px", background: "#f8fafd", borderBottom: "1px solid #e8eef6", scrollMarginTop: 68 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader tag="🎖️ Credentials" title="Certifications" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 22 }}>
          {CERTS.map((cert, index) => (
            <div key={cert.name} style={{
              background: "#fff",
              borderRadius: 22,
              padding: "1.8rem 2rem",
              boxShadow: "0 4px 18px rgba(0,0,0,0.04)",
              border: "1px solid #edf2f7",
              position: "relative",
              overflow: "hidden",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(30px)",
              transition: `all 0.6s ease ${index * 0.12}s`,
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px ${cert.accentColor}30`; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 18px rgba(0,0,0,0.04)"; }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${cert.accentColor}, transparent)`, borderRadius: 4 }} />
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: `${cert.accentColor}15`, border: `2px solid ${cert.accentColor}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>
                  {cert.icon}
                </div>
                <div>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 700, color: cert.accentColor, letterSpacing: 2, textTransform: "uppercase", marginBottom: 3 }}>{cert.issuer}</p>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, background: "#eef2f6", color: "#64748b", padding: "2px 10px", borderRadius: 20, letterSpacing: 1 }}>{cert.level}</span>
                </div>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 800, color: "#0a1c30", marginBottom: 14, lineHeight: 1.3 }}>{cert.name}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {cert.tags.map((tag) => (
                  <span key={tag} style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 600, color: cert.accentColor, background: `${cert.accentColor}10`, border: `1px solid ${cert.accentColor}25`, padding: "3px 10px", borderRadius: 20 }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48 }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: "#64748b", textTransform: "uppercase", letterSpacing: 2, fontWeight: 700, marginBottom: 18 }}>Course certificates from public assets</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {COURSE_CERTS.map((cert) => (
              <a key={cert.name} href={cert.image} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ background: "#fff", borderRadius: 24, overflow: "hidden", boxShadow: "0 12px 30px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb", minHeight: 360, display: "flex", flexDirection: "column" }}>
                  <img src={cert.image} alt={cert.name} style={{ width: "100%", height: 220, objectFit: "cover" }} />
                  <div style={{ padding: "1.4rem" }}>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: "#94a3b8", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}>{cert.issuer}</p>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 800, color: "#0a1c30", marginBottom: 10, lineHeight: 1.3 }}>{cert.name}</h3>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: "#475569", marginBottom: 8 }}>{cert.date}</p>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "#64748b" }}>{cert.hours}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
