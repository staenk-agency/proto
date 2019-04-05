import React, { Component } from 'react'
import './Dashboard.scss'

// import NavbarDashboard from './NavbarDashboard'
import CalendarContainer from '../pages/calendar/CalendarContainer'
// import Router from '../Router.js'

export class Dashboard extends Component {

    render() {
        return (
            <div className="dashboard-container">
                <CalendarContainer />
            </div>
        )
    }
}

export default Dashboard;
