import { profile } from "../data/profile";
import { siteCopy, type Language } from "../i18n";

export default function Footer({ language }: { language: Language }) {
  const currentYear = new Date().getFullYear();
  const copy = siteCopy[language];

  return (
    <footer className="footer-strip">
      <div className="footer-point" />
      <span>{copy.footer.portfolio}</span>
      <div className="footer-line" />
      <span>&copy; {currentYear} {profile.name.toUpperCase()}</span>
      <div className="footer-point" />
    </footer>
  );
}
