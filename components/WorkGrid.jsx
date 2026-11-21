"use client";

import { useState } from "react";
import Arrow from "./Arrow";

// Project cards with category filter tabs. Cards re-animate in (CSS `card-in`) whenever the filter changes.
export default function WorkGrid({ projects }) {
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="filters" role="tablist" aria-label="Filter projects">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={filter === c}
            className={`filter ${filter === c ? "active" : ""}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="cards" key={filter}>
        {shown.map((p, i) => (
          <article key={p.title} className="card card-in spot" style={{ animationDelay: `${i * 60}ms` }}>
            <div className="card-top">
              <span className="tag">{p.category}</span>
              <span className="mono muted">{String(projects.indexOf(p) + 1).padStart(2, "0")}</span>
            </div>
            <h3>{p.title}</h3>
            <p className="muted">{p.description}</p>
            <div className="outcome">
              <span className="mono">Outcome</span>
              <p>{p.outcome}</p>
            </div>
            <div className="stack">
              {p.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            {p.link && (
              <a className="card-link" href={p.link.href} target="_blank" rel="noreferrer">
                {p.link.label} <Arrow />
              </a>
            )}
          </article>
        ))}
      </div>
    </>
  );
}
