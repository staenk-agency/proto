import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './Home.jsx'
// import CalendarContainer from './pages/calendar/CalendarContainer.jsx'
// import CalendarMonth from './pages/calendar/CalendarMonth'
// import CalendarWeek from './pages/calendar/CalendarWeek'

export class Router extends Component {
    render() {
    return (
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
    )
    }
}


export default Router
