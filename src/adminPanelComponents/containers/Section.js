import React, {useState} from 'react';
import {sortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import Slide from '../components/Slide.js';
import DragHandle from '../components/DragHandle.js';
import SortableContainer from '../components/SortableContainer.js'

const Section = sortableElement(({title, oldSlides, id, onSectionTitleChange}) => {
    
    
    const [slides, setSlides] = useState(oldSlides) //dummy state to start

    console.log(oldSlides)

    const onSortEnd = ({oldIndex, newIndex}) => { // do I need to take a picture of prev state before doing this?
        setSlides(arrayMove(slides, oldIndex, newIndex))
    }

    const populateSlides = () => {
        return slides.map((slide, index) => {
            return <Slide key={`slide-${slide.id}`} index={index} title={slide.title} content={slide.content} />
        })
    }

    return(
        <li>
            <DragHandle />
            <input type="text" placeholder="Section Title" value={title} onChange={e => onSectionTitleChange(e, id)} />
            <SortableContainer onSortEnd={onSortEnd} useDragHandle>
                {slides ? populateSlides() : null}
            </SortableContainer>
        </li>
    )

})

export default Section