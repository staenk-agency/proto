import React from 'react'
import './CalendarWeek.scss'
import DayWeekView from './DayWeekView'

import {useInitCalendarState} from '../HooksCalendar.js'
import {filterEventsByView, filterEventsByDay} from '../../events/EventsUtils.js'

const CalendarWeek = ({currentMoment, nextStep, previousStep, returnToCurrentDate, selectEvent, statusSelected, stepType, allEventsfromContext, toggleModal}) => {
    const currentStart = currentMoment.clone().startOf('isoWeek')
    const [days, recomputeDays] = useInitCalendarState(currentStart.clone(), 'day', 7)
    const eventsInCurrentWeek = filterEventsByView(currentStart, 'isoWeek', allEventsfromContext)

    return (
        <div className="calendar-week-container">
            <div className="calendar-nav">
                <button className="btn current-date" onClick={() => returnToCurrentDate(recomputeDays, 'd', 7, 'isoWeek')}>Aujourd'hui</button>
                <div>
                    <button className="btn previous-week" onClick={() => previousStep('week', recomputeDays, 'd', 7, 'isoWeek')}>
                        <i className="fas fa-chevron-left"/>
                    </button>
                    <p>Du {currentStart.clone().format('DD/MM/YY')} au {currentStart.clone().endOf('isoWeek').format('DD/MM/YY')}</p>
                    <button className="btn next-week" onClick={() => nextStep('week', recomputeDays, 'd', 7, 'isoWeek')}>
                        <i className="fas fa-chevron-right"/>
                    </button>
                </div>
            </div>
                <div className="weekDays">
                    {
                        days.map((day, id) => {
                            return(
                                <DayWeekView day={day} key={'day' + id} selectEvent={selectEvent} eventsByDay={filterEventsByDay(eventsInCurrentWeek, day)} statusSelected={statusSelected} stepType={stepType} toggleModal={toggleModal}/>
                            )
                        })
                    }
                </div>
        </div>
    )
}
export default CalendarWeek
