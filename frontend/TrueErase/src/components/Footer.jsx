import React from 'react';
import '../style/Footer.css'; // Adjust path based on your file structure

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        {/* Column 1: Brand Info */}
        <div className="footer__column footer__brand">
          <h3 className="footer__logo">TrueErase</h3>
          <p className="footer__tagline">
            A New Standard for Data Sanitization.
          </p>
          <small className="footer__copyright">
            © 2025 Team Everizon.
          </small>
        </div>

        {/* Column 2: Solutions Links */}
        <div className="footer__column">
          <h4 className="footer__column-title">Solutions</h4>
          <ul className="footer__links">
            <li><a href="#solutions">IT Recyclers</a></li>
            <li><a href="#solutions">Enterprises</a></li>
            <li><a href="#solutions">Individuals</a></li>
          </ul>
        </div>

        {/* Column 3: Resources Links */}
        <div className="footer__column">
          <h4 className="footer__column-title">Resources</h4>
          <ul className="footer__links">
            <li><a href="#verification">Verification Portal</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Project GitHub</a></li>
          </ul>
        </div>

        {/* Column 4: Company Links */}
        <div className="footer__column">
          <h4 className="footer__column-title">Company</h4>
          <ul className="footer__links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">SIH Project Submission</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;