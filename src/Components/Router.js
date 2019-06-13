import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import CalendarContainer from './pages/calendar/CalendarContainer/CalendarContainer'

class Router extends Component {
    render() {
    return (
            <Switch>
                <Route exact path="/" component={CalendarContainer} />
            </Switch>
    )
    }
}


export default Router
