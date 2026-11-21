import SectionHead from "./SectionHead";
import { architecture } from "@/data/portfolio";

export default function Architecture() {
  return (
    <section id="architecture" className="section section-alt">
      <div className="container">
        <SectionHead
          n="02 — Architecture"
          title="One connected data & integration system."
          sub="How data moves from partner files and APIs through FastAPI, S3 and Snowflake into each client’s HubSpot — and out to Claude. Every stage decoupled, queued and observable."
        />
        <div className="arch">
          {architecture.map((a, i) => (
            <div key={a.n} className="arch-step reveal spot" style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="arch-num mono">{a.n}</div>
              <h3>{a.title}</h3>
              <p className="muted">{a.text}</p>
              <div className="mono arch-tech">{a.tech}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
