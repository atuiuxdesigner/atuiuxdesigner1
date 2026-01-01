import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Dribbble, ExternalLink, ChevronDown } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ["Product Designer", "UI/UX Designer", "Design Thinker"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg animate-fade-in">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Atul{" "}
                <span className="text-primary glow-text">Thorat</span>
              </h1>
              <div className="h-12 flex items-center justify-center lg:justify-start" style={{ animationDelay: "0.2s" }}>
                <span className="text-2xl md:text-3xl text-muted-foreground">
                  {displayText}
                  <span className="inline-block w-0.5 h-8 bg-primary ml-1 animate-pulse" />
                </span>
              </div>
            </div>

            <p className="text-muted-foreground text-lg max-w-lg mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              I craft intuitive digital experiences that bridge the gap between
              users and technology. With a passion for clean design and
              user-centered thinking, I transform complex problems into elegant
              solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan-sm transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="#work">View My Work</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border hover:border-primary bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:glow-cyan-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border hover:border-primary bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:glow-cyan-sm"
              >
                <Dribbble className="w-5 h-5" />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border hover:border-primary bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:glow-cyan-sm"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-primary/50 to-primary animate-glow-pulse blur-xl scale-110" />
              
              {/* Profile Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-primary/50 overflow-hidden glow-cyan">
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-secondary to-muted overflow-hidden">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary/30">AT</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary/60 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-primary/40 rounded-full animate-float" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <span className="text-sm">Scroll Down</span>
          <ChevronDown className="w-5 h-5 animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
