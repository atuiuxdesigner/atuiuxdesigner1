import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jfif";

const CaseStudyCustomer = () => {
  return (
    <>
      <Helmet>
        <title>Youhonk Customer App Case Study | Atul Thorat</title>
        <meta
          name="description"
          content="UX Case Study: Designing the customer-facing app for booking vehicle repair services."
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

            {/* Back Button - Right */}
            <Link to="/#work">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </header>

        {/* Placeholder Content */}
        <main className="pt-16 min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-6 py-24 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Case Study Coming Soon
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                The detailed case study for the Youhonk Customer App is currently being prepared. 
                Check back soon to explore how we transformed the traditional vehicle repair journey 
                into a seamless digital experience.
              </p>
              <Link to="/#work">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to All Projects
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default CaseStudyCustomer;
