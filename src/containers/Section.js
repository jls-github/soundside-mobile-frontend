import React from 'react';
import Slide from '../components/Slide.js'

const Section = (props) => {

    const {title, slides} = props.section

    const populateSlides = (slides) => { 
        return slides.map(slide => {
            return <Slide slide={slide} key={slide.id}/>
        })
    }

    return (
        <div>
            <h2>{title}</h2>
            {slides ? populateSlides(slides) : null}
        </div>
    )
}

export default Section