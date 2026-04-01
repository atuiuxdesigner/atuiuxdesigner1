import { useState, useEffect, useCallback } from "react";
import logo01 from "@/assets/logo-variants/01.svg";
import logo02 from "@/assets/logo-variants/02.svg";
import logo03 from "@/assets/logo-variants/03.svg";
import logo04 from "@/assets/logo-variants/04.svg";
import logo05 from "@/assets/logo-variants/05.svg";
import logo06 from "@/assets/logo-variants/06.svg";

const logos = [logo01, logo02, logo03, logo04, logo05, logo06];

type Phase = "morphing" | "shrinking" | "revealing" | "done";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<Phase>("morphing");
  const [activeLogoIndex, setActiveLogoIndex] = useState(0);

  const completeIntro = useCallback(() => {
    setPhase("done");
    sessionStorage.setItem("introDone", "true");
    onComplete();
  }, [onComplete]);

  // Phase 1: Morph through logos
  useEffect(() => {
    if (phase !== "morphing") return;

    const interval = setInterval(() => {
      setActiveLogoIndex((prev) => {
        if (prev >= logos.length - 1) {
          clearInterval(interval);
          // Move to shrinking phase
          setTimeout(() => setPhase("shrinking"), 200);
          return prev;
        }
        return prev + 1;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [phase]);

  // Phase 2 → Phase 3 transition
  useEffect(() => {
    if (phase === "shrinking") {
      const timer = setTimeout(() => setPhase("revealing"), 1000);
      return () => clearTimeout(timer);
    }
    if (phase === "revealing") {
      const timer = setTimeout(completeIntro, 500);
      return () => clearTimeout(timer);
    }
  }, [phase, completeIntro]);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-500"
      style={{
        backgroundColor: "#5b4bff",
        opacity: phase === "revealing" ? 0 : 1,
        pointerEvents: phase === "revealing" ? "none" : "auto",
      }}
    >
      <div
        className="relative"
        style={{
          width: phase === "shrinking" ? "56px" : "200px",
          height: phase === "shrinking" ? "56px" : "200px",
          transition:
            phase === "shrinking"
              ? "all 1s cubic-bezier(0.65, 0, 0.35, 1)"
              : "none",
          transform:
            phase === "shrinking"
              ? "translate(calc(-50vw + 80px), calc(-50vh + 32px))"
              : "translate(0, 0)",
        }}
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt=""
            className="absolute inset-0 w-full h-full object-contain transition-opacity duration-400"
            style={{
              opacity: index === activeLogoIndex ? 1 : 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default IntroAnimation;
