import { useState } from "react";
import { useInView } from "./utils";
import { EXPERIENCE } from "./data";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView();

  return (
    <section 
      id="experience" 
      ref={ref} 
      className="py-16 md:py-24 border-b border-card-border bg-foreground/[0.01] dark:bg-white/[0.01] scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader tag="💼 Career Journey" title="Professional Experience" />
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Company Selector Tab Sidebar */}
          <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible w-full md:w-64 gap-2 pb-4 md:pb-0 scrollbar-none flex-shrink-0">
            {EXPERIENCE.map((item, index) => (
              <button
                key={item.company}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 md:w-full text-left px-5 py-4 rounded-xl border-l-4 transition-all duration-200 ${
                  activeIndex === index
                    ? "bg-accent-purple/10 text-accent-purple border-accent-purple font-bold shadow-sm"
                    : "border-card-border bg-card-bg/25 text-text-muted hover:text-foreground hover:bg-foreground/5 dark:hover:bg-white/5 font-semibold"
                }`}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(16px)",
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <span className="font-display text-[10px] tracking-wider uppercase font-black block mb-1">
                  {item.period.split("–")[0].trim()}
                </span>
                <span className="font-display text-sm block truncate">{item.company}</span>
                <span className="font-sans text-[11px] text-text-muted font-medium block mt-0.5">
                  {item.location}
                </span>
              </button>
            ))}
          </div>

          {/* Experience Detail Panel */}
          <div className="flex-1 w-full">
            {EXPERIENCE.map((item, index) => index !== activeIndex ? null : (
              <div 
                key={item.company} 
                className="glass-panel p-6 md:p-8 rounded-2xl border border-card-border shadow-md"
              >
                {/* Header details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-card-border pb-5 mb-5">
                  <div>
                    <h3 className="font-display text-2xl font-black text-foreground mb-1.5">{item.role}</h3>
                    <p className="font-display text-sm font-bold text-accent-purple">
                      {item.company} <span className="text-text-muted font-normal">· {item.location}</span>
                    </p>
                  </div>
                  <span className="inline-block px-3.5 py-1.5 rounded-full bg-accent-pink/10 border border-accent-pink/20 text-accent-pink text-xs font-bold font-display self-start md:self-center shadow-sm">
                    {item.period}
                  </span>
                </div>

                {/* Subtitle / Focus area */}
                {item.sub && (
                  <p className="font-sans italic text-text-muted text-sm border-l-2 border-accent-purple pl-4 my-5 leading-relaxed">
                    {item.sub}
                  </p>
                )}

                {/* Accomplishment Points */}
                <ul className="space-y-4">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex gap-3.5 items-start">
                      <span className="text-accent-purple text-base leading-none select-none mt-1">▸</span>
                      <p className="font-sans text-sm md:text-[15px] leading-relaxed text-text-muted">
                        <strong className="font-display font-extrabold text-foreground text-sm block sm:inline mr-1">
                          {point.bold}
                        </strong>{" "}
                        {point.rest}
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
