import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import Calendar from './pages/calendar/CalendarContainer/CalendarContainer'

class Router extends Component {
    render() {
    return (
            <Switch>
                <Route exact path="/" component={Calendar} />
            </Switch>
    )
    }
}


export default Router
