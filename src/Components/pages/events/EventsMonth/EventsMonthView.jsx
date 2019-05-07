import React from 'react'
import {filterEventsByDay, filterEventsByHalf, filterEventsByMonth} from '../EventsHooks.js'
import './EventsMonthView.scss'

//filtrer en une seule fois avec between ! 
const EventsMonthView = ({day}) => {
    const eventsInCurrentMonth = filterEventsByMonth(day, 'month')
    const eventByDay = filterEventsByDay(eventsInCurrentMonth, day)
    const [half, isMorning, eventAfternoon, eventMorning] = filterEventsByHalf(eventByDay, day)
    
    // console.log("eventsInCurrentMonth filtered in month view", eventsInCurrentMonth)
    // console.log("eventsinmonth", eventsInCurrentMonth)
    console.log("eventByDay dans month view", eventByDay)
    // console.log("half dans month view", half)
    return (
        <div className="events-container">
            {
                eventMorning.map(eventByDay => {
                    return(
                        <>
                            {
                                <div className="morning">
                                    <p>{eventByDay.date.startHour}</p>
                                </div>
                            }
                        </>
                    )
                })
            }
            {
                eventAfternoon.map(eventByDay => {
                    return(
                        <>
                            {
                                <div className="afternoon">
                                    <p>{eventByDay.date.startHour}</p>
                                </div>
                            }
                        </>
                    )
                })
            }
            {/* {
                half.map(eventByDay => {
                    return(
                        <>
                            {
                                isMorning === true &&
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
            } */}
        </div>
    )
}
export default EventsMonthView;