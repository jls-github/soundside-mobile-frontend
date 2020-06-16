import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import Service from '../components/Service.js'
import NewServiceButton from '../components/NewServiceButton.js'
import {APIROOT, HEADERS} from '../../constraints/index.js'
import ValidationHOC from '../HOCs/ValidationHOC'
import AdminPanelWrapperHOC from '../HOCs/AdminPanelWrapperHOC'


const ServicesContainer = () => {

    const [services, setServices] = useState()

    const history = useHistory()

    const populateServices = () => {
        return services.map(service => {
            return <Service date={service.date} key={service.id} id={service.id}/>
        })
    }

    useEffect(() => {
        const fetchServices = async () => {
            const response = await fetch(APIROOT + '/services', {
                headers: {
                    ...HEADERS,
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            const json = await response.json()
            if (json.error) {
                history.push('/admin/login')
            } else {
                setServices(json)
            }
        }

        fetchServices()
    }, [history])

    return(
        <div className="services-container">
            <div className="services-index">
                <div className="services-header">All Services</div>
                <div className="services-index-grid">
                    {services ? populateServices() : 'loading...'}
                </div>
                    <NewServiceButton />
            </div> 
        </div>
    )
}

export default ValidationHOC(AdminPanelWrapperHOC(ServicesContainer))