import { useParams, Link } from 'react-router-dom';
import { teamMembers } from '../data/siteData';
import { useFadeUp } from '../hooks/useFadeUp';

export default function TeamMemberPage() {
  const { slug } = useParams();
  const member = teamMembers.find((m) => m.slug === slug);

  const { callbackRef: heroRef, isVisible: heroVisible } = useFadeUp();
  const { callbackRef: bioRef, isVisible: bioVisible } = useFadeUp();

  if (!member) {
    return (
      <section className="page-hero page-hero--about">
        <div className="container">
          <h1>Team member not found</h1>
          <Link to="/about" className="link-underline">Back to About</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero page-hero--about">
        <div className="container">
          <div ref={heroRef} className={`page-hero-content fade-up ${heroVisible ? 'visible' : ''}`}>
            <Link to="/about" className="label label--light bio-back">← BACK TO TEAM</Link>
            <h1>{member.name}</h1>
            <p className="hero-subtitle">{member.title}</p>
          </div>
        </div>
      </section>

      <section className="bio-section">
        <div className="container">
          <div ref={bioRef} className={`bio-grid fade-up ${bioVisible ? 'visible' : ''}`}>
            <div className="bio-image-col">
              <div className="bio-portrait">
                <img src={member.image} alt={member.name} loading="lazy" />
              </div>
            </div>
            <div className="bio-content-col">
              {member.bio && member.bio.map((paragraph, i) => (
                <p key={i} className="bio-paragraph">{paragraph}</p>
              ))}

              {member.experience && (
                <div className="bio-list-section">
                  <h3>Representative Experience</h3>
                  <ul>
                    {member.experience.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {member.practiceAreas && (
                <div className="bio-list-section">
                  <h3>Representative Interests & Practice Areas</h3>
                  <ul>
                    {member.practiceAreas.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {member.education && (
                <div className="bio-list-section">
                  <h3>Education</h3>
                  <ul>
                    {member.education.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {member.memberships && (
                <div className="bio-list-section">
                  <h3>Professional Memberships</h3>
                  <ul>
                    {member.memberships.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
