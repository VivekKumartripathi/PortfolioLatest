"use client";

import { useEffect, useState } from "react";

// Typewriter that types, pauses, deletes and moves to the next word.
export default function RotatingWord({ words }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const word = words[index];
    let delay = deleting ? 45 : 85;
    if (!deleting && text === word) delay = 1800;
    if (deleting && text === "") delay = 250;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((index + 1) % words.length);
      } else setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return (
    <span className="grad rotating">
      {text}
      <span className="caret" aria-hidden="true" />
    </span>
  );
}
