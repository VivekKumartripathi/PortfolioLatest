"use client";

import { useEffect } from "react";

// Fades in every `.reveal` element once its top edge enters the viewport.
// Re-queries on each check, so elements React re-renders later are still picked up.
export default function RevealObserver() {
  useEffect(() => {
    document.documentElement.classList.add("js");

    let frame = 0;
    const check = () => {
      frame = 0;
      const limit = window.innerHeight * 0.92;
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
        if (el.getBoundingClientRect().top < limit) el.classList.add("in");
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };

    check();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return null;
}
