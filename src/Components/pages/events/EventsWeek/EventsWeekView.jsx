import React from 'react'
import {fetchEvents} from '../EventsHooks.js'

const EventsWeekView = ({day, halfday}) => {
    const event = fetchEvents(day)
    console.log("dans eventsview", event[0])
    return (
        <div>
            {
                event[0] && (
                    <div className="event-container halfday">
                    {
                        event.map(event => {
                            return(
                                <div>
                                    <p>{event.date.startHour}</p>
                                    <p>{event.title}</p>
                                    <p>{event.shortDescription}</p>
                                </div>
                            )
                        })
                    }
                    </div>
                )
            }
        </div>
    )
}
export default EventsWeekView;