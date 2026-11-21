"use client";

import { useEffect, useRef, useState } from "react";

// Thin accent bar showing scroll progress, plus a back-to-top button after the first screen.
export default function ScrollProgress() {
  const bar = useRef(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      setShowTop(window.scrollY > 900);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div ref={bar} className="scroll-progress" aria-hidden="true" />
      <button
        className={`to-top ${showTop ? "show" : ""}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </>
  );
}
