import { createRef } from 'react';
import './home.scss';
import '../shared/grid.scss'
import MediaCard from '../shared/media-card/MediaCard';
import { Circle, Donut, SliderCircle, Spinner } from '../shared/usp-animations/UspAnimation';
import StickeyBoxes from '../shared/stickey-elemnts/StickeyBoxes';
import AnimatedCont from '../shared/AnimatedCont';
import FaqComponent from '../shared/Faq/Faq';

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
    const faqs = [
        {
            index: 1,
            ques: "What if I don't have a startup idea yet?",
            ans: "That's okay! We do have an idea bank of ideas we can pitch to you, and if you want to come up with on on your own, we will help you do that."
        },
        {
            index: 2,
            ques: "Where are you located?",
            ans: "All over! Our team is spread out around the world, from Germany, Spain, and the UK all the way to India. Communication is no issue for us, and neither are timezones."
        },
        {
            index: 3,
            ques: "How can I can contact you?",
            ans: "Click on the envelope icon in the top right corner! As soon as you submit your request, we'll review it and get back to you as soon as possible!"
        },
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
                <AnimatedCont>
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
                </AnimatedCont>
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
                <AnimatedCont>
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
                </AnimatedCont>
            </div>
            <AnimatedCont>
                <div className="work-way-cont container">
                    <div className="box sticky-box">
                        <div className="title">The ways we work</div>
                    </div>
                    <div className="box">
                        <StickeyBoxes />
                    </div>
                </div>
            </AnimatedCont>
            
            <div className="label-thing">
                <AnimatedCont>
                    <div className="container">
                        <div className="box-cont">
                            <div className="box img-cont">
                                <img src="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1bbbc1410ea2a06db300f_pexels-miguel-a%CC%81-padrin%CC%83a%CC%81n-1111316.jpg" loading="lazy" sizes="(max-width: 479px) 84vw, (max-width: 991px) 47vw, 400px" width="400" height='602' srcSet="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1bbbc1410ea2a06db300f_pexels-miguel-a%CC%81-padrin%CC%83a%CC%81n-1111316-p-500.jpeg 500w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1bbbc1410ea2a06db300f_pexels-miguel-a%CC%81-padrin%CC%83a%CC%81n-1111316-p-800.jpeg 800w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1bbbc1410ea2a06db300f_pexels-miguel-a%CC%81-padrin%CC%83a%CC%81n-1111316-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1bbbc1410ea2a06db300f_pexels-miguel-a%CC%81-padrin%CC%83a%CC%81n-1111316-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1bbbc1410ea2a06db300f_pexels-miguel-a%CC%81-padrin%CC%83a%CC%81n-1111316-p-2000.jpeg 2000w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1bbbc1410ea2a06db300f_pexels-miguel-a%CC%81-padrin%CC%83a%CC%81n-1111316-p-2600.jpeg 2600w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1bbbc1410ea2a06db300f_pexels-miguel-a%CC%81-padrin%CC%83a%CC%81n-1111316-p-3200.jpeg 3200w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1bbbc1410ea2a06db300f_pexels-miguel-a%CC%81-padrin%CC%83a%CC%81n-1111316.jpg 4000w" alt="label"/>
                            </div>
                            <div className="box">
                                <h2 className='header'>The "label-thing"</h2>
                                <p className="text-block"> 
                                    Some people call us an agency. We are not. <br/>
                                    Some people call us a VC. We are not. <br/>
                                    Some people call us services. We are not.  <br/>
                                    Some people call us an accelerator. We are not. <br/>
                                    Some people call us awesome. Well, that we are. <br/>
                                </p>
                                <div className="text-block">
                                    <p>
                                        There are many things people call us. <br/> We call ourselves a <strong>Startup Studio</strong>.
                                    </p>
                                </div>
                                <div className="text-block">
                                    <p>
                                        Whatever you want to call us, it doesn't matter.<br/> What actually matters is:
                                    </p>
                                </div>
                                <div className="text-block">
                                    <p className="text-block"> 
                                        We are building startups. Successfully. <br/>
                                        We are dedicated to our team. Whole heartedly. <br/>
                                        We are a very secure place to work. Happily. <br/>
                                        We are having fun along the way. Always. <br />
                                    </p>
                                </div>
                                <div className="btn-cont-light">
                                    <a href='#' > <button> GET IN TOUCH NOW</button> </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </AnimatedCont>
            </div>

            <div className="focus">
                <div className="container">
                    <MediaCard key='Focus-and-dedication' setupName='Full Focus & Dedication.' title='' texts={[{text :`We believe that focus and passion is the basis for building successful ventures. Therefore each of our team members works with full dedication on one venture - exclusively.`, index:'focus-1'},{text:`With that everyone can develop a passion and a deep understanding for the product and venture. From what we saw so far, this is what fosters a great culture and mindset in the team and team-members can grow best on a personal level`, index:'focus-2'}]} imageUrl='https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1bc9a16a1ef26c7f0ecf9_pexels-sohel-patel-1804035-p-1080.jpeg'  setUpLink='' button='GET IN TOUCH NOW' buttonClass='btn-cont-dark-blue' link='#' />
                </div>
            </div>
            <div className="international-cont hand-in-hand">
                <AnimatedCont>
                    <div className="container">
                        <div className="box-cont">
                            <div className="box img-cont">
                                <img src="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1bb0c5f135f3f6e7bdc98_pexels-anna-shvets-6250932.jpg" loading="lazy" sizes="(max-width: 479px) 83vw, (max-width: 767px) 200px, (max-width: 991px) 300px, 450px" width="450" height='675' srcSet="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1bb0c5f135f3f6e7bdc98_pexels-anna-shvets-6250932-p-500.jpeg 500w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1bb0c5f135f3f6e7bdc98_pexels-anna-shvets-6250932-p-800.jpeg 800w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1bb0c5f135f3f6e7bdc98_pexels-anna-shvets-6250932-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1bb0c5f135f3f6e7bdc98_pexels-anna-shvets-6250932-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1bb0c5f135f3f6e7bdc98_pexels-anna-shvets-6250932-p-2000.jpeg 2000w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1bb0c5f135f3f6e7bdc98_pexels-anna-shvets-6250932-p-2600.jpeg 2600w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1bb0c5f135f3f6e7bdc98_pexels-anna-shvets-6250932-p-3200.jpeg 3200w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a1bb0c5f135f3f6e7bdc98_pexels-anna-shvets-6250932.jpg 4021w" alt="pexels-anna-shvets"/>
                            </div>

                            <div className="box">
                                <h2 className='header'> At GoGroup, business and tech go hand in hand. </h2>
                                
                                <div className='text-block'>
                                    Amazing companies need strong tech from day 1. That's why we believe in teaming up founders and tech engineers to realise big opportunities. That way you work together right from the start and grow the company together to unicorn status and beyond - independent of the setup.
                                </div><br/><br/>
                                <div className='text-block'>
                                    Our goal is to bring together amazing founders and amazing tech engineers, so that they can form a team for the longterm to build and scale companies and products.
                                </div><br/><br/>
                                <div className='text-block'>
                                Because when bringing together amazing founders and amazing engineers, magic happens. That's when 1+1 equals unicorn.
                                </div>
                                <div className="btn-cont-light">
                                    <a href='#' > <button> GET IN TOUCH NOW</button> </a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </AnimatedCont>
            </div>
            <AnimatedCont>
                <div className="ecosystem-cont">
                    <div className="container">
                        <div className="cont">
                            <div className="picture-grid-container">
                            <div>
                                <img  src="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594aab30de5f8_7.png" width="333.5" alt=""  sizes="(max-width: 479px) 49vw, (max-width: 1439px) 25vw, (max-width: 1919px) 333.5px, 280.8125px" data-w-id="de243771-58b5-413c-a959-99e364408cf0" loading="lazy" srcSet="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594aab30de5f8_7-p-500.png 500w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594aab30de5f8_7-p-800.png 800w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594aab30de5f8_7.png 1080w"/>
                                <br/>
                                <img  src="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e5946dd50de5f2_5.png" width="333.5" alt=""  sizes="(max-width: 479px) 49vw, (max-width: 1439px) 25vw, (max-width: 1919px) 333.5px, 280.8125px" data-w-id="de243771-58b5-413c-a959-99e364408cf1" loading="lazy" srcSet="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e5946dd50de5f2_5-p-500.png 500w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e5946dd50de5f2_5-p-800.png 800w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e5946dd50de5f2_5.png 1080w" />
                            </div>
                            
                            <div className="picture-grid-column">
                                <img  src="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59402990de5f6_HIghest%20possible%20gro.png" width="333.5" alt=""  sizes="(max-width: 479px) 51vw, (max-width: 1439px) 26vw, (max-width: 1919px) 333.5px, 291.59375px" data-w-id="de243771-58b5-413c-a959-99e364408cf3" loading="lazy" srcSet="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59402990de5f6_HIghest%2520possible%2520gro-p-500.png 500w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59402990de5f6_HIghest%2520possible%2520gro-p-800.png 800w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59402990de5f6_HIghest%20possible%20gro.png 1080w"/>
                            </div>
                            </div>
                            <div className="ecosystem-desc">
                                <h2 className="title">Grow with our unique ecosystem</h2>
                                <p className="text-block">Through our proven and successful ecosystem of founders, tech engineers, product managers, designers, and more, we can build the right path for you and grow together successfully for the long term.</p>
                                <p className="text-block">Let's connect, so you can learn more.</p>
                                <div className="btn-cont-dark-blue">
                                    <a href='#'>
                                        <button>GET IN TOUCH NOW</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </AnimatedCont>
            <AnimatedCont>
                <div className="blue-bg">
                    <div className="container">
                        <div className="mentorship-cont">
                            <div className="box">
                                <h2 className='title'>Mentorship Opportunities</h2>
                                <p className='text-block'>At GoGroup, we take pride in our ever-growing team of talented and inspiring people! This is also a great opportunity for you to tap into their skills and experience to accelerate your personal growth.</p>
                            </div>
                            <div className="box">
                                <img src="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594238e0de5f7_1.png" loading="lazy" sizes="(max-width: 767px) 350px, 360px" width="360" height='360' srcSet="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594238e0de5f7_1-p-500.png 500w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594238e0de5f7_1-p-800.png 800w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594238e0de5f7_1.png 1080w" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedCont>
            <AnimatedCont>
                    <FaqComponent faqList={faqs} />
            </AnimatedCont>
            <div className="international-cont">
                <AnimatedCont>
                    <div className="container">
                        <div className="box-cont">
                            <div className="box">
                                <h2 className='header'> Are you looking for an opportunity to take your career to the next level? </h2>
                                <br/>
                                <div className='text-block'>
                                    We are always looking for individuals who are passionate about building the future. Learn more about what positions are availble and what it is like to work at GoGroup.
                                </div>
                                <div className="btn-cont-light lh-25">
                                    <a href='#' > <button> FIND OUT MORE</button> </a>
                                </div>
                            </div>
                            <div className="box img-cont">
                                <img src="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a26cab53db6e56d5715c6c_Black%20Welcome%20to%20the%20Team%20Greeting%20Instagram%20Post%20(2).png" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 500px, (max-width: 991px) 364px, 470px" srcSet="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a26cab53db6e56d5715c6c_Black%20Welcome%20to%20the%20Team%20Greeting%20Instagram%20Post%20(2)-p-500.png 500w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a26cab53db6e56d5715c6c_Black%20Welcome%20to%20the%20Team%20Greeting%20Instagram%20Post%20(2)-p-800.png 800w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a26cab53db6e56d5715c6c_Black%20Welcome%20to%20the%20Team%20Greeting%20Instagram%20Post%20(2).png 1080w" alt=""/>
                            </div>
                        </div>
                    </div>
                </AnimatedCont>
            </div>
    </>)
}

export default HomeComponent;