"use client";

import { useState, type FormEvent } from "react";
import { contactForm, profile } from "@/data/portfolio";

// Submissions go to Web3Forms, which emails them to the inbox the access key was created with.
// It is a plain HTTPS API, so the form works the same on Netlify, Vercel or localhost.
export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Honeypot: real visitors never see this field, bots usually fill it in.
    if (data.get("botcheck")) return;

    setStatus("sending");
    try {
      const res = await fetch(contactForm.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: contactForm.accessKey,
          subject: `Portfolio enquiry from ${data.get("name")}`,
          from_name: "Portfolio contact form",
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          project: data.get("project"),
          message: data.get("message"),
        }),
      });
      const result: { success?: boolean } = await res.json();
      if (!res.ok || !result.success) throw new Error("Send failed");
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
    <form className="form-card" onSubmit={onSubmit}>
      <p className="hidden-field">
        <label>
          Don’t fill this out: <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
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
