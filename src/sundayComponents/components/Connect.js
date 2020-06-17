import React from 'react';
import {useHistory} from 'react-router-dom'
import Gathering from '../../images/gathering.jpg'


const Connect = () => {

    const history = useHistory()

    const handleClick = () => {
        history.push('/church/connect')
    }

    return(
        <div className="service-line">
            <div onClick={handleClick} className="service">
                <img className="indoor-img" src={Gathering} alt=""/>
                <div className="service-lettering">Connect</div>
            </div>
        </div>
    )

}

export default Connect