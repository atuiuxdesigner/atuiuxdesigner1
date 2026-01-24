import React, { useEffect, useState, useRef } from "react";

// Icon Components
const UXDesignIcon = () => (
  <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
    <rect width="40" height="40" rx="12" fill="currentColor" fillOpacity="0.1"/>
    <path d="M22.5 21.6667C22.6667 20.8334 23.0833 20.2501 23.75 19.5834C24.5833 18.8334 25 17.7501 25 16.6667C25 15.3407 24.4732 14.0689 23.5355 13.1312C22.5979 12.1935 21.3261 11.6667 20 11.6667C18.6739 11.6667 17.4021 12.1935 16.4645 13.1312C15.5268 14.0689 15 15.3407 15 16.6667C15 17.5001 15.1667 18.5001 16.25 19.5834C16.8333 20.1667 17.3333 20.8334 17.5 21.6667" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5 25H22.5" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.3333 28.3333H21.6667" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const UIDesignIcon = () => (
  <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
    <rect width="40" height="40" rx="12" fill="currentColor" fillOpacity="0.1"/>
    <path d="M21.25 15.8333C21.4801 15.8333 21.6667 15.6468 21.6667 15.4167C21.6667 15.1865 21.4801 15 21.25 15C21.0199 15 20.8333 15.1865 20.8333 15.4167C20.8333 15.6468 21.0199 15.8333 21.25 15.8333Z" fill="currentColor" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24.5833 19.1666C24.8135 19.1666 25 18.98 25 18.7499C25 18.5198 24.8135 18.3333 24.5833 18.3333C24.3532 18.3333 24.1667 18.5198 24.1667 18.7499C24.1667 18.98 24.3532 19.1666 24.5833 19.1666Z" fill="currentColor" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.0833 16.6666C17.3135 16.6666 17.5 16.48 17.5 16.2499C17.5 16.0198 17.3135 15.8333 17.0833 15.8333C16.8532 15.8333 16.6667 16.0198 16.6667 16.2499C16.6667 16.48 16.8532 16.6666 17.0833 16.6666Z" fill="currentColor" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.4167 20.8333C15.6468 20.8333 15.8333 20.6468 15.8333 20.4167C15.8333 20.1865 15.6468 20 15.4167 20C15.1865 20 15 20.1865 15 20.4167C15 20.6468 15.1865 20.8333 15.4167 20.8333Z" fill="currentColor" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 11.6667C15.4167 11.6667 11.6667 15.4167 11.6667 20.0001C11.6667 24.5834 15.4167 28.3334 20 28.3334C20.7717 28.3334 21.3733 27.7117 21.3733 26.9267C21.3733 26.5626 21.2233 26.2309 21.0092 25.9892C20.7675 25.7484 20.6442 25.4459 20.6442 25.0517C20.641 24.8683 20.6748 24.6862 20.7435 24.5161C20.8123 24.346 20.9145 24.1915 21.0443 24.0618C21.174 23.9321 21.3285 23.8299 21.4985 23.7611C21.6686 23.6924 21.8508 23.6586 22.0342 23.6617H23.6975C26.24 23.6617 28.3267 21.5759 28.3267 19.0334C28.3042 15.0101 24.5508 11.6667 20 11.6667Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ToolsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
    <rect width="40" height="40" rx="12" fill="currentColor" fillOpacity="0.1"/>
    <path d="M22.25 15.2499C22.0973 15.4057 22.0118 15.6151 22.0118 15.8333C22.0118 16.0514 22.0973 16.2608 22.25 16.4166L23.5833 17.7499C23.7391 17.9026 23.9485 17.9882 24.1667 17.9882C24.3848 17.9882 24.5942 17.9026 24.75 17.7499L27.8917 14.6083C28.3107 15.5343 28.4376 16.566 28.2554 17.5659C28.0732 18.5658 27.5906 19.4865 26.8719 20.2052C26.1532 20.9239 25.2325 21.4065 24.2326 21.5887C23.2327 21.7708 22.201 21.644 21.275 21.2249L15.5167 26.9833C15.1851 27.3148 14.7355 27.501 14.2667 27.501C13.7978 27.501 13.3482 27.3148 13.0167 26.9833C12.6851 26.6518 12.4989 26.2021 12.4989 25.7333C12.4989 25.2644 12.6851 24.8148 13.0167 24.4833L18.775 18.7249C18.356 17.799 18.2291 16.7672 18.4113 15.7673C18.5935 14.7674 19.0761 13.8467 19.7948 13.128C20.5135 12.4093 21.4341 11.9267 22.434 11.7446C23.434 11.5624 24.4657 11.6892 25.3917 12.1083L22.2583 15.2416L22.25 15.2499Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SoftSkillsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
    <rect width="40" height="40" rx="12" fill="currentColor" fillOpacity="0.1"/>
    <path d="M23.3333 27.5V25.8333C23.3333 24.9493 22.9821 24.1014 22.357 23.4763C21.7319 22.8512 20.8841 22.5 20 22.5H15C14.116 22.5 13.2681 22.8512 12.643 23.4763C12.0179 24.1014 11.6667 24.9493 11.6667 25.8333V27.5" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5 19.1667C19.341 19.1667 20.8333 17.6743 20.8333 15.8333C20.8333 13.9924 19.341 12.5 17.5 12.5C15.6591 12.5 14.1667 13.9924 14.1667 15.8333C14.1667 17.6743 15.6591 19.1667 17.5 19.1667Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28.3333 27.5001V25.8334C28.3328 25.0948 28.087 24.3774 27.6345 23.7937C27.182 23.2099 26.5484 22.793 25.8333 22.6084" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23.3333 12.6084C24.0503 12.792 24.6859 13.209 25.1397 13.7937C25.5935 14.3783 25.8399 15.0974 25.8399 15.8376C25.8399 16.5777 25.5935 17.2968 25.1397 17.8815C24.6859 18.4661 24.0503 18.8831 23.3333 19.0667" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icon mapping
const categoryIcons: Record<string, React.FC> = {
  "UX Design": UXDesignIcon,
  "UI Design": UIDesignIcon,
  "Tools": ToolsIcon,
  "Soft Skills": SoftSkillsIcon,
};

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
          {skillCategories.map((category, index) => {
            const IconComponent = categoryIcons[category.title];
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 card-hover"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  {IconComponent && <IconComponent />}
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
            );
          })}
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
