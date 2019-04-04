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
            currentFirstDayOfMonth: moment().utc().startOf('month')
        }
    }
    displayMonthFrench = (mDate) => {
        const monthsName = ["JANVIER" ,"FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"]
        return monthsName[mDate];
    }
    
    render() {
        const daysName = ["LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI", "DIMANCHE"]
        return (
            <>
                <CalendarMonth currentFirstDayOfMonth={this.state.currentFirstDayOfMonth} displayMonthFrench={this.displayMonthFrench} daysName={daysName}/>
                {/* <CalendarWeek />
                <CalendarDay /> */}
            </>
        )
    }
}

export default CalendarContainer

