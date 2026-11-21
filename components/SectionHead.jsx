// `n` looks like "01 — Impact": the number is drawn large and outlined beside the heading.
// Each title word is its own span so CSS can reveal them one after another.
export default function SectionHead({ n, title, sub }) {
  const [num, label] = n.split(" — ");
  return (
    <div className="section-head reveal">
      <span className="section-num" aria-hidden="true">
        {num}
      </span>
      <span className="mono eyebrow">{label}</span>
      <h2>
        {title.split(" ").map((word, i) => (
          <span key={i} className="word" style={{ "--i": i }}>
            {word}{" "}
          </span>
        ))}
      </h2>
      {sub && <p className="muted">{sub}</p>}
    </div>
  );
}
