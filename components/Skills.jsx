import { useInView } from "./utils";
import { SKILLS } from "./data";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" ref={ref} style={{ padding: "4rem 24px", borderBottom: "1px solid #e8eef6", scrollMarginTop: 68 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader tag="⚡ Technical Arsenal" title="Skills & Expertise" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 20 }}>
          {SKILLS.map((skill, index) => (
            <div key={skill.cat} style={{
              background: "#fff",
              borderRadius: 20,
              padding: "1.6rem 1.8rem",
              boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
              border: "1px solid #edf2f7",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(30px)",
              transition: `all 0.6s ease ${index * 0.1}s`,
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 32px rgba(0,0,0,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)"; }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#0a1c30", borderLeft: `4px solid ${skill.color}`, paddingLeft: 12, marginBottom: 16 }}>
                {skill.icon} {skill.cat}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {skill.items.map((item) => (
                  <span key={item} style={{ background: "#f4f7fc", borderRadius: 30, padding: "5px 13px", fontSize: 13, fontFamily: "'Outfit', sans-serif", fontWeight: 500, color: "#2d3e50" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
