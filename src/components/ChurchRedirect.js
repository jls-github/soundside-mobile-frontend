import React, {Fragment} from 'react'
import {useHistory} from 'react-router-dom'

const ChurchRedirect = () => {

    const history = useHistory()

    return (
        <Fragment>
            {history.push('/church')}
        </Fragment>
    )
}

export default ChurchRedirect