import React, {useState, useEffect} from 'react';
import {APIROOT} from '../constraints/index.js'

const Slideshow = ({serviceId}) => {

    const [service, setService] = useState()

    const populateSlides = (slides) => {
        return slides.map(slide => {
            return <div>{slide.title} - {slide.content}</div>
        })
    }

    const populateService = () => {
        console.log(service)
        return service.map(section => {
            return(
                <div>

                    <h1>{section.title}</h1>

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
    }, [])

    return(
        <div>
            Slideshow
            {service ? populateService() : "loading"}
        </div>
    )

}

export default Slideshow