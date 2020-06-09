import React, {Fragment} from 'react';
import ServicesIndex from './ServicesIndex'
import Slideshow from './Slideshow'
import Navbar from '../components/Navbar'
import '../sunday-service.sass'


const ChurchServiceContainer = ({location}) => {

    const router = () => {
        const path = location.pathname.split("/")
        if (path[2]) {
            return <Slideshow serviceId={path[2]}/>
        } else {
            return <ServicesIndex />
        }
    }

    return (
        <Fragment>

            <div className="sunday-service-container">
                <div className="sunday-service-background"></div>
                <Navbar />
                <div className="main-content-container">
                {router()}
                </div>
            </div>

        </Fragment>
    )
}

export default ChurchServiceContainer