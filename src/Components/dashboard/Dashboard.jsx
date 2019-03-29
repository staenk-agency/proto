import React, { Component } from 'react'
import './Dashboard.scss'

import NavbarDashboard from './NavbarDashboard'
import CalendarMonth from '../pages/calendar/CalendarMonth'
import CalendarWeek from '../pages/calendar/CalendarWeek'

export class Dashboard extends Component {

    render() {
        return (
            <div className="dashboard-container">
                <NavbarDashboard />
                <CalendarMonth />
                <CalendarWeek />
            </div>
        )
    }
}

export default Dashboard;
