import React from 'react';
import {useHistory} from 'react-router-dom'

const NewServiceButton = () => {

    const history = useHistory()

    const handleClick = () => {
        history.push('/admin/new-service')
    }

    return(
        <button onClick={handleClick} >New Service</button>
    )
}

export default NewServiceButton