import React from 'react'
import './EventsWeekView.scss'

import EventFormat from '../EventFormat'
import {filterEventsByHalf} from '../EventsUtils.js'

const EventsWeekView = ({day, eventsFilteredByStatus, selectEvent, stepType}) => {
    const [eventAfternoon, eventMorning] = filterEventsByHalf(eventsFilteredByStatus, day)
    return(
        <>
            <div className="eventsWeekView container-morning">
            {
                eventMorning &&
                    eventMorning.map((eventByHalf, index) => {
                        return(
                                <EventFormat eventByHalf={eventByHalf} index={index} selectEvent={selectEvent} stepType={stepType}/>
                        )
                    })
            }
            </div>
            <div className="eventsWeekView container-afternoon">
            {
                eventAfternoon &&
                    eventAfternoon.map((eventByHalf, index) => {
                        return(
                            <EventFormat eventByHalf={eventByHalf} index={index} selectEvent={selectEvent} stepType={stepType}/>
                        )
                    })
            }
            
            </div>
        </>
    )
}
export default EventsWeekView