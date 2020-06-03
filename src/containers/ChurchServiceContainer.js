import React, {Fragment} from 'react';
import ServicesIndex from './ServicesIndex'
import Slideshow from './Slideshow'

const ChurchServiceContainer = ({location}) => {

    const router = () => {
        const path = location.pathname.split("/")

        if (location.pathname === "/church" || location.pathname === '/church/') {
            return <ServicesIndex />
        } else {
            return <Slideshow serviceId={path[2]}/>
        }

    }

    return (
        <Fragment>

            {/* Navbar */}

            {router()}

        </Fragment>
    )
}

export default ChurchServiceContainer