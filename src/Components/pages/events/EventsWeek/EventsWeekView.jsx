import React from 'react'
import './EventsWeekView.scss'

import EventFormat from '../EventsMonth/EventFormat'
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
                    eventMorning.map((eventByHalf, index) => {
                        return(
                            <EventFormat eventByHalf={eventByHalf} index={index} handleClick={handleClick}/>
                        )
                    })
            }
            </div>
            <div className="eventsWeekView container-afternoon">
            {
                eventAfternoon &&
                    eventAfternoon.map((eventByHalf, index) => {
                        return(
                            <EventFormat eventByHalf={eventByHalf} index={index} handleClick={handleClick}/>
                        )
                    })
            }
            </div>
        </>
    )
}
export default EventsWeekView