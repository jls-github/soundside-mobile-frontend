import React, {useState} from 'react';
import {sortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import Slide from '../components/Slide.js';
import DragHandle from '../components/DragHandle.js';
import SortableContainer from '../components/SortableContainer.js'

const Section = sortableElement(({title}) => {
    
    
    const [slides, setSlides] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']) //dummy state to start

    const onSortEnd = ({oldIndex, newIndex}) => { // do I need to take a picture of prev state before doing this?
        setSlides(arrayMove(slides, oldIndex, newIndex))
    }

    const populateSlides = () => {
        return slides.map((value, index) => {
            return <Slide key={`slide-${value}`} index={index} value={value} />
        })
    }

    return(
        <li>
            <DragHandle />
            <span>{title}</span>
            <SortableContainer onSortEnd={onSortEnd} useDragHandle>
                {populateSlides()}
            </SortableContainer>
        </li>
    )

})

export default Section