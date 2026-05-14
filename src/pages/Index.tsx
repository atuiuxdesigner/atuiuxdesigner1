import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import IntroAnimation from "@/components/IntroAnimation";

const Index = () => {
  const [introDone, setIntroDone] = useState(() => {
    return sessionStorage.getItem("introDone") === "true";
  });

  return (
    <>
      {!introDone && (
        <IntroAnimation onComplete={() => setIntroDone(true)} />
      )}
      <Helmet>
        <title>Atul Thorat — UX Designer in Pune | Mobile & SaaS Portfolio</title>
        <meta
          name="description"
          content="Hi, I'm Atul — a UX designer in Pune crafting friendly mobile and SaaS apps for logistics and mobility. Take a peek at my work."
        />
        <meta
          name="keywords"
          content="UX Designer, Product Designer, Atul Thorat, Pune, Mobile App Design, SaaS, Logistics"
        />
        <link rel="canonical" href="https://atuiuxdesigner.lovable.app/" />
        <meta property="og:title" content="Atul Thorat — UX Designer in Pune" />
        <meta property="og:description" content="Friendly UX designer crafting mobile & SaaS apps for logistics and mobility. Come say hi." />
        <meta property="og:url" content="https://atuiuxdesigner.lovable.app/" />
        <meta name="twitter:title" content="Atul Thorat — UX Designer in Pune" />
        <meta name="twitter:description" content="Friendly UX designer crafting mobile & SaaS apps for logistics and mobility. Come say hi." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Atul Thorat",
          jobTitle: "UX Designer",
          url: "https://atuiuxdesigner.lovable.app/",
          sameAs: [
            "https://www.linkedin.com/in/atul-thorat-6065b8169/",
            "https://www.behance.net/atulthorat1"
          ]
        })}</script>
      </Helmet>

      <div
        className="min-h-screen bg-background transition-all duration-500 ease-out"
        style={{
          opacity: introDone ? 1 : 0,
          transform: introDone ? "scale(1)" : "scale(0.98)",
        }}
      >
        <Navbar hideLogo={!introDone} />
        <main>
          <Hero />
          <CaseStudies />
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </>
  );
};

export default Index;
