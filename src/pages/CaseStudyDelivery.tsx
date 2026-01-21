import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jfif";

const CaseStudyDelivery = () => {
  return (
    <>
      <Helmet>
        <title>Youhonk Delivery App Case Study | Atul Thorat</title>
        <meta
          name="description"
          content="UX Case Study: Designing the complete user experience for workshop staff to efficiently manage vehicle pickup & drop operations."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            {/* Logo - Left */}
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src={logo} 
                alt="Atul Thorat Logo" 
                className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
              />
            </Link>

            {/* Title - Center */}
            <h1 className="text-lg font-semibold text-foreground absolute left-1/2 -translate-x-1/2">
              Youhonk Delivery App Case Study
            </h1>

            {/* Back Button - Right */}
            <Link to="/#work">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </header>

        {/* Embedded Gamma page */}
        <main className="pt-16 h-screen">
          <iframe
            src="https://delivery-partner-app-t8k3q3w.gamma.site/ux-case-study"
            title="UX Case Study"
            className="w-full h-[calc(100vh-4rem)] border-0"
            allow="fullscreen"
          />
        </main>
      </div>
    </>
  );
};

export default CaseStudyDelivery;
