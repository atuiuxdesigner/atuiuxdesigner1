import { Quote } from "lucide-react";

const journeySteps = [
  {
    year: "2018",
    title: "The Unexpected Path",
    description:
      "Started my career in a completely different field, but always felt drawn to the creative side of technology. Little did I know this would be the beginning of a transformative journey.",
    side: "left",
  },
  {
    year: "2019",
    title: "The Struggle",
    description:
      "Spent countless nights learning design principles, struggling with imposter syndrome, and questioning if this path was right for me. Every failure taught me something new.",
    side: "right",
  },
  {
    year: "2020",
    title: "The Dark Period",
    description:
      "Faced rejection after rejection, but each 'no' fueled my determination. I realized that great design isn't about perfection—it's about solving real problems for real people.",
    side: "left",
  },
  {
    year: "2021",
    title: "The Awakening",
    description:
      "Everything clicked. I found my unique voice in design, landed my first major project, and discovered that empathy is the most powerful tool in a designer's arsenal.",
    side: "right",
  },
  {
    year: "2022",
    title: "The Dream Realized",
    description:
      "Now working on products that impact millions of users. Every day is a new opportunity to create something meaningful. The journey continues, but I'm exactly where I'm meant to be.",
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
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 -translate-x-1/2" />

          {/* Journey Steps */}
          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  step.side === "left" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div
                  className={`w-5/12 ${
                    step.side === "left" ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="bg-card border border-border rounded-xl p-6 card-hover">
                    <span className="text-primary font-bold text-lg">
                      {step.year}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background glow-cyan-sm z-10" />

                {/* Empty Space */}
                <div className="w-5/12" />
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
