import { useState } from 'react';
import './faq.scss';


const FaqComponent = ({faqList}) => {
    const toggleList = (id,e) => {
        const ansDiv = document.getElementById(id);
       
        if(ansDiv.classList.contains('hide')){
            console.log(ansDiv, ansDiv.classList,"jj");
            ansDiv.classList.remove = 'hide';
            ansDiv.classList.add = 'visisble';
           
        }else{
            ansDiv.classList.add = 'hide';
            ansDiv.classList.remove = 'visisble';
        }
    }

    return (
        <>
            <div className="faq-cont">
                <div className="box">
                    <h2>Frequently asked questions</h2>
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
                        {faq.ans} 
                    </div>}
                    
                </div>
        </div>
    )
    
}

export default FaqComponent;