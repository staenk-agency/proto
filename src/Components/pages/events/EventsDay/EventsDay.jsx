import React from 'react'
import './EventDay.scss'
import {filterEventsByHour} from '../EventsUtils.js'

const EventsDay = ({hour, eventsInCurrentDay}) => {
    const eventsByHours = filterEventsByHour(eventsInCurrentDay, hour)
    // console.log("eventsByHours", eventsByHours)
    return(
        <>
            {
            eventsByHours.length > 0 && (
                eventsByHours.map((event) => {
                    return(
                            <div className="events-day-container">
                                <p><strong>{event.date.startHour}</strong> </p>
                                {event.title} 
                                {event.message} 
                                <img src={event.account.picture} alt={event.account.name}/>
                            </div>
                    )
                })
            )
            }
        </>
    )
}

export default EventsDay;