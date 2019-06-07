import React from 'react'
import './EventsMonthView.scss'

import EventFormat from './EventFormat'
import {filterEventsByHalf} from '../../events/EventsUtils.js'

const EventsMonthView = ({day, eventsFilteredByStatus, handleClick}) => {  
    const [eventAfternoon, eventMorning] = filterEventsByHalf(eventsFilteredByStatus, day)
    
    return (
        <div className="events-month-container">
            <div className="morning-container">
            {
                eventMorning &&
                eventMorning.map((eventByHalf, index) => {
                    return(
                        <EventFormat eventByHalf={eventByHalf} index={index} handleClick={handleClick}/>
                    )
                })
            }
            </div>
            <div className="afternoon-container">
            {
                eventAfternoon &&
                eventAfternoon.map((eventByHalf,index) => {
                    return(
                        <EventFormat eventByHalf={eventByHalf} index={index} handleClick={handleClick}/>
                    )
                })
            }
            </div>
        </div>
    )
}
export default EventsMonthView