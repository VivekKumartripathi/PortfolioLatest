export default function SectionHead({ n, title, sub }) {
  return (
    <div className="section-head reveal">
      <span className="mono eyebrow">{n}</span>
      <h2>{title}</h2>
      {sub && <p className="muted">{sub}</p>}
    </div>
  );
}
