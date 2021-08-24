import React, {Fragment} from 'react';
import useReactPWAInstall from "react-pwa-install";
import {useLocation} from 'react-router-dom'
import ServicesIndex from './ServicesIndex'
import Slideshow from './Slideshow'
import Navbar from '../components/Navbar'
import '../sunday-service.sass'
import BackgroundImage from '../../images/background_image.jpg'
import ConnectionCard from './ConnectionCard.js';


const ChurchServiceContainer = () => {

    const location = useLocation()

    const router = () => {
        const path = location.pathname.split("/")
        if (path[2] === "connect")  {
            return <ConnectionCard />
        } else if (path[2]) {
            return <Slideshow serviceId={path[2]}/>
        } else {
            return <ServicesIndex />
        }
    }

    const { pwaInstall, supported, isInstalled } = useReactPWAInstall();
 
    const handleClick = () => {
      pwaInstall({
        title: "Install Web App",
        logo: myLogo,
        features: (
          <ul>
            <li>Cool feature 1</li>
            <li>Cool feature 2</li>
            <li>Even cooler feature</li>
            <li>Works offline</li>
          </ul>
        ),
        description: "This is a very good app that does a lot of useful stuff. ",
      })
        .then(() => alert("App installed successfully or instructions for install shown"))
        .catch(() => alert("User opted out from installing"));
    };

    return (
        <Fragment>

            <div className="sunday-service-container">
                <div className="sunday-service-background"></div>
                <img className="sunday-service-picture" src={BackgroundImage} alt=""/>
                <Navbar />
                <div className="main-content-container">
                    {router()}
                </div>
                {supported() && !isInstalled() && (
                    <button type="button" onClick={handleClick}>
                        Install App
                    </button>
                )}
            </div>

        </Fragment>
    )
}

export default ChurchServiceContainer