import './footer.scss';

const FooterComponent = () => {

    return (<>
        <div className="footer-component">
            <div className="footer-cont">
                <div className="about-us">
                    <h2 className="title"> About us </h2>
                    <p className="text-block">
                        <strong> GoGroup </strong> is about people. We work together with the best people for the long term to realise their goals. We build amazing companies with amazing people.
                    </p>
                </div>
                <div className="menu-flex-box">
                    <h2 className="title"> Menu</h2>
                    <div className='flex'>
                        <div className="menu">
                            <ul className="list-cont">
                                <li className="list"> <a href="/" target="_blank" rel="noopener noreferrer">Home</a></li>
                                <li className="list"><a href="/" target="_blank" rel="noopener noreferrer">Careers</a></li>
                                <li className="list"><a href="/" target="_blank" rel="noopener noreferrer">Blog</a></li>
                                <li className="list"><a href="/" target="_blank" rel="noopener noreferrer">Contact us</a></li>
                                
                            </ul>
                        </div>
                        <div className="menu">
                            <ul className="list-cont">
                            <li className="list"><a href="/" target="_blank" rel="noopener noreferrer">Data Protection</a></li>
                                <li className="list"><a href="/" target="_blank" rel="noopener noreferrer">Imprint</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="notice">
                <img src="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a269396f2085c5865d34b1_Digital%20Pioneers%20Logo%20(1).png" srcSet="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a269396f2085c5865d34b1_Digital%20Pioneers%20Logo%20(1)-p-500.png 500w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a269396f2085c5865d34b1_Digital%20Pioneers%20Logo%20(1)-p-800.png 800w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a269396f2085c5865d34b1_Digital%20Pioneers%20Logo%20(1).png 1000w" sizes="120px" alt="" width="120" ></img>
            </div>
            
        </div>
    </>)
}

export default FooterComponent;