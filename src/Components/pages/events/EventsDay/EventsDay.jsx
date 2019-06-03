import React from 'react'
import './EventDay.scss'
import {filterEventsByHour} from '../EventsUtils.js'

const EventsDay = ({hour, eventsInCurrentDay, handleClick}) => {
    const eventsByHours = filterEventsByHour(eventsInCurrentDay, hour)
    // console.log("events in day", eventsByHours)
    return(
        <>
            {
                eventsByHours.length > 0 && (
                    eventsByHours.map((event, index) => {
                        return(
                                <div onClick={() => handleClick(event)} key={event + index} className="events-day-container">
                                    <p><strong>{event.date.mDate.format('kk:mm')}</strong> </p>
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
export default EventsDay