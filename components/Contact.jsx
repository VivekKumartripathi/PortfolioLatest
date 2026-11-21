import Arrow from "./Arrow";
import { profile } from "@/data/portfolio";

const ITEMS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "in/vivektripathi20", href: profile.links.linkedin },
  { label: "GitHub", value: "vivekkumartripathi", href: profile.links.github },
  { label: "Resume", value: "View or download", href: profile.links.resume },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container reveal">
        <span className="mono eyebrow">08 — Contact</span>
        <h2 className="contact-title">
          Have an integration <span className="grad">worth building?</span>
        </h2>
        <p className="muted">
          {profile.location} · {profile.availability}. I usually reply within a day.
        </p>
        <div className="contact-grid">
          {ITEMS.map((c) => {
            const external = !c.href.startsWith("mailto");
            return (
              <a
                key={c.label}
                href={c.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="contact-card"
              >
                <span className="mono muted">{c.label}</span>
                <span className="contact-val">
                  {c.value} <Arrow />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
