import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <Fragment>
            <Link to="/admin">All Services</Link>
            <Link to="/admin/login">Logout</Link>
        </Fragment>
    )
}

export default Navbar