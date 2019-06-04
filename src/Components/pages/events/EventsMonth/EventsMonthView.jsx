import React from 'react'
import './EventsMonthView.scss'

import {filterEventsByDay, filterEventsByHalf} from '../EventsUtils.js'

const EventsMonthView = ({day, eventsInCurrentMonth, handleClick}) => {
    const eventByDay = filterEventsByDay(eventsInCurrentMonth, day)
    const [eventAfternoon, eventMorning] = filterEventsByHalf(eventByDay, day)
    
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
                            className={`eventView morning validate-${eventByDay.status.isValidated} process-${eventByDay.status.isInProcess}`}> 
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
                            className={`eventView afternoon validate-${eventByDay.status.isValidated} process-${eventByDay.status.isInProcess}`}>
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