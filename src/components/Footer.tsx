import { Linkedin, Github } from "lucide-react";
import BehanceIcon from "@/components/icons/BehanceIcon";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-background border-t-2 border-foreground">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-serif-display text-2xl">
          Atul Thorat<span className="text-primary">.</span>
        </p>
        <p className="text-sm text-background/70">
          © {year} — Designed & built with care in Pune.
        </p>
        <div className="flex gap-3">
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
              className="w-10 h-10 border-2 border-background flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
