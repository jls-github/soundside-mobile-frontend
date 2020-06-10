import React from 'react';
import {sortableElement} from 'react-sortable-hoc';

const Slide = sortableElement(({title, content, onSlideTitleChange, onSlideContentChange, id, onDeleteSlide}) => {

    return(
        <li>
            <div className="slide-container">
                <div onClick={e => onDeleteSlide(id)} className="delete-x">x</div>
                
                <input type="text" value={title} onChange={(e => {onSlideTitleChange(e, id)})} placeholder="Slide Title" />
                <br />
                <textarea value={content} onChange={(e => {onSlideContentChange(e, id)})} placeholder="Slide Content" />
            </div>
        </li>
    )
})

export default Slide