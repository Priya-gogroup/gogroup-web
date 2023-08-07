import { useEffect, useState } from 'react';
import './scroll-to-top.scss';

const ToptoBottom = () => {
    const [showButton, setShowButton] = useState(false);
    const handleScroll = () => {
        const scrollThreshold = 300;
        const currentScroll = window.pageYOffset;
        setShowButton(currentScroll > scrollThreshold);
    };
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (<>
        <div className="toptobottom" onClick={scrollToTop}>
        </div>
    </>)
}

export default ToptoBottom;