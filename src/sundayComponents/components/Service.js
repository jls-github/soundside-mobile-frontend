import React, {useState, useEffect} from 'react';
import Gathering from '../../images/gathering.jpg'
import {useHistory} from 'react-router-dom'
import {APIROOT} from '../../constraints/index.js'

const Service = () => {

    const [id, setId] = useState()
    const [active, setActive] = useState(false)

    useEffect(() => {

        async function fetchServices() {
            let response = await fetch(APIROOT + '/current_service')
            let json = await response.json()
            if (json.error) {
                console.log(json.error) // could use a further action here
            } else {
                setId(json.id)
                setActive(true)
            }
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
                    <img src={Gathering} alt=""/>
                    <div className="service-lettering">Worship Guide</div>
                </div>
        </div>
    )
}

export default Service