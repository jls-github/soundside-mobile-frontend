import React, {useEffect} from 'react'
import {APIROOT, HEADERS} from '../constraints/index.js'

const ServicesIndex = () => {

    const populateServices = (services) => {
        console.log(services)
    }

    const fetchServices = async () => {
        let response = await fetch(APIROOT)
        let json = await response.json()
        await populateServices(json)
    }

    useEffect(fetchServices, [])

    return(
        <div>
            Hello
        </div>
    )
}

export default ServicesIndex