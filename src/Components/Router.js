import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './Home.jsx'
import Calendar from './pages/calendar/CalendarContainer/CalendarContainer'

export class Router extends Component {
    render() {
    return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/calendar" component={Calendar} />
            </Switch>
    )
    }
}


export default Router
