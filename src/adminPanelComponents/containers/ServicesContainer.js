import React, {Fragment, useState, useEffect} from 'react';
import Service from '../components/Service.js'
import NewServiceButton from '../components/NewServiceButton.js'
import {APIROOT} from '../../constraints/index.js'
import ValidationHOC from '../HOCs/ValidationHOC'

const ServicesContainer = () => {

    const [services, setServices] = useState()

    const populateServices = () => {
        return services.map(service => {
            return <Service date={service.date} key={service.id} id={service.id}/>
        })
    }

    useEffect(() => {
        const fetchServices = async () => {
            const response = await fetch(APIROOT + '/services')
            const json = await response.json()
            await setServices(json)
        }

        fetchServices()
    }, [])

    return(
        <Fragment>
            <NewServiceButton />
            {services ? populateServices() : 'loading...'}
        </Fragment>
    )
}

export default ValidationHOC(ServicesContainer)