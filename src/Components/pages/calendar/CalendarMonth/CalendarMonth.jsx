import React from 'react'
import './CalendarMonth.scss'
import DayMonthView from './DayMonthView'

import {useInitCalendarState, useHandleClick} from '../HooksCalendar.js'
import {filterEventsByView} from '../../events/EventsUtils.js'

const CalendarMonth = ({currentStart, nextStep, previousStep, displayMonthFrench, daysName, monthsName}) => {
    currentStart = currentStart.clone().startOf('month')
    const [days, recomputeDays] = useInitCalendarState(currentStart.clone(), 'day', 'month')
    const [dateSelected, select] = useHandleClick(null)
    const eventsInCurrentMonth = filterEventsByView(currentStart, 'month')

    // console.log('current startMonth calendar month', currentStart.format('DD/MM/YY'))
    return (
        <div className="calendar-month-container">
            <div className="calendar-nav">
                <button className="btn-previous-year" onClick={() => previousStep('year', recomputeDays, 'd', 'month', 'month')}><i className="fas fa-backward"/></button>
                <button className="btn-previous-month" onClick={() => previousStep('month', recomputeDays, 'd', 'month', 'month')}> <i className="fas fa-caret-left"/></button>
                <button className="btn-next-month" onClick={() => nextStep('month', recomputeDays, 'd', 'month', 'month')}><i className="fas fa-caret-right"/></button>
                <button className="btn-next-year" onClick={() => nextStep('year', recomputeDays, 'd', 'month', 'month')}><i className="fas fa-forward"/></button>
                <h3>{displayMonthFrench(currentStart.month(), monthsName)} {currentStart.format("YYYY")}</h3>
            </div>
                <div className="weekDays">
                    {
                        daysName.map((day, id) => {
                            return (
                                <div className={'weekDayName position' + id} key={id}>
                                    {day}
                                </div>
                            )
                        })
                    }
                    {
                        days.map((day, id) => {
                            return(
                                <DayMonthView day={day} key={'weekDay' + id} handleClick={select} eventsInCurrentMonth={eventsInCurrentMonth}/>
                            )
                        })
                    }
                </div>
        </div>
    )
}
export default CalendarMonth;
