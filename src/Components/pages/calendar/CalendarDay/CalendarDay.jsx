import React from 'react'
import './CalendarDay.scss'
import DayHourView from '../CalendarDay/DayHourView'

import {useInitCalendarState, useHandleClick} from '../HooksCalendar.js'
import {filterEventsByView} from '../../events/EventsUtils.js'

const CalendarDay = ({currentStart, nextStep, previousStep, returnToCurrentDate}) => {
    const [hours, recomputeDays] = useInitCalendarState(currentStart,'h', 24)
    const [dateSelected, select] = useHandleClick(null)
    const eventsInCurrentDay = filterEventsByView(currentStart, 'd')

    // console.log("dans calendar day, eventsInCurrentDay", eventsInCurrentDay[0].date.start.format('kk:mm'))
    // if(dateSelected)
    //      console.log('hour selected day', dateSelected.utc().format('DD MM YYYY kk mm') )
    return (
    <div className="calendar-day-container">
        <div className="calendar-day-button-and-date">
            <button className="btn-previous-day" onClick={() => previousStep('day', recomputeDays, 'h', 24, 'day')}><i className="fas fa-caret-left"/></button>
            <p> {currentStart.format('DD MMMM YYYY')} </p>
            <button className="btn-next-day" onClick={() => nextStep('day', recomputeDays, 'h', 24, 'day')}><i className="fas fa-caret-right"/></button>
            <button onClick={() => returnToCurrentDate(recomputeDays, 'h', 24, 'day')}>Aujourd'hui</button>
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