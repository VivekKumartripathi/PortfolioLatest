import SectionHead from "./SectionHead";
import { caseStudies } from "@/data/portfolio";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section">
      <div className="container">
        <SectionHead
          n="03 — Case studies"
          title="Problems I’ve solved end to end."
          sub="Production systems — what was wrong, what I built, and what changed."
        />
        <div className="cases">
          {caseStudies.map((c, i) => (
            <article key={c.title} className="case reveal spot tilt">
              <div className="case-head">
                <span className="mono case-num">CASE {String(i + 1).padStart(2, "0")}</span>
                <span className="tag">{c.tag}</span>
              </div>
              <h3>{c.title}</h3>
              <p className="case-sub">{c.subtitle}</p>

              <div className="case-block">
                <span className="mono case-label">Problem</span>
                <p className="muted">{c.problem}</p>
              </div>
              <div className="case-block">
                <span className="mono case-label">Built</span>
                <ul>
                  {c.built.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className="outcome">
                <span className="mono">Impact</span>
                <p>{c.impact}</p>
              </div>
              <div className="stack">
                {c.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
