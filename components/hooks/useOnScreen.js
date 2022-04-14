import { useState, useEffect } from 'react';

const useOnScreen = (ref, rootMargin = '0px') => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting && setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin,
      },
    );

    const currentElement = ref?.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      observer.unobserve(currentElement);
    };
  });

  return isVisible;
};

export default useOnScreen;
