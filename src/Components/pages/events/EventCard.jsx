import React from 'react'
import './EventCard.scss'

import EventsIcon from './EventsIcon'

const displaySocialNetworkIcon = (event) => {
    switch (true) {
        case(event.twitter) : 
            return <i className="fab fa-twitter"></i>;
        case(event.linkedin) :
            return <i className="fab fa-linkedin"></i>;
        case(event.instagram) :
            return <i className="fab fa-instagram"></i>;
        default :
            return <i className="fab fa-facebook"></i>;
    }
}

const EventCard = ({selectEvent, eventByHalf, index, stepType}) => {
    return (
        <>
        <div className="event-view">
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
                    <div className="pictures-event-format">
                        <img className={`eventAccountPic ${stepType}`} src={eventByHalf.account.picture} alt={eventByHalf.account.name}/> 
                            {displaySocialNetworkIcon(eventByHalf.socialNetworks.network)}
                    </div>
                    <h3>{eventByHalf.title}</h3>
                    <p>{eventByHalf.shortDescription}</p>
                    <p>{eventByHalf.message}</p>
                </div>
            }
        </div>
        </>
    )
}

export default EventCard
