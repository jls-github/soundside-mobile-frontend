import React, {useState, useEffect, Fragment} from 'react';
import {useHistory} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {APIROOT} from '../../constraints/index.js'
import Slide from '../components/Slide.js'

const Slideshow = ({serviceId}) => {

    const [service, setService] = useState()
    const [activeIndex, setActiveIndex] = useState(0)
    const [slideLength, setSlideLength] = useState(0)
    const [activeSlide, setActiveSlide] = useState(null)
    const [swipeDirection, setSwipeDirection] = useState("forward")


    const history = useHistory()

    const onNextSlide = () => {
        if (activeIndex < slideLength - 1) {
            setSwipeDirection("forward")
            setActiveIndex(activeIndex + 1)
        }
    }

    const onPreviousSlide = () => {
        if (activeIndex > 0) {
            setSwipeDirection("back")
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
                setService(json.sections.map(section => {
                    return {
                        ...section, 
                        id: Math.floor(Math.random() * Math.floor(100000)),
                        slides: section.slides.map(slide => {
                            return {
                                ...slide,
                                id: Math.floor(Math.random() * Math.floor(100000))
                            }
                        })
                    }
                }))
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
        <Fragment>
            <ReactCSSTransitionGroup
                transitionName={swipeDirection === "forward" ? "next-slide" : "prev-slide"}
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}>
                    {activeSlide ? <Slide key={activeSlide.id} slide={activeSlide} onNextSlide={onNextSlide} onPreviousSlide={onPreviousSlide}/> : null }
            </ReactCSSTransitionGroup>
        </Fragment>
    )

}

export default Slideshow