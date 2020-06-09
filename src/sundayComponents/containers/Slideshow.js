import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {APIROOT} from '../../constraints/index.js'
import Slide from '../components/Slide.js'

const Slideshow = ({serviceId}) => {

    const [service, setService] = useState()
    const [activeIndex, setActiveIndex] = useState(0)
    const [slideLength, setSlideLength] = useState(0)
    const [activeSlide, setActiveSlide] = useState(null)

    const history = useHistory()
    
    const onNextSlide = () => {
        if (activeIndex < slideLength - 2) {
            setActiveIndex(activeIndex + 1)
        }
    }

    const onPreviousSlide = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1)
        }
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
                setService(json.sections)
            }
        }
        fetchService()
    }, [serviceId, history])

    useEffect(() => {
        if (service) {
            const slides = service.map(section => section.slides).flat()
            setSlideLength(slides.length)
        }
    }, [service])

    useEffect(() => {
        if (service) {
            setActiveSlide(service.map(section => section.slides).flat()[activeIndex])
        }
    })

    return(
        <div className="slide-container">
            <ReactCSSTransitionGroup
                transitionName="slide"
                transitionEnterTimeout={700}
                transitionLeaveTimeout={700}>
                    {activeSlide ? <Slide key={activeSlide.id} slide={activeSlide} /> : null }
            </ReactCSSTransitionGroup>
            <div className="slide-buttons">
                <button className="left-button" onClick={onPreviousSlide}>Previous</button>
                <button className="right-button" onClick={onNextSlide}>Next</button>
            </div>
        </div>
    )

}

export default Slideshow