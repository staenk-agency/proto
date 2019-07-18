import React from 'react'
import './CalendarMonth.scss'
import DayMonthView from './DayMonthView'

import namesInFrench from '../momentsFrench.json'
import {useInitCalendarState} from '../HooksCalendar.js'
import {filterEventsByView, filterEventsByDay} from '../../events/EventsUtils.js'

const displayNameFrench = (mDate, monthsName) => {
    return monthsName[0].monthsName[mDate - 1];
}

const CalendarMonth = ({currentMoment, nextStep, previousStep, returnToCurrentDate, selectEvent, statusSelected, stepType, allEventsfromContext, eventsListModal, displayMoreEvents, eventsList, currentDate}) => {
    const currentStart = currentMoment.clone().startOf('month')
    const [days, recomputeDays] = useInitCalendarState(currentStart.clone(), 'day', 'month')
    const eventsInCurrentMonth = filterEventsByView(currentStart, 'month', allEventsfromContext)
    // console.log("namesInFrench", namesInFrench[0].monthsName[currentStart.clone().format('M')])
    // console.log("mDate", currentStart.clone().format('M'))
    return (
        <div className="calendar-month-container">
            <div className="calendar-nav">
                <button className="btn current-date" onClick={() => returnToCurrentDate(recomputeDays, 'd', 'month', 'month')}> <p>Aujourd'hui</p> <i className="fas fa-angle-double-right"/></button>
                <div className="all-btn">
                    <button className="btn previous year" onClick={() => previousStep('year', recomputeDays, 'd', 'month', 'month')}><i className="fas fa-angle-double-left"/></button>
                    <button className="btn previous month" onClick={() => previousStep('month', recomputeDays, 'd', 'month', 'month')}> <i className="fas fa-chevron-left"/></button>
                    {/* <p>Du {currentStart.clone().format('DD/MM/YY')} au {currentStart.clone().endOf('month').format('DD/MM/YY')}</p> */}
                    <p> {displayNameFrench(currentStart.clone().format('M'), namesInFrench)} {currentStart.clone().format('YYYY')}</p>
                    <button className="btn next month" onClick={() => nextStep('month', recomputeDays, 'd', 'month', 'month')}><i className="fas fa-chevron-right"/></button>
                    <button className="btn next year" onClick={() => nextStep('year', recomputeDays, 'd', 'month', 'month')}><i className="fas fa-angle-double-right"/></button>
                </div>
                    {/* <p> {currentMoment.clone().format('dddd DD MMMM')}</p> */}
            </div>
                    <hr/>
                    <div className="grid-dayName">
                    {
                        namesInFrench[1].daysName.map((day, id) => {
                            return (
                                    <div className={'weekDayName position' + id} key={id}>
                                        <p>{day}</p>
                                    </div>
                            )
                        })
                    }
                    </div>
                <div className="weekDays"> 
                    {
                        days.map((day, id) => {
                            return(
                                <DayMonthView 
                                    day={day} key={'weekDay' + id} 
                                    selectEvent={selectEvent} 
                                    statusSelected={statusSelected} 
                                    eventByDay={filterEventsByDay(eventsInCurrentMonth, day)} 
                                    stepType={stepType}
                                    eventsListModal={eventsListModal}
                                    displayMoreEvents={displayMoreEvents}
                                    eventsList={eventsList}
                                    currentDate={currentDate}
                                />
                            )
                        })
                    }
                </div>
        </div>
    )
}
export default CalendarMonth;
