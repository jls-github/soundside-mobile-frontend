import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {

    return(
        <ul>
            <Link to="/church" >Services</Link>
            <a href="https://soundsidechurch.com/discover.html">About Us</a>

        </ul>
    )
}

export default Navbar