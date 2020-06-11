import React, {useRef, useState, Fragment, useEffect} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Logo from '../../images/soundside-logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [navBarActive, setNavBarActive] = useState(false)

    const navRef = useRef(null)

    const handleNavbarSlide = () => {
        setNavBarActive(!navBarActive)
    }
    
    useEffect(() => {
        if (navBarActive) {
            navRef.current.classList.remove("navbar-inactive") 
            navRef.current.classList.add("navbar-active") 
        } else {
            navRef.current.classList.add("navbar-inactive") 
            navRef.current.classList.remove("navbar-active") 
        }

    }, [navBarActive])

    return(
        <Fragment>

            <ReactCSSTransitionGroup
                transitionName="navbar-screen-overlay"
                transitionEnterTimeout={400}
                transitionLeaveTimeout={400}>
                {navBarActive ? <div key="overlay" className="navbar-screen-overlay" onClick={handleNavbarSlide}></div> : null}
            </ReactCSSTransitionGroup>
            <div>
                <div className="top-navbar">
                    <ul className="navbar-button" onClick={handleNavbarSlide}>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <img className="navbar-logo" src={Logo} alt="Soundside Church"/>
                </div>
                <div className="navbar navbar-inactive" ref={navRef}>
                    <div className="navbar-gradient">

                        <div className="navbar-header">Menu</div>
                        <ul className="navbar-list" >
                            <li onClick={handleNavbarSlide}><Link to="/church" >Services</Link></li>
                            <li onClick={handleNavbarSlide}><a href="https://soundsidechurch.com/discover.html">About Us</a></li>
                        </ul>
                        <div className="navbar-footer">Engaging Others<br />with the Love of Christ<br />That They Might Enjoy<br />New Life in Christ</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar