// Theme helpers for the light/dark toggle.
export function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {}
  return next;
}

// Runs in <head> before React loads so the saved theme applies before first paint (no flash).
export const themeInitScript = `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`;
