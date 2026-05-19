import { Button } from "@/components/ui/button";
import { Linkedin, Github, ArrowDown, ArrowRight } from "lucide-react";
import BehanceIcon from "@/components/icons/BehanceIcon";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[92vh] flex items-center relative overflow-hidden pt-24 pb-16 border-b-2 border-foreground"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
            Product Designer · Pune · Available for work
          </p>
        </div>

        {/* Oversized editorial headline */}
        <h1
          className="font-serif-display text-foreground leading-[0.92] tracking-tight animate-fade-in"
          style={{
            animationDelay: "0.1s",
            fontSize: "clamp(3.5rem, 12vw, 11rem)",
          }}
        >
          Designing <em className="italic text-primary">mobility</em>
          <br />
          apps people
          <br />
          <span className="highlight-marker">actually</span> use.
        </h1>

        {/* Subline */}
        <p
          className="mt-10 max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          Currently shaping <span className="font-semibold text-foreground">Youhonk's</span> three-app vehicle service platform — delivery, customer, and vendor.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground rounded-sm border-2 border-foreground shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all font-semibold text-base h-14 px-8"
            asChild
          >
            <a href="#work">
              See Case Studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-background text-foreground hover:bg-accent rounded-sm border-2 border-foreground shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all font-semibold text-base h-14 px-8"
            asChild
          >
            <a href="/Atul_Thorat_UX_Designer.pdf" download>
              Resume
              <ArrowDown className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>

        {/* Socials */}
        <div
          className="mt-12 flex items-center gap-3 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="text-xs uppercase tracking-widest font-semibold text-foreground/60 mr-2">
            Find me
          </span>
          {[
            { href: "https://www.linkedin.com/in/atul-thorat-6065b8169/", icon: Linkedin, label: "LinkedIn" },
            { href: "https://github.com/atuiuxdesigner", icon: Github, label: "GitHub" },
            { href: "https://www.behance.net/atulthorat1", icon: BehanceIcon, label: "Behance" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 border-2 border-foreground bg-background hover:bg-accent flex items-center justify-center text-foreground transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] shadow-brutal-sm hover:shadow-brutal"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
