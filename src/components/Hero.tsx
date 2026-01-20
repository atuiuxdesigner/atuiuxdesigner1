import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Dribbble, ChevronDown } from "lucide-react";
import BehanceIcon from "@/components/icons/BehanceIcon";
import profileImage from "@/assets/profile.png";

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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
                <a href="/Atul_Thorat_UX_Designer.pdf" download>Download Resume</a>
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
                href="https://www.behance.net/atulthorat1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border hover:border-primary bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:glow-cyan-sm"
              >
                <BehanceIcon className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Content - Profile Image */}
          <div className="order-first lg:order-last flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-primary/50 to-primary animate-glow-pulse blur-xl scale-110" />
              
              {/* Profile Container */}
              <div className="relative w-72 h-72 rounded-full border-2 border-primary/50 overflow-hidden glow-cyan">
                <div className="absolute inset-2 rounded-full overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="Atul Thorat - UX Designer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary/60 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-primary/40 rounded-full animate-float" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator - Centered */}
        <div className="flex flex-col items-center gap-2 text-muted-foreground animate-fade-in mt-12" style={{ animationDelay: "0.6s" }}>
          <span className="text-sm">Scroll Down</span>
          <ChevronDown className="w-5 h-5 animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
