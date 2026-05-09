import { useState } from 'react';
import { useFadeUp } from '../hooks/useFadeUp';
import { contactInfo } from '../data/siteData';
import CTASection from '../components/CTA';

export default function ContactPage() {
  const { callbackRef: heroRef, isVisible: heroVisible } = useFadeUp();
  const { callbackRef: formRef, isVisible: formVisible } = useFadeUp();
  const { callbackRef: infoRef, isVisible: infoVisible } = useFadeUp();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      {/* Hero */}
      <section className="contact-page-hero">
        <div className="container">
          <div ref={heroRef} className={`contact-page-hero-content fade-up ${heroVisible ? 'visible' : ''}`}>
            <span className="label">GET IN TOUCH</span>
            <h1>Contact Us</h1>
            <p>We&apos;d love to hear from you. Fill out the form below or reach out directly.</p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-layout">
            {/* Form */}
            <div ref={formRef} className={`contact-form-wrapper fade-up ${formVisible ? 'visible' : ''}`}>
              <h2>Send us a message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text" id="name" name="name" required
                      placeholder="Your full name"
                      value={formData.name} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email" id="email" name="email" required
                      placeholder="you@example.com"
                      value={formData.email} onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel" id="phone" name="phone"
                      placeholder="+234 xxx xxx xxxx"
                      value={formData.phone} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text" id="subject" name="subject" required
                      placeholder="How can we help?"
                      value={formData.subject} onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message" name="message" rows="6" required
                    placeholder="Tell us about your legal needs..."
                    value={formData.message} onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-submit">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div ref={infoRef} className={`contact-sidebar fade-up ${infoVisible ? 'visible' : ''}`}>
              <div className="sidebar-card">
                <h3>Partner With Us</h3>
                <p>
                  For any questions, information or to discuss your legal needs,
                  get in touch. We look forward to talking.
                </p>
              </div>
              <div className="sidebar-card">
                <div className="contact-detail">
                  <h4>Call</h4>
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </div>
                <div className="contact-detail">
                  <h4>Email</h4>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </div>
                <div className="contact-detail">
                  <h4>Office</h4>
                  <p>{contactInfo.address}</p>
                </div>
              </div>
              <div className="sidebar-card sidebar-card--dark">
                <h3>Book a Consultation</h3>
                <p>Schedule a one-on-one consultation with our legal experts to discuss your specific needs.</p>
                <a href={`tel:${contactInfo.phone}`} className="btn btn-primary" style={{marginTop: '1rem'}}>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
