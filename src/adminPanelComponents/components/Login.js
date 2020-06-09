import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import {APIROOT, HEADERS} from '../../constraints/index.js'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const history = useHistory()

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(APIROOT + '/login', {
            method: "POST",
            headers: {...HEADERS, Authorization: `Bearer ${localStorage.getItem("token")}`},
            body: JSON.stringify({
                site_admin: {
                    username: username,
                    password: password
                }
            })
        })
        const json = await response.json()
        if (json.error) {
            setError(json.error)
        } else {
            localStorage.setItem("token", json.token)
            history.push("/admin")
        }
    }

    return(
        <form>
            {error ? <div>{error}</div> : null }
            <input placeholder="username" value={username} onChange={e => onChangeUsername(e)} />
            <input placeholder="password" value={password} onChange={e => onChangePassword(e)} />
            <button type="submit" onClick={e => handleSubmit(e)}>Login</button>
        </form>
    )

}

export default Login