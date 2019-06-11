import React from 'react'
import './CalendarMonth.scss'
import DayMonthView from './DayMonthView'

import namesInFrench from '../momentsFrench.json'
import {useInitCalendarState} from '../HooksCalendar.js'
import {filterEventsByView, filterEventsByDay} from '../../events/EventsUtils.js'

const displayNameFrench = (mDate, monthsName) => {
    return monthsName[0].monthsName[mDate];
}
const CalendarMonth = ({currentMoment, nextStep, previousStep, returnToCurrentDate, selectEvent, statusSelected, stepType}) => {
    const currentStart = currentMoment.clone().startOf('month')
    const [days, recomputeDays] = useInitCalendarState(currentStart.clone(), 'day', 'month')
    const eventsInCurrentMonth = filterEventsByView(currentStart, 'month')

    // console.log('current startMonth calendar month', currentStart.format('DD/MM/YY'))
    // console.log("evenements", eventsInCurrentMonth)
    return (
        <div className="calendar-month-container">
            <div className="calendar-nav">
                <button className="btn current-date" onClick={() => returnToCurrentDate(recomputeDays, 'd', 'month', 'month')}>Aujourd'hui</button>
                <div>
                    <button className="btn previous year" onClick={() => previousStep('year', recomputeDays, 'd', 'month', 'month')}><i className="fas fa-angle-double-left"/></button>
                    <button className="btn previous month" onClick={() => previousStep('month', recomputeDays, 'd', 'month', 'month')}> <i className="fas fa-chevron-left"/></button>
                    <p>Du {currentStart.clone().format('DD/MM/YY')} au {currentStart.clone().endOf('month').format('DD/MM/YY')}</p>
                    <button className="btn next month" onClick={() => nextStep('month', recomputeDays, 'd', 'month', 'month')}><i className="fas fa-chevron-right"/></button>
                    <button className="btn next year" onClick={() => nextStep('year', recomputeDays, 'd', 'month', 'month')}><i className="fas fa-angle-double-right"/></button>
                </div>
            </div>
                <h3>{displayNameFrench(currentStart.month(), namesInFrench)} {currentStart.format("YYYY")}</h3>
                <div className="weekDays">
                    {
                        namesInFrench[1].daysName.map((day, id) => {
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
                                <DayMonthView day={day} key={'weekDay' + id} handleClick={selectEvent} statusSelected={statusSelected} eventByDay={filterEventsByDay(eventsInCurrentMonth, day)} stepType={stepType} />
                            )
                        })
                    }
                </div>
        </div>
    )
}
export default CalendarMonth;
