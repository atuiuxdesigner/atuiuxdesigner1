import { useEffect, useState, useRef } from "react";

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "UX Design",
    skills: [
      { name: "User Research" },
      { name: "Wireframing" },
      { name: "Prototyping" },
      { name: "Usability Testing" },
    ],
  },
  {
    title: "UI Design",
    skills: [
      { name: "Visual Design" },
      { name: "Design Systems" },
      { name: "Typography" },
      { name: "Color Theory" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Figma" },
      { name: "Adobe XD" },
      { name: "Sketch" },
      { name: "Framer" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Communication" },
      { name: "Problem Solving" },
      { name: "Collaboration" },
      { name: "Adaptability" },
    ],
  },
];

const stats = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Sprints Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 1000, suffix: "+", label: "Users Impacted" },
];

const SkillChip = ({ skill }: { skill: Skill }) => {
  return (
    <span className="inline-flex items-center px-4 py-2 bg-secondary hover:bg-primary/20 border border-border hover:border-primary/50 rounded-full text-sm text-foreground transition-all duration-300 cursor-default">
      {skill.name}
    </span>
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
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillChip key={skillIndex} skill={skill} />
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
