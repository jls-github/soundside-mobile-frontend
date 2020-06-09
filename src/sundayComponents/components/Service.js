import React from 'react';
import Gathering from '../../images/gathering.jpg'
import {useHistory} from 'react-router-dom'

const Service = (props) => {

    const {date, id} = props

    const history = useHistory()

    const onSelectService = () => {
        history.push(`/church/${id}`)
    }

    return (
        <div className="service-line">
            <div className="service-date-box"><div>{date}</div></div>
                <div className="service" onClick={onSelectService}>
                    <img src={Gathering}/>
                    <div className="service-lettering">Sunday Service</div>
                </div>
        </div>
    )
}

export default Service