import { Link } from 'react-router-dom';
import { useFadeUp } from '../hooks/useFadeUp';
import { services } from '../data/siteData';
import Stats from '../components/Stats';

import InsightsPreview from '../components/Insights';
import CTASection from '../components/CTA';

export default function HomePage() {
  const { callbackRef: heroRef, isVisible: heroVisible } = useFadeUp();
  const { callbackRef: welcomeRef, isVisible: welcomeVisible } = useFadeUp();
  const { callbackRef: welcomeImgRef, isVisible: welcomeImgVisible } = useFadeUp(0.1);
  const { callbackRef: servicesTitleRef, isVisible: servicesTitleVisible } = useFadeUp();
  const homepageServices = services.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <img src="/home-hero-2.jpeg" alt="" className="hero-bg" />
        <div className="hero-overlay" />
        <div ref={heroRef} className={`hero-content fade-up ${heroVisible ? 'visible' : ''}`}>
          <span className="label label--light">Meet Your Lawyers</span>
          <h1>Trusted Legal Counsel.<br />Global Reach</h1>
          <p>
            At Chinedu G. Udora &amp; Co., we provide proactive, client-focused legal
            solutions across a diverse range of practice areas, including corporate
            law, litigation, election petition matters and cross-border advisory
            services. Our legacy is built on integrity, advocacy, and results.
          </p>
        </div>
      </section>

      {/* Insights - immediately after hero */}
      <InsightsPreview count={3} />

      {/* Welcome */}
      <section className="welcome">
        <div className="container">
          <div className="welcome-grid">
            <div ref={welcomeRef} className={`welcome-text fade-up ${welcomeVisible ? 'visible' : ''}`}>
              <span className="label">WELCOME</span>
              <p>
                With a commitment to excellence, our team works closely with
                individuals, Government entities, corporations, and public institutions
                to navigate complex legal challenges in an ever-changing world. Whether
                in the courtroom or the boardroom, our clients trust us to protect
                their interests with clarity and conviction.
              </p>
              <div className="welcome-signature">
                <strong>Chinedu G. Udora</strong>
                <em>Principal Partner</em>
              </div>
            </div>
            <div
              ref={welcomeImgRef}
              className={`welcome-image fade-up ${welcomeImgVisible ? 'visible' : ''}`}
            >
              <img src="/home-portrait.png" alt="Chinedu G. Udora & Co" className="welcome-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Services (first 3 + See All) */}
      <section className="services-section">
        <div className="container">
          <div ref={servicesTitleRef} className={`services-intro fade-up ${servicesTitleVisible ? 'visible' : ''}`}>
            <span className="label label--light"><strong>WHAT WE DO</strong></span>
            <p className="services-intro-text">
              At Chinedu G. Udora &amp; Co, our legal expertise spans across critical
              sectors and complex cross-border matters. Our clients trust us for
              tailored legal solutions that address both local realities and global
              expectations.
            </p>
          </div>
          <div className="services-list">
            {homepageServices.map((s, i) => (
              <ServiceItem key={s.slug} service={s} index={i} />
            ))}
          </div>
          <div className="services-see-all">
            <Link to="/services" className="link-arrow">
              See All Practice Areas <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* CTA */}
      <CTASection />
    </>
  );
}

function ServiceItem({ service, index = 0 }) {
  const { callbackRef, isVisible } = useFadeUp();

  return (
    <Link
      to={`/services/${service.slug}`}
      ref={callbackRef}
      className={`service-item fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: isVisible ? `${index * 0.12}s` : '0s' }}
    >
      <div className="service-thumb">
        <img src={service.icon} alt={service.title} className="service-icon" />
      </div>
      <div className="service-info">
        <h3>{service.title}</h3>
        <p>{service.subtitle}</p>
      </div>
      <div className="service-arrow">→</div>
    </Link>
  );
}
