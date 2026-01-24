import { Quote } from "lucide-react";

const journeySteps = [
  {
    year: "2015",
    title: "The Unexpected Path",
    subtitle: "Accidental Engineer",
    description:
      "Took admission in Computer Engineering without a clear direction. Everything felt hard, concepts were overwhelming, and I struggled to keep up with my peers.",
    side: "left",
  },
  {
    year: "2021",
    title: "The Struggle",
    subtitle: "Persistence Through Failure",
    description:
      "Failed exams, had to drop a year. But I refused to give up. After countless attempts and sleepless nights, I finally completed my Bachelor's degree during the COVID-19 pandemic.",
    side: "right",
  },
  {
    year: "2022",
    title: "The Dark Period",
    subtitle: "Post-COVID Reality",
    description:
      "Companies wouldn't hire graduates from the COVID period. Felt unguided and lost. Started working in a Non-IT field just to survive, but my creative spirit kept searching for more.",
    side: "left",
  },
  {
    year: "2023",
    title: "The Awakening",
    subtitle: "Discovering UX Design",
    description:
      "Found my calling in UX Design — a field that solves human psychology and creates peaceful paths for users. Like Lord Buddha's teachings, it's about understanding suffering and easing it through thoughtful solutions.",
    side: "right",
  },
  {
    year: "2024",
    title: "The Dream Realized",
    subtitle: "Landing at Youhonk",
    description:
      "After dedicated practice in UX+UI, I landed my dream job at Youhonk, a Pune-based startup connecting users with trusted vehicle repair services. Now 1+ years into creating meaningful experiences.",
    side: "left",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Path to Finding My{" "}
            <span className="text-primary glow-text">Purpose in Design</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every designer has a story. Here's mine—a journey of passion,
            persistence, and purpose.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 md:-translate-x-1/2" />

          {/* Journey Steps */}
          <div className="space-y-8 md:space-y-12">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  step.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div
                  className={`w-full pl-12 md:pl-0 md:w-5/12 text-left ${
                    step.side === "left" ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                  }`}
                >
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 card-hover">
                    <span className="text-primary font-bold text-lg">
                      {step.year}
                    </span>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mt-2 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-primary/80 text-xs font-medium mb-3">
                      {step.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background glow-cyan-sm z-10" />

                {/* Empty Space */}
                <div className="hidden md:block md:w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Quote Block */}
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="bg-card/50 border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/50 mx-auto mb-6 flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              <blockquote className="text-xl md:text-2xl text-foreground font-medium italic leading-relaxed mb-6">
                "Good design is not about making things beautiful. It's about
                making things work beautifully. The best UI is the one you don't
                notice—it just feels right."
              </blockquote>

              <div className="text-muted-foreground">
                <span className="text-primary font-semibold">— Atul Thorat</span>
                <span className="mx-2">•</span>
                <span>Design Philosophy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
