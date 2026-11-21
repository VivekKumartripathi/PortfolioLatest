"use client";

import { useEffect } from "react";

// Feeds the pointer position into any `.spot` element so CSS can draw a glow that follows the mouse
// and, on `.tilt` cards, a slight 3D tilt toward the cursor.
export default function Spotlight() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>(".spot");
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
      el.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - 0.5) * 6}deg`);
      el.style.setProperty("--rx", `${(0.5 - (e.clientY - r.top) / r.height) * 6}deg`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
