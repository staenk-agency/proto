import React from 'react'
import './Events.scss'

import EventCard from './EventCard'
import {filterEventsByHalf} from '../events/EventsUtils.js'

const Events = ({day, eventsFilteredByStatus, selectEvent, stepType, displayMoreEvents, eventsList}) => {
    const [eventAfternoon, eventMorning] = filterEventsByHalf(eventsFilteredByStatus, day)
    
    const displayComponent = (eventsHaflDay) => {
        // console.log("eventsHaflDay", eventsHaflDay)
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
    // console.log("eventsList", eventsList)
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