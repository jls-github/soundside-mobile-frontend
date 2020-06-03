import React, {useState, useEffect} from 'react';
import {APIROOT} from '../constraints/index.js'
import Slide from '../components/Slide.js'

const Slideshow = ({serviceId}) => {

    const [service, setService] = useState()

    const populateSlides = (slides) => { 
        return slides.map(slide => {
            return <Slide slide={slide} key={slide.id}/>
        })
    }

    const populateService = () => { 
        return service.map(section => { // this needs to be broken out into an individual component
            return (
                <div key={section.id}>
                    <h2>{section.title}</h2>
                    {section.slides[0] ? populateSlides(section.slides) : null}
                </div>
            )
        })
    }

    useEffect(() => {
        
        async function fetchService() {
            let response = await fetch(APIROOT + `/services/${serviceId}`)
            let json = await response.json()
            await setService(json)
        }

        fetchService()
    },[serviceId])

    return(
        <div>
            <h1>Slideshow</h1>
            {service ? populateService() : "loading"}
        </div>
    )

}

export default Slideshow