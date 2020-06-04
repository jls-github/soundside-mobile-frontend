import React, {useState} from 'react';
import arrayMove from 'array-move';
import SortableContainer from '../components/SortableContainer.js'
import Section from './Section.js'

const SlideForm = () => {
    const [sections, setSections] = useState(['Section 1', 'Section 2', 'Section 3', 'Section 4', 'Section 5', 'Section 6']) //dummy state to start

    const onSortEnd = ({oldIndex, newIndex}) => { // do I need to take a picture of prev state before doing this?
        setSections(arrayMove(sections, oldIndex, newIndex))
    }

    const populateSections = () => {
        return sections.map((value, index) => {
            return <Section key={`section-${value}`} index={index} title={value} />
        })
    }

    return(
        <SortableContainer onSortEnd={onSortEnd} useDragHandle>
            {populateSections()}
        </SortableContainer>
    )
}

export default SlideForm