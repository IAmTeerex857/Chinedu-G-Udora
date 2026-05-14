import { useParams, Link, Navigate } from 'react-router-dom';
import { useFadeUp } from '../hooks/useFadeUp';
import { services } from '../data/siteData';
import InsightsPreview from '../components/Insights';
import CTASection from '../components/CTA';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  return <ServiceDetail key={slug} service={service} />;
}

function ServiceDetail({ service }) {
  const { callbackRef: heroRef, isVisible: heroVisible } = useFadeUp();
  const { callbackRef: whatWeDoRef, isVisible: whatWeDoVisible } = useFadeUp();

  return (
    <>
      {/* Hero */}
      <section className="page-hero page-hero--dark page-hero--service-detail">
        {service.heroImage ? (
          <>
            <img src={service.heroImage} alt="" className="hero-bg" />
            <div className="hero-overlay" />
          </>
        ) : (
          <div className="hero-bg" />
        )}
        <div className="container">
          <div ref={heroRef} className={`page-hero-content fade-up ${heroVisible ? 'visible' : ''}`}>
            <Link to="/services" className="breadcrumb">← Client Services</Link>
            <h1>{service.title}</h1>
            <p className="hero-subtitle">{service.heroText}</p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="service-detail-content">
        <div className="container">
          <div ref={whatWeDoRef} className={`service-detail-intro fade-up ${whatWeDoVisible ? 'visible' : ''}`}>
            <span className="label">WHAT WE DO</span>
            <div className="detail-overview" style={{ whiteSpace: 'pre-wrap' }}>{service.whatWeDo}</div>
          </div>

          <div className="offerings-list">
            {service.offerings.map((offering, i) => (
              <OfferingItem key={i} offering={offering} />
            ))}
          </div>


        </div>
      </section>

      {/* Insights */}
      <InsightsPreview count={3} />

      {/* CTA */}
      <CTASection />
    </>
  );
}

function OfferingItem({ offering }) {
  const { callbackRef, isVisible } = useFadeUp();

  return (
    <div ref={callbackRef} className={`offering-item fade-up ${isVisible ? 'visible' : ''}`}>
      <h3>{offering.title}</h3>
      <p>{offering.desc}</p>
    </div>
  );
}
