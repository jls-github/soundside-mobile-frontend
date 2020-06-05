import React from 'react';
import {sortableElement} from 'react-sortable-hoc';
import DragHandle from './DragHandle.js';

const Slide = sortableElement(({title, content}) => {
    return(
        <li>
            <DragHandle />
            {title}
            {content}
        </li>
    )
})

export default Slide