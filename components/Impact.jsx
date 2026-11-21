import SectionHead from "./SectionHead";
import CountUp from "./CountUp";
import { impact } from "@/data/portfolio";

export default function Impact() {
  return (
    <section id="impact" className="section">
      <div className="container">
        <SectionHead n="01 — Impact" title="Numbers behind the work." />
        <div className="stat-grid">
          {impact.map((s, i) => (
            <div key={s.label} className="stat reveal spot" style={{ transitionDelay: `${i * 60}ms` }}>
              <span className="mono stat-n">{String(i + 1).padStart(2, "0")}</span>
              <div className="stat-value">
                <CountUp value={s.value} />
              </div>
              <div className="stat-label">{s.label}</div>
              <p className="muted">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
