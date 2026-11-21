import SectionHead from "./SectionHead";
import { capabilities } from "@/data/portfolio";

export default function Capabilities() {
  return (
    <section id="capabilities" className="section section-alt">
      <div className="container">
        <SectionHead n="05 — Capabilities" title="The toolkit." />
        <div className="caps">
          {capabilities.map((c) => (
            <div key={c.title} className="cap reveal spot">
              <div className="cap-head">
                <h3>{c.title}</h3>
                <span className="mono accent">{String(c.items.length).padStart(2, "0")}</span>
              </div>
              <p className="muted">{c.text}</p>
              <div className="chips">
                {c.items.map((it) => (
                  <span key={it} className="chip">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
