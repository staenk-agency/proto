import React from 'react'
import './CalendarDay.scss'
import DayHourView from '../calendar/DayHourView'

import {useCalendarState, useInitCalendarState, useHandleClick} from './HooksCalendar.js'

const CalendarDay = ({currentMoment}) => {
    let [currentStart, nextStep, previousStep] = useCalendarState(currentMoment.clone(), 'd', 24)
    let [hours, recomputeDays] = useInitCalendarState(currentStart,'h', 24)
    let [dateSelected, select] = useHandleClick(null)

    // console.log('current moment day ', currentMoment.format('DD MM YY'))
    // console.log('current start day', currentStart)
    // if(dateSelected)
    //     console.log('hour selected day', dateSelected.utc().format('DD MM YYYY kk mm') )
    return (
    <div className="calendar-day-container">
        <div className="calendar-day-button-and-date">
            <button className="btn-previous-day" onClick={() => previousStep('1', 'd', recomputeDays, 'h')}><i className="fas fa-caret-left"/></button>
            <p> {currentStart.format('DD MMMM YYYY')} </p>
            <button className="btn-next-day" onClick={() => nextStep('1', 'd', recomputeDays, 'h')}><i className="fas fa-caret-right"/></button>
        </div>
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