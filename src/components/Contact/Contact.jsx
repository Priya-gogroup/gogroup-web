import { useState } from 'react';
import { SliderCircle } from '../shared/usp-animations/UspAnimation';
import './contact.scss';
import { useRef } from 'react';

const ContactUs = () => {
    const engineerRef = useRef(null);
    const founderRef = useRef(null);
    const [engineerForm, setEngineerForm] = useState({
        name: '',
        phone: '',
        email: '',
        desc: ''
    })
    const [founderForm, setFounderForm] = useState({
        name: '',
        last_name: '',
        email: '',
        idea:'',
        desc: ''
    })

    const handleEngineerForm = (event) => {
        setEngineerForm({
                ...engineerForm,
            [event.target.name] : event.target.value}
        )
    }
    const handlefounderForm = (event) => {
        console.log(event.target.value,event.target.name,'event')
        setFounderForm({
                ...founderForm,
            [event.target.name] : event.target.value}
        )
    }

    const submitEngineerForm = () => {
        console.log(engineerForm,'eng')
    }
    const submitFounderForm = () => {
        console.log(founderForm,'founder')
    }
    const scrollToview = (ref,hashName) => {
        console.log(ref)
        window.location.hash = `#${hashName}`;
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <>
            <div className="top-container">
                <img src="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59475be0de5ef_5.png" loading="lazy" width="316" sizes="316px" srcSet="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59475be0de5ef_5-p-500.png 500w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59475be0de5ef_5-p-800.png 800w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59475be0de5ef_5-p-1080.png 1080w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59475be0de5ef_5-p-1600.png 1600w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59475be0de5ef_5.png 2000w" alt="" className='left-img' />
                <div className="contact-container">
                    <h2 className="title">Contact us!</h2>
                    <p className="text-block">We are actively looking for both founders with groundbreaking ideas, and engineers with the skills and expertise to build them.</p>
                    <div className="cont">
                        <button className="button-blue engineer-btn" onClick={() => scrollToview(engineerRef,'Engineer')}>I'M AN ENGINEER</button><br/>
                        <button className="button-blue founder-btn"  onClick={() => scrollToview(founderRef,'Founder')}>I'M A FOUNDER</button>
                    </div>
                </div>
                <img src="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594454d0de5e9_6.png" loading="lazy" width="316" sizes="316px" srcSet="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594454d0de5e9_6-p-500.png 500w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594454d0de5e9_6-p-800.png 800w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594454d0de5e9_6-p-1080.png 1080w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594454d0de5e9_6-p-1600.png 1600w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594454d0de5e9_6.png 2000w" alt="" className='right-img' />
            </div>
            <div className="middle-container" ref={engineerRef}>
                <div className="box">
                    <SliderCircle />
                    <h2 className="title">Do you want to build the future with us?</h2>
                    <p className="text-block">Send us your details and we will be in touch.</p>
                    <div className="form-cont">
                        <div className="flex-box">
                            <input type='text' maxLength='256' name="name" placeholder="Your Name" value={engineerForm.name} onChange={(e) => handleEngineerForm(e)}/>
                            <input type='tel' maxLength='256' name="phone" placeholder="Phone Number" value={engineerForm.phone} onChange={(e) => handleEngineerForm(e)}/>
                        </div>
                        <div className="flex-box">
                            <input type='email' className='width-100' name='email' maxLength='256' placeholder='Your Email' value={engineerForm.email} onChange={(e) => handleEngineerForm(e)} />
                        </div>
                        <div className="flex-box">
                            <textarea type="text" value={engineerForm.desc} className='width-100' name='desc' maxLength='5000' placeholder='Share your LinkedIn or Website' onChange={(e) => handleEngineerForm(e)}/>
                        </div>
                        <div className="flex-box">
                            <button type='submit' className='width-100 submit-btn' onClick={submitEngineerForm}>Submit!</button>
                        </div>
                        <p className='text-block'>Simply fill the form out and we'll reach out to you!</p>
                    </div>
                </div>
                <div className="box">
                    <p className="text-block align-center">At GoGroup, you will get the chance to work on projects for the long term. Here is what our engineers value about working at GoGroup:</p>
                    <img src="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594850e0de5f5_chart.png" loading="lazy" sizes="(max-width: 479px) 85vw, (max-width: 767px) 50vw, (max-width: 991px) 35vw, (max-width: 1439px) 36vw, (max-width: 1919px) 516.25px, 535px" srcSet="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594850e0de5f5_chart-p-500.png 500w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594850e0de5f5_chart-p-800.png 800w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e594850e0de5f5_chart.png 1080w" alt="value-pie"></img>
                </div>
            </div>
            <div className="bottom-container" ref={founderRef}>
                <div className="box">
                    <SliderCircle />
                    <h2 className="title">Let’s get in touch!</h2>
                    <p className="text-block">Tells us a bit about yourself and your venture idea and we'll reach out to you.</p>
                    <div className="form-cont">
                        <div className="flex-box">
                            <input type='text' maxLength='256' name="name" placeholder="Your Name" value={engineerForm.name} onChange={(e) => handlefounderForm(e)}/>
                            <input type='text' maxLength='256' name="last_name" placeholder="Last Name" value={engineerForm.name} onChange={(e) => handlefounderForm(e)}/>
                        </div>
                        <div className="flex-box">
                            <input type='email' name='email' maxLength='256' placeholder='Your Email' value={engineerForm.email} onChange={(e) => handlefounderForm(e)} />
                            <input type='text' maxLength='256' name="idea" placeholder="Your Venture Idea" value={engineerForm.name} onChange={(e) => handlefounderForm(e)}/>
                        </div>
                        <div className="flex-box">
                            <textarea type="text" value={engineerForm.desc} className='width-100' name='desc' maxLength='5000' placeholder='Tell us about yourself...' onChange={(e) => handlefounderForm(e)}/>
                        </div>
                        <div className="flex-box">
                            <button type='submit' className='width-100 submit-btn' onClick={submitFounderForm}>Submit!</button>
                        </div>
                        <p className='text-block'>Simply fill the form out and we'll reach out to you!</p>
                    </div>
                </div>
                <div className="box">
                    <p className="text-block align-center">Get in touch to find out how we can get your company idea up and running! Here is a quick overview of how we can work together:</p>
                    <img src="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59472e70de61d_HIghest%20possible%20gro.png" loading="lazy" id="w-node-_8a65e92c-9871-0568-4187-a4988e2f435b-bb0de4af" sizes="(max-width: 479px) 90vw, (max-width: 767px) 51vw, (max-width: 991px) 42vw, (max-width: 1279px) 38vw, (max-width: 1439px) 39vw, (max-width: 1919px) 556px, 576px" srcSet="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59472e70de61d_HIghest%2520possible%2520gro-p-500.png 500w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59472e70de61d_HIghest%2520possible%2520gro-p-800.png 800w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/628754a254e59472e70de61d_HIghest%20possible%20gro.png 1080w" alt="overview"></img>
                </div>
            </div>
        </>
    )
}

export default ContactUs;