import React from 'react'
import './EventsMonthView.scss'

import {filterEventsByDay, filterEventsByHalf, filterByStatus} from '../EventsUtils.js'

const EventsMonthView = ({day, eventsInCurrentMonth, handleClick, status}) => {
    const eventByDay = filterEventsByDay(eventsInCurrentMonth, day)     //all events in the current day
    const eventsFilteredByStatus = filterByStatus(eventByDay, status)     
    const [eventAfternoon, eventMorning] = filterEventsByHalf(eventsFilteredByStatus, day)

    return (
        <div className="events-month-container">
            <div className="morning-container">
            {
                eventMorning &&
                eventMorning.map((eventByDay, index) => {
                    return(
                        <div 
                            onClick={() => handleClick(eventByDay)} 
                            key={'morning' + index} 
                            className={`eventView morning validated-${eventByDay.status.isValidated} process-${eventByDay.status.isInProcess} notValidated-${eventByDay.status.isNotValidated}`}> 
                        <div className="eventIcon">
                            {
                                eventByDay.status.isValidated &&
                                <i className="fas fa-check"/>
                            }
                            {
                                eventByDay.status.isNotValidated &&
                                <i className="fas fa-ban"/>
                            }
                            {
                                eventByDay.status.isInProcess &&
                                <i className="far fa-clock"/>
                            }
                        </div>
                            <p className="eventFormat">{eventByDay.date.mDate.format('kk:mm')}</p>
                        </div>
                    )
                })
            }
            </div>
            <div className="afternoon-container">
            {
                eventAfternoon &&
                eventAfternoon.map((eventByDay,index) => {
                    return(
                        <div 
                            onClick={() => handleClick(eventByDay)} 
                            key={'afternoon' + index} 
                            className={`eventView morning validated-${eventByDay.status.isValidated} process-${eventByDay.status.isInProcess} notValidated-${eventByDay.status.isNotValidated}`}>
                        <div className="eventIcon">
                            {
                                eventByDay.status.isValidated &&
                                <i className="fas fa-check"/>
                            }
                            {
                                eventByDay.status.isNotValidated &&
                                <i className="fas fa-ban"/>
                            }
                            {
                                eventByDay.status.isInProcess &&
                                <i className="far fa-clock"/>
                            }
                        </div>
                            <p className="eventFormat">{eventByDay.date.mDate.format('kk:mm')}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
export default EventsMonthView