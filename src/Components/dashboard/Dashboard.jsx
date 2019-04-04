import React, { Component } from 'react'
import './Dashboard.scss'

import NavbarDashboard from './NavbarDashboard'
import CalendarContainer from '../pages/calendar/CalendarContainer'

export class Dashboard extends Component {

    render() {
        return (
            <div className="dashboard-container">
                <NavbarDashboard />
                <CalendarContainer />
            </div>
        )
    }
}

export default Dashboard;
