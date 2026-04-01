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

      <div className="min-h-screen bg-background">
        <Navbar />
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
