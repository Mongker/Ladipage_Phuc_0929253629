import { useState, useEffect } from 'react';

let timeout = null;
const useOnScreen = (ref, rootMargin = '0px', time = 0) => {
    const [isVisible, _setIsVisible] = useState(false);

    const setIsVisible = (value) => {
        timeout = setTimeout(() => {
            _setIsVisible(value);
        }, time);
    };
    useEffect(() => {
        return () => {
            clearTimeout(timeout);
        };
    }, []);
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
