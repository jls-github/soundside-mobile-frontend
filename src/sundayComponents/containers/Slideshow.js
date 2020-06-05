import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {APIROOT} from '../../constraints/index.js'
import Section from './Section.js'

const Slideshow = ({serviceId}) => {

    const [service, setService] = useState()

    const history = useHistory()
    
    // Populates each section as its own component which then populate slides
    const populateSections = () => { 
        return service.map(section => { 
            return <Section section={section} key={section.id}/>
        })
    }

    // Sets state to the spcific service from url once mounted and upon change of serviceId
    useEffect(() => {
        async function fetchService() {
            let response = await fetch(APIROOT + `/services/${serviceId}`)
            if (!response.ok) {
                console.log(`Redirecting to Service Index`)
                history.push('/church')
            } else {
                let json = await response.json()
                await setService(json.sections)
            }
        }
        fetchService()
    }, [serviceId, history])

    return(
        <div>
            <h1>Slideshow</h1>
            {service ? populateSections() : "loading"}
        </div>
    )

}

export default Slideshow