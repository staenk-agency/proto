import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './Home.jsx'
import CalendarMonth from './pages/calendar/CalendarMonth'
import CalendarWeek from './pages/calendar/CalendarWeek'

export class Router extends Component {
    render() {
    return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/calendarMonthView" component={CalendarMonth} />
                <Route path="/calendarWeekView" component={CalendarWeek} />
            </Switch>
    )
    }
}


export default Router
