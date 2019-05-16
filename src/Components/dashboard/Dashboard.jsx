import React, { Component } from 'react'
import './Dashboard.scss'
import {Link} from 'react-router-dom'
import {EventsContext} from '../EventsContext.js'

import events from '../../data.json'
import NavbarDashboard from './NavbarDashboard'

export class Dashboard extends Component {
    render() {
        return (
            <EventsContext.Provider value={events}>
                {this.props.children}
                <div className="dashboard-container">
                <NavbarDashboard />
                    <Link to='/calendar'>Go to calendar ! </Link>
                </div>
            </EventsContext.Provider>
        )
    }
}
// EventsContext.contextType = EventsContext
export default Dashboard
