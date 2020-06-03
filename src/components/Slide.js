import React from 'react';

const Slide = (props) => {

    const {title, content} = props.slide

    return(
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

export default Slide