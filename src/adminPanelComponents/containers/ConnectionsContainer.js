import React, {useState, useEffect} from 'react';
import Connection from '../components/Connection.js'
import ValidationHOC from '../HOCs/ValidationHOC.js'
import AdminPanelWrapperHOC from '../HOCs/AdminPanelWrapperHOC.js'

const ConnectionsContainer = () => {

    const [connections, setConnections] = useState(null)

    const populateConnections = () => {
        let counter = 0
        return connections.map(connection => {
            counter++
            return <Connection connection={connection} key={counter} id={counter}/>
        })
    }

    useEffect(() => {
        setConnections(null)
    }, [])

    return(
        <div className="connection-wrapper">
            <div className="connection-box">
                <div className="connection-box-header">
                    <h1>Connections</h1>
                </div>
                <div className="connections-overflow-wrapper">

                <table className="connections-list">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Comment</th>
                        <th>Learn About Jesus</th>
                        <th>Hear About Church</th>
                        <th>Talk To Pastor</th>
                    </tr>
                    {connections ? populateConnections() : null}
                </table>
                </div>
            </div>
        </div>
    )
}

export default ValidationHOC(AdminPanelWrapperHOC(ConnectionsContainer))