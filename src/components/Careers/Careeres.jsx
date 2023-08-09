import { createRef, useState } from 'react';
import { Donut } from '../shared/usp-animations/UspAnimation';
import './careeres.scss';
import AnimatedCont from '../shared/AnimatedCont';
import MediaCard from '../shared/media-card/MediaCard';
import TechCarousel from '../shared/TechCarousel/TechCarousel';

const CareeresComponent = () => {
    const introRef = createRef(null);
    const [showdesc1, setShowDesc1] = useState(false);
    const [showdesc2, setShowDesc2] = useState(false);
    const [showdesc3, setShowDesc3] = useState(false);
    const scrollToIntro = () => {
        window.location.hash = '#intro';
        introRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const imageList = [
        'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59439cb0de601_Ruby_On_Rails_Logo.svg-p-500.png',
        'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594257d0de60a_1280px-Node.js_logo.svg-p-500.png',
        'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e5945d3e0de603_1200px-Amazon_Web_Services_Logo.svg-p-500.png',
        'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594a9b00de614_2048px-Unofficial_JavaScript_logo_2.svg-p-500.png',
        'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e5947c9b0de608_2560px-Twilio-logo-red.svg-p-500.png',
        'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59433920de60c_3-p-500.png',
        'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e5943a960de607_CSS3_logo_and_wordmark.svg-p-500.png',
        'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594f54f0de602_512px-HTML5_logo_and_wordmark.svg.png',
        'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e5943e7a0de605_social-icon-google-cloud-1200-630-p-500.png',
        'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59428f60de604_Angular_full_color_logo.svg.png',
        'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594327d0de611_2560px-Django_logo.svg-p-500.png',
        'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59466db0de60b_Gatsby_Logo-p-500.png',
        'https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59405300de60f_HIghest%2520possible%2520gro-p-500.png'
    ]
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
                <TechCarousel imageList={imageList}/>
            </div>
        </div>
        <div className="glassdoor-rating">
            <div className="image-bg"></div>
            <div className="rating">
                <img src='https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62989a7df0afc0b02b2db1ab_Untitled%20design.gif' />
            </div>
        </div>
        <div className="values-cont">
            <h3 className='title'>Our Values</h3>
            <div className="row grid-cont">
                <div className="col-md-4 box">
                    <div className="img-flex-box">
                        <img src="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594612f0de580_Triangle_large_blue.png" loading="lazy" width="20" alt=""/>
                        <img src="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e5947dfe0de571_Triangle_inverted_yellow.png" loading="lazy" width="20" alt=""></img>
                    </div>
                    <div className="text-box">
                        <h4 className='text-title'>Supporting Growth</h4>
                        <p className="text-block">As we grow, we want you to grow too. Therefore, we invest in the development of both our teams and each individual team member. Our team leads are great mentors, and we offer learning opportunities to all our employees.</p>
                    </div>
                </div>
                <div className="col-md-4 box">
                    <div className="img-flex-box">
                        <img src="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594df110de527_Triangle_green.png" loading="lazy" width="20" alt=""/>
                        <div className="small-blue"></div>
                    </div>
                    <div className="text-box">
                        <h4 className='text-title'>People-first</h4>
                        <p className="text-block">People are at the core of everything we do. All opportunities start with people and all decisions start with people. We make sure our teams are always taken care of, and are able to balance their work and personal life.</p>
                    </div>
                </div>
                <div className="col-md-4 box">
                    <div className="img-flex-box">
                        <div className="semi-circle"></div>
                        <img src="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59404d40de53b_Triangle_yellow.png" loading="lazy" width="20" alt=""/>
                    </div>
                    <div className="text-box">
                        <h4 className='text-title'>Long Term Thinking</h4>
                        <p className="text-block">We all share a passion for speed in our execution. At the same time our focus is on the long term. We want to make sure we are successful and happy together in the long-term.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="glassdoor-rating oyster-cont">
            <div className="image-bg"></div>
            <div className="rating">
                <div className="card">
                    <h3 className="title">The world is our oyster</h3>
                    <p className="text-block">GoGroup is an international company. We have offices in both Berlin and Delhi, and have employees working remotely from the rest of India, Nepal, and the UK. We tackle opportunities in various markets, staying true to local culture and traditions.</p>
                </div>
            </div>
        </div>
        <div className="founder-cont">
            <div className="container">
                <h2 className="title">Meet our founders</h2>
                <div className="row">
                    <div className="col-md-4">
                        <AnimatedCont>
                            <a href="https://de.linkedin.com/in/nicoweiler" target="_blank" class="w-inline-block"><img src="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a73d634349165d4cfb02f2_10.png" sizes="(max-width: 479px) 100vw, (max-width: 991px) 28vw, (max-width: 1279px) 29vw, 310.5px" srcset="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a73d634349165d4cfb02f2_10-p-500.png 500w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a73d634349165d4cfb02f2_10-p-800.png 800w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a73d634349165d4cfb02f2_10.png 1080w" loading="lazy" alt=""/></a>
                        </AnimatedCont>
                        <AnimatedCont>
                            <h3 className="name">Nico Weiler</h3>
                        </AnimatedCont>
                    </div>
                    <div className="col-md-4">
                        <AnimatedCont>
                        <a href="https://www.linkedin.com/in/shishirgoel/" target="_blank" class="w-inline-block"><img src="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a73d7e5e886842fe4be29c_9.png" sizes="(max-width: 479px) 100vw, (max-width: 991px) 28vw, (max-width: 1279px) 29vw, 310.5px" srcset="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a73d7e5e886842fe4be29c_9-p-500.png 500w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a73d7e5e886842fe4be29c_9-p-800.png 800w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a73d7e5e886842fe4be29c_9.png 1080w" alt=""/></a>
                        </AnimatedCont>
                        <AnimatedCont>
                            <h3 className="name">Shishir Goel</h3>
                        </AnimatedCont>
                    </div>
                    <div className="col-md-4">
                        <AnimatedCont>
                        <a href="https://de.linkedin.com/in/saschaweiler1" target="_blank" class="w-inline-block"><img src="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a73d88a43450e7b8235edc_11.png" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 991px) 28vw, (max-width: 1279px) 29vw, 310.5px" srcset="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a73d88a43450e7b8235edc_11-p-500.png 500w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a73d88a43450e7b8235edc_11-p-800.png 800w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a73d88a43450e7b8235edc_11.png 1080w" alt=""/></a>
                        </AnimatedCont>
                        <AnimatedCont>
                            <h3 className="name">Sascha Weiler</h3>
                        </AnimatedCont>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default CareeresComponent;