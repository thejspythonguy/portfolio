import { useInView } from "./utils";
import { SKILLS } from "./data";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section 
      id="skills" 
      ref={ref} 
      className="py-16 md:py-24 border-b border-card-border scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader tag="⚡ Technical Arsenal" title="Skills & Expertise" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <div 
              key={skill.cat} 
              className={`glass-panel p-6 rounded-2xl border border-card-border shadow-sm flex flex-col transition-all duration-700 ${
                inView 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                borderLeft: `4px solid ${skill.color}`
              }}
            >
              <h3 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <span className="text-xl leading-none">{skill.icon}</span>
                <span>{skill.cat}</span>
              </h3>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {skill.items.map((item) => (
                  <span 
                    key={item} 
                    className="bg-foreground/5 dark:bg-white/5 border border-card-border hover:border-accent-purple/35 text-foreground/80 hover:text-accent-purple font-sans font-medium px-3 py-1.5 rounded-xl text-xs transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
