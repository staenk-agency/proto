import React from 'react'
import './CalendarWeek.scss'
import DayWeekView from './DayWeekView'

import {useCalendarState, useInitCalendarState, useHandleClick} from '../HooksCalendar.js'
import {filterEventsByView} from '../../events/EventsUtils.js'

//on ne peut pas utiliser le même currenstart qu'avec le mois, puisque commence au début de la semain e!! 
const CalendarWeek = ({currentMoment, currentStart, currentStartWeek, nextStep, previousStep, displayDaysFrench, daysNameWeek}) => {
    const [days, recomputeDays] = useInitCalendarState(currentStartWeek.clone(), 'd', 7)
    const [dateSelected, select] = useHandleClick(null)
    const eventsInCurrentWeek = filterEventsByView(currentStartWeek, 'isoWeek')

    console.log('current start calendar week', currentStartWeek.format('DD/MM/YY'))

    // console.log('current moment week :', currentMoment.format('DD MM YY'))
    // console.log("dateSelected week", dateSelected)
    // console.log('currentStart week', currentStart)
    // console.log("eventsInCurrentWeek in calendar week", eventsInCurrentWeek)
    return (
        <div className="calendar-week-container">
            <div className="calendar-nav">
                <p className="week-view-p"> 
                    <button className="btn-previous-week"onClick={() => previousStep(7, 'd', recomputeDays, 'd', 7)}>
                        <i className="fas fa-caret-left"/>
                    </button >Du {currentStartWeek.clone().format('DD/MM/YY')} au {currentStartWeek.clone().endOf('isoWeek').format('DD/MM/YY')}
                    <button className="btn-next-week" onClick={() => nextStep(7, 'd', recomputeDays, 'd', 7)}>
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
