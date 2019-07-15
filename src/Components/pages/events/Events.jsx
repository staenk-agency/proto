import React from 'react'
import './Events.scss'

import EventCard from './EventCard'
import {filterEventsByHalf} from '../events/EventsUtils.js'

const Events = ({day, eventsFilteredByStatus, selectEvent, stepType, eventsMoreButton, displayMoreEvents, eventsList}) => {
    const [eventAfternoon, eventMorning] = filterEventsByHalf(eventsFilteredByStatus, day)

    const displayComponent = (eventsHaflDay) => {
        return (
            <>
            { 
                eventsHaflDay && 
                    eventsHaflDay.length < 3 &&
                    eventsHaflDay.map((eventByHalf, index) => {
                        return <EventCard
                            eventByHalf={eventByHalf} 
                            index={index} 
                            selectEvent={selectEvent} 
                            stepType={stepType} 
                            key={index}
                        />
                    })
            }
            { 
                eventsHaflDay && 
                    eventsHaflDay.length > 2 &&
                <>
                    <EventCard
                        eventByHalf={eventsHaflDay[0]} 
                        index={0} 
                        selectEvent={selectEvent} 
                        stepType={stepType} 
                        key={0}
                    />
                    <div id={`button-${eventsHaflDay[0].id}`} className="moreButton" onClick={() => displayMoreEvents(eventsHaflDay)}>
                        <div>...</div> 
                    </div>
                </>
            }
            </>
        )
    }

    // console.log("eventAfternoon", eventAfternoon)
    // console.log("eventMorning", eventMorning)
    // console.log("eventsMoreButton", eventsMoreButton)
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