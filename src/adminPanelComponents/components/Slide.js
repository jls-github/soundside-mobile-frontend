import React from 'react';
import {sortableElement} from 'react-sortable-hoc';

const Slide = sortableElement(({title, content, onSlideTitleChange, onSlideContentChange, id}) => {
    return(
        <li>
            <div className="slide-container">
                
                <input type="text" value={title} onChange={(e => {onSlideTitleChange(e, id)})} placeholder="Slide title (optional)" />
                <br />
                <textarea value={content} onChange={(e => {onSlideContentChange(e, id)})} placeholder="Slide Content" />
            </div>
        </li>
    )
})

export default Slide