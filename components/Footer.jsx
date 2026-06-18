const SOCIAL_LINKS = [
  { icon: "🔗", name: "LinkedIn", href: "https://www.linkedin.com/in/thejspythonguy/" },
  { icon: "💻", name: "GitHub", href: "https://github.com/thejspythonguy" },
  { icon: "✍️", name: "Medium", href: "https://medium.com/@thejspythonguy" },
  { icon: "👤", name: "Gravatar", href: "https://gravatar.com/thejspythonguy" },
  { icon: "🌲", name: "Linktree", href: "https://linktr.ee/thejspythonguy" },
  { icon: "🐦", name: "Twitter", href: "https://twitter.com/thejspythonguy" },
  { icon: "📧", name: "Email", href: "mailto:thejspythonguy@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-card-border bg-foreground/[0.02] dark:bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="space-y-4">
          <div>
            <p className="font-display text-xl font-black bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent mb-1">
              Shailender Singh
            </p>
            <p className="font-sans text-xs text-text-muted">
              Senior Full Stack Engineer · Jacksonville, FL, USA
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-card-border hover:border-accent-purple/30 bg-card-bg/25 hover:bg-accent-purple/5 text-xs text-text-muted hover:text-accent-purple transition-all duration-200 hover:-translate-y-0.5"
              >
                <span className="text-xs leading-none">{link.icon}</span>
                <span className="font-semibold font-sans">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-3 text-xs text-text-muted font-sans self-stretch md:self-auto justify-between md:justify-center">
          <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
            <span className="font-semibold text-text-muted">FinTech · AI/ML · Risk Systems</span>
            <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-card-border" />
            <span className="text-text-muted">Designed with a modern digital resume aesthetic</span>
          </div>
          <p className="font-sans text-[11px] text-text-muted mt-2 md:mt-0 md:text-right">
            © 2026 Shailender Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

