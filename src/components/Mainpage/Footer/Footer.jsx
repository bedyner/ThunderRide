
import { Link } from "react-router-dom";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">
          <span className="footer-word">Thunder</span>
          <span className="footer-word2">Ride</span>
        </h2>
        <ul className="footer-links">
          <li><Link to="/inquiry">Inquiry</Link></li>
          <li><Link to="/terms">Terms and Conditions</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/safety">Safety</Link></li>
          <li><Link to="/help">Help</Link></li>
        </ul>
        <p className="footer-credit">@ [Thunder Ride Credit].</p>
      </div>
    </footer>
  );
}
