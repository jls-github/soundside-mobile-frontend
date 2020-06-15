import React from 'react';
import {useSwipeable} from 'react-swipeable'


const Slide = (props) => {

    const {title, content} = props.slide
    const {onNextSlide, onPreviousSlide} = props

    const handlers = useSwipeable({
        onSwipedLeft: (e) => onNextSlide(),
        onSwipedRight: (e) => onPreviousSlide()
    })

    return(
        <div className="slide-container" {...handlers}>
            <div className="slide">
                <div className="slide-title">{title}</div>
                <div className="slide-content">{content}</div>
                <div className="slide-buttons">
                    <button className="right-button" onClick={onNextSlide}><div className="button-overlay">{">"}</div></button>
                    <button className="left-button" onClick={onPreviousSlide}><div className="button-overlay">{"<"}</div></button>
                </div>
                <div><span></span><span></span><span></span></div>
            </div>
        </div>
    )
}

export default Slide