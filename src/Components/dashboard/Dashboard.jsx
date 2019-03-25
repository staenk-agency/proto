import React, { Component } from 'react';
import Calendar from '../pages/calendar/Calendar';
import NavbarDashboard from './NavbarDashboard';
import './Dashboard.scss';

export class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <NavbarDashboard />
                <Calendar />
            </div>
        )
    }
}

export default Dashboard;
