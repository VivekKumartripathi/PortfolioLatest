import { marquee } from "@/data/portfolio";

// Infinite tech strip: the list is rendered twice and the track slides by exactly half its width.
export default function Marquee() {
  return (
    <div className="marquee" aria-label="Technologies">
      <div className="marquee-track">
        {[...marquee, ...marquee].map((t, i) => (
          <span key={i} className="marquee-item" aria-hidden={i >= marquee.length}>
            <span className="marquee-dot" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
