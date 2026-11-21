"use client";

import { useEffect, useState } from "react";

// The static export bakes in the build year; this updates it to the visitor's current year in the browser.
export default function CurrentYear() {
  const [year, setYear] = useState(() => new Date().getFullYear());
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <span suppressHydrationWarning>{year}</span>;
}
