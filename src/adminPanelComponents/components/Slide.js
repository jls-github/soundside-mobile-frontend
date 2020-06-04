import React from 'react';
import {sortableElement} from 'react-sortable-hoc';
import DragHandle from './DragHandle.js';

const Slide = sortableElement(({value}) => {
    return(
        <li>
            <DragHandle />
            {value}
        </li>
    )
})

export default Slide