import React from 'react'
import './EventCard.scss'

import EventsIcon from './EventsIcon'
import EventDetailed from './EventDetailed'
import {useEventContent} from './EventsHook.js'

const EventCard = ({selectEvent, eventByHalf, index, stepType}) => {
    const [eventContentDisplayed, text, displayContent] = useEventContent(eventByHalf.id)
    return (
        <>
        <div className="event-view">
            {/* <div className="event-view-pic">
                <img src={eventByHalf.account.picture} alt={eventByHalf.account.name}/>
                <img src={eventByHalf.socialNetworks} alt={eventByHalf.socialNetworks}/>
            </div> */}
            <div 
            onClick={() => selectEvent(eventByHalf)} 
            key={'eventHalf' + index} 
            className={`eventView validated-${eventByHalf.status.isValidated} process-${eventByHalf.status.isInProcess} notValidated-${eventByHalf.status.isNotValidated}`}>
                <EventsIcon eventByHalf={eventByHalf} />
                <p className="eventFormat month">{eventByHalf.date.mDate.format('kk:mm')}</p>
            </div>
            {
                stepType !=='month' &&
                <div className={`eventFormat content`}>
                    <img className={`eventAccountPic ${stepType}`} src={eventByHalf.account.picture} alt={eventByHalf.account.name}/> 
                    <h3>{eventByHalf.title}</h3>
                        <EventDetailed eventByHalf={eventByHalf} eventContentDisplayed={eventContentDisplayed}/>
                        <button className="showMoreOrLess" onClick={() => selectEvent(eventByHalf)}>{text}</button>
                        {/* <button className="showMoreOrLess" onClick={() => displayContent()}>{text}</button>      */}
                </div>
            }
        </div>
        </>
    )
}

export default EventCard
