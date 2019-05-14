import React, { Component } from 'react'
import './Dashboard.scss'
import {Link} from 'react-router-dom'

import NavbarDashboard from './NavbarDashboard'
// import datasJson from '../../data.json'
// import {convertDatasInMoment} from '../pages/events/EventsUtils.js'

// let allEventsfromContext = datasJson;

export class Dashboard extends Component {
    render() {
        // const eventsMoment = convertDatasInMoment(allEventsfromContext)
        // console.log("est ce que c'est des moments ", eventsMoment)
        return (
            <div className="dashboard-container">
            <NavbarDashboard />
                <Link to='/calendar'>Go to calendar ! </Link>
            </div>
        )
    }
}

export default Dashboard;
