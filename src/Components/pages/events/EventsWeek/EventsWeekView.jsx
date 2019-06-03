import React from 'react'
import './EventsWeekView.scss'

import {filterEventsByDay, filterEventsByHalf} from '../EventsUtils.js'

const EventsWeekView = ({day, halfday, eventsInCurrentWeek, handleClick}) => {
    const eventByDay = filterEventsByDay(eventsInCurrentWeek, day)
    const [eventAfternoon, eventMorning] = filterEventsByHalf(eventByDay, day)

    // console.log("events in week", eventAfternoon, eventMorning)
    return(
        <>
            <div className="eventsWeekView container-morning">
            {
                eventMorning &&
                    eventMorning.map((event, index) => {
                        return(
                            <div onClick={() => handleClick(event)} key={event + index} className="single-event">
                                <div className="single-event-hour">{event.date.mDate.format('kk:mm')}</div>
                                <p><img src={event.account.picture} alt={event.account.name}/> {event.account.name}</p> 
                                <p>{event.title}</p>
                            </div>
                        )
                    })
            }
            </div>
            <div className="eventsWeekView container-afternoon">
            {
                eventAfternoon &&
                    eventAfternoon.map((event, index) => {
                        return(
                            <div onClick={() => handleClick(event)} key={event + index} className="single-event">
                                <div className="single-event-hour">{event.date.startHour}</div>
                                <p><img src={event.account.picture} alt={event.account.name}/></p> 
                                <p>{event.title}</p>
                            </div>
                        )
                    })
            }
            </div>
        </>
    )
}
export default EventsWeekView