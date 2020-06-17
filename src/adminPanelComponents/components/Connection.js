import React from 'react'

const Connection = (props) => {

    const {name, email, comment, learnAboutJesus, hearAboutChurch, talkToPastor, id} = props.connection

    return(
        <tr className={id % 2 !== 0 ? "odd" : null}>
            <td>{name}</td>
            <td>{email}</td>
            <td>{comment}</td>
            <td>{learnAboutJesus ? "Yes" : "No"}</td>
            <td>{hearAboutChurch ? "Yes" : "No"}</td>
            <td>{talkToPastor ? "Yes" : "No"}</td>
        </tr>
    )
}

export default Connection