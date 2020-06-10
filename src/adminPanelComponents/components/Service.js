import React from 'react';
import {useHistory} from 'react-router-dom';

const Service = ({date, id}) => {

    const history = useHistory()

    const handleClick = () => {
        history.push(`/admin/service/${id}`)
    }

    return(
        <div className="service" onClick={handleClick} >
            {date}
        </div>
    )
}

export default Service