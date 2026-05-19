interface SkillGroup {
  title: string;
  items: string[];
}

const groups: SkillGroup[] = [
  {
    title: "Design",
    items: ["Product Design", "Mobile UX", "Design Systems", "Prototyping", "Visual Design", "Interaction"],
  },
  {
    title: "Research",
    items: ["User Interviews", "Usability Testing", "Journey Mapping", "Heuristic Eval", "A/B Testing"],
  },
  {
    title: "Tools",
    items: ["Figma", "Framer", "Adobe XD", "Notion", "Miro", "Lovable"],
  },
];

const stats = [
  { value: "3+", label: "Years designing" },
  { value: "50+", label: "Sprints shipped" },
  { value: "3", label: "Apps live" },
  { value: "1k+", label: "Users reached" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 border-b-2 border-foreground">
      <div className="container mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
          ↓ Capabilities
        </p>
        <h2 className="font-serif-display text-5xl md:text-7xl text-foreground mb-12 md:mb-16 leading-[0.95]">
          What I <em className="italic text-primary">do.</em>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {groups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="font-serif-display text-2xl text-foreground border-b-2 border-foreground pb-3">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm font-medium px-3 py-1.5 border-2 border-foreground bg-background hover:bg-accent transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-foreground bg-background">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`p-6 md:p-8 text-center ${idx % 2 === 1 ? "border-l-2 border-foreground" : ""} ${idx >= 2 ? "border-t-2 md:border-t-0 md:border-l-2 border-foreground" : ""}`}
            >
              <div className="font-serif-display text-5xl md:text-6xl text-primary leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest font-semibold text-foreground/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
