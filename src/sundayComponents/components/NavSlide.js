import React from 'react';
import {useSwipeable} from 'react-swipeable'


const NavSlide = (props) => {

    const {onNextSlide, onPreviousSlide, serviceSections, onSectionNav} = props

    const handlers = useSwipeable({
        onSwipedLeft: (e) => onNextSlide(),
        onSwipedRight: (e) => onPreviousSlide()
    })

    const clickableSections = () => {
        return serviceSections.map((section) => {
            return <div onClick={e => onSectionNav(section.id)}>{section.title}</div>
        })
    }

    return(
        <div className="slide-container" {...handlers}>
            <div className="slide">
                <div className="slide-title">Worship Guide</div>
                <div className="slide-content">{clickableSections()}</div>
            </div>
            <div className="slide-buttons">
                <button className="left-button" onClick={onPreviousSlide}><div className="button-overlay">{"<"}</div></button>
                <button className="right-button" onClick={onNextSlide}><div className="button-overlay">{">"}</div></button>
            </div>
            <div className="scroll-dots"><div></div><div></div><div></div></div>
        </div>
    )
}

export default NavSlide