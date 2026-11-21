"use client";

import { useEffect, useRef, useState } from "react";

// Animates "92%" or "9.29" from 0 when it first scrolls into view; keeps any prefix/suffix.
export default function CountUp({ value, duration = 1400 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    // Only animate real numbers like "92%" or "9.29"; text values such as ".NET" render as-is.
    const match = String(value).match(/^([^\d]*?)(\d+(?:\.\d+)?)(.*)$/);
    if (!match || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const [, pre, num, post] = match;
    const target = parseFloat(num);
    const decimals = (num.split(".")[1] || "").length;
    const format = (n) => `${pre}${n.toFixed(decimals)}${post}`;
    setShown(format(0));

    let raf = 0;
    const animate = () => {
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        setShown(format(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const onScroll = () => {
      if (ref.current.getBoundingClientRect().top < window.innerHeight * 0.92) {
        window.removeEventListener("scroll", onScroll);
        animate();
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return <span ref={ref}>{shown}</span>;
}
