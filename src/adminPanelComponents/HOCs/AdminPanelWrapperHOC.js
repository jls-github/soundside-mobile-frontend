import React from 'react'
import Navbar from '../components/Navbar.js'

export default function AdminPanelWrapperHOC(WrappedComponent) {
    return (
        function AdminPanelWrapperHOC (props) {

            return (
                <div className="admin-panel-wrapper">
                    <Navbar />
                    <WrappedComponent {...props} />
                </div>
            )
        }
    )
}