import { Link } from 'react-router-dom';
import { useFadeUp } from '../hooks/useFadeUp';
import { services } from '../data/siteData';

import CTASection from '../components/CTA';

export default function ServicesPage() {
  const { callbackRef: heroRef, isVisible: heroVisible } = useFadeUp();
  const { callbackRef: overviewRef, isVisible: overviewVisible } = useFadeUp();
  const { callbackRef: overviewImgRef, isVisible: overviewImgVisible } = useFadeUp(0.1);
  const { callbackRef: servicesTitleRef, isVisible: servicesTitleVisible } = useFadeUp();

  return (
    <>
      {/* Hero */}
      <section className="page-hero page-hero--dark">
        <img src="/services-hero.jpg" alt="" className="hero-bg" />
        <div className="hero-overlay" />
        <div className="container">
          <div ref={heroRef} className={`page-hero-content fade-up ${heroVisible ? 'visible' : ''}`}>
            <span className="label label--light">CLIENT SERVICES</span>
            <h1>We work on the problems that determine whether companies accelerate or stagnate.</h1>

          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="overview">
        <div className="container">
          <div className="overview-grid">
            <div ref={overviewRef} className={`overview-text fade-up ${overviewVisible ? 'visible' : ''}`}>
              <span className="label">DEEP LOOK</span>
              <h2>
                Most firms at an inflection point face some combination of three
                challenges: they need to grow revenue, they need to improve
                operations, or they&apos;re navigating a transaction.
              </h2>
              <p>
                We work on growth, operations, and M&A—the core strategic and
                operational challenges that define outcomes at inflection points. We
                focus exclusively on these areas because they&apos;re where the stakes
                are highest and where getting it wrong is most expensive.
              </p>
              <Link to="/about" className="link-underline">Meet The Team</Link>
            </div>
            <div
              ref={overviewImgRef}
              className={`overview-image fade-up ${overviewImgVisible ? 'visible' : ''}`}
            >
              <img src="/deep-look.jpeg" alt="Legal services" className="overview-img" style={{ filter: 'brightness(0.85)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="services-section">
        <div className="container">
          <div ref={servicesTitleRef} className={`services-intro fade-up ${servicesTitleVisible ? 'visible' : ''}`}>
            <span className="label label--light">WHAT WE DO</span>
            <h2 className="section-title">Practice Areas</h2>
            <p className="services-intro-text">
              Our firm provides comprehensive legal services across 12 practice
              areas, delivering strategic counsel to individuals, businesses, and
              institutions across Nigeria and beyond.
            </p>
          </div>
          <div className="services-list">
            {services.map((s, i) => (
              <ServiceItem key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>



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
