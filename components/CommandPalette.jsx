"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { profile } from "@/data/portfolio";
import { copyEmail, toggleTheme, toast } from "./theme";

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
const open = (url) => window.open(url, "_blank", "noopener");

const COMMANDS = [
  { group: "Navigate", label: "Architecture", run: () => go("architecture") },
  { group: "Navigate", label: "Case studies", run: () => go("case-studies") },
  { group: "Navigate", label: "Featured work", run: () => go("work") },
  { group: "Navigate", label: "Skills", run: () => go("capabilities") },
  { group: "Navigate", label: "Experience", run: () => go("journey") },
  { group: "Navigate", label: "Contact", run: () => go("contact") },
  { group: "Actions", label: "Open resume", run: () => open(profile.links.resume) },
  { group: "Actions", label: "Copy email address", run: () => copyEmail(profile.email) },
  { group: "Actions", label: "Toggle light / dark theme", run: () => toast(`${toggleTheme() === "light" ? "Light" : "Dark"} theme`) },
  { group: "Links", label: "GitHub", run: () => open(profile.links.github) },
  { group: "Links", label: "LinkedIn", run: () => open(profile.links.linkedin) },
  { group: "Links", label: "CodeChef", run: () => open(profile.links.codechef) },
];

export default function CommandPalette() {
  const [isOpen, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const input = useRef(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? COMMANDS.filter((c) => c.label.toLowerCase().includes(q)) : COMMANDS;
  }, [query]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("palette:open", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("palette:open", onOpen);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setActive(0);
      setTimeout(() => input.current?.focus(), 0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const run = (cmd) => {
    setOpen(false);
    cmd.run();
  };

  const onInputKey = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" && results[active]) run(results[active]);
  };

  return (
    <div className="palette-backdrop" onClick={() => setOpen(false)}>
      <div className="palette" role="dialog" aria-label="Command palette" onClick={(e) => e.stopPropagation()}>
        <input
          ref={input}
          className="palette-input"
          placeholder="Type a command or search…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
          }}
          onKeyDown={onInputKey}
        />
        <ul className="palette-list">
          {results.length === 0 && <li className="palette-empty">No results</li>}
          {results.map((c, i) => (
            <li key={c.label}>
              <button
                className={`palette-item ${i === active ? "active" : ""}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => run(c)}
              >
                <span className="mono palette-group">{c.group}</span>
                {c.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="palette-foot mono">
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
