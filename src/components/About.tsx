import profileImage from "@/assets/profile.png";

const timeline = [
  { year: "2024 — Now", company: "Youhonk", role: "Product Designer" },
  { year: "2023",        company: "Self-taught",       role: "Found UX. Felt like home." },
  { year: "2022",        company: "Non-IT role",       role: "Hiring froze. Kept sketching on the side." },
  { year: "2021",        company: "Computer Engineering", role: "Finished my degree mid-COVID." },
  { year: "2015",        company: "Computer Engineering", role: "Started with no plan. Kept showing up." },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-b-2 border-foreground bg-secondary/30">
      <div className="container mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
          ↓ About
        </p>
        <h2 className="font-serif-display text-5xl md:text-7xl text-foreground mb-12 md:mb-16 leading-[0.95]">
          How I got <em className="italic text-primary">here.</em>
        </h2>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Profile + pull quote */}
          <div className="md:col-span-5 space-y-8">
            <div className="border-2 border-foreground shadow-brutal-lg overflow-hidden aspect-square max-w-sm">
              <img
                src={profileImage}
                alt="Atul Thorat"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <blockquote className="font-serif-display text-2xl md:text-3xl text-foreground leading-snug italic border-l-4 border-primary pl-5">
              "The best UI is the one you don't notice — it just feels right."
            </blockquote>
            <p className="text-sm uppercase tracking-widest font-semibold text-foreground/60">
              — Atul Thorat
            </p>
          </div>

          {/* Timeline */}
          <div className="md:col-span-7">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-10">
              I'm a product designer based in Pune. I blend research, system thinking, and pixel craft to ship mobile and SaaS experiences for mobility, logistics, and small businesses.
            </p>

            <div>
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 gap-4 py-5 border-t-2 border-foreground last:border-b-2 hover:bg-accent/30 transition-colors"
                >
                  <div className="col-span-4 md:col-span-3 font-semibold text-foreground tracking-tight">
                    {item.year}
                  </div>
                  <div className="col-span-8 md:col-span-4 font-serif-display text-xl text-foreground">
                    {item.company}
                  </div>
                  <div className="col-span-12 md:col-span-5 text-foreground/70">
                    {item.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
