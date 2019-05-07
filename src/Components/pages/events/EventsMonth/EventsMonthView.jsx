import React from 'react'
import {filterEventsByDay, filterEventsByMonth, filterEventsByHalf} from '../EventsHooks.js'
import './EventsMonthView.scss'

//filtrer en une seule fois avec between ! 
const EventsMonthView = ({day}) => {
    const eventsInCurrentMonth = filterEventsByMonth(day)
    const eventByDay = filterEventsByDay(eventsInCurrentMonth, day)
    const [half, isMorning] = filterEventsByHalf(eventByDay, day)
    
    // console.log("eventsInCurrentMonth filtered in month view", eventsInCurrentMonth)
    console.log("eventByDay dans month view", eventByDay)
    console.log("half dans month view", half)
    return (
        <div className="events-container">
            {
                half.map(eventByDay => {
                    return(
                        <>
                            {
                                isMorning &&
                                <div className="morning">
                                    <p>{eventByDay.date.startHour}</p>
                                </div>
                            }
                            {
                                isMorning === false &&
                                <div className="afternoon">
                                    <p>{eventByDay.date.startHour}</p>
                                </div>
                            }
                        </>
                    )
                })
            }
        </div>
    )
}
export default EventsMonthView;