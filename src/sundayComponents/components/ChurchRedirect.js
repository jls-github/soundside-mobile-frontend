import React, {Fragment} from 'react'
import {useHistory} from 'react-router-dom'

const ChurchRedirect = () => { // this could be replaced by an HOC maybe?

    const history = useHistory()

    return (
        <Fragment>
            {history.push('/church')}
        </Fragment>
    )
}

export default ChurchRedirect