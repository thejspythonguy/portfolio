export default function SectionHeader({ tag, title }) {
  return (
    <div className="mb-10 max-w-3xl text-left">
      <span className="font-display text-xs tracking-widest uppercase font-black text-accent-purple mb-2.5 block">
        {tag}
      </span>
      <div className="flex items-center gap-5 flex-wrap">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-foreground leading-none">
          {title}
        </h2>
        <span className="flex-1 min-w-[80px] h-0.5 bg-gradient-to-r from-accent-purple/60 to-accent-pink/5 rounded-full" />
      </div>
    </div>
  );
}
