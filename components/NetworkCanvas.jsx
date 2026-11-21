"use client";

import { useEffect, useRef } from "react";

// Drifting "integration network" behind the hero: nodes link up when close and lean toward the mouse.
// Stops drawing once the hero is scrolled out of view, and draws one still frame for reduced motion.
export default function NetworkCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: -9999, y: -9999 };
    let w = 0;
    let h = 0;
    let nodes = [];
    let raf = 0;

    const color = () => getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#ff8a5c";

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(70, (w * h) / 16000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    };

    const draw = () => {
      const accent = color();
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        if (dx * dx + dy * dy < 160 * 160) {
          n.x += dx * 0.004;
          n.y += dy * 0.004;
        }
      }
      ctx.strokeStyle = accent;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d2 = (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
          if (d2 < 130 * 130) {
            ctx.globalAlpha = (1 - Math.sqrt(d2) / 130) * 0.28;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 0.7;
      ctx.fillStyle = accent;
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      if (window.scrollY < h) draw();
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };

    resize();
    if (still) draw();
    else raf = requestAnimationFrame(loop);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="network-canvas" aria-hidden="true" />;
}
