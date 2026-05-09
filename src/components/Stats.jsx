import { useEffect, useState } from 'react';
import { useFadeUp } from '../hooks/useFadeUp';
import { stats as statsData } from '../data/siteData';

function CountUp({ endString, isVisible }) {
  const [count, setCount] = useState(0);

  const numMatch = endString.match(/[\d,]+/);
  const endValue = numMatch ? parseInt(numMatch[0].replace(/,/g, ''), 10) : 0;
  const suffix = endString.replace(/[\d,]+/, '');

  useEffect(() => {
    if (!isVisible || endValue === 0) return;

    let startTime;
    const duration = 2000;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(endValue * easeOut));

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isVisible, endValue]);

  const formattedCount = new Intl.NumberFormat().format(count);

  return (
    <>{formattedCount}{suffix}</>
  );
}

export default function Stats() {
  const { callbackRef, isVisible } = useFadeUp(0.5); // Use higher threshold so it starts when more visible

  return (
    <section className="stats">
      <div className="container">
        <div ref={callbackRef} className={`stats-grid fade-up ${isVisible ? 'visible' : ''}`}>
          {statsData.map((s) => (
            <div className="stat-item" key={s.label}>
              <h3 className="stat-number">
                <CountUp endString={s.number} isVisible={isVisible} />
              </h3>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
