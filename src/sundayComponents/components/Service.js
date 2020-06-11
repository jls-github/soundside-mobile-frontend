import React, {useState, useEffect} from 'react';
import Gathering from '../../images/gathering.jpg'
import {useHistory} from 'react-router-dom'
import {APIROOT} from '../../constraints/index.js'

const Service = () => {

    const [id, setId] = useState()
    const [active, setActive] = useState(false)

    useEffect(() => { // this still needs to change - the backend should only send the most recent service

        async function fetchServices() {
            let response = await fetch(APIROOT + '/services')
            let json = await response.json()
            setId(json[0].id)
            setActive(true)
        }

        fetchServices()
    }, [])

    const history = useHistory()

    const onSelectService = () => {
        if (active) {
            history.push(`/church/${id}`)
        } 
    }

    return (
        <div className="service-line">
                <div className="service" onClick={onSelectService}>
                    <img src={Gathering}/>
                    <div className="service-lettering">Worship Guide</div>
                </div>
        </div>
    )
}

export default Service