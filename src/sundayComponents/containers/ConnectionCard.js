import React, {useState} from 'react';

const ConnectionCard = () => {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")
    const [checkbox1, setCheckbox1] = useState(false)
    const [checkbox2, setCheckbox2] = useState(false)
    const [checkbox3, setCheckbox3] = useState(false)

    const handleNameChange = (e) => {
        setFullName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }

    const handleCheckbox1Change = () => {
        setCheckbox1(!checkbox1)
    }

    const handleCheckbox2Change = () => {
        setCheckbox2(!checkbox2)
    }

    const handleCheckbox3Change = () => {
        setCheckbox3(!checkbox3)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const connection = {
            name: fullName,
            email: email,
            comment: comment,
            learn_about_jesus: checkbox1,
            hear_about_church: checkbox2,
            talk_to_pastor: checkbox3
        }
        console.log(connection)
    }
    
    return(
        <div className="connection-wrapper">
            <div className="connection-background">
                <h1>Connection Card</h1>
                <form onSubmit={e => handleSubmit(e)}>
                    <input onChange={e => handleNameChange(e)} placeholder="Full Name" value={fullName}/>
                    <input onChange={e => handleEmailChange(e)} placeholder="Email" value={email}/>
                    <input onChange={e => handleCommentChange(e)} placeholder="Comment/Prayer Request" value={comment}/>
                    <div className="connection-checkboxes">
                        <p>I would like to...</p>
                        <div>
                            <input onChange={handleCheckbox1Change} type="checkbox" value={checkbox1}/> 
                            <label>Learn about Jesus</label>
                        </div>
                        <div>
                            <input onChange={handleCheckbox2Change} type="checkbox" value={checkbox2}/> 
                            <label>Hear about the church</label>
                        </div>
                        <div>
                            <input onChange={handleCheckbox3Change} type="checkbox" value={checkbox3}/> 
                            <label>Talk to a pastor</label>
                        </div>
                    </div>
                    <div className="button-wrapper">
                        <button type="submit">Connect!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ConnectionCard