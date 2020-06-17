import React from 'react';
import {useHistory} from 'react-router-dom';
import SlideForm from './SlideForm.js';
import Login from '../components/Login.js';
import ServicesContainer from './ServicesContainer.js'
import ConnectionsContainer from './ConnectionsContainer.js'
import '../admin-panel.sass'

const AdminPanelContainer = ({location}) => {

    const history = useHistory()

    const router = () => {
        const path = location.pathname.split("/")

        if (path[2]) {

            switch(path[2]) {
                case "login": return <Login />
                case "connections": return <ConnectionsContainer />
                case "service": return <SlideForm serviceId={path[3]}/>
                default: history.push('/admin')
            }
        } else {
            return <ServicesContainer />
        }

    }

    return(
        <div className="admin-panel-container">
            {router()}

            
        </div>
    )

}

export default AdminPanelContainer