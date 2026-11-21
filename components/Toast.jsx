"use client";

import { useEffect, useState } from "react";

export default function Toast() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    let timer;
    const onToast = (e) => {
      setMessage(e.detail);
      clearTimeout(timer);
      timer = setTimeout(() => setMessage(""), 2200);
    };
    window.addEventListener("toast", onToast);
    return () => {
      window.removeEventListener("toast", onToast);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`toast ${message ? "show" : ""}`} role="status" aria-live="polite">
      {message}
    </div>
  );
}
