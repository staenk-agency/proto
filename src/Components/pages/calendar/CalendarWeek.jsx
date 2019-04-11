import React from 'react'
import './CalendarWeek.scss'
import DayWeekView from './DayWeekView'

import {useCalendarState, useInitCalendarState, useHandleClick} from './HooksCalendar.js'

const CalendarWeek = ({currentMoment, displayDaysFrench, daysNameWeek}) => {
    let [currentStart, nextStep, previousStep] = useCalendarState(currentMoment.clone(), 'isoWeek', 7) //isoWeek => startOf the first day of the week according iso format
    let [days, recomputeDays] = useInitCalendarState(currentStart, 'd', 7)
    let [dateSelected, select] = useHandleClick(null)

    // console.log('current moment week :', currentMoment.format('DD MM YY'))
    // console.log("dateSelected week", dateSelected)
    // console.log('currentStart week', currentStart)
    return (
        <div className="calendar-week-container">
            <div className="calendar-nav">
                <p className="week-view-p"> 
                    <button className="btn-previous-week"onClick={() => previousStep(7, 'd', recomputeDays, 'd')}>
                        <i className="fas fa-caret-left"/>
                    </button >Du {currentStart.clone().format('DD/MM/YY')} au {currentStart.clone().endOf('isoWeek').format('DD/MM/YY')}
                    <button className="btn-next-week" onClick={() => nextStep(7, 'd', recomputeDays, 'd')}>
                        <i className="fas fa-caret-right"/>
                    </button>
                </p>
            </div>
                <div className="weekDays">
                    {
                        days.map((day, id) => {
                            return(
                                <DayWeekView day={day} key={'day' + id} handleClick={select} displayDaysFrench={displayDaysFrench} daysNameWeek={daysNameWeek}/>
                            )
                        })
                    }
                </div>
        </div>
    )
}
export default CalendarWeek
