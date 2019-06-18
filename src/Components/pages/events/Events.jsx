import React from 'react'
import './Events.scss'

import EventCard from './EventCard'
import {filterEventsByHalf} from '../events/EventsUtils.js'

const Events = ({day, eventsFilteredByStatus, selectEvent, stepType, toggleModal}) => {
    const [eventAfternoon, eventMorning] = filterEventsByHalf(eventsFilteredByStatus, day)

    const displayComponent = (eventsHaflDay) => {
        return (
            eventsHaflDay &&
            eventsHaflDay.map((eventByHalf, index) => {
                return <EventCard
                    eventByHalf={eventByHalf} 
                    index={index} 
                    selectEvent={selectEvent} 
                    stepType={stepType} 
                    key={index}
                />
            })
        )
    }
    return (
        <div className={`events-container ${stepType}-cont`}>
            <div className={`morning-container ${stepType}-mor`}>
                {
                    displayComponent(eventMorning)
                }
            </div>
            <div className={`afternoon-container ${stepType}-aft`}>
                {
                    displayComponent(eventAfternoon)
                }
            </div>
        </div>
    )

}
export default Events;