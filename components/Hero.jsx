import Arrow from "./Arrow";
import RotatingWord from "./RotatingWord";
import NetworkCanvas from "./NetworkCanvas";
import { profile, heroSteps } from "@/data/portfolio";

const COLS = [
  { title: "Sources", x: 12, items: ["SFTP Files", "Partner APIs", "SQL Server"] },
  { title: "Pipeline", x: 171, items: ["FastAPI → Parquet", "AWS S3", "BullMQ · Redis"] },
  { title: "Systems", x: 330, items: ["HubSpot CRM", "Snowflake", "Claude · MCP"] },
];
const W = 118;
const H = 38;
const ROWS = [58, 138, 218]; // vertical centre of each node row

// [fromColumn, fromRow, toRow] — every wire goes from one column to the next.
const WIRES = [
  [0, 0, 0], [0, 1, 0], [0, 1, 1], [0, 2, 1], [0, 2, 2],
  [1, 0, 1], [1, 1, 1], [1, 1, 0], [1, 2, 0], [1, 2, 2],
];

const wirePath = ([c, from, to]) => {
  const x1 = COLS[c].x + W;
  const x2 = COLS[c + 1].x;
  const y1 = ROWS[from];
  const y2 = ROWS[to];
  return `M${x1} ${y1} C${x1 + 24} ${y1} ${x2 - 24} ${y2} ${x2} ${y2}`;
};

// Animated SVG: data packets travel along the wires from sources to systems.
function PipelineDiagram() {
  return (
    <div className="diagram reveal">
      <div className="diagram-top mono">
        <span className="dot" /> integration-pipeline <span className="muted">· live</span>
      </div>
      <svg className="pipeline-svg" viewBox="0 0 460 248" role="img" aria-label="Data flows from sources through the pipeline into HubSpot, Snowflake and Claude">
        {COLS.map((c) => (
          <text key={c.title} className="svg-label" x={c.x + 2} y="22">
            {c.title.toUpperCase()}
          </text>
        ))}
        {WIRES.map((w, i) => (
          <path key={i} id={`wire-${i}`} className="wire" d={wirePath(w)} />
        ))}
        {WIRES.map((w, i) => (
          <circle key={i} className="packet" r="3">
            <animateMotion dur={`${1.8 + (i % 3) * 0.4}s`} begin={`-${(i * 0.37) % 2}s`} repeatCount="indefinite">
              <mpath href={`#wire-${i}`} />
            </animateMotion>
          </circle>
        ))}
        {COLS.map((c, ci) =>
          c.items.map((it, ri) => (
            <g key={it} className={`svg-node ${ci === 2 ? "accent" : ""}`} style={{ animationDelay: `${ci * 0.6 + ri * 0.2}s` }}>
              <rect x={c.x} y={ROWS[ri] - H / 2} width={W} height={H} rx="10" />
              <text x={c.x + W / 2} y={ROWS[ri] + 4} textAnchor="middle">
                {it}
              </text>
            </g>
          ))
        )}
      </svg>
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
      <NetworkCanvas />
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
