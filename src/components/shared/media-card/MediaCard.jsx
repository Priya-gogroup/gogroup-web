import { useEffect, useRef, useState } from 'react';
import './media-card.scss';
import '../grid.scss';

const MediaCard = ({setupName, title, texts, imageUrl, button="", link="", buttonClass="", setUpLink=""}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
              // When the element becomes visible (enters the viewport)
              if (entry.isIntersecting) {
                setIsVisible(true);
              }
            },
            {
              root: null,
              rootMargin: '0px',
              threshold: 0.5, // Adjust this threshold to control when the animation triggers
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
      
          // Cleanup the observer when the component unmounts
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    },[])
    return (<>
            <div ref={ref} className={`grid-box animated-div ${isVisible ? 'visible' : ''}`}>
                <div className="box">
                    <h2 className='setup-name'>{setupName}</h2>
                    <p className='title'> <a href={setUpLink} target='blank'>{title}</a>  </p>
                    {
                        texts.map(text => {
                            return <p key={text.index} className='text'>{text.text}</p>
                        })
                    }
                    { link && <div className={buttonClass}> <a href={link}><button> {button} </button></a> </div> }
                </div>
                <div className="box image-cont">
                    <img src={imageUrl} alt='image-url' />
                </div>
            </div>
    </>)
}

export default MediaCard;