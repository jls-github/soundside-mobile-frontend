import React from 'react';
import {useHistory} from 'react-router-dom'

const Service = (props) => {

    const {date, id} = props

    const history = useHistory()

    const onSelectService = () => {
        console.log(id)
        // history.push(`/${id}`) - erroring because not in router
    }

    return (
        <div onClick={onSelectService}>
            <p>{date}</p>
        </div>
    )
}

export default Service