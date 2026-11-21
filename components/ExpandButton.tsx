"use client";

import { useState, type MouseEvent } from "react";

// Phone-only toggle for a `.collapsible` card: shows "⋯" when closed and morphs into "✕" when open.
// It toggles `.open` on the nearest `.collapsible`, so the card itself can stay a server component.
// CSS hides the button (and keeps cards fully open) on wider screens and in print.
export default function ExpandButton({ label }: { label: string }) {
  const [open, setOpen] = useState(false);

  const toggle = (e: MouseEvent<HTMLButtonElement>) => {
    const next = !open;
    e.currentTarget.closest(".collapsible")?.classList.toggle("open", next);
    setOpen(next);
  };

  return (
    <button
      type="button"
      className={`expand-btn ${open ? "is-open" : ""}`}
      aria-expanded={open}
      aria-label={`${open ? "Hide" : "Show"} details: ${label}`}
      onClick={toggle}
    >
      <svg className="i-dots" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="5" cy="12" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="19" cy="12" r="2" />
      </svg>
      <svg className="i-close" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 6l12 12M18 6L6 18" />
      </svg>
    </button>
  );
}
