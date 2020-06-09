import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';
import SlideForm from './SlideForm.js';
import Login from '../components/Login.js';
import ServicesContainer from './ServicesContainer.js'
import Navbar from '../components/Navbar.js'

const AdminPanelContainer = ({location}) => {

    const history = useHistory()

    const router = () => {
        const path = location.pathname.split("/")

        if (path[2]) {

            switch(path[2]) {
                case "login": return <Login />
                case "service": return <SlideForm serviceId={path[3]}/>
                default: history.push('/admin')
            }
        } else {
            return <ServicesContainer />
        }

    }

    return(
        <Fragment>
            <Navbar />
            {router()}

            
        </Fragment>
    )

}

export default AdminPanelContainer