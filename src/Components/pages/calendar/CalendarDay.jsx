import React from 'react'
import './CalendarDay.scss'
import DayHourView from '../calendar/DayHourView'

import {useCalendarState, useInitCalendarState, useHandleClick} from './HooksCalendar.js'

const CalendarDay = ({currentMoment}) => {
    let [currentStart, nextStep, previousStep] = useCalendarState(currentMoment, 'd', 24)
    let [hours, recomputeDays] = useInitCalendarState(currentStart,'h', 24)
    let [dateSelected, select] = useHandleClick(null)

    console.log('current day')
    if(dateSelected)
        console.log('hour selected day', dateSelected.utc().format('DD MM YYYY kk mm') )
    return (
    <div className="calendar-day-container">
        <button onClick={() => previousStep('1', 'd', recomputeDays, 'h')}><i className="fas fa-backward"/></button>
        <p> {currentStart.format('DD MMMM YYYY')} </p>
        <button onClick={() => nextStep('1', 'd', recomputeDays, 'h')}><i className="fas fa-caret-right"/></button>
            {
                hours.map((hour, id) => {
                    return(
                        <DayHourView hour={hour} key={id}  handleClick={select}/>
                    )
                })
            }
            
    </div>
    )
}

export default CalendarDay