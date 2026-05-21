import { Link } from 'react-router-dom';
import { useFadeUp } from '../hooks/useFadeUp';
import { teamMembers } from '../data/siteData';
import Stats from '../components/Stats';

import CTASection from '../components/CTA';

export default function AboutPage() {
  const { callbackRef: heroRef, isVisible: heroVisible } = useFadeUp();
  const { callbackRef: overviewRef, isVisible: overviewVisible } = useFadeUp();
  const { callbackRef: overviewImgRef, isVisible: overviewImgVisible } = useFadeUp(0.1);

  const { callbackRef: teamTitleRef, isVisible: teamTitleVisible } = useFadeUp();


  return (
    <>
      {/* Hero */}
      <section className="page-hero page-hero--dark page-hero--about">
        <img src="/about-hero.jpeg" alt="" className="hero-bg" />
        <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(10,25,60,0.85) 0%, rgba(10,25,60,0.6) 50%, rgba(10,25,60,0.4) 100%)' }} />
        <div className="container">
          <div ref={heroRef} className={`page-hero-content fade-up ${heroVisible ? 'visible' : ''}`}>
            <span className="label">OUR FIRM</span>
            <h1>Legal Excellence.<br />Built on Integrity.</h1>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="overview">
        <div className="container">
          <div className="overview-grid">
            <div ref={overviewRef} className={`overview-text fade-up ${overviewVisible ? 'visible' : ''}`}>
              <span className="label">OVERVIEW</span>
              <h2>Our Culture And Approach</h2>
              <p>
                Our Firm is built on a culture of diligence, responsiveness, discretion, and excellence. We believe that effective legal representation requires not only strong technical expertise but also commercial understanding, strategic thinking, and a genuine commitment to our clients&apos; objectives.
              </p>
              <p>
                We approach every matter with professionalism, attention to detail, and a solution-driven mindset, ensuring that our clients receive practical legal guidance capable of navigating both immediate challenges and long-term opportunities.
              </p>
              <p>
                At Chinedu G. Udora &amp; Co., we remain committed to delivering legal services that inspire confidence, create value, and achieve results that matter.
              </p>

            </div>
            <div
              ref={overviewImgRef}
              className={`overview-image fade-up ${overviewImgVisible ? 'visible' : ''}`}
            >
              <img src="/team/chinedu-udora.jpg" alt="Chinedu G. Udora — Principal Partner" className="overview-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />


      {/* Leadership Team */}
      <section className="team">
        <div className="container">
          <div ref={teamTitleRef} className={`team-header fade-up ${teamTitleVisible ? 'visible' : ''}`}>
            <span className="label">LEADERSHIP TEAM</span>
            <h2>Meet Chinedu G. Udora & Co</h2>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <CTASection />
    </>
  );
}

function TeamMemberCard({ member }) {
  const { callbackRef, isVisible } = useFadeUp();
  const hasBio = member.bio && member.bio.length > 0;

  const content = (
    <>
      <div className="team-photo">
        <img src={member.image} alt={member.name} className="team-photo-img" loading="lazy" />
      </div>
      <h4>{member.name}</h4>
      <span className="team-title">{member.title}</span>
    </>
  );

  if (hasBio) {
    return (
      <Link to={`/team/${member.slug}`} ref={callbackRef} className={`team-card team-card--link fade-up ${isVisible ? 'visible' : ''}`}>
        {content}
      </Link>
    );
  }

  return (
    <div ref={callbackRef} className={`team-card fade-up ${isVisible ? 'visible' : ''}`}>
      {content}
    </div>
  );
}
