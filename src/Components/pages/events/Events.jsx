import React from 'react'
import './Events.scss'

import EventCard from './EventCard'
import {filterEventsByHalf} from '../events/EventsUtils.js'


const Events = ({day, eventsFilteredByStatus, selectEvent, stepType, displayMoreEvents}) => {
    const [eventAfternoon, eventMorning] = filterEventsByHalf(eventsFilteredByStatus, day)
    
    // the fontion below displays an EventCard if there is an event.
    // eventsHalfDay represents a list of events, filter by half day (morning or afternoon)
    // the different conditions controls the display in the screen :
    // for calendar month view => max 1 event by half and button more events which opens modal
    // for calendar week view => max 2 events by half and button more events which opens modal

    const displayComponent = (eventsHaflDay) => {  
        return (
            <>
            { 
                eventsHaflDay && 
                    eventsHaflDay.length <= 2 &&
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
                eventsHaflDay && stepType === "week" &&
                    eventsHaflDay.length >= 3 &&
                <>
                    <EventCard
                        eventByHalf={eventsHaflDay[0]} 
                        index={0} 
                        selectEvent={selectEvent} 
                        stepType={stepType} 
                        key={0}
                    />
                    <EventCard
                        eventByHalf={eventsHaflDay[1]} 
                        index={1} 
                        selectEvent={selectEvent} 
                        stepType={stepType} 
                        key={1}
                    />
                    <div className={`moreButton button-${stepType}`} onClick={() => displayMoreEvents(eventsHaflDay)}>
                        <div>...</div> 
                    </div>
                </>
            }
            { 
                eventsHaflDay && stepType === "month" &&
                    eventsHaflDay.length >= 3 &&
                <>
                    <EventCard
                        eventByHalf={eventsHaflDay[0]} 
                        index={0} 
                        selectEvent={selectEvent} 
                        stepType={stepType} 
                        key={0}
                    />
                    <div className={`moreButton button-${stepType}`} onClick={() => displayMoreEvents(eventsHaflDay)}>
                        <div>...</div> 
                    </div>
                </>
            }
            </>
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