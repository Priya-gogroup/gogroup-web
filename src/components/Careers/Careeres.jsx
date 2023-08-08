import { createRef, useState } from 'react';
import { Donut } from '../shared/usp-animations/UspAnimation';
import './careeres.scss';
import AnimatedCont from '../shared/AnimatedCont';
import MediaCard from '../shared/media-card/MediaCard';

const CareeresComponent = () => {
    const introRef = createRef(null);
    const [showdesc1, setShowDesc1] = useState(false);
    const [showdesc2, setShowDesc2] = useState(false);
    const [showdesc3, setShowDesc3] = useState(false);
    const scrollToIntro = () => {
        window.location.hash = '#intro';
        introRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const handleToggle = (func, name) => {
        console.log(func,name)
        func(!name)
    }
    return (<>
        <div className="banner">
            <div className="box career-intro">
                <div className="flex">
                    <Donut hoverClass='donut'/>
                    <Donut hoverClass='donut'/>
                </div>
                <h1 className='title'>Enabling the best tech talent to access massive opportunities from day one</h1>
                <div className="btn-cont-blue">
                    <button onClick={scrollToIntro}>GET STARTED </button>
                </div>
            </div>
            
            <div className="box image-cont">
                <img src="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a732dcb8db26b5b27074a3_Black%20Welcome%20to%20the%20Team%20Greeting%20Instagram%20Post%20(5).png" loading="lazy" width="660" height='660' sizes="(max-width: 479px) 100vw, (max-width: 767px) 53vw, (max-width: 1279px) 55vw, 660px" srcSet="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a732dcb8db26b5b27074a3_Black%20Welcome%20to%20the%20Team%20Greeting%20Instagram%20Post%20(5)-p-500.png 500w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a732dcb8db26b5b27074a3_Black%20Welcome%20to%20the%20Team%20Greeting%20Instagram%20Post%20(5)-p-800.png 800w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a732dcb8db26b5b27074a3_Black%20Welcome%20to%20the%20Team%20Greeting%20Instagram%20Post%20(5).png 1080w" alt="banner"/>
            </div>
        </div>
        <div className="vision-box">
            <div className="container" ref={introRef}>
                <div className="header-box">
                    <h2 className="title mb-0">Our Vision</h2>
                    <p className="text-block mt-0">We aim to bring together the best tech engineers and the strongest founders to create amazing companies that are built to last.</p>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <AnimatedCont>
                            <h3 className="title">Business</h3>
                            <p className="text-block">We work with amazing founders on the business side to identify and validate the best ideas and build them up into market-leading tech product companies.</p>
                        </AnimatedCont>
                    </div>
                    <div className="col-md-5">
                        <AnimatedCont>
                            <h3 className="title">Tech</h3>
                            <p className="text-block">We ensure our amazing engineers can get involved with developing strong products with their teams from day 1. Our tech teams each develop individual products, and our engineers support each other in finding the best possible solutions.</p>
                        </AnimatedCont>
                    </div>
                </div>
            </div>
        </div>
        <div className="bordered-cont">
            <div className="container">
                <div className="mission-cont">
                    <MediaCard setupName='Our Mission' title='' texts={[
                    { text: 'We aspire to expand our ecosystem of tech engineers, product managers, and founders who believe in bringing ideas to life and building them up for the long-term.',index: 1},{ text: "At GoGroup, everyone is focused on building a product together with their team. But the growth doesn't stop there. Our team profits from our unique ecosystem as we develop amazing products across several ventures and partnerships", index: 2}]} imageUrl='https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59465400de5d2_5.png'  setUpLink='' />
                </div>
                
            </div>
        </div>
        <AnimatedCont>
            <div className="benefit-cont">
                <div className="container">
                    <h2 className="title">What this means for you</h2>
                    <div className="row benefit-boxes">
                        <div className="col-md-4">
                            <div className="box blue-box">
                                { !showdesc1 ? <h3 className="text">Highest possible growth opportunity.</h3> :  <p className='text-block'>You get to work with high growth product companies from the early days. Getting in on the ground floor means that you will learn much faster and broader compared to "normal" opportunities. You will also have peers and mentors from your own and other GoGroup companies, who you can learn from to accelerate your growth</p>}
                            </div>
                            
                            <div className="flex-blue ">
                                <div className="triangle"></div>
                                <div className="next-btn" onClick={() => {setShowDesc1(!showdesc1)}}></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box blue-box">
                                { !showdesc2 ? <h3 className="text">Highest possible job security.</h3> :  <p className='text-block'>With GoGroup you will never start from scratch again. You will be working and growing with one of our amazing companies. At the same time you can rely on the strength of all our companies. You can be sure that you will always be able to grow seamlessly within our group of amazing companies.</p>}
                            </div>
                            
                            <div className="flex-blue ">
                                <div className="triangle"></div>
                                <div className="next-btn" onClick={() => {setShowDesc2(!showdesc2)}}></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box blue-box">
                                { !showdesc3 ? <h3 className="text">Challenging & fulfilling work.</h3> :  <p className='text-block'>With our companies we are solving big challenges. This means that you will also get to work on interesting technologies and a broad range of topics. This is rounded up with a driven peer group ready to tackle anything and to help each other succeed.</p>}
                            </div>
                            
                            <div className="flex-blue ">
                                <div className="triangle"></div>
                                <div className="next-btn" onClick={() => {setShowDesc3(!showdesc3)}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedCont>
        <div className="technology-cont">
            <div className="container">
                <h3 className="tech-title">We work with a variety of technology</h3>
            </div>
        </div>
    </>)
}

export default CareeresComponent;