import React from 'react'
import './EventsWeekView.scss'

import {filterEventsByDay, filterEventsByHalf, filterByStatus} from '../EventsUtils.js'

const EventsWeekView = ({day, eventsInCurrentWeek, handleClick, statusSelected}) => {
    const eventByDay = filterEventsByDay(eventsInCurrentWeek, day)
    const eventsFilteredByStatus = filterByStatus(eventByDay, statusSelected)
    const [eventAfternoon, eventMorning] = filterEventsByHalf(eventsFilteredByStatus, day)

    return(
        <>
            <div className="eventsWeekView container-morning">
            {
                eventMorning &&
                    eventMorning.map((event, index) => {
                        return(
                            <div className="single-event" onClick={() => handleClick(event)} key={event + index} >
                                <div className={`single-event-hour validate-${event.status.isValidated} process-${event.status.isInProcess} notValidate-${event.status.isNotValidated}`}>
                                    {
                                        event.status.isValidated &&
                                        <i className="fas fa-check"/>
                                    }
                                    {
                                        event.status.isNotValidated &&
                                        <i className="fas fa-ban"/>
                                    }
                                    {
                                        event.status.isInProcess &&
                                        <i className="far fa-clock"/>
                                    }
                                    <p>
                                        {event.date.mDate.format('kk:mm')}
                                    </p>
                                </div>
                                <p><img src={event.account.picture} alt={event.account.name}/> {event.account.name}</p> 
                                <p>{event.title}</p>
                            </div>
                        )
                    })
            }
            </div>
            <div className="eventsWeekView container-afternoon">
            {
                eventAfternoon &&
                    eventAfternoon.map((event, index) => {
                        return(
                            <div onClick={() => handleClick(event)} key={event + index} className="single-event">
                                <div className={`single-event-hour validate-${event.status.isValidated} process-${event.status.isInProcess} notValidate-${event.status.isNotValidated}`}>
                                    {
                                        event.status.isValidated &&
                                        <i className="fas fa-check"/>
                                    }
                                    {
                                        event.status.isNotValidated &&
                                        <i className="fas fa-ban"/>
                                    }
                                    {
                                        event.status.isInProcess &&
                                        <i className="far fa-clock"/>
                                    }
                                    <p>
                                        {event.date.mDate.format('kk:mm')}
                                    </p>
                                </div>
                                <p><img src={event.account.picture} alt={event.account.name}/></p> 
                                <p>{event.title}</p>
                            </div>
                        )
                    })
            }
            </div>
        </>
    )
}
export default EventsWeekView