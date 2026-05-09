import { useEffect, useCallback, useState } from 'react';

export function useFadeUp(threshold = 0.08) {
  const [isVisible, setIsVisible] = useState(false);
  const [element, setElement] = useState(null);

  const callbackRef = useCallback((node) => {
    setElement(node);
  }, []);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [element, threshold]);

  return { callbackRef, isVisible };
}
