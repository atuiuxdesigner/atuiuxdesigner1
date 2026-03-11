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
    return sessionStorage.getItem("intro-played") === "true";
  });

  const handleIntroComplete = () => {
    sessionStorage.setItem("intro-played", "true");
    setIntroDone(true);
  };

  return (
    <>
      <Helmet>
        <title>Atul Thorat | Product Designer & UI/UX Expert</title>
        <meta
          name="description"
          content="I'm Atul Thorat, a Product Designer crafting intuitive digital experiences. View my portfolio of UI/UX case studies and design work."
        />
        <meta
          name="keywords"
          content="UI/UX Designer, Product Designer, Atul Thorat, Portfolio, Design, User Experience"
        />
      </Helmet>

      {!introDone && <IntroAnimation onComplete={handleIntroComplete} />}

      <div
        className="min-h-screen bg-background"
        style={{
          transform: introDone ? "translateY(0)" : "translateY(100vh)",
          opacity: introDone ? 1 : 0,
          transition: "transform 0.7s cubic-bezier(0.33, 1, 0.68, 1), opacity 0.5s ease-out",
        }}
      >
        <Navbar hideLogo={!introDone} />
        <main>
          <Hero />
          <About />
          <Skills />
          <CaseStudies />
          <Contact />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </>
  );
};

export default Index;
