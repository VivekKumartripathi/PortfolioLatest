import type { CSSProperties } from "react";
import {
  siAngular,
  siApachearrow,
  siApacheparquet,
  siClaude,
  siDocker,
  siDotnet,
  siFastapi,
  siFlask,
  siHuggingface,
  siJira,
  siJupyter,
  siKeras,
  siLangchain,
  siHubspot,
  siModelcontextprotocol,
  siNextdotjs,
  siNodedotjs,
  siNumpy,
  siOpencv,
  siPandas,
  siPostgresql,
  siPython,
  siPytorch,
  siReact,
  siRedis,
  siScikitlearn,
  siScipy,
  siSnowflake,
  siSourcetree,
  siSpotify,
  siSqlite,
  siTensorflow,
  siTqdm,
  type SimpleIcon,
} from "simple-icons";
import { marquee } from "@/data/portfolio";

// Generic line icons for items without an official logo in Simple Icons
// (brand removed at the owner's request) or that are techniques rather than brands.
const GENERIC: Record<string, string> = {
  code: "M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16", // C#
  bucket: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6l1.6 13c.2 1.2 3 2 6.4 2s6.2-.8 6.4-2L20 6", // AWS S3
  queue: "M12 3l9 4.5-9 4.5-9-4.5zM3 12l9 4.5 9-4.5M3 16.5l9 4.5 9-4.5", // BullMQ
  database: "M4 5c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3", // SQL Server
  spark: "M12 2l2.2 6.4L21 11l-6.8 2.6L12 20l-2.2-6.4L3 11l6.8-2.6zM19 17l.8 2.2L22 20l-2.2.8L19 23l-.8-2.2L16 20l2.2-.8z", // OpenAI GPT
  search: "M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5M14 3l5 5M14 3v5h5M17.5 20.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 22l-1.4-1.4", // RAG
  transfer: "M4 8h13l-3-3M20 16H7l3 3", // SFTP
  image: "M4 5h16v14H4zM4 15l4-4 5 5M13 13l2-2 5 5M15.5 9.5a1 1 0 1 0 0-.01", // Pillow
  chart: "M4 20V4M4 20h16M8 16l3-5 3 3 5-8", // Matplotlib
  solver: "M12 3v4M12 17v4M3 12h4M17 12h4M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z", // Kiwisolver
};

type Icon = { id: string; brand: SimpleIcon } | { id: string; generic: string };

const ICONS: Record<string, Icon> = {
  "C#": { id: "code", generic: GENERIC.code },
  ".NET": { id: "dotnet", brand: siDotnet },
  "ASP.NET Core Web API": { id: "dotnet", brand: siDotnet },
  "Entity Framework": { id: "dotnet", brand: siDotnet },
  "HubSpot CRM": { id: "hubspot", brand: siHubspot },
  Snowflake: { id: "snowflake", brand: siSnowflake },
  "AWS S3": { id: "bucket", generic: GENERIC.bucket },
  FastAPI: { id: "fastapi", brand: siFastapi },
  Parquet: { id: "parquet", brand: siApacheparquet },
  BullMQ: { id: "queue", generic: GENERIC.queue },
  Redis: { id: "redis", brand: siRedis },
  Claude: { id: "claude", brand: siClaude },
  MCP: { id: "mcp", brand: siModelcontextprotocol },
  "Node.js": { id: "node", brand: siNodedotjs },
  "Next.js": { id: "next", brand: siNextdotjs },
  React: { id: "react", brand: siReact },
  Python: { id: "python", brand: siPython },
  "SQL Server": { id: "database", generic: GENERIC.database },
  SQLite: { id: "sqlite", brand: siSqlite },
  PostgreSQL: { id: "postgresql", brand: siPostgresql },
  Docker: { id: "docker", brand: siDocker },
  "OpenAI GPT": { id: "spark", generic: GENERIC.spark },
  RAG: { id: "search", generic: GENERIC.search },
  SFTP: { id: "transfer", generic: GENERIC.transfer },
  Angular: { id: "angular", brand: siAngular },
  TensorFlow: { id: "tensorflow", brand: siTensorflow },
  PyTorch: { id: "pytorch", brand: siPytorch },
  Keras: { id: "keras", brand: siKeras },
  "scikit-learn": { id: "sklearn", brand: siScikitlearn },
  OpenCV: { id: "opencv", brand: siOpencv },
  NumPy: { id: "numpy", brand: siNumpy },
  Pandas: { id: "pandas", brand: siPandas },
  SciPy: { id: "scipy", brand: siScipy },
  PyArrow: { id: "arrow", brand: siApachearrow },
  Matplotlib: { id: "chart", generic: GENERIC.chart },
  Pillow: { id: "image", generic: GENERIC.image },
  Jupyter: { id: "jupyter", brand: siJupyter },
  "Hugging Face": { id: "huggingface", brand: siHuggingface },
  LangChain: { id: "langchain", brand: siLangchain },
  Flask: { id: "flask", brand: siFlask },
  Spotipy: { id: "spotify", brand: siSpotify },
  tqdm: { id: "tqdm", brand: siTqdm },
  Kiwisolver: { id: "solver", generic: GENERIC.solver },
  Jira: { id: "jira", brand: siJira },
  Sourcetree: { id: "sourcetree", brand: siSourcetree },
};

// Perceived brightness (0–255) of a brand colour.
const brightness = (hex: string) => {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return 0.299 * r + 0.587 * g + 0.114 * b;
};
// Near-black brands (Next.js, MCP, SQLite) would vanish on the dark theme, so they use the text colour.
const isDark = (hex: string) => brightness(hex) < 70;
// Deep brand colours (e.g. .NET purple) get lightened on the dark theme only — see `.marquee-icon.dim`.
const isDim = (hex: string) => brightness(hex) < 90;

// Every logo path is written once, as a <symbol>; each strip item reuses it with <use>.
function IconSprite() {
  const unique = [...new Map(Object.values(ICONS).map((icon) => [icon.id, icon])).values()];
  return (
    <svg className="sr-sprite" aria-hidden="true" focusable="false">
      {unique.map((icon) => (
        <symbol key={icon.id} id={`ti-${icon.id}`} viewBox="0 0 24 24">
          <path d={"generic" in icon ? icon.generic : icon.brand.path} />
        </symbol>
      ))}
    </svg>
  );
}

function TechIcon({ label }: { label: string }) {
  const icon = ICONS[label];
  if (!icon) return <span className="marquee-dot" />;
  const generic = "generic" in icon;
  const coloured = !generic && !isDark(icon.brand.hex);
  const style = coloured ? ({ "--brand": `#${icon.brand.hex}` } as CSSProperties) : undefined;
  const dim = coloured && isDim(icon.brand.hex);
  return (
    <svg className={`marquee-icon${generic ? " generic" : ""}${dim ? " dim" : ""}`} aria-hidden="true" style={style}>
      <use href={`#ti-${icon.id}`} />
    </svg>
  );
}

// Infinite tech strip: the list is rendered twice and the track slides by exactly half its width.
// Logos are inlined as SVG at build time, so they add no network requests.
export default function Marquee() {
  return (
    <div className="marquee" aria-label="Technologies">
      <IconSprite />
      <div className="marquee-track" style={{ animationDuration: `${marquee.length * 1.7}s` }}>
        {[...marquee, ...marquee].map((t, i) => (
          <span key={i} className="marquee-item" aria-hidden={i >= marquee.length}>
            <TechIcon label={t} />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
