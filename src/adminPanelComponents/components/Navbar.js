import React from 'react'
import {Link, useHistory} from 'react-router-dom'

const Navbar = () => {

    const history = useHistory()

    const handleLogout = () => {
        localStorage.setItem("token", "")
        history.push("/admin/login")
    }

    return(
        <div className="navbar-wrapper">
            <li><Link to="/admin">All Services</Link></li>
            <li><div onClick={handleLogout}>Logout</div></li>
        </div>
    )
}

export default Navbar