import { education, principles } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container about-grid">
        <div className="reveal">
          <span className="mono eyebrow">07 — About</span>
          <h2>Backend engineer who cares where the data lands.</h2>
          <p className="muted">
            I started in machine learning research, then moved into enterprise .NET development — PDFs, Word add-ins,
            scheduled reports. At GlobalData I now work where systems meet: REST APIs, HubSpot CRM sync, queue-based
            workers, FastAPI pipelines into S3 and Snowflake, and AI tooling that lets LLMs reach real business data safely.
          </p>
          <p className="muted">
            Right now I’m focused on multi-tenant integration architecture — per-client tokens and queues, parent–child CRM
            objects, Parquet data lakes and MCP tools for Claude — and on making every sync predictable enough to trust.
            I keep my problem-solving sharp with data structures and algorithms on CodeChef.
          </p>
          <div className="edu">
            <span className="mono accent">Education</span>
            <strong>{education.degree}</strong>
            <span className="muted">
              {education.school} · {education.score} · {education.dates}
            </span>
          </div>
        </div>
        <div className="reveal">
          <span className="mono eyebrow">How I build</span>
          <ol className="principles">
            {principles.map((p, i) => (
              <li key={p.title}>
                <span className="mono accent">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{p.title}</strong>
                  <p className="muted">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
