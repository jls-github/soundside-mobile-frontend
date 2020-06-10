import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import Logo from '../../images/soundside-logo.png'

const Navbar = () => {

    const history = useHistory()

    const handleLogout = () => {
        localStorage.setItem("token", "")
        history.push("/admin/login")
    }

    const handleLogoLink = () => {
        history.push("/admin")
    }

    return(
        <div className="navbar-wrapper">
            <li className="navbar-links"><Link to="/admin">All Services</Link></li>
            <li><img onClick={handleLogoLink} className="navbar-logo" src={Logo} /></li>
            <li className="logout"><div onClick={handleLogout}>Logout</div></li>
        </div>
    )
}

export default Navbar