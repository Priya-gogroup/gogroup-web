import { createRef } from 'react';
import './home.scss';
import '../shared/grid.scss'
import MediaCard from '../shared/media-card/MediaCard';
import { Circle, Donut, SliderCircle, Spinner } from '../shared/usp-animations/UspAnimation';
import StickeyBoxes from '../shared/stickey-elemnts/StickeyBoxes';

const HomeComponent = () => {
    const introRef = createRef();
    const scrollToIntro = () => {
        window.location.hash = '#intro';
        introRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const setups = [
        {
            setUpName: 'Internal Setup:',
            title: 'Meet GoParts',
            setupLink: 'https://goparts.tech/',
            texts: [
                {
                    index: 1,
                    text: 'GoParts is our home-grown solution for the automotive aftermarket. We started GoParts within GoGroup, built the technology and brought the first customers aboard. By now we spun it out into a separate company. However we continue to build the entire technology and remain involved in all business related decisions.'
                },
                {
                    index: 2,
                    text: 'In a nutshell, GoParts is revolutionising the way car parts are ordered by workshops and insurances. Our product predicts the best possible car part for a particular car based on many inputs - reducing returns from over 20% to under 5%.'
                }
            ],
            imageUrl: `https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a192e81c79bfe1e0a04cd7_pexels-torsten-dettlaff-70912-p-500.jpeg`
        },
        {
            setUpName: 'Founder Setup:',
            title: 'Meet Trustspace',
            setupLink: 'https://www.trustspace.io/',
            texts: [
                {
                    index: 1,
                    text: 'Trustspace is our advance into the cybersecurity space. We initiated Trustspace together with two ambitious founders, working together every step of the way. We are building and scaling the technology team with GoGroup, and are supporting in strategic business decisions across Product, Marketing and Sales.'
                },
                {
                    index: 2,
                    text: 'Trustspace is building the Compliance-Automation solution for Europe. It enables companies of all sizes to protect their systems, processes and assets against threats. This helps companies to comply with industry standards and receive important certifications.'
                }
            ],
            imageUrl: `https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a195112a02f9d502889865_pexels-jack-sparrow-5918388-p-1080.jpeg`
        },
        {
            setUpName: 'Accelerator Setup:',
            title: 'Meet GoPuls',
            setupLink: 'https://www.first-a.de/',
            texts: [
                {
                    index: 1,
                    text: `GoPuls is revolutionising medicine delivery space in Europe. With their super strong team and deep industry expertise, they are a clear accelerator to build the venture up fast. While we didn't initiate the company, we partnered with the team from day 1 to grow the team together and build an amazing product and customer experience.`
                },
                {
                    index: 2,
                    text: 'GoPuls is delivering over the counter medication within just 30 minutes to end customers. To do that GoPuls is partnering with local pharmacies.'
                }
            ],
            imageUrl: `https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a33d71c5d9e5a94282a63b_pexels-polina-tankilevitch-3873209-p-1080.jpeg`
        }
    ]
    return (<>
            <div className="home-box container">
                <div className="left-intro">
                    <h2 className='title'>We build startups.</h2>
                    <p className='text-block'> <strong>Technology is at our core:</strong>  We love technology, we know technology, we live technology.<br/><br/>
                   <strong>Business is our passion:</strong> Together with founders, we bring startup ideas to life - across industries, regions and setups.</p>
                   <div className="btn-cont-blue">
                        <button onClick={scrollToIntro}> Let's build together </button>
                   </div>
                </div>
                <div className="side-img">
                    <img src="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a196882a02f99725889b23_pexels-ono-kosuki-5974352.jpg" loading="lazy" width="782" sizes="(max-width: 479px) 400px, 760px" srcSet="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a196882a02f99725889b23_pexels-ono-kosuki-5974352-p-500.jpeg 500w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a196882a02f99725889b23_pexels-ono-kosuki-5974352-p-800.jpeg 800w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a196882a02f99725889b23_pexels-ono-kosuki-5974352-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a196882a02f99725889b23_pexels-ono-kosuki-5974352-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a196882a02f99725889b23_pexels-ono-kosuki-5974352-p-2000.jpeg 2000w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a196882a02f99725889b23_pexels-ono-kosuki-5974352-p-2600.jpeg 2600w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a196882a02f99725889b23_pexels-ono-kosuki-5974352-p-3200.jpeg 3200w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a196882a02f99725889b23_pexels-ono-kosuki-5974352.jpg 6000w" alt=""/ >
                </div>
            </div>
            <div className="usps-cont" ref={introRef}>
                <div className="container">
                    <div className="box">
                        <Donut />
                        <h2 className='box-title'>Startup Mindset</h2>
                        <p className='box-desc'> We embrace a startup mindset in everything we do. This is what makes us special. We don't just think about tech we think about startup success. </p>
                    </div>
                    <div className="box">
                        <SliderCircle />
                        <h2 className='box-title'>Product Focused</h2>
                        <p className='box-desc'> We have a passion for startups and the products we develop. Therefore we are very much focused on the tech product and building it for the long-term.</p>
                    </div>
                    <div className="box">
                        <Spinner /> 
                        <h2 className='box-title'>Big Opportunities</h2>
                        <p className='box-desc'>We love diversification. It means we can go after very bold opportunities while still being protected. For our teams it means having full security while going big.</p>
                    </div>
                </div>
                
            </div>
            <div className="setups">
                <div className="container">
                    <h3 className='setup-title'>Success speaks louder than words</h3>
                    <p className='sub-header'>Meet some of the companies we (helped) build and our setups to do it.</p>
                    { setups.map(setup => <MediaCard key={setup.setUpName} setupName={setup.setUpName} title={setup.title} texts={setup.texts} imageUrl={setup.imageUrl}  setUpLink={setup.setupLink} />) }
                    <div className='btn-cont-dark'>
                        <a href='#' ><button>GET IN TOUCH NOW</button></a>
                    </div>
                </div>
            </div>
            <div className="international-cont">
                <div className="container">
                    <div className="box-cont">
                        <div className="box">
                            <h2 className='header'> We are international </h2>
                            <p className='text-block sub-header'> We believe in bringing the world closer together </p>
                            <br/>
                            <div className='text-block'>
                                With offices in Berlin, New Delhi, London, Kathmandu, Barcelona we are present around the globe. And yes, we are of course also working remotely. So basically the world is our oyster.
                            </div><br/><br/>
                            <div className='text-block'>
                                Exciting opportunities are happening everywhere, so we are there.
                            </div><br/><br/>
                            <div className='text-block'>
                                And it goes beyond just office locations. With 10+ different nationalities on the team, we embrace an international culture.
                            </div>
                            <div className="btn-cont-light">
                                <a href='#' > <button> GET IN TOUCH NOW</button> </a>
                            </div>
                        </div>
                        <div className="box img-cont">
                            <img src="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1c2aeaf3ba425fd05e0cf_pexels-pixabay-41953.jpg" loading="lazy" sizes="(max-width: 767px) 250px, (max-width: 991px) 300px, 440px" width="440" srcSet="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1c2aeaf3ba425fd05e0cf_pexels-pixabay-41953-p-500.jpeg 500w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1c2aeaf3ba425fd05e0cf_pexels-pixabay-41953-p-800.jpeg 800w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1c2aeaf3ba425fd05e0cf_pexels-pixabay-41953-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1c2aeaf3ba425fd05e0cf_pexels-pixabay-41953-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1c2aeaf3ba425fd05e0cf_pexels-pixabay-41953-p-2000.jpeg 2000w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1c2aeaf3ba425fd05e0cf_pexels-pixabay-41953.jpg 2048w" alt="globe" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="work-way-cont container">
                <div className="box sticky-box">
                    <div className="title">The ways we work</div>
                </div>
                <div className="box">
                    <StickeyBoxes />
                </div>
            </div>
            <div className="label-thing">
                <div className="container">
                    
                </div>
            </div>
    </>)
}

export default HomeComponent;