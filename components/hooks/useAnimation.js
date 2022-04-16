import { useState, useEffect, useRef } from 'react';
import useOnScreen from './useOnScreen';

const useAnimation = (time) => {
    const refAnimation = useRef(null);
    const isVisible = useOnScreen(refAnimation, '0px', time);
    return [refAnimation, isVisible];
};

export default useAnimation;
