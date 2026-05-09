import { useFadeUp } from '../hooks/useFadeUp';

export default function TermsPage() {
  const { callbackRef, isVisible } = useFadeUp();
  return (
    <section className="legal-page">
      <div className="container container--narrow">
        <div ref={callbackRef} className={`legal-content fade-up ${isVisible ? 'visible' : ''}`}>
          <h1>Terms of Service</h1>
          <p className="legal-updated">Last updated: January 1, 2026</p>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by these Terms of Service.</p>
          <h2>2. Use of Website</h2>
          <p>You agree to use this website only for lawful purposes and in accordance with these Terms.</p>
          <h2>3. Intellectual Property</h2>
          <p>All content on this website is the property of Chinedu G. Udora & Co and is protected by applicable copyright and trademark laws.</p>
          <h2>4. Limitation of Liability</h2>
          <p>Chinedu G. Udora & Co shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.</p>
          <h2>5. Contact</h2>
          <p>For questions about these Terms, contact us at chudora@chinedugudora.com.</p>
        </div>
      </div>
    </section>
  );
}
