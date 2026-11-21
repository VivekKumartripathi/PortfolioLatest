import SectionHead from "./SectionHead";
import { experience, recognition } from "@/data/portfolio";

export default function Journey() {
  return (
    <section id="journey" className="section">
      <div className="container">
        <SectionHead n="06 — Professional journey" title="Where I’ve built." />
        <div className="timeline">
          {experience.map((e) => (
            <div key={e.company + e.dates} className="tl-item reveal">
              <div className="tl-meta mono">
                {e.dates}
                {e.current && <span className="current">Current</span>}
              </div>
              <div className="tl-body">
                <h3>{e.role}</h3>
                <p className="tl-company">
                  {e.company} <span className="muted">· {e.location}</span>
                </p>
                <ul>
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className="tl-item reveal">
            <div className="tl-meta mono">Recognition</div>
            <div className="tl-body award">
              <span className="award-icon">★</span>
              <div>
                <h3>{recognition.title}</h3>
                <p className="muted">
                  {recognition.org} · {recognition.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
