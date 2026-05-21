import { useState, useEffect, Fragment } from 'react';

const consultationPackages = [
  {
    id: 'physical',
    title: 'Physical Consultation',
    price: '₦100,000.00/hour',
    description: 'Meet with a consultant physically at the office',
  },
  {
    id: 'virtual',
    title: 'Virtual Consultation',
    price: '₦150,000.00/hour',
    description: 'Meet with a consultant virtually',
  },
  {
    id: 'physical-advisory',
    title: 'Physical Consultation and Written Advisory',
    price: '₦400,000.00',
    description: 'After physical consultation you are entitled to a written advisory within 7 days after consultation',
  },
  {
    id: 'virtual-advisory',
    title: 'Virtual Consultation and Advisory',
    price: '₦450,000.00',
    description: 'After virtual consultation you are entitled to a written advisory within 7 days from consultation date',
  },
];

function StepIndicator({ current }) {
  return (
    <div className="booking-steps">
      {[1, 2, 3, 4, 5].map((n, i) => (
        <Fragment key={n}>
          <div className={`booking-step-circle${current === n ? ' active' : ''}`}>{n}</div>
          {i < 4 && <div className="booking-step-line" />}
        </Fragment>
      ))}
    </div>
  );
}

function Step1({ booking, setBooking }) {
  const options = [
    {
      id: 'physical',
      label: 'Physical Consultation',
      desc: 'Meet face-to-face at our office',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      ),
    },
    {
      id: 'online',
      label: 'Online Consultation',
      desc: 'Video call from anywhere',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="13" height="10" rx="2" />
          <path d="M15 11.5l5-3v7l-5-3" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <h3 className="booking-step-title">Choose Consultation Type</h3>
      <p className="booking-step-subtitle">Select how you&apos;d like to meet with our lawyers</p>
      <div className="booking-options">
        {options.map(({ id, label, desc, icon }) => (
          <button
            key={id}
            className={`booking-option-card${booking.consultationType === id ? ' selected' : ''}`}
            onClick={() => setBooking(b => ({ ...b, consultationType: id }))}
          >
            <span className="booking-option-icon">{icon}</span>
            <div>
              <strong>{label}</strong>
              <p>{desc}</p>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}

function Step2({ booking, setBooking }) {
  return (
    <>
      <h3 className="booking-step-title">Select Service</h3>
      <p className="booking-step-subtitle">Choose the consultation package that suits your needs</p>
      <div className="booking-packages">
        {consultationPackages.map(pkg => (
          <button
            key={pkg.id}
            className={`booking-package-card${booking.servicePackage?.id === pkg.id ? ' selected' : ''}`}
            onClick={() => setBooking(b => ({ ...b, servicePackage: pkg }))}
          >
            <div className="booking-package-header">
              <span className="booking-package-name">{pkg.title}</span>
              <span className="booking-package-price">{pkg.price}</span>
            </div>
            <p className="booking-package-desc">{pkg.description}</p>
            <div className="booking-package-meta">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              Flexible
            </div>
          </button>
        ))}
      </div>
    </>
  );
}

function Step3({ booking, setBooking }) {
  const today = new Date().toISOString().split('T')[0];
  return (
    <>
      <h3 className="booking-step-title">Select Date</h3>
      <p className="booking-step-subtitle">Choose your consultation date</p>
      <div className="booking-date-card">
        <p className="booking-date-label">Select Date</p>
        <input
          type="date"
          className="booking-date-input"
          min={today}
          value={booking.date}
          onChange={e => setBooking(b => ({ ...b, date: e.target.value }))}
        />
      </div>
    </>
  );
}

function Step4({ booking, onChange }) {
  return (
    <>
      <h3 className="booking-step-title">Your Details</h3>
      <p className="booking-step-subtitle">Complete your booking information</p>
      <div className="booking-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="b-name">Full Name *</label>
            <input
              type="text" id="b-name" name="name" required
              placeholder="Enter your full name"
              value={booking.contact.name} onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="b-email">Email Address *</label>
            <input
              type="email" id="b-email" name="email" required
              placeholder="Enter your email"
              value={booking.contact.email} onChange={onChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="b-phone">Phone Number *</label>
          <input
            type="tel" id="b-phone" name="phone" required
            placeholder="+234"
            value={booking.contact.phone} onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="b-desc">
            Brief Description{' '}
            <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>(Optional)</span>
          </label>
          <textarea
            id="b-desc" name="description" rows="4"
            placeholder="Brief description of your legal matter"
            value={booking.contact.description} onChange={onChange}
          />
        </div>
        <div className="booking-secure-box">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c4a36c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
          <div className="booking-secure-text">
            <strong>Secure Payment</strong>
            <span>Your payment will be processed securely</span>
          </div>
        </div>
      </div>
    </>
  );
}

function Step5({ booking }) {
  const formatDate = (d) => {
    if (!d) return '—';
    const [y, m, day] = d.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${parseInt(day)} ${months[parseInt(m) - 1]} ${y}`;
  };

  return (
    <>
      <h3 className="booking-step-title">Booking Summary</h3>
      <p className="booking-step-subtitle">Review your booking details before proceeding to payment</p>
      <div className="booking-summary">
        <div className="booking-summary-card">
          <p className="booking-summary-label">Consultation Type</p>
          <p className="booking-summary-value">
            {booking.consultationType === 'physical' ? 'Physical' : 'Online'}
          </p>
        </div>
        <div className="booking-summary-card">
          <p className="booking-summary-label">Selected Service</p>
          <div className="booking-summary-value">
            <span>{booking.servicePackage?.title || '—'}</span>
            {booking.servicePackage && (
              <span className="booking-summary-price">{booking.servicePackage.price}</span>
            )}
          </div>
        </div>
        <div className="booking-summary-card">
          <p className="booking-summary-label">Date</p>
          <p className="booking-summary-value">{formatDate(booking.date)}</p>
        </div>
        <div className="booking-summary-card">
          <p className="booking-summary-label">Contact Details</p>
          <div className="booking-summary-value booking-summary-contact">
            <p>{booking.contact.name}</p>
            <p>{booking.contact.email}</p>
            <p>{booking.contact.phone}</p>
            {booking.contact.description && (
              <p className="booking-summary-desc">{booking.contact.description}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const emptyBooking = {
  consultationType: null,
  servicePackage: null,
  date: '',
  contact: { name: '', email: '', phone: '', description: '' },
};

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState(emptyBooking);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setStep(1);
        setBooking(emptyBooking);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!isOpen) return null;

  const canContinue = () => {
    if (step === 1) return !!booking.consultationType;
    if (step === 2) return !!booking.servicePackage;
    if (step === 3) return !!booking.date;
    if (step === 4) return !!(booking.contact.name && booking.contact.email && booking.contact.phone);
    return true;
  };

  const handleNext = () => { if (canContinue()) setStep(s => s + 1); };
  const handleBack = () => setStep(s => s - 1);

  const handleContactChange = (e) => {
    setBooking(b => ({ ...b, contact: { ...b.contact, [e.target.name]: e.target.value } }));
  };

  const nextLabel = step === 4 ? 'Review Booking' : step === 5 ? 'Pay Now' : 'Continue';

  return (
    <div className="booking-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="booking-modal">
        <div className="booking-header">
          <h2 className="booking-title">Book Your Consultation</h2>
          <button className="booking-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        <StepIndicator current={step} />

        <div className="booking-body">
          {step === 1 && <Step1 booking={booking} setBooking={setBooking} />}
          {step === 2 && <Step2 booking={booking} setBooking={setBooking} />}
          {step === 3 && <Step3 booking={booking} setBooking={setBooking} />}
          {step === 4 && <Step4 booking={booking} onChange={handleContactChange} />}
          {step === 5 && <Step5 booking={booking} />}
        </div>

        <div className="booking-footer">
          {step > 1 ? (
            <button className="booking-btn-back" onClick={handleBack}>‹ Back</button>
          ) : (
            <div />
          )}
          <button
            className={`booking-btn-next${!canContinue() ? ' disabled' : ''}`}
            onClick={step === 5 ? onClose : handleNext}
            disabled={!canContinue()}
          >
            {nextLabel} ›
          </button>
        </div>
      </div>
    </div>
  );
}
