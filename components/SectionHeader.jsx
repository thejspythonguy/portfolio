export default function SectionHeader({ tag, title }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: "#f5b042", letterSpacing: 3.5, textTransform: "uppercase", fontWeight: 700, marginBottom: 10 }}>
        {tag}
      </p>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#0a1c30", position: "relative", display: "inline-block" }}>
        {title}
        <span style={{ position: "absolute", bottom: -10, left: 0, width: 56, height: 4, background: "#f5b042", borderRadius: 4 }} />
      </h2>
    </div>
  );
}
