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
  const [activeIndex, setActiveIndex] = useState(0);

  const finish = useCallback(() => {
    setPhase("done");
    onComplete();
  }, [onComplete]);

  // Phase 1: Morph through logos
  useEffect(() => {
    if (phase !== "morphing") return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev >= logos.length - 1) {
          clearInterval(interval);
          // Move to shrink phase
          setTimeout(() => setPhase("shrinking"), 200);
          return prev;
        }
        return prev + 1;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [phase]);

  // Phase 2 → 3: Shrink then reveal
  useEffect(() => {
    if (phase === "shrinking") {
      const timer = setTimeout(() => setPhase("revealing"), 1000);
      return () => clearTimeout(timer);
    }
    if (phase === "revealing") {
      const timer = setTimeout(finish, 600);
      return () => clearTimeout(timer);
    }
  }, [phase, finish]);

  if (phase === "done") return null;

  // Calculate transform for shrink phase: center → navbar position
  const getShrinkStyle = (): React.CSSProperties => {
    if (phase === "shrinking" || phase === "revealing") {
      return {
        position: "fixed",
        top: "8px",
        left: "24px",
        width: "56px",
        height: "56px",
        transform: "none",
        transition: "all 1s cubic-bezier(0.65, 0, 0.35, 1)",
        zIndex: 100,
      };
    }
    return {
      position: "relative",
      width: "200px",
      height: "200px",
      transform: "none",
      transition: "all 1s cubic-bezier(0.65, 0, 0.35, 1)",
    };
  };

  return (
    <>
      {/* Full-screen overlay */}
      <div
        className="fixed inset-0 flex items-center justify-center"
        style={{
          zIndex: 9999,
          backgroundColor: "#5b4bff",
          opacity: phase === "revealing" ? 0 : 1,
          transition: "opacity 0.5s ease-out",
          pointerEvents: phase === "revealing" ? "none" : "auto",
        }}
      >
        {phase === "morphing" && (
          <div className="relative" style={{ width: 200, height: 200 }}>
            {logos.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt=""
                className="absolute inset-0 w-full h-full object-contain"
                style={{
                  opacity: i === activeIndex ? 1 : 0,
                  transition: "opacity 0.4s ease-in-out",
                  willChange: "opacity",
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Floating logo during shrink/reveal */}
      {(phase === "shrinking" || phase === "revealing") && (
        <img
          src={logos[logos.length - 1]}
          alt=""
          style={{
            ...getShrinkStyle(),
            position: "fixed",
            objectFit: "contain",
            zIndex: 10000,
            opacity: phase === "revealing" ? 0 : 1,
            transition:
              phase === "revealing"
                ? "opacity 0.3s ease-out 0.2s"
                : "all 1s cubic-bezier(0.65, 0, 0.35, 1)",
          }}
        />
      )}
    </>
  );
};

export default IntroAnimation;
