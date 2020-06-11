import React from 'react';
import Gathering from '../../images/gathering.jpg'
import {useHistory} from 'react-router-dom'

const Service = (props) => {

    const {date, id} = props

    const formattedDate = () => {
        const splitDate = date.split(" ")

        const month = splitDate[0]
        const day = splitDate[2] ? splitDate[2] : splitDate[1]
        return (
            <div className="service-date">
                {month} <br />
                {day}
            </div>
        )
    }

    const history = useHistory()

    const onSelectService = () => {
        history.push(`/church/${id}`)
    }

    return (
        <div className="service-line">
            <div className="service-date-box">{formattedDate()}</div>
                <div className="service" onClick={onSelectService}>
                    <img src={Gathering}/>
                    <div className="service-lettering">Worship Guide</div>
                </div>
        </div>
    )
}

export default Service