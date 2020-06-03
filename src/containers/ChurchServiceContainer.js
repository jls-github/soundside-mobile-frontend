import React, {Fragment} from 'react';
import ServicesIndex from '/ServicesIndex'

const ChurchServiceContainer = () => {
    return (
        <Fragment>
            {/* Navbar */}
            {/* Route for Services Index (if '/') */}
            <ServicesIndex />
            {/* Route for specific service (if /:date(5-31) or /:id) */}
        </Fragment>
    )
}

export default ChurchServiceContainer