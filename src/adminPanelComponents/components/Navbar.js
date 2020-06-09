import React, {Fragment} from 'react'
import {Link, useHistory} from 'react-router-dom'

const Navbar = () => {

    const history = useHistory()

    const handleLogout = () => {
        localStorage.setItem("token", "")
        history.push("/admin/login")
    }

    return(
        <Fragment>
            <Link to="/admin">All Services</Link>
            <div onClick={handleLogout}>Logout</div>
        </Fragment>
    )
}

export default Navbar