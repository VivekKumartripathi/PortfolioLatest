// Theme helpers shared by the toggle button and the command palette.
export function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {}
  return next;
}

// Shows a short message via the <Toast /> component.
export function toast(message) {
  window.dispatchEvent(new CustomEvent("toast", { detail: message }));
}

export async function copyEmail(email) {
  try {
    await navigator.clipboard.writeText(email);
    toast("Email copied to clipboard");
  } catch {
    window.location.href = `mailto:${email}`;
  }
}

// Runs in <head> before React loads so the saved theme applies before first paint (no flash).
export const themeInitScript = `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`;
