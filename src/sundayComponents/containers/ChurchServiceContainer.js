import React, {Fragment} from 'react';
import ServicesIndex from './ServicesIndex'
import Slideshow from './Slideshow'
import Navbar from '../components/Navbar'
import '../sunday-service.sass'
import BackgroundImage from '../../images/background_image.jpg'


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
                <img className="sunday-service-picture" src={BackgroundImage}/>
                <Navbar />
                <div className="main-content-container">
                    {router()}
                </div>
            </div>

        </Fragment>
    )
}

export default ChurchServiceContainer