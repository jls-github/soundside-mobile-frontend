import React, {useRef, useState, Fragment, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Logo from '../../images/soundside-logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [navBarActive, setNavBarActive] = useState(false)

    const navRef = useRef(null)

    const history = useHistory()

    const handleNavbarSlide = () => {
        setNavBarActive(!navBarActive)
    }

    const handleLogoClick = () => {
        history.push('/church')
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
            {navBarActive ? <div key="overlay" className="navbar-screen-overlay" onClick={handleNavbarSlide}></div> : null}
            <div>
                <div className="top-navbar">
                    <ul className="navbar-button" onClick={handleNavbarSlide}>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <img className="navbar-logo" src={Logo} alt="Soundside Church" onClick={e => handleLogoClick()}/>
                </div>
                <div className="navbar navbar-inactive" ref={navRef}>
                    <div className="navbar-gradient">
                        <ul className="navbar-list" >
                            <div className="navbar-header">Engaging Others<br />With the Love of Christ</div>
                            <li onClick={handleNavbarSlide}><Link to="/church" >Services</Link></li>
                            <li onClick={handleNavbarSlide}><Link to="/church/connect">Connect</Link></li>
                            {/* <li>Community Groups</li>
                            <li>Giving</li> */}
                            <li onClick={handleNavbarSlide}><a href="https://soundsidechurch.com/discover.html">About Us</a></li>
                            <div className="navbar-footer">That They Might Enjoy<br />New Life in Christ</div>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar
