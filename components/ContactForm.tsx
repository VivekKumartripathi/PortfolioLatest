"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/portfolio";

// Submissions go to Netlify Forms (registered by public/__forms.html), which emails them to you.
export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // FormData holds only text fields here, so it is safe to treat as string pairs.
        body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(res.statusText);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="form-card form-done">
        <div className="form-done-icon">✓</div>
        <h3>Thanks — message sent!</h3>
        <p className="muted">I’ll get back to you within a day.</p>
        <button className="btn btn-ghost" onClick={() => setStatus("idle")}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" name="contact" onSubmit={onSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden-field">
        <label>
          Don’t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="form-row">
        <label className="field">
          <span>Name</span>
          <input name="name" required placeholder="Your name" autoComplete="name" />
        </label>
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" required placeholder="you@company.com" autoComplete="email" />
        </label>
      </div>

      <div className="form-row">
        <label className="field">
          <span>
            Company <em>(optional)</em>
          </span>
          <input name="company" placeholder="Company or team" autoComplete="organization" />
        </label>
        <label className="field">
          <span>What do you want to build?</span>
          <input name="project" placeholder="e.g. HubSpot sync, AI tool" />
        </label>
      </div>

      <label className="field">
        <span>Message</span>
        <textarea name="message" required rows={5} placeholder="Tell me about the systems, data and goal…" />
      </label>

      <button className="btn btn-primary form-submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message →"}
      </button>

      {status === "error" && (
        <p className="form-error">
          Couldn’t send right now — please email me at <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>
      )}
    </form>
  );
}
