import React, {Fragment} from 'react';
import ServicesIndex from './ServicesIndex'
import Slideshow from './Slideshow'

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

            {/* Navbar */}

            {router()}

        </Fragment>
    )
}

export default ChurchServiceContainer