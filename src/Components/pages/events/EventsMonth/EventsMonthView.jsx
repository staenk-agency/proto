import React from 'react'
import {fetchEvents} from '../EventsHooks.js'

const EventsMonthView = ({day}) => {
    const event = fetchEvents(day)
    // console.log("dans eventsview", event[0])
    return (
        <div>
            {
                event.map(event => {
                    return(
                        <div className="event-container">
                            <p>{event.date.startHour}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default EventsMonthView;