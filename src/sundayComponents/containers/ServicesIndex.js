import React from 'react'
import Service from '../components/Service.js'
import Connect from '../components/Connect.js'

const ServicesIndex = (props) => {


    return(
        <div className="services-index">
            <div className="services-list">
                <Service />
                <Connect />
            </div>
        </div>
    )
}

export default ServicesIndex