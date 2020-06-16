import React, {useState, useEffect, Fragment} from 'react';
import {useHistory} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {APIROOT} from '../../constraints/index.js'
import Slide from '../components/Slide.js'
import NavSlide from '../components/NavSlide.js';

const Slideshow = ({serviceId}) => {

    const [service, setService] = useState()
    const [activeIndex, setActiveIndex] = useState(-1)
    const [slideLength, setSlideLength] = useState(0)
    const [activeSlide, setActiveSlide] = useState(null)
    const [swipeDirection, setSwipeDirection] = useState("forward")
    const [active, setActive] = useState(true)


    const history = useHistory()

    const onNextSlide = () => {
        if (activeIndex < slideLength - 1 && active) {
            setSwipeDirection("forward")
            setActiveIndex(activeIndex + 1)
            setActive(false)
        }
    }

    const onPreviousSlide = () => {
        if (activeIndex > -1 && active) {
            setSwipeDirection("back")
            setActiveIndex(activeIndex - 1)
            setActive(false)
        }
    }

    const serviceSections = () => {
        return service.map(section => {
            return {title: section.title, id: section.id}
        })
    }

    const onSectionNav = (id) => {
        const slides = service.map(section => section.slides).flat()
        const selectedService = service.filter(section => {
            return section.id === id
        })[0]
        let counter = 0
        slides.forEach(slide => {
            if (slide.id === selectedService.slides[0].id) {
                setSwipeDirection("forward")
                setActiveIndex(counter)
            }
            counter++
        })
    }

    const slideSwitch = () => {
        if (activeIndex === -1 && !activeSlide) {
           return <NavSlide key="navSlide" onNextSlide={onNextSlide} onPreviousSlide={onPreviousSlide} serviceSections={serviceSections()} onSectionNav={onSectionNav} />
        } else if (activeSlide) {
            return <Slide key={activeSlide.id} slide={activeSlide} onNextSlide={onNextSlide} onPreviousSlide={onPreviousSlide}/>
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
        if (service && activeIndex > -1) {
            setActiveSlide(service.map(section => section.slides).flat()[activeIndex])
        } else if (activeIndex === -1) {
            setActiveSlide(null)
        }
    }, [service, activeIndex])

    useEffect(() => {
        if (!active) {
            setTimeout(() => {
                setActive(true)
            }, 600)
        }
    }, [active])

    return(
        <Fragment>
            <ReactCSSTransitionGroup
                transitionName={swipeDirection === "forward" ? "next-slide" : "prev-slide"}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={600}>
                    {service ? slideSwitch() : null }
            </ReactCSSTransitionGroup>
        </Fragment>
    )

}

export default Slideshow