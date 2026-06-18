"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Background from "./components/Background";
import BlogPage from "./components/BlogPage";
import Footer from "./components/Footer";

export default function App() {
  const [page, setPage] = useState("home");
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    // Fonts loading
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap";
    document.head.appendChild(link);

    // Theme loading
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
    
    let isDark = false;
    if (savedTheme === "system") {
      isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    } else {
      isDark = savedTheme === "dark";
    }

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (newTheme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground bg-gradient-mesh font-sans transition-colors duration-300">
      <style>{`
        ::-webkit-scrollbar-thumb {
          background: rgba(124, 58, 237, 0.4);
        }
        .dark ::-webkit-scrollbar-thumb {
          background: rgba(167, 139, 250, 0.4);
        }
      `}</style>
      <Navbar page={page} setPage={setPage} theme={theme} toggleTheme={toggleTheme} />
      {page === "blogs" ? (
        <BlogPage setPage={setPage} />
      ) : (
        <main className="pb-12 space-y-6">
          <Hero setPage={setPage} />
          <Skills />
          <Experience />
          <Achievements />
          <Certifications />
          <Background />
        </main>
      )}
      <Footer />
      <meta name="p:domain_verify" content="0ec22921c3681b364aae1b71a43004fe" />
    </div>
  );
}
