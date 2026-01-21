import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
        {/* Header with back button */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-6 py-4 flex items-center gap-4">
            <Link to="/#work">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Button>
            </Link>
            <h1 className="text-lg font-semibold text-foreground">
              Youhonk Delivery App Case Study
            </h1>
          </div>
        </header>

        {/* Embedded Gamma page */}
        <main className="pt-16 h-screen">
          <iframe
            src="https://gamma.app/embed/zucd452pw41i7qf"
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
