import { Link } from 'react-router-dom';
import { useFadeUp } from '../hooks/useFadeUp';
import { testimonials } from '../data/siteData';

export default function ClientSuccess() {
  const { callbackRef: titleRef, isVisible: titleVisible } = useFadeUp();

  return (
    <section className="success">
      <div className="container">
        <div ref={titleRef} className={`success-header fade-up ${titleVisible ? 'visible' : ''}`}>
          <div>
            <span className="label">CLIENT SUCCESS</span>
            <h2>Delivering Impact</h2>
          </div>

        </div>
        <div className="success-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
          <StatCard />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  const { callbackRef, isVisible } = useFadeUp();

  return (
    <div
      ref={callbackRef}
      className={`success-card ${testimonial.variant} fade-up ${isVisible ? 'visible' : ''}`}
    >
      <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
      <div className="client-info">
        <p className="client-name">{testimonial.name}</p>
        <p className="client-role">{testimonial.role}</p>
      </div>
    </div>
  );
}

function StatCard() {
  const { callbackRef, isVisible } = useFadeUp();

  return (
    <div ref={callbackRef} className={`success-card stat-highlight fade-up ${isVisible ? 'visible' : ''}`}>
      <div className="stat-highlight-number">$1.2m</div>
      <p className="stat-highlight-label">Cost savings delivered across portfolio.</p>
    </div>
  );
}
