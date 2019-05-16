import React from 'react'
import './EventsWeekView.scss'

import {filterEventsByDay, filterEventsByHalf} from '../EventsUtils.js'

const EventsWeekView = ({day, halfday, eventsInCurrentWeek}) => {
    const eventByDay = filterEventsByDay(eventsInCurrentWeek, day)
    const [eventAfternoon, eventMorning] = filterEventsByHalf(eventByDay, day)

    return(
        <>
            <div className="eventsWeekView container-morning">
            {
                eventMorning &&
                    eventMorning.map((event) => {
                        return(
                            <div className="single-event">
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
                    eventAfternoon.map((event) => {
                        return(
                            <div className="single-event">
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