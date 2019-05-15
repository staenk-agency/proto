import React from 'react'
import './CalendarDay.scss'
import DayHourView from '../CalendarDay/DayHourView'

import {useCalendarState, useInitCalendarState, useHandleClick} from '../HooksCalendar.js'
import {filterEventsByView} from '../../events/EventsUtils.js'


const CalendarDay = ({currentMoment}) => {
    const [currentStart, nextStep, previousStep] = useCalendarState(currentMoment.clone(), 'd', 24)
    const [hours, recomputeDays] = useInitCalendarState(currentStart,'h', 24)
    const [dateSelected, select] = useHandleClick(null)
    const eventsInCurrentDay = filterEventsByView(currentStart, 'd')

    console.log("dans calendar day, eventsInCurrentDay", eventsInCurrentDay[0].date.start.format('kk:mm'))
    // console.log('current moment day ', currentMoment.format('DD MM YY'))
    // console.log('current start day', currentStart)
    // if(dateSelected)
    //      console.log('hour selected day', dateSelected.utc().format('DD MM YYYY kk mm') )
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
                        <DayHourView hour={hour} key={id}  handleClick={select} eventsInCurrentDay={eventsInCurrentDay}/>
                    )
                })
            }
            
    </div>
    )
}

export default CalendarDay