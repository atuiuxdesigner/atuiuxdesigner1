import { useEffect, useRef, useState, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const CustomCursor = () => {
  const isMobile = useIsMobile();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);
  const [hoverState, setHoverState] = useState<"default" | "interactive" | "text">("default");
  const [cursorLabel, setCursorLabel] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Check for hover capability
  const [hasHover, setHasHover] = useState(false);
  useEffect(() => {
    setHasHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    mouse.current = { x: e.clientX, y: e.clientY };
    if (!isVisible) setIsVisible(true);

    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
  }, [isVisible]);

  // Trailing ring animation loop
  useEffect(() => {
    if (isMobile || !hasHover) return;

    const animate = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.15);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.15);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, [isMobile, hasHover]);

  // Mouse move & hover detection
  useEffect(() => {
    if (isMobile || !hasHover) return;

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check for data-cursor attribute
      const cursorAttr = target.closest("[data-cursor]");
      if (cursorAttr) {
        const label = cursorAttr.getAttribute("data-cursor") || "";
        setCursorLabel(label);
        setHoverState("interactive");
        return;
      }

      // Check for interactive elements
      const interactive = target.closest("a, button, [role='button'], .card-hover, input, textarea, select, [tabindex]");
      if (interactive) {
        setHoverState("interactive");
        // Auto-label based on element type
        const el = interactive as HTMLElement;
        if (el.tagName === "A" || el.classList.contains("card-hover")) {
          setCursorLabel("View");
        } else if (el.tagName === "BUTTON" || el.getAttribute("role") === "button") {
          setCursorLabel("Click");
        } else {
          setCursorLabel("");
        }
        return;
      }

      // Check for text content
      const isText = target.closest("p, h1, h2, h3, h4, h5, h6, span, li, blockquote");
      if (isText && !target.closest("a, button")) {
        setHoverState("text");
        setCursorLabel("");
        return;
      }

      setHoverState("default");
      setCursorLabel("");
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isMobile, hasHover, onMouseMove]);

  if (isMobile || !hasHover) return null;

  const isInteractive = hoverState === "interactive";
  const isText = hoverState === "text";

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{
          opacity: isVisible ? 1 : 0,
          width: isText ? 3 : isInteractive ? 6 : 8,
          height: isText ? 24 : isInteractive ? 6 : 8,
          borderRadius: isText ? 1 : "50%",
          background: isText
            ? "hsl(var(--primary))"
            : "hsl(var(--primary))",
          boxShadow: isText
            ? "0 0 8px hsl(var(--primary) / 0.6)"
            : "0 0 6px hsl(var(--primary) / 0.5)",
        }}
      />

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="custom-cursor-ring"
        style={{
          opacity: isVisible ? 1 : 0,
          width: isInteractive ? 64 : isText ? 2 : 36,
          height: isInteractive ? 64 : isText ? 32 : 36,
          borderRadius: isText ? 1 : "50%",
          borderColor: isText
            ? "transparent"
            : isInteractive
              ? "hsl(var(--primary) / 0.6)"
              : "hsl(var(--primary) / 0.3)",
          backgroundColor: isInteractive
            ? "hsl(var(--primary) / 0.08)"
            : "transparent",
          boxShadow: isInteractive
            ? "0 0 20px hsl(var(--primary) / 0.2)"
            : "none",
        }}
      >
        {cursorLabel && isInteractive && (
          <span
            ref={labelRef}
            className="custom-cursor-label"
          >
            {cursorLabel}
          </span>
        )}
      </div>
    </>
  );
};

export default CustomCursor;
