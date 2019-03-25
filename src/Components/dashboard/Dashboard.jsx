import React, { Component } from 'react';
// import Calendar from '../pages/calendar/Calendar';
import NavbarDashboard from './NavbarDashboard';
import CalendarTry from '../pages/calendar/CalendarTry';
import './Dashboard.scss';

export class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <NavbarDashboard />
                {/* <Calendar /> */}
                <CalendarTry />
            </div>
        )
    }
}

export default Dashboard;
