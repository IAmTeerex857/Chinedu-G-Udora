import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const darkPages = ['/', '/services', '/about', '/contact'];
  const isDarkHero = darkPages.includes(location.pathname) ||
    location.pathname.startsWith('/services/') ||
    location.pathname.startsWith('/team/');
  const headerLight = !scrolled && isDarkHero;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [prevLocationKey, setPrevLocationKey] = useState(location.key);
  if (location.key !== prevLocationKey) {
    setPrevLocationKey(location.key);
    setMobileOpen(false);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${headerLight ? 'header--light' : 'header--dark'}`}>
      <Link to="/" className="logo">
        <img src={headerLight ? '/logo-light.svg' : '/logo-dark.svg'} alt="Chinedu G. Udora & Co" className="logo-img" />
      </Link>
      <nav className={`nav ${mobileOpen ? 'open' : ''}`}>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/services" className={location.pathname.startsWith('/services') ? 'active' : ''}>Services</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        <Link to="/blog" className={location.pathname.startsWith('/blog') ? 'active' : ''}>Insights</Link>
        <button
          className="nav-book-cta"
          onClick={() => { setMobileOpen(false); onOpenBooking(); }}
        >
          Book a Consultation
        </button>
      </nav>
      <div className="header-actions">
        <Link to="/contact" className="btn btn-primary header-cta">Contact Us</Link>
        <button className="btn btn-consultation header-cta" onClick={onOpenBooking}>Book a Consultation</button>
      </div>
      <button
        className="mobile-menu-btn"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? '✕' : '☰'}
      </button>
    </header>
  );
}
