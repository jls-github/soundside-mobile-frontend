import React, {useState, useEffect, Fragment} from 'react';
import {useHistory} from 'react-router-dom'
import {APIROOT, HEADERS} from '../../constraints/index.js'

export default function ValidationHOC(WrappedComponent) {
    return (
        function ValidationHOC (props) {

            const [authorized, setAuthorized] = useState("loading")

            const history = useHistory()

            const authorizationSwitch = () => {
                switch(authorized) {
                    case("loading"): return <div>Loading...</div>
                    case(false): 
                        history.push('/admin/login')
                        break
                    default: return <WrappedComponent {...props} />
                }
            }
            
            useEffect(() => {
                const validated = async () => {
                    const response = await fetch(APIROOT + '/validate', {
                        headers: {...HEADERS, Authorization: `Bearer ${localStorage.getItem("token")}`}
                    })
                    const json = await response.json()
                    if (json.error) {
                        setAuthorized(false)
                    } else {
                        setAuthorized(true)
                    }
                }
                validated()
            }, [])

            return (
                <Fragment>
                {authorizationSwitch()}
                </Fragment>
            )
        }
    )
}