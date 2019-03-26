import React, { Component } from 'react';
import NavbarDashboard from './NavbarDashboard';
import './Dashboard.scss';
import CalendarMonth from '../pages/calendar/CalendarMonth';

export class Dashboard extends Component {

    render() {
        return (
            <div className="dashboard-container">
                <NavbarDashboard />
                <CalendarMonth />
            </div>
        )
    }
}

export default Dashboard;
