import SectionHead from "./SectionHead";
import WorkGrid from "./WorkGrid";
import { projects } from "@/data/portfolio";

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHead
          n="04 — Featured work"
          title="More things I’ve built."
          sub="Engineering, full-stack and ML projects — several open on GitHub."
        />
        <div className="reveal">
          <WorkGrid projects={projects} />
        </div>
      </div>
    </section>
  );
}
