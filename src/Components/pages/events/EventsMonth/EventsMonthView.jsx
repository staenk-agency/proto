import React from 'react'
import {filterEventsByDay, filterEventsByHalf} from '../EventsUtils.js'
import './EventsMonthView.scss'

const EventsMonthView = ({day, eventsInCurrentMonth}) => {
    const eventByDay = filterEventsByDay(eventsInCurrentMonth, day)
    const [eventAfternoon, eventMorning] = filterEventsByHalf(eventByDay, day)

    // console.log("eventsInCurrentMonth filtered in month view", eventsInCurrentMonth)
    // console.log("eventsinmonth", eventsInCurrentMonth)
    // console.log("eventByDay dans month view", eventByDay
    // console.log("tableau d'event aprem", eventAfternoon)
    // console.log("tableau d'event matin", eventMorning)

    return (
        <div className="events-month-container">
            <div className="morning-container">
            {
                eventMorning.map(eventByDay => {
                    return(
                        <>
                            {
                                <p className="eventView morning">{eventByDay.date.startHour}</p>
                            }
                        </>
                    )
                })
            }
            </div>
            <div className="afternoon-container">
            {
                eventAfternoon.map(eventByDay => {
                    return(
                        <>
                            {
                                <p className="eventView afternoon">{eventByDay.date.startHour}</p>
                            }
                        </>
                    )
                })
            }
            </div>
        </div>
    )
}
export default EventsMonthView;