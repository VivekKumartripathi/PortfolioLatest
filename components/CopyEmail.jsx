"use client";

import { copyEmail } from "./theme";

export default function CopyEmail({ email }) {
  return (
    <button className="btn btn-primary" onClick={() => copyEmail(email)}>
      Copy email
    </button>
  );
}
