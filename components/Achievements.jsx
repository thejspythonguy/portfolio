import { useInView } from "./utils";
import { ACHIEVEMENTS } from "./data";
import SectionHeader from "./SectionHeader";

export default function Achievements() {
  const [ref, inView] = useInView();

  return (
    <section id="achievements" ref={ref} style={{ padding: "4rem 24px", borderBottom: "1px solid #e8eef6", scrollMarginTop: 68 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader tag="🏆 Impact" title="Key Achievements" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
          {ACHIEVEMENTS.map((item, index) => (
            <div key={item.label} style={{
              background: "#fff",
              borderRadius: 20,
              padding: "1.6rem",
              borderLeft: "5px solid #f5b042",
              boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(30px)",
              transition: `all 0.6s ease ${index * 0.08}s`,
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 32px rgba(0,0,0,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.03)"; }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>{item.icon}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.4rem", fontWeight: 800, color: "#f5b042", lineHeight: 1 }}>{item.metric}</span>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 700, color: "#0a1c30", textTransform: "uppercase", letterSpacing: 1 }}>{item.label}</span>
              </div>
              <p style={{ fontFamily: "'Lora', serif", fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
