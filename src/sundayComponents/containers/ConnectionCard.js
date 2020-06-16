import React from 'react';

const ConnectionCard = () => {


    return(
        <div class="connection-wrapper">
            <div class="connection-background">
                <h1>Connect</h1>
                <form>
                    <input placeholder="Full Name" />
                    <input placeholder="Email" />
                    <input placeholder="Comment/Prayer Request" />
                    <div className="connection-checkboxes">
                        <p>I would like to...</p>



                        <div>
                            <input type="checkbox" /> 
                            <label>Learn about Jesus</label>
                        </div>
                        <div>
                            <input type="checkbox" /> 
                            <label>Hear about the church</label>
                        </div>
                        <div>
                            <input type="checkbox" /> 
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