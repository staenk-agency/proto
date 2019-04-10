import React from 'react'
import './CalendarMonth.scss'
import DayMonthView from './DayMonthView'
import {useCalendarState, useInitCalendarState, useHandleClick} from './HooksCalendar.js'

const CalendarMonth = ({currentMoment, displayMonthFrench, daysName, monthsName}) => {
    let [currentStart, nextStep, previousStep] = useCalendarState(currentMoment.clone(), 'month', 'month')
    let [days, recomputeDays] = useInitCalendarState(currentStart, 'd', 'month')
    let [dateSelected, select] = useHandleClick(null)

    // console.log('current moment month :', currentMoment.format('DD MM YY'))
    // console.log("current start:  month", currentStart.format('DD MM YY'))
    // console.log("dateSelected month", dateSelected)
    return (
        <div className="calendar-month-container">
            <div className="calendar-nav">
                <button className="btn-previous-year" onClick={() => previousStep('1', 'year', recomputeDays, 'd')}><i className="fas fa-backward"/></button>
                <button className="btn-previous-month" onClick={() => previousStep('1', 'month', recomputeDays, 'd')}> <i className="fas fa-caret-left"/></button>
                <button className="btn-next-month" onClick={() => nextStep('1', 'month', recomputeDays, 'd')}><i className="fas fa-caret-right"/></button>
                <button className="btn-next-year" onClick={() => nextStep('1', 'year', recomputeDays, 'd')}><i className="fas fa-forward"/></button>
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
                                <DayMonthView day={day} key={'weekDay' + id} handleClick={select}/>
                            )
                        })
                    }
                </div>
        </div>
    )
}
export default CalendarMonth;
