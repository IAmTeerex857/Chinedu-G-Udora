import { Link } from 'react-router-dom';
import { services, contactInfo } from '../data/siteData';

export default function Footer() {
  const col1 = services.slice(0, 6);
  const col2 = services.slice(6, 12);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/logo-light.svg" alt="Chinedu G. Udora & Co" className="footer-logo-img" />
            </Link>
            <div className="footer-contact-info">
              <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              <p>{contactInfo.address}</p>
            </div>
            <div className="footer-socials">
              <a href="https://www.instagram.com/chinedugudoraandco?igsh=MXZpajh4MG91bHdocg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/chinedu-g-udora-and-co/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div className="link-column">
              <h4>Menu</h4>
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/about">About</Link>
              <Link to="/blog">Insights</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="link-column">
              <h4>Practice Areas</h4>
              {col1.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`}>{s.title}</Link>
              ))}
            </div>
            <div className="link-column">
              <h4>&nbsp;</h4>
              {col2.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`}>{s.title}</Link>
              ))}
            </div>
            <div className="link-column">
              <h4>Legal</h4>
              <Link to="/legal/privacy">Privacy</Link>
              <Link to="/legal/terms">Terms</Link>
            </div>
          </div>

        </div>
        <div className="footer-bottom">
          <p>© Copyright 2026</p>
        </div>
      </div>
    </footer>
  );
}
