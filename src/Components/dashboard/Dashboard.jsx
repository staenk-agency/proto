import React, { Component } from 'react'
import './Dashboard.scss'
import {Link} from 'react-router-dom'

import NavbarDashboard from './NavbarDashboard'
// import Router from '../Router.js'

export class Dashboard extends Component {

    render() {
        return (
            <div className="dashboard-container">
            <NavbarDashboard />
                <Link to='/events'>Go to events !</Link>
                <Link to='/calendar'>Go to calendar ! </Link>
            </div>
        )
    }
}

export default Dashboard;
