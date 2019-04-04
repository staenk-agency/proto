import React from 'react'
import './CalendarDay.scss'
import DayHourView from '../calendar/DayHourView'

import {useCalendarState, useInitCalendarState, useHandleClick} from './HooksCalendar.js'

const CalendarDay = ({currentFirstHour}) => {
    let [currentStart, nextStep, previousStep] = useCalendarState(currentFirstHour, 'd', 24)
    let [hours, recomputeDays] = useInitCalendarState(currentStart,'h', 24)
    let [dateSelected, select] = useHandleClick(null)

    console.log('hour selected', dateSelected )

    return (
    <div className="calendar-day-container">
        <p> {currentStart.format('DD MMMM YYYY')} </p>
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