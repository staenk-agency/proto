import React from 'react'
import './EventsMonthView.scss'

import EventFormat from '../EventFormat'
import {filterEventsByHalf} from '../../events/EventsUtils.js'

const EventsMonthView = ({day, eventsFilteredByStatus, selectEvent, stepType}) => {  
    const [eventAfternoon, eventMorning] = filterEventsByHalf(eventsFilteredByStatus, day)

    const showMore = () => {
        return console.log("lol")
    }
    
    return (
        <div className="events-month-container">
            <div className="morning-container">
            {
                eventMorning &&
                eventMorning.map((eventByHalf, index) => {
                    return(
                        <EventFormat eventByHalf={eventByHalf} index={index} selectEvent={selectEvent} stepType={stepType} showMore={showMore}/>
                    )
                })
            }
            </div>
            <div className="afternoon-container">
            {
                eventAfternoon &&
                eventAfternoon.map((eventByHalf,index) => {
                    return(
                        <EventFormat eventByHalf={eventByHalf} index={index} selectEvent={selectEvent} stepType={stepType} showMore={showMore} />
                    )
                })
            }
            </div>
        </div>
    )
}
export default EventsMonthView