"use client";

import { useEffect, useState } from "react";
import Arrow from "./Arrow";
import { toggleTheme } from "./theme";
import { profile } from "@/data/portfolio";

const LINKS = [
  { id: "architecture", label: "Architecture" },
  { id: "case-studies", label: "Case Studies" },
  { id: "work", label: "Work" },
  { id: "capabilities", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "about", label: "About" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled || open ? "nav-solid" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="brand">
          <span className="brand-mark">{profile.initials}</span>
          <span>{profile.name}</span>
        </a>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-ghost btn-sm" onClick={close}>
            Connect <Arrow />
          </a>
        </nav>
        <div className="nav-tools">
          <button className="icon-btn" aria-label="Toggle theme" onClick={toggleTheme}>
            <svg className="i-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
            <svg className="i-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          </button>
          <button className="menu-btn" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
