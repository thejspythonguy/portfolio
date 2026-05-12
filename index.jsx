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

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;800;900&family=Outfit:wght@300;400;500;600;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <div style={{ background: "#f4f8fc", minHeight: "100vh", fontFamily: "'Outfit', sans-serif" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        button:focus { outline: none; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #f4f8fc; }
        ::-webkit-scrollbar-thumb { background: #f5b042; border-radius: 4px; }
      `}</style>
      <Navbar page={page} setPage={setPage} />
      {page === "blogs" ? (
        <BlogPage setPage={setPage} />
      ) : (
        <>
          <Hero setPage={setPage} />
          <Skills />
          <Experience />
          <Achievements />
          <Certifications />
          <Background />
        </>
      )}
      <Footer />
      <meta name="p:domain_verify" content="0ec22921c3681b364aae1b71a43004fe"/>
    </div>
  );
}
