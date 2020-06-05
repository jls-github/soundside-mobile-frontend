import React from 'react';
import {sortableElement} from 'react-sortable-hoc';
import DragHandle from './DragHandle.js';

const Slide = sortableElement(({title, content, onSlideTitleChange, onSlideContentChange, id}) => {
    return(
        <li>
            <DragHandle />
            <input type="text" value={title} onChange={(e => {onSlideTitleChange(e, id)})} />
            <input type="text" value={content} onChange={(e => {onSlideContentChange(e, id)})} />
        </li>
    )
})

export default Slide