import { useEffect, useState, useRef } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "UX Design",
    skills: [
      { name: "User Research", level: 95 },
      { name: "Wireframing", level: 90 },
      { name: "Prototyping", level: 92 },
      { name: "Usability Testing", level: 88 },
    ],
  },
  {
    title: "UI Design",
    skills: [
      { name: "Visual Design", level: 94 },
      { name: "Design Systems", level: 90 },
      { name: "Typography", level: 88 },
      { name: "Color Theory", level: 92 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Figma", level: 96 },
      { name: "Adobe XD", level: 85 },
      { name: "Sketch", level: 80 },
      { name: "Framer", level: 75 },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Communication", level: 92 },
      { name: "Problem Solving", level: 94 },
      { name: "Collaboration", level: 90 },
      { name: "Adaptability", level: 88 },
    ],
  },
];

const stats = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 1, suffix: "M+", label: "Users Impacted" },
];

const SkillBar = ({ skill, isVisible }: { skill: Skill; isVisible: boolean }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setWidth(skill.level), 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground">{skill.name}</span>
        <span className="text-primary">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out glow-cyan-sm"
          style={{ width: `${width}%` }}
        />
      </div>
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
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    skill={skill}
                    isVisible={isVisible}
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
