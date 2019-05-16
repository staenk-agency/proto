import React from 'react'
import './CalendarWeek.scss'
import DayWeekView from './DayWeekView'

import {useInitCalendarState, useHandleClick} from '../HooksCalendar.js'
import {filterEventsByView} from '../../events/EventsUtils.js'

const CalendarWeek = ({currentStart, nextStep, previousStep, displayDaysFrench, daysNameWeek}) => {
    currentStart = currentStart.clone().startOf('isoWeek')
    const [days, recomputeDays] = useInitCalendarState(currentStart.clone(), 'day', 7)
    const [dateSelected, select] = useHandleClick(null)
    const eventsInCurrentWeek = filterEventsByView(currentStart, 'isoWeek')

    // console.log('current start calendar week', currentStart.format('DD/MM/YY'))
    return (
        <div className="calendar-week-container">
            <div className="calendar-nav">
                <p className="week-view-p"> 
                    <button className="btn-previous-week"onClick={() => previousStep('week', recomputeDays, 'd', 7, 'isoWeek')}>
                        <i className="fas fa-caret-left"/>
                    </button >Du {currentStart.clone().format('DD/MM/YY')} au {currentStart.clone().endOf('isoWeek').format('DD/MM/YY')}
                    <button className="btn-next-week" onClick={() => nextStep('week', recomputeDays, 'd', 7, 'isoWeek')}>
                        <i className="fas fa-caret-right"/>
                    </button>
                </p>
            </div>
                <div className="weekDays">
                    {
                        days.map((day, id) => {
                            return(
                                <DayWeekView day={day} key={'day' + id} handleClick={select} displayDaysFrench={displayDaysFrench} daysNameWeek={daysNameWeek} eventsInCurrentWeek={eventsInCurrentWeek}/>
                            )
                        })
                    }
                </div>
        </div>
    )
}
export default CalendarWeek
