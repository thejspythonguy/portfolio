import { useInView } from "./utils";
import { INTERESTS } from "./data";
import SectionHeader from "./SectionHeader";

export default function Background() {
  const [ref, inView] = useInView();

  return (
    <section 
      id="background" 
      ref={ref} 
      className="py-16 md:py-24 border-b border-card-border scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader tag="🎓 Background" title="Education & Interests" />
        
        <div 
          className={`grid grid-cols-1 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Education Card */}
          <div className="glass-panel p-6 md:p-8 rounded-2xl border border-card-border shadow-sm flex flex-col items-start">
            <h3 className="font-display font-bold text-lg text-accent-purple mb-5 flex items-center gap-2">
              <span className="text-xl">🏫</span> Education
            </h3>
            <p className="font-display text-lg font-bold text-foreground mb-1 leading-snug">
              Bachelor of Computer Science & Technology
            </p>
            <p className="font-sans text-sm text-text-muted mb-5">
              Himachal Pradesh University, Shimla, India
            </p>
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-xs font-bold font-display shadow-sm">
              Graduated: July 2011
            </span>
          </div>

          {/* Interests Card */}
          <div className="glass-panel p-6 md:p-8 rounded-2xl border border-card-border shadow-sm flex flex-col items-start">
            <h3 className="font-display font-bold text-lg text-accent-purple mb-5 flex items-center gap-2">
              <span className="text-xl">💡</span> Professional Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((interest) => (
                <span 
                  key={interest} 
                  className="bg-foreground/5 dark:bg-white/5 border border-card-border hover:border-accent-purple/35 text-foreground/80 hover:text-accent-purple font-sans font-medium px-3 py-1.5 rounded-xl text-xs transition-all duration-200"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* At a Glance Statistics Card */}
          <div className="glass-panel p-6 md:p-8 rounded-2xl border border-card-border shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-display font-bold text-lg text-accent-purple mb-6">
                📊 At a Glance
              </h3>
              <div className="space-y-4">
                {[
                  ["12+", "Years of experience"],
                  ["99%", "Automated test coverage"],
                  ["$40K", "Monthly cloud savings achieved"],
                  ["3", "Continents worked across"],
                ].map(([value, description], i) => (
                  <div 
                    key={value} 
                    className="flex items-center justify-between py-2 border-b border-card-border/60 last:border-0"
                  >
                    <span className="font-display text-2xl font-black bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent leading-none">
                      {value}
                    </span>
                    <span className="font-sans text-xs md:text-sm text-text-muted text-right max-w-[170px] leading-snug">
                      {description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
