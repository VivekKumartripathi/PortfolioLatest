import Arrow from "./Arrow";
import ContactForm from "./ContactForm";
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
      <div className="container contact-layout">
        <div className="reveal">
          <span className="mono eyebrow">08 — Contact</span>
          <h2 className="contact-title">
            Have an integration <span className="grad">worth building?</span>
          </h2>
          <p className="muted contact-lead">
            Tell me what you want to connect, automate or build — the form lands straight in my inbox.
          </p>
          <p className="contact-where">
            <span className="where-dot" />
            <span>
              <strong>{profile.location}</strong> · {profile.availability}
            </span>
            <span className="where-reply">Replies within a day</span>
          </p>
          <div className="contact-list">
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
        <div className="reveal">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
