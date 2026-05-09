import { useFadeUp } from '../hooks/useFadeUp';

export default function PrivacyPage() {
  const { callbackRef, isVisible } = useFadeUp();
  return (
    <section className="legal-page">
      <div className="container container--narrow">
        <div ref={callbackRef} className={`legal-content fade-up ${isVisible ? 'visible' : ''}`}>
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last updated: January 1, 2026</p>
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us.</p>
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.</p>
          <h2>3. Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties.</p>
          <h2>4. Contact Us</h2>
          <p>If you have any questions, please contact us at chudora@chinedugudora.com.</p>
        </div>
      </div>
    </section>
  );
}
