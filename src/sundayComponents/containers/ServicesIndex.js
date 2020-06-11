import React, {useEffect, useState} from 'react'
import {APIROOT} from '../../constraints/index.js'
import Service from '../components/Service.js'

const ServicesIndex = (props) => {

    const [services, setServices] = useState()

    const populateServices = () => {
        return services.map(service => {
            return <Service date={service.date} key={service.id} id={service.id} />
        })
    }

    useEffect(() => {

        async function fetchServices() {
            let response = await fetch(APIROOT + '/services')
            let json = await response.json()
            await setServices(json)
        }

        fetchServices()
    }, [])

    return(
        <div className="services-index">
            <div className="services-header">Soli Deo Gloria</div>
            <div className="services-list">
                {services ? populateServices() : "loading..."}
            </div>
        </div>
    )
}

export default ServicesIndex