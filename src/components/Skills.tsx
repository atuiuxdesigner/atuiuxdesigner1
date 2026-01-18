import { useEffect, useState, useRef } from "react";

interface Skill {
  name: string;
  level: "Expert" | "Advanced" | "Proficient";
  evidence: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "UX Design",
    skills: [
      { name: "User Research", level: "Expert", evidence: "Led discovery for 3 product launches" },
      { name: "Wireframing", level: "Advanced", evidence: "Delivered 50+ sprint deliverables" },
      { name: "Prototyping", level: "Expert", evidence: "Created hi-fi prototypes in Figma" },
      { name: "Usability Testing", level: "Advanced", evidence: "Conducted 20+ user testing sessions" },
    ],
  },
  {
    title: "UI Design",
    skills: [
      { name: "Visual Design", level: "Expert", evidence: "Designed enterprise dashboards" },
      { name: "Design Systems", level: "Advanced", evidence: "Built component libraries" },
      { name: "Typography", level: "Proficient", evidence: "Applied type hierarchy best practices" },
      { name: "Color Theory", level: "Advanced", evidence: "Created accessible color palettes" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Figma", level: "Expert", evidence: "Primary design tool" },
      { name: "Adobe XD", level: "Proficient", evidence: "Cross-platform collaboration" },
      { name: "Sketch", level: "Proficient", evidence: "Legacy project support" },
      { name: "Framer", level: "Proficient", evidence: "Interactive prototypes" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Communication", level: "Expert", evidence: "Stakeholder presentations" },
      { name: "Problem Solving", level: "Expert", evidence: "Complex design challenges" },
      { name: "Collaboration", level: "Advanced", evidence: "Cross-functional teams" },
      { name: "Adaptability", level: "Advanced", evidence: "Agile environments" },
    ],
  },
];

const stats = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Sprints Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 1000, suffix: "+", label: "Users Impacted" },
];

const SkillItem = ({ skill, isVisible, index }: { skill: Skill; isVisible: boolean; index: number }) => {
  const levelStyles = {
    Expert: "bg-primary text-primary-foreground",
    Advanced: "bg-primary/70 text-primary-foreground",
    Proficient: "bg-primary/40 text-foreground",
  };

  return (
    <div 
      className={`py-3 border-b border-border/50 last:border-0 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-between gap-3 mb-1">
        <span className="text-foreground font-medium">{skill.name}</span>
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${levelStyles[skill.level]}`}>
          {skill.level}
        </span>
      </div>
      <p className="text-muted-foreground text-sm">{skill.evidence}</p>
    </div>
  );
};

const StatCounter = ({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCount(stat.value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, stat.value]);

  return (
    <div className="bg-card border border-border rounded-xl p-6 text-center card-hover">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2 glow-text">
        {count}
        {stat.suffix}
      </div>
      <div className="text-muted-foreground text-sm">{stat.label}</div>
    </div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="text-primary glow-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A combination of technical proficiency and soft skills that enable me
            to create impactful digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 card-hover"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {category.title}
              </h3>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    skill={skill}
                    isVisible={isVisible}
                    index={skillIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatCounter key={index} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
