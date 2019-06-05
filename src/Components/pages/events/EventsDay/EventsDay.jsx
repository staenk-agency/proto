import React from 'react'
import './EventDay.scss'
import {filterEventsByHour, filterByStatus} from '../EventsUtils.js'

const EventsDay = ({hour, eventsInCurrentDay, handleClick, status}) => {
    const eventsByStatus = filterByStatus(eventsInCurrentDay, status)
    const eventsByHours = filterEventsByHour(eventsByStatus, hour)

    // console.log("events in day", eventsByHours)
    return(
        <>
            {
                eventsByHours.length > 0 && (
                    eventsByHours.map((event, index) => {
                        return(
                            <div onClick={() => handleClick(event)} key={event + index} className={`events-day-container`}>
                                <div className={`validate-${event.status.isValidated} process-${event.status.isInProcess} notValidate-${event.status.isNotValidated}`}>
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
                                <p><strong>{event.date.mDate.format('kk:mm')}</strong></p>
                                </div>
                                <p>{event.title}</p>
                                <p>{event.message}</p>
                                <img src={event.account.picture} alt={event.account.name}/>
                            </div>
                        )
                    })
                )
            }
        </>
    )
}
export default EventsDay