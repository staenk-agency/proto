import React, { Component } from 'react'
import './Dashboard.scss'
import {Link} from 'react-router-dom'

import NavbarDashboard from './NavbarDashboard'

export class Dashboard extends Component {

    render() {
        return (
            <div className="dashboard-container">
            <NavbarDashboard />
                <Link to='/calendar'>Go to calendar ! </Link>
            </div>
        )
    }
}

export default Dashboard;
