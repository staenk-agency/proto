import React, { Component } from 'react'
import moment from 'moment'

import CalendarMonth from './CalendarMonth'
import CalendarWeek from './CalendarWeek'
import CalendarDay from './CalendarDay'

export class CalendarContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentMoment: moment().utc(),
        }
    }
    displayMonthFrench = (mDate, monthsName) => {
        return monthsName[mDate];
    }
    render() {
        const monthsName = ["JANVIER" ,"FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"]
        const daysName = ["LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI", "DIMANCHE"]
        const daysNameWeek = [ "DIMANCHE" ,"LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI"]

        return (
            <>
                <CalendarMonth currentFirstDayOfMonth={this.state.currentMoment} displayMonthFrench={this.displayMonthFrench} daysName={daysName} monthsName={monthsName}/>
                <CalendarWeek currentMoment={this.state.currentMoment} displayDaysFrench={this.displayMonthFrench} daysNameWeek={daysNameWeek}/>
                {/* <CalendarDay currentFirstHour={this.state.currentMoment} /> */}
            </>
        )
    }
}

export default CalendarContainer

