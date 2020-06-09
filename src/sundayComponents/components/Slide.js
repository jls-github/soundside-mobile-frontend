import React from 'react';


const Slide = (props) => {

    const {title, content} = props.slide

    return(

        <div className="slide">
            <div className="slide-title">{title}</div>
            <div className="slide-content">{content}</div>
        </div>
    )
}

export default Slide