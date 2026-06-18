import { useEffect, useState, useRef } from "react";
import { NAV } from "./data";
import { scrollTo } from "./utils";

export default function Navbar({ page, setPage, theme, toggleTheme }) {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (page !== "home") return;

      const offset = 100;
      for (let i = NAV.length - 1; i >= 0; i -= 1) {
        const el = document.getElementById(NAV[i].id);
        if (el && el.getBoundingClientRect().top <= offset) {
          setActive(NAV[i].id);
          return;
        }
      }
      setActive("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setThemeDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNav = (item) => {
    setMenuOpen(false);
    if (item.id === "blogs") {
      setPage("blogs");
      setActive("blogs");
      window.scrollTo({ top: 0 });
      return;
    }

    if (page !== "home") {
      setPage("home");
      setTimeout(() => scrollTo(item.id), 100);
    } else {
      scrollTo(item.id);
    }
    setActive(item.id);
  };

  const getThemeIcon = () => {
    if (theme === "dark") return "🌙";
    if (theme === "light") return "☀️";
    return "💻";
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md border-b ${
      scrolled 
        ? "bg-nav-bg/95 border-accent-purple/15 shadow-sm py-3" 
        : "bg-nav-bg/75 border-card-border py-4"
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div className="flex flex-col cursor-pointer" onClick={() => handleNav({ id: "home" })}>
          <span className="font-display text-xl font-black tracking-tight bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">
            theJsPythonGuy
          </span>
          <span className="font-sans text-[10px] text-text-muted tracking-widest uppercase font-bold mt-0.5">
            FinTech · AI/ML · Full Stack
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNav(item)}
              className={`px-3 py-1.5 rounded-full font-display text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                active === item.id 
                  ? "bg-accent-purple/10 text-accent-purple" 
                  : "text-foreground/80 hover:text-accent-purple hover:bg-card-border"
              }`}
            >
              <span className="text-sm">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        {/* Action Controls: Theme Switcher & Mobile Toggle */}
        <div className="flex items-center gap-3">
          
          {/* Theme Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="p-2.5 rounded-full glass-panel hover:bg-accent-purple/10 flex items-center justify-center text-sm font-semibold shadow-none border border-card-border"
              aria-label="Toggle theme"
            >
              <span className="text-base leading-none">{getThemeIcon()}</span>
            </button>

            {themeDropdownOpen && (
              <div className="absolute right-0 mt-2.5 w-36 rounded-2xl glass-panel shadow-lg bg-card-bg border border-card-border p-1.5 flex flex-col gap-1 z-50">
                {[
                  { id: "light", label: "Light", icon: "☀️" },
                  { id: "dark", label: "Dark", icon: "🌙" },
                  { id: "system", label: "System", icon: "💻" },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      toggleTheme(t.id);
                      setThemeDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold font-display flex items-center gap-2 transition-all duration-150 ${
                      theme === t.id
                        ? "bg-accent-purple/10 text-accent-purple"
                        : "hover:bg-accent-purple/5 text-foreground/80"
                    }`}
                  >
                    <span>{t.icon}</span>
                    {t.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2.5 rounded-full md:hidden hover:bg-accent-purple/10 text-foreground flex items-center justify-center border border-card-border"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-card-border mt-3 bg-nav-bg/95 backdrop-blur-md px-6 py-4 flex flex-col gap-2 shadow-inner">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNav(item)}
              className={`w-full text-left px-4 py-2.5 rounded-xl font-display text-sm font-semibold flex items-center gap-2.5 transition-all ${
                active === item.id 
                  ? "bg-accent-purple/10 text-accent-purple" 
                  : "text-foreground/80 hover:text-accent-purple hover:bg-card-border"
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
