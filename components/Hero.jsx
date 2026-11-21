import Arrow from "./Arrow";
import RotatingWord from "./RotatingWord";
import { profile, heroSteps } from "@/data/portfolio";

const DIAGRAM = [
  { title: "Sources", items: ["SFTP Files", "Partner APIs", "SQL Server"] },
  { title: "Pipeline", items: ["FastAPI → Parquet", "AWS S3", "BullMQ · Redis"] },
  { title: "Systems", items: ["HubSpot CRM", "Snowflake", "Claude · MCP"] },
];

function PipelineDiagram() {
  return (
    <div className="diagram reveal">
      <div className="diagram-top mono">
        <span className="dot" /> integration-pipeline <span className="muted">· illustrative</span>
      </div>
      <div className="diagram-cols">
        {DIAGRAM.map((c, i) => (
          <div key={c.title} className="diagram-col">
            <div className="mono diagram-label">{c.title}</div>
            {c.items.map((it, j) => (
              <div
                key={it}
                className={`node ${i === 2 ? "node-accent" : ""}`}
                style={{ animationDelay: `${i * 0.6 + j * 0.2}s` }}
              >
                {it}
              </div>
            ))}
          </div>
        ))}
        <div className="flow flow-1" />
        <div className="flow flow-2" />
      </div>
      <div className="diagram-foot">
        <div>
          <strong>REST</strong>
          <span className="muted">APIs & webhooks</span>
        </div>
        <div>
          <strong>Async</strong>
          <span className="muted">queued, retried jobs</span>
        </div>
        <div>
          <strong>Audited</strong>
          <span className="muted">raw files kept on S3</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="reveal">
          <span className="pill">
            <span className="pill-dot" /> {profile.tagline}
          </span>
          <p className="hero-who">
            <span className="soft">{profile.name}</span>
            <span className="sep">/</span>
            {profile.role}
          </p>
          <h1>
            {profile.headline[0]}
            <br />
            {profile.headline[1]}
            <br />
            <RotatingWord words={profile.rotating} />
          </h1>
          <p className="lead">{profile.intro}</p>
          <div className="actions">
            <a href="#work" className="btn btn-primary">
              Explore my work →
            </a>
            <a href="#contact" className="btn btn-ghost">
              Connect with me
            </a>
            <a href={profile.links.resume} target="_blank" rel="noreferrer" className="btn btn-link">
              Resume <Arrow />
            </a>
          </div>
          <ol className="steps">
            {heroSteps.map((s) => (
              <li key={s.n}>
                <span className="mono accent">{s.n}</span>
                <div>
                  <strong>{s.title}</strong>
                  <p className="muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <PipelineDiagram />
      </div>
    </section>
  );
}
