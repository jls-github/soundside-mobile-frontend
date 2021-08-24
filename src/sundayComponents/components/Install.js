import React from 'react';
import Gathering from '../../images/gathering.jpg'


const Install = ({handleClick}) => {

    return(
        <div className="service-line">
            <div onClick={handleClick} className="service">
                <img className="indoor-img" src={Gathering} alt=""/>
                <div className="service-lettering">Install</div>
            </div>
        </div>
    )

}

export default Install