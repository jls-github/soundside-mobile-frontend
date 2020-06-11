import React, {useEffect, useState} from 'react'
import {APIROOT} from '../../constraints/index.js'
import Service from '../components/Service.js'

const ServicesIndex = (props) => {


    return(
        <div className="services-index">
            <div className="services-list">
                <Service />
            </div>
        </div>
    )
}

export default ServicesIndex