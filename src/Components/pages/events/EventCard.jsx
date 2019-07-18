import React from 'react'
import './EventCard.scss'

import EventsIcon from './EventsIcon'
// import {useEventContent} from './EventsHook.js'


const displaySocialNetworkIcon = (event) => {
    console.log("event in magic function", event)
    console.log("event conditions", event.linkedin)
    switch (event) {
        case(event.twitter === true) : 
            return <i class="fab fa-twitter"></i>;
        case(event.linkedin === true) :
            return <i class="fab fa-linkedin"></i>;
        case(event.instagram === true) :
            return <i class="fab fa-instagram"></i>;
        default :
            return <i className="fab fa-facebook"></i>;
    }
}
const EventCard = ({selectEvent, eventByHalf, index, stepType}) => {
    // const [eventContentDisplayed, text] = useEventContent(eventByHalf.id)
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
            className={`eventView validated-${eventByHalf.status.isValidated} process-${eventByHalf.status.isInProcess} notValidated-${eventByHalf.status.isNotValidated} eventView-${stepType}`}>
                <EventsIcon eventByHalf={eventByHalf} />
                <p className="eventFormat month">{eventByHalf.date.mDate.format('kk:mm')}</p>
            </div>
            {
                stepType !=='month' &&
                <div className={`eventFormat content`} onClick={() => selectEvent(eventByHalf)}>
                    <img className={`eventAccountPic ${stepType}`} src={eventByHalf.account.picture} alt={eventByHalf.account.name}/> 
                    {displaySocialNetworkIcon(eventByHalf.socialNetworks.network)}
                    <h3>{eventByHalf.title}</h3>
                    <p>{eventByHalf.shortDescription}</p>
                    <p>{eventByHalf.message}</p>
                    {/* <button className="showMoreOrLess" onClick={() => selectEvent(eventByHalf)}>{text}</button> */}
                    {/* <button className="showMoreOrLess" onClick={() => displayContent()}>{text}</button>      */}
                </div>
            }
        </div>
        </>
    )
}

export default EventCard
