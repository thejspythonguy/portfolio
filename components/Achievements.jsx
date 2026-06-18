import { useInView } from "./utils";
import { ACHIEVEMENTS } from "./data";
import SectionHeader from "./SectionHeader";

export default function Achievements() {
  const [ref, inView] = useInView();

  return (
    <section 
      id="achievements" 
      ref={ref} 
      className="py-16 md:py-24 border-b border-card-border scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader tag="🏆 Impact" title="Key Achievements" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, index) => (
            <div 
              key={item.label} 
              className={`glass-panel p-6 rounded-2xl border border-card-border shadow-sm flex flex-col items-start border-l-4 border-accent-purple transition-all duration-700 hover:scale-[1.02] ${
                inView 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 80}ms`
              }}
            >
              {/* Icon Box */}
              <div className="text-2xl mb-4 bg-accent-purple/10 w-12 h-12 rounded-xl flex items-center justify-center select-none text-accent-purple">
                {item.icon}
              </div>
              
              {/* Metric and Label */}
              <div className="flex flex-col mb-2">
                <span className="font-display text-3xl md:text-4xl font-black bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent leading-none">
                  {item.metric}
                </span>
                <span className="font-display text-[10px] tracking-wider uppercase font-black text-text-muted mt-1.5">
                  {item.label}
                </span>
              </div>
              
              {/* Description */}
              <p className="font-sans text-sm text-text-muted leading-relaxed mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
