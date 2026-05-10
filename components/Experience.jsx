import { useState } from "react";
import { useInView } from "./utils";
import { EXPERIENCE } from "./data";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView();

  return (
    <section id="experience" ref={ref} style={{ padding: "4rem 24px", background: "#f8fafd", borderBottom: "1px solid #e8eef6", scrollMarginTop: 68 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader tag="💼 Career Journey" title="Professional Experience" />
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", minWidth: 220, gap: 6 }}>
            {EXPERIENCE.map((item, index) => (
              <button
                key={item.company}
                type="button"
                onClick={() => setActiveIndex(index)}
                style={{
                  background: activeIndex === index ? "#fff" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  padding: "16px 18px",
                  borderLeft: `4px solid ${activeIndex === index ? item.color : "#e2e8f0"}`,
                  borderRadius: "0 12px 12px 0",
                  boxShadow: activeIndex === index ? "0 4px 16px rgba(0,0,0,0.06)" : "none",
                  transition: "all 0.25s",
                  opacity: inView ? 1 : 0,
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: activeIndex === index ? item.color : "#94a3b8", letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 700, marginBottom: 5 }}>
                  {item.period.split("–")[0].trim()}
                </p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 700, color: activeIndex === index ? "#0a1c30" : "#64748b" }}>
                  {item.company}
                </p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "#94a3b8", marginTop: 2 }}>
                  {item.location}
                </p>
              </button>
            ))}
          </div>

          <div style={{ flex: 1, minWidth: 280 }}>
            {EXPERIENCE.map((item, index) => index !== activeIndex ? null : (
              <div key={item.company} style={{ background: "#fff", borderRadius: 20, padding: "2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", border: "1px solid #edf2f7" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 6 }}>
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.55rem", fontWeight: 800, color: "#0a1c30", marginBottom: 4 }}>{item.role}</h3>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 14, color: item.color }}>{item.company} · {item.location}</p>
                  </div>
                  <span style={{ background: "#eef2ff", color: "#2c5a6e", fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 600, padding: "5px 14px", borderRadius: 30, height: "fit-content" }}>
                    {item.period}
                  </span>
                </div>
                {item.sub && <p style={{ fontFamily: "'Lora', serif", fontSize: 14, color: "#64748b", fontStyle: "italic", margin: "12px 0 20px", paddingLeft: 12, borderLeft: `3px solid ${item.color}` }}>{item.sub}</p>}
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex} style={{ display: "flex", gap: 12 }}>
                      <span style={{ color: item.color, fontSize: 16, flexShrink: 0, marginTop: 2 }}>▸</span>
                      <p style={{ fontFamily: "'Lora', serif", fontSize: 15, lineHeight: 1.7, color: "#334155" }}>
                        <strong style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: "#0a1c30" }}>{point.bold}</strong> {point.rest}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
