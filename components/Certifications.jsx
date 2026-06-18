import { useInView } from "./utils";
import { CERTS, COURSE_CERTS } from "./data";
import SectionHeader from "./SectionHeader";

export default function Certifications() {
  const [ref, inView] = useInView();

  return (
    <section 
      id="certifications" 
      ref={ref} 
      className="py-16 md:py-24 border-b border-card-border bg-foreground/[0.01] dark:bg-white/[0.01] scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader tag="🎖️ Credentials" title="Certifications" />
        
        {/* Vendor Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {CERTS.map((cert, index) => (
            <div 
              key={cert.name} 
              className={`glass-panel p-6 rounded-2xl border border-card-border shadow-sm relative overflow-hidden flex flex-col transition-all duration-700 hover:scale-[1.01] ${
                inView 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 120}ms`
              }}
            >
              {/* Highlight Border Overlay */}
              <div 
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: `linear-gradient(90deg, ${cert.accentColor}, transparent)` }}
              />
              
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-12 h-12 rounded-xl border flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ 
                    backgroundColor: `${cert.accentColor}12`, 
                    borderColor: `${cert.accentColor}25` 
                  }}
                >
                  {cert.icon}
                </div>
                <div>
                  <p 
                    className="font-display text-[10px] tracking-wider uppercase font-black"
                    style={{ color: cert.accentColor }}
                  >
                    {cert.issuer}
                  </p>
                  <span className="inline-block mt-0.5 px-2 py-0.5 rounded-full bg-foreground/5 dark:bg-white/5 border border-card-border text-text-muted text-[10px] font-bold font-display">
                    {cert.level}
                  </span>
                </div>
              </div>
              
              {/* Certification Name */}
              <h3 className="font-display text-lg font-bold text-foreground mb-4 leading-snug">
                {cert.name}
              </h3>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {cert.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="font-sans text-[10px] md:text-[11px] font-semibold border px-2.5 py-1 rounded-lg"
                    style={{ 
                      color: cert.accentColor, 
                      backgroundColor: `${cert.accentColor}08`, 
                      borderColor: `${cert.accentColor}18` 
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Course Certificates Sub-Section */}
        <div>
          <p className="font-display text-xs tracking-widest uppercase font-black text-text-muted mb-6">
            Course certificates from public assets
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSE_CERTS.map((cert) => (
              <a 
                key={cert.name} 
                href={cert.image} 
                target="_blank" 
                rel="noreferrer" 
                className="group block"
              >
                <div className="glass-panel rounded-2xl overflow-hidden border border-card-border shadow-sm flex flex-col h-full bg-card-bg/25">
                  <div className="overflow-hidden border-b border-card-border h-44">
                    <img 
                      src={cert.image} 
                      alt={cert.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="font-display text-[9px] tracking-wider uppercase font-black text-text-muted mb-1">
                      {cert.issuer}
                    </p>
                    <h3 className="font-display text-sm font-bold text-foreground mb-3 leading-snug line-clamp-2">
                      {cert.name}
                    </h3>
                    <div className="font-sans text-xs text-text-muted mt-auto">
                      <span className="block mb-0.5">📅 {cert.date}</span>
                      <span className="block font-medium">⏱️ {cert.hours}</span>
                    </div>
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
