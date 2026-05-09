import { Link } from 'react-router-dom';
import { useFadeUp } from '../hooks/useFadeUp';
import { teamMembers } from '../data/siteData';
import Stats from '../components/Stats';
import InsightsPreview from '../components/Insights';
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
        <img src="/about-group.jpg" alt="" className="hero-bg" />
        <div className="hero-overlay" />
        <div className="container">
          <div ref={heroRef} className={`page-hero-content fade-up ${heroVisible ? 'visible' : ''}`}>
            <span className="label">OUR FIRM</span>
            <h1>
              We&apos;re former operators who&apos;ve built companies, led divisions,
              closed transactions, and navigated the same inflection points you&apos;re
              facing.
            </h1>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="overview">
        <div className="container">
          <div className="overview-grid">
            <div ref={overviewRef} className={`overview-text fade-up ${overviewVisible ? 'visible' : ''}`}>
              <span className="label">OVERVIEW</span>
              <h2>
                Our senior advisors average 16 years of operating experience.
                We&apos;ve been CEOs, COOs, heads of sales, GMs of business units.
              </h2>
              <p>
                We&apos;ve raised capital, made acquisitions, built teams, and dealt
                with boards. When we give you advice, it&apos;s based on having done
                it ourselves. Our success is tied to yours. If the strategy
                doesn&apos;t work, we keep working until it does.
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
