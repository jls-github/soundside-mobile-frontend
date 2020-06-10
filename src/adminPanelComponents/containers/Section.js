import React, {useRef} from 'react';
import {sortableElement} from 'react-sortable-hoc';
import Slide from '../components/Slide.js';
import SortableContainer from '../components/SortableContainer.js'

const Section = sortableElement(({
    title, 
    slides, 
    id, 
    onSectionTitleChange, 
    onSlideSortEnd,
    onSlideTitleChange,
    onSlideContentChange,
    onAddSlide,
    onDeleteSection,
    onDeleteSlide
    }) => {

    const slideWrapper = useRef(null)

    const populateSlides = () => {
        return slides.map((slide, index) => {
            return <Slide 
                key={`slide-${slide.id}`}
                id={slide.id}
                index={index} 
                title={slide.title} 
                content={slide.content}
                onSlideTitleChange={(e, slideId) => onSlideTitleChange(e, id, slideId)}
                onSlideContentChange={(e, slideId) => onSlideContentChange(e, id, slideId)} 
                onDeleteSlide={onDeleteSlideHandler}
            />
        })
    }

    const onDeleteSlideHandler = (slideId) => {
        onDeleteSlide(id, slideId)
    }

    return(
        <li>
            <div className="section-container">
                <div className="section-grid">
                    <div onClick={(e) => onDeleteSection(id)} className="delete-x">x</div>
                    <div className="section-header">

                        {/* <label>Section Title</label><br /> */}
                        <input className="section-title-input" type="text" placeholder="Section Title" value={title} onChange={e => onSectionTitleChange(e, id)} />
                    </div>
                    <div className="slide-wrapper" ref={slideWrapper}>

                    <SortableContainer onSortEnd={(sortParams) => onSlideSortEnd(sortParams, id)} axis="xy" helperContainer={slideWrapper.current} distance="1">
                        {slides ? populateSlides() : "loading..."}
                    </SortableContainer>
                    </div>
                    <button className="add-slide-button" onClick={(e) => onAddSlide(id)} >Add Slide</button>
                </div>
            </div>
        </li>
    )

})

export default Section