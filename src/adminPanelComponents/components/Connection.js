import React from 'react'

const Connection = (props) => {

    const {name, date, email, comment, learn_about_jesus, hear_about_church, talk_to_pastor, id} = props.connection

    return(
        <tr className={id % 2 !== 0 ? "odd" : null}>
            <td>{date}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{comment}</td>
            <td>{learn_about_jesus ? "Yes" : "No"}</td>
            <td>{hear_about_church ? "Yes" : "No"}</td>
            <td>{talk_to_pastor ? "Yes" : "No"}</td>
        </tr>
    )
}

export default Connection