import React, {useState} from 'react';

const Login = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    return(
        <form>
            <input placeholder="username" value={username} onChange={e => onChangeUsername(e)} />
            <input placeholder="password" value={password} onChange={e => onChangePassword(e)} />
        </form>
    )

}

export default Login