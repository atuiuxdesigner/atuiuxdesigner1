import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import logo from "@/assets/logo.svg";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = ({ hideLogo = false }: { hideLogo?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setActiveSection(href.replace("#", ""));
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-foreground">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo / wordmark */}
          <a href="#home" className="flex items-center gap-2 group" style={{ opacity: hideLogo ? 0 : 1 }}>
            <img
              src={logo}
              alt="Atul Thorat"
              className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-110"
            />
            <span className="hidden sm:inline font-serif-display text-xl text-foreground">
              Atul Thorat<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-semibold uppercase tracking-wider relative group transition-colors ${
                    isActive ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              className="bg-foreground text-background hover:bg-primary rounded-sm border-2 border-foreground shadow-brutal-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal transition-all font-semibold h-10 px-5 text-sm"
              asChild
            >
              <a href="#contact">Let's Talk →</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground p-2 border-2 border-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t-2 border-foreground animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-semibold uppercase tracking-wider py-3 px-2 ${
                      isActive ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="flex items-center justify-between mt-4 pt-4 border-t-2 border-foreground">
                <ThemeToggle />
                <Button
                  className="bg-foreground text-background hover:bg-primary rounded-sm border-2 border-foreground font-semibold"
                  asChild
                >
                  <a href="#contact">Let's Talk →</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
