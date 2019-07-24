import React from 'react'
import './CalendarDay.scss'
import DayHourView from '../CalendarDay/DayHourView'

import namesInFrench from '../momentsFrench.json'
import {useInitCalendarState} from '../HooksCalendar.js'
import {filterEventsByView,filterEventsByHour} from '../../events/EventsUtils.js'

const displayMonthNameFrench = (mDate, monthsName) => {
    return monthsName[0].monthsName[mDate - 1];
}

const CalendarDay = ({currentMoment, nextStep, previousStep, returnToCurrentDate, selectEvent, statusSelected, stepType, allEventsfromContext}) => {
    const currentStart = currentMoment.clone().startOf('day')
    const [hours, recomputeDays] = useInitCalendarState(currentStart,'h', 24)
    const eventsInCurrentDay = filterEventsByView(currentStart, 'd', allEventsfromContext)

    return (
    <div className="calendar-day-container">
        <div className="calendar-day-button-and-date">
            <button className="btn current-date" onClick={() => returnToCurrentDate(recomputeDays, 'h', 24, 'day')}>Aujourd'hui <i className="fas fa-angle-double-right"/></button>
            <div>
                <button className="btn previous-day" onClick={() => previousStep('day', recomputeDays, 'h', 24, 'day')}><i className="fas fa-chevron-left"/></button>
                <p> {currentStart.format('DD')} {displayMonthNameFrench(currentStart.clone().format('M'), namesInFrench)} {currentStart.format('YYYY')}</p>
                <button className="btn next-day" onClick={() => nextStep('day', recomputeDays, 'h', 24, 'day')}><i className="fas fa-chevron-right"/></button>
            </div>
        </div>
            {
                hours.map((hour, id) => {
                    return(
                        <DayHourView hour={hour} key={id} selectEvent={selectEvent} eventsByHour={filterEventsByHour(eventsInCurrentDay, hour)} statusSelected={statusSelected} stepType={stepType}/>
                    )
                })
            }
            
    </div>
    )
}

export default CalendarDay