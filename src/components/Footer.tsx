import { Linkedin, Dribbble, Heart } from "lucide-react";
import BehanceIcon from "@/components/icons/BehanceIcon";
import logo from "@/assets/logo.jfif";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="flex items-center gap-2 group">
              <img 
                src={logo} 
                alt="Atul Thorat Logo" 
                className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
              />
            </a>
            <p className="text-muted-foreground text-sm">
              © {currentYear} Atul Thorat. All rights reserved.
            </p>
          </div>

          {/* Made with Love */}
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            Made with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />{" "}
            and lots of coffee
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border hover:border-primary bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border hover:border-primary bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <Dribbble className="w-5 h-5" />
            </a>
            <a
              href="https://www.behance.net/atulthorat1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border hover:border-primary bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <BehanceIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
