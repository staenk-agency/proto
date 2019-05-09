import React from 'react'
import moment from 'moment'
import {filterEventsByDay, filterEventsByHalf} from '../EventsUtils.js'

import './EventsWeekView.scss'

const EventsWeekView = ({day, halfday, eventsInCurrentWeek}) => {
    const eventByDay = filterEventsByDay(eventsInCurrentWeek, day)
    const [event, eventAfternoon, eventMorning, isMorning] = filterEventsByHalf(eventByDay, day)

    // console.log("day", moment(day))
    console.log("eventsInCurrentWeek", eventsInCurrentWeek)
    console.log("eventByDay", eventByDay)
    console.log("eventMorning", eventMorning)
    console.log("eventAfternoon", eventAfternoon)
    return(
        <>
            <div className="eventsWeekView container-morning">
            {
                isMorning  && (
                    eventMorning.map((event) => {
                        return(
                            <div className="single-event">
                                <p><span>{event.date.startHour}</span> {event.title}</p>
                            </div>
                        )
                    })
                )
            }
            </div>
            <div className="eventsWeekView container-afternoon">
            {
                isMorning === false && (
                    eventAfternoon.map((event) => {
                        return(
                            <div className="single-event">
                                <p><span>{event.date.startHour}</span> {event.title}</p>
                            </div>
                        )
                    })
                )
            }
            </div>
        </>
    )
}
export default EventsWeekView;