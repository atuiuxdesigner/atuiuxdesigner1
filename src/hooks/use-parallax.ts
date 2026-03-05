import { useEffect, useRef, useState } from "react";

export function useParallax() {
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number>(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isDesktop]);

  const getOffset = (multiplier: number) =>
    isDesktop ? scrollY * multiplier : 0;

  const getOpacity = (fadeStart: number, fadeEnd: number) => {
    if (!isDesktop) return 1;
    if (scrollY <= fadeStart) return 1;
    if (scrollY >= fadeEnd) return 0;
    return 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
  };

  return { scrollY, isDesktop, getOffset, getOpacity };
}
