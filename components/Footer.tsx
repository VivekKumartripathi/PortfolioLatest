import CurrentYear from "./CurrentYear";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="muted">
          © <CurrentYear /> {profile.name}
        </span>
        <div>
          <a href="#home">Top</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
