import { createRef, useEffect, useState } from 'react';
import './Navbar.scss';
import menuIcon from '../../logo.svg';

const NavbarComponent = () => {
    const [displayAnnouncement, setDisplayAnnouncement] = useState(true);
    const [toggleMenuIcon, setToggleMenuIcon] = useState(false);
    const headerEl = createRef();
    const [stickyClass, setStickyClass] = useState('');
    const toggleMenu = () => {
        setToggleMenuIcon(!toggleMenuIcon)
    }
    const stickNavbar = () => {
        if (window !== undefined) {
          let windowHeight = window.scrollY;
          windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    return (<>
        <div className={displayAnnouncement ? `announcement-container ${stickyClass}` : `hide ${stickyClass}`}>
            <div className="announcement-box">
                <a href="#" target="_blank" rel="noopener noreferrer" className='top-link'>Find out why we are regularly called a great place for engineers to work.</a>
                
            </div>
            <p className='close-icon' onClick={ () => setDisplayAnnouncement(false)}>&#10005;</p>
        </div>
        <div id='navbar' className={`navbar ${stickyClass}`} ref={headerEl} >
            <div className="right-box">
                <a href="/" className="logo">
                  <img src="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a269396f2085c5865d34b1_Digital%20Pioneers%20Logo%20(1).png" srcSet="https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a269396f2085c5865d34b1_Digital%20Pioneers%20Logo%20(1)-p-500.png 500w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a269396f2085c5865d34b1_Digital%20Pioneers%20Logo%20(1)-p-800.png 800w, https://uploads-ssl.webflow.com/628754a254e594634d0de4a7/62a269396f2085c5865d34b1_Digital%20Pioneers%20Logo%20(1).png 1000w" sizes="151px" alt="logo" width="151" height='auto' className="image-55"/>
                </a>
            
            </div>
            <div className="left-box nav-destop">
                <a href='#' className="navlink">Blog</a>
                <a href='/careers' className="navlink">Careers</a>
                <a href='/contact-us' className="navlink">Contact Us</a>
            </div>
            <div className="align-center nav-mobile">
                <div id="close-menu-icon" className="close-menu left-box" onClick={toggleMenu}>
                    { toggleMenuIcon ? <img src={menuIcon} alt='menu-Icon' /> : <span className='hamburger-menu'>&#9776;</span> }
                </div>
                
            </div>
        </div>
        {
            toggleMenuIcon && <div className='navList'>
                <a href='#' className="navlink">Blog</a> <br/>
               <a href='/careers' className="navlink">Careers</a><br/>
               <a href='/contact-us' className="navlink">Contact Us</a><br/>
            </div>
        }
    </>)
}

export default NavbarComponent;