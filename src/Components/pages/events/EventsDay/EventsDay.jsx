import React from 'react'
import './EventDay.scss'

import EventsFormat from '../EventFormat'
import {filterEventsByHour, filterByStatus} from '../EventsUtils.js'

const EventsDay = ({hour, eventsInCurrentDay, handleClick, statusSelected, stepType}) => {
    const eventsByStatus = filterByStatus(eventsInCurrentDay, statusSelected)
    const eventsByHours = filterEventsByHour(eventsByStatus, hour)

    // console.log("events in day", eventsByHours)
    return(
        <>
            {
                eventsByHours.length > 0 && (
                    eventsByHours.map((event, index) => {
                        return(
                            <EventsFormat eventByHalf={event} index={index} handleClick={handleClick} stepType={stepType}/>
                        )
                    })
                )
            }
        </>
    )
}
export default EventsDay