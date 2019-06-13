import React from 'react'
import './EventDay.scss'

import EventsCard from '../EventCard'
import {filterEventsByHour} from '../EventsUtils.js'

const EventsDay = ({hour, eventsFilteredByStatus, handleClick, stepType}) => {
    const eventsByHours = filterEventsByHour(eventsFilteredByStatus, hour)
    return(
        <>
            {
                eventsByHours.length > 0 && (
                    eventsByHours.map((event, index) => {
                        return(
                            <EventsCard eventByHalf={event} index={index} handleClick={handleClick} stepType={stepType}/>
                        )
                    })
                )
            }
        </>
    )
}
export default EventsDay