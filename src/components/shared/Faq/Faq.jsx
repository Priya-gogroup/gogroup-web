import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import './faq.scss';


const FaqComponent = ({faqList}) => {
    const faqHeader = useRef(null);
    return (
        <>
            <div className="faq-cont">
                <div className="box">
                    <h2 className='heading' ref={faqHeader}>Frequently asked questions</h2>
                </div>
                <div className="box">
                    {faqList && faqList.length>0 && faqList.map(faq => {return (
                        <Faqs faq={faq} key={faq.index} />
                          
                    )})
                    }
                </div>
            </div>
        </>
    )
}

const Faqs = ({faq}) => {
    const [isContentVisible, setContentVisible] = useState(false);
    const toggleContentVisibility = () => {
        setContentVisible((prevVisible) => !prevVisible);
    };
    
    return (
        <div className="trigger-content-pair" onClick={toggleContentVisibility}>
            
            
                <div className='faq-box' key={faq.index}>
                    <div className="ques"> 
                        <div className='q'> {faq.ques} </div>
                        <div className="more text"> { isContentVisible ? <>&#8722;</> : <>&#x2B;</>  } </div>
                    </div>
                    {isContentVisible && <div className="ans"  id={`ans${faq.index}`}> 
                        {faq.ans.map((text,index) => <React.Fragment key={index}> {text} </React.Fragment>)}
                    </div>}
                    
                </div>
        </div>
    )
    
}

export default FaqComponent;