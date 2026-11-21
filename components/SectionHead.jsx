// `n` looks like "01 — Impact": the number is drawn large and outlined behind the heading.
export default function SectionHead({ n, title, sub }) {
  const [num, label] = n.split(" — ");
  return (
    <div className="section-head reveal">
      <span className="section-num" aria-hidden="true">
        {num}
      </span>
      <span className="mono eyebrow">{label}</span>
      <h2>{title}</h2>
      {sub && <p className="muted">{sub}</p>}
    </div>
  );
}
