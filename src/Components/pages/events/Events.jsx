import React from 'react'
import './Events.scss'

import EventCard from './EventCard'
import {filterEventsByHalf} from '../events/EventsUtils.js'

const Events = ({day, eventsFilteredByStatus, selectEvent, stepType, toggleModal}) => {
    const [eventAfternoon, eventMorning] = filterEventsByHalf(eventsFilteredByStatus, day)

    return (
        <div className={`events-container ${stepType}-cont`}>
            <div className={`morning-container ${stepType}-mor`}>
            {
                eventMorning &&
                eventMorning.map((eventByHalf, index) => {
                    return(
                        <EventCard eventByHalf={eventByHalf} index={index} selectEvent={selectEvent} stepType={stepType} toggleModal={toggleModal}/>
                    )
                })
            }
            </div>
            <div className={`afternoon-container ${stepType}-aft`}>
            {
                eventAfternoon &&
                eventAfternoon.map((eventByHalf,index) => {
                    return(
                        <EventCard eventByHalf={eventByHalf} index={index} selectEvent={selectEvent} stepType={stepType} toggleModal={toggleModal}/>
                    )
                })
            }
            </div>
        </div>
    )

}

export default Events;