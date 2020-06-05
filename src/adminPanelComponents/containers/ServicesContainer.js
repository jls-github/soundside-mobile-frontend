import React, {Fragment, useState} from 'react';
import Service from '../components/Service.js'
import NewServiceButton from '../components/NewServiceButton.js'

const ServicesContainer = () => {

    const [services, setServices] = useState(['June 1', 'June 8', 'June 15'])

    const populateServices = () => {
        return services.map(service => {
            return <Service date={service} key={service}/>
        })
    }

    return(
        <Fragment>
            <NewServiceButton />
            {populateServices()}
        </Fragment>
    )
}

export default ServicesContainer