import React, { Component } from 'react'
import './Dashboard.scss'

import NavbarDashboard from './NavbarDashboard'
import CalendarMonth from '../pages/calendar/CalendarMonth'
import CalendarWeek from '../pages/calendar/CalendarWeek'
import CalendarDay from '../pages/calendar/CalendarDay'

export class Dashboard extends Component {

    render() {
        return (
            <div className="dashboard-container">
                <NavbarDashboard />
                <CalendarMonth />
                <CalendarWeek />
                <CalendarDay />
            </div>
        )
    }
}

export default Dashboard;
