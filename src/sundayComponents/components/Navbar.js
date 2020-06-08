import React, {useRef} from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {

    const navRef = useRef(null)

    const handleNavbarSlide = () => {
        navRef.current.classList.toggle("navbar-inactive") 
        navRef.current.classList.toggle("navbar-active")
    }

    return(
        <div>
            <ul className="navbar-button" onClick={handleNavbarSlide}>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        <div className="navbar navbar-inactive" ref={navRef}>
            <ul>
                <li><Link to="/church" >Services</Link></li>
                <li><a href="https://soundsidechurch.com/discover.html">About Us</a></li>
            </ul>
        </div>
        </div>
    )
}

export default Navbar