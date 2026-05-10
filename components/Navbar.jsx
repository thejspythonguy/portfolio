import { useEffect, useState } from "react";
import { NAV } from "./data";
import { scrollTo } from "./utils";

export default function Navbar({ page, setPage }) {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (page !== "home") return;

      const off = 90;
      for (let i = NAV.length - 1; i >= 0; i -= 1) {
        const el = document.getElementById(NAV[i].id);
        if (el && el.getBoundingClientRect().top <= off) {
          setActive(NAV[i].id);
          return;
        }
      }
      setActive("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  const handleNav = (item) => {
    if (item.id === "blogs") {
      setPage("blogs");
      setActive("blogs");
      window.scrollTo({ top: 0 });
      return;
    }

    if (page !== "home") {
      setPage("home");
      setTimeout(() => scrollTo(item.id), 80);
    } else {
      scrollTo(item.id);
    }

    setActive(item.id);
  };

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: scrolled ? "rgba(10,28,48,0.97)" : "#0a1c30",
      backdropFilter: "blur(12px)",
      boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.18)" : "none",
      borderBottom: "1px solid rgba(245,176,66,0.18)",
      transition: "all 0.3s",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "0.2rem 0.1rem", minHeight: 58 }}>
        {NAV.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleNav(item)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "10px 14px",
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: 0.3,
              color: active === item.id ? "#f5b042" : "rgba(240,248,255,0.75)",
              borderBottom: active === item.id ? "2px solid #f5b042" : "2px solid transparent",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { if (active !== item.id) e.currentTarget.style.color = "#f5b042"; }}
            onMouseLeave={(e) => { if (active !== item.id) e.currentTarget.style.color = "rgba(240,248,255,0.75)"; }}
          >
            <span style={{ fontSize: 14 }}>{item.icon}</span> {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
