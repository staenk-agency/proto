import React from 'react'
import './CalendarMonth.scss'
import DayMonthView from './DayMonthView'
import {useInitCalendarState, useHandleClick} from '../HooksCalendar.js'
import {filterEventsByView} from '../../events/EventsUtils.js'

const CalendarMonth = ({currentMoment, currentStart, nextStep, previousStep, displayMonthFrench, daysName, monthsName}) => {
    const [days, recomputeDays] = useInitCalendarState(currentStart.clone(), 'day', 'month')
    const [dateSelected, select] = useHandleClick(null)
    const eventsInCurrentMonth = filterEventsByView(currentStart, 'month')

    // console.log("current in calendar month", currentMoment.format('DD/MM/YY'))
    console.log('current start calendar month', currentStart.format('DD/MM/YY'))

    // console.log('dans calendar month', eventsInCurrentMonth[0].date.start.format('DD/MM/YY kk:mm'))
    // console.log('current moment month :', currentMoment.format('DD MM YY'))
    // console.log("current start:  month", currentStart.format('DD MM YY'))
    // console.log("dateSelected month", dateSelected)

    console.log("days", days)
    return (
        <div className="calendar-month-container">
            <div className="calendar-nav">
                <button className="btn-previous-year" onClick={() => previousStep('1', 'year', recomputeDays, 'd', 'month')}><i className="fas fa-backward"/></button>
                <button className="btn-previous-month" onClick={() => previousStep('1', 'month', recomputeDays, 'd', 'month')}> <i className="fas fa-caret-left"/></button>
                <button className="btn-next-month" onClick={() => nextStep('1', 'month', recomputeDays, 'd', 'month')}><i className="fas fa-caret-right"/></button>
                <button className="btn-next-year" onClick={() => nextStep('1', 'year', recomputeDays, 'd', 'month')}><i className="fas fa-forward"/></button>
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
