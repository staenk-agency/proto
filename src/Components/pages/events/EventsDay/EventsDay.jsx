import React from 'react'
import './EventDay.scss'
import {filterEventsByHour} from '../EventsUtils.js'

const EventsDay = ({hour, eventsInCurrentDay}) => {
    const eventByHours = filterEventsByHour(eventsInCurrentDay, hour)
    console.log("eventByHours", eventByHours)
    return(
        <>
            {
                eventByHours.length > 0 && (
                    eventByHours.map((event) => {
                        return(
                            <>
                                <div>
                                    <p><strong>{event.date.startHour}</strong> </p>
                                    {event.title} 
                                    {event.message} 
                                    <img src={event.account.picture} alt={event.account.name}/>
                                </div>
                            </>
                        )
                    })
                )
            }
        </>
    )
}

export default EventsDay;