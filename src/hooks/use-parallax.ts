import { useEffect, useRef, useState, useCallback } from "react";
import { useIsMobile } from "./use-mobile";

export function useParallax() {
  const isMobile = useIsMobile();
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (isMobile) return;

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile]);

  const getOffset = useCallback(
    (speed: number) => (isMobile ? 0 : scrollY * speed),
    [scrollY, isMobile]
  );

  return { scrollY, getOffset, isMobile };
}
