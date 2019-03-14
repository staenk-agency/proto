import React, { Component } from 'react';
import Calendar from './Calendar';
import './Dashboard.scss';
// import HorizontalNavBar from './layout/HorizontalNavBar';
// import VerticalMenu from './layout/VerticalMenu';

export class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <Calendar />
            </div>
        )
    }
}

export default Dashboard;
