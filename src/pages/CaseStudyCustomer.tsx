import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import logo from "@/assets/logo.svg";

const CaseStudyCustomer = () => {
  return (
    <>
      <Helmet>
        <title>Youhonk Customer App UX Case Study — Atul Thorat</title>
        <meta
          name="description"
          content="Designing a friendly mobile app that turns booking a vehicle repair into a calm, simple journey. Case study coming soon."
        />
        <link rel="canonical" href="https://atuiuxdesigner.lovable.app/case-study/customer" />
        <meta property="og:title" content="Youhonk Customer App UX Case Study — Atul Thorat" />
        <meta property="og:description" content="Designing a friendly app that turns booking a vehicle repair into a calm, simple journey." />
        <meta property="og:url" content="https://atuiuxdesigner.lovable.app/case-study/customer" />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content="Youhonk Customer App UX Case Study — Atul Thorat" />
        <meta name="twitter:description" content="Designing a friendly app that turns booking a vehicle repair into a calm, simple journey." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          headline: "Youhonk Customer App Case Study",
          description: "UX Case Study: Designing the customer-facing app for booking vehicle repair services.",
          author: { "@type": "Person", name: "Atul Thorat" },
          url: "https://atuiuxdesigner.lovable.app/case-study/customer"
        })}</script>
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
                className="h-14 w-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
              />
            </Link>

            {/* Theme Toggle & Back Button - Right */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link to="/#work">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
              </Link>
            </div>
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
                Coming soon
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Writing this one up. Check back soon.
              </p>
              <Link to="/#work">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to work
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
