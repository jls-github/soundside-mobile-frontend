import React from 'react';
import {sortableElement} from 'react-sortable-hoc';
import Slide from '../components/Slide.js';
import DragHandle from '../components/DragHandle.js';
import SortableContainer from '../components/SortableContainer.js'

const Section = sortableElement(({
    title, 
    slides, 
    id, 
    onSectionTitleChange, 
    onSlideSortEnd,
    onSlideTitleChange,
    onSlideContentChange
    }) => {

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
            />
        })
    }

    return(
        <li>
            <DragHandle />
            <input type="text" placeholder="Section Title" value={title} onChange={e => onSectionTitleChange(e, id)} />
            <SortableContainer onSortEnd={(sortParams) => onSlideSortEnd(sortParams, id)} useDragHandle>
                {slides ? populateSlides() : "loading..."}
            </SortableContainer>
        </li>
    )

})

export default Section