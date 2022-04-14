import {useState, useEffect, useRef} from 'react';
import useOnScreen from "./useOnScreen";

const useAnimation = () => {
    const refAnimation = useRef(null);
    const isVisible = useOnScreen(refAnimation);
    return [
        refAnimation,
        isVisible,
    ]
};

export default useAnimation;
