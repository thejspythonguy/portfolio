import { useInView } from "./utils";
import { INTERESTS } from "./data";
import SectionHeader from "./SectionHeader";

export default function Background() {
  const [ref, inView] = useInView();

  return (
    <section id="background" ref={ref} style={{ padding: "4rem 24px", borderBottom: "1px solid #e8eef6", scrollMarginTop: 68 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader tag="🎓 Background" title="Education & Interests" />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20, opacity: inView ? 1 : 0, transition: "opacity 0.8s ease" }}>
          <div style={{ flex: "1 1 300px", background: "#fff", borderRadius: 20, padding: "2rem", boxShadow: "0 4px 18px rgba(0,0,0,0.04)", border: "1px solid #edf2f7" }}>
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#0a1c30", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>🏫 Education</h3>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 700, color: "#0a1c30", marginBottom: 6 }}>Bachelor of Computer Science & Technology</p>
            <p style={{ fontFamily: "'Lora', serif", fontSize: 15, color: "#64748b", marginBottom: 8 }}>Himachal Pradesh University, Shimla, India</p>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 700, color: "#f5b042", letterSpacing: 1, textTransform: "uppercase" }}>July 2011</span>
          </div>
          <div style={{ flex: "1 1 300px", background: "#fff", borderRadius: 20, padding: "2rem", boxShadow: "0 4px 18px rgba(0,0,0,0.04)", border: "1px solid #edf2f7" }}>
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#0a1c30", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>💡 Professional Interests</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {INTERESTS.map((interest) => (
                <span key={interest} style={{ background: "#f4f7fc", borderRadius: 30, padding: "6px 16px", fontSize: 13, fontFamily: "'Outfit', sans-serif", fontWeight: 500, color: "#334155" }}>
                  {interest}
                </span>
              ))}
            </div>
          </div>
          <div style={{ flex: "1 1 300px", background: "linear-gradient(135deg, #0a1c30, #0f3352)", borderRadius: 20, padding: "2rem", color: "#fff" }}>
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#f5b042", marginBottom: 16 }}>📊 At a Glance</h3>
            {[
              ["12+", "Years of experience"],
              ["99%", "Automated test coverage"],
              ["$40K", "Monthly cloud savings achieved"],
              ["3", "Continents worked across"],
            ].map(([value, description]) => (
              <div key={value} style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 800, color: "#f5b042" }}>{value}</span>
                <span style={{ fontFamily: "'Lora', serif", fontSize: 14, color: "rgba(240,248,255,0.7)", textAlign: "right", maxWidth: 180 }}>{description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
