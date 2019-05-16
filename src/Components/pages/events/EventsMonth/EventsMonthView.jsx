import React from 'react'
import './EventsMonthView.scss'

import {filterEventsByDay, filterEventsByHalf} from '../EventsUtils.js'

const EventsMonthView = ({day, eventsInCurrentMonth}) => {
    const eventByDay = filterEventsByDay(eventsInCurrentMonth, day)
    const [eventAfternoon, eventMorning] = filterEventsByHalf(eventByDay, day)

    return (
        <div className="events-month-container">
            <div className="morning-container">
            {
                eventMorning &&
                eventMorning.map((eventByDay, index) => {
                    return(
                        <p key={'morning' + index} className="eventView morning" >{eventByDay.date.mDate.format('kk:mm')}</p>
                    )
                })
            }
            </div>
            <div className="afternoon-container">
            {
                eventAfternoon &&
                eventAfternoon.map((eventByDay,index) => {
                    return(
                        <p key={'afternoon' + index} className="eventView afternoon">{eventByDay.date.mDate.format('kk:mm')}</p>
                    )
                })
            }
            </div>
        </div>
    )
}
export default EventsMonthView