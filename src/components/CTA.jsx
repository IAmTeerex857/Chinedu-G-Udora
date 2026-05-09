import { Link } from 'react-router-dom';
import { useFadeUp } from '../hooks/useFadeUp';

export default function CTASection() {
  const { callbackRef, isVisible } = useFadeUp();

  return (
    <section className="cta">
      <div className="container">
        <div ref={callbackRef} className={`cta-content fade-up ${isVisible ? 'visible' : ''}`}>
          <h2>Unlock Business Transformation</h2>
          <Link to="/contact" className="btn btn-primary btn-large">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
