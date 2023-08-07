import { useEffect, useRef, useState } from "react";
import './animation-cont.scss';
const AnimatedCont = ({children}) => {
    const animatedContRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const top = animatedContRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
    
        if (top < windowHeight * 0.8) {
          setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            ref={animatedContRef}
            className={`animated-ease-div ${isVisible ? 'visible' : ''}`}
        >
            {children}
        </div>
    )
}

export default AnimatedCont;