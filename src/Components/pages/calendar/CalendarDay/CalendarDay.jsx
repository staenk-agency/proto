import React from 'react'
import './CalendarDay.scss'
import DayHourView from '../CalendarDay/DayHourView'

import {useInitCalendarState} from '../HooksCalendar.js'
import {filterEventsByView} from '../../events/EventsUtils.js'

const CalendarDay = ({currentMoment, nextStep, previousStep, returnToCurrentDate, selectEvent, statusSelected}) => {
    const currentStart = currentMoment.clone().startOf('day')
    const [hours, recomputeDays] = useInitCalendarState(currentStart,'h', 24)
    const eventsInCurrentDay = filterEventsByView(currentStart, 'd')

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
                        <DayHourView hour={hour} key={id}  handleClick={selectEvent} eventsInCurrentDay={eventsInCurrentDay} statusSelected={statusSelected}/>
                    )
                })
            }
            
    </div>
    )
}

export default CalendarDay