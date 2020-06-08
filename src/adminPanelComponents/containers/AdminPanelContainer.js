import React, {Fragment} from 'react';
import SlideForm from './SlideForm.js';
import Login from '../components/Login.js';
import ServicesContainer from './ServicesContainer.js'
import Navbar from '../components/Navbar.js'

const AdminPanelContainer = ({location}) => {

    const router = () => {
        const path = location.pathname.split("/")

        switch(path[2]) {
            case "login": return <Login />
            case "service": return <SlideForm serviceId={path[3]}/>
            default: return <ServicesContainer />
        }

    }

    return(
        <Fragment>
            {/* Route for Login */}
            {/* Route for SlideForm */}
            {/* Route for Service Index */}
            <Navbar />
            {router()}

            
        </Fragment>
    )

}

export default AdminPanelContainer