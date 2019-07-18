import React from 'react'

import './EventCardModal.scss'
import EventsIcon from '../events/EventsIcon';

const EventCardModal = ({eventByHalf, index, selectEvent, stepType, key}) => {
    return(
        <>
        <div className="event-view-modal">
            <div 
            onClick={() => selectEvent(eventByHalf)} 
            key={'eventHalf' + index} 
            className={`eventViewModal validated-${eventByHalf.status.isValidated} process-${eventByHalf.status.isInProcess} notValidated-${eventByHalf.status.isNotValidated} eventView-${stepType}`}>
                <EventsIcon eventByHalf={eventByHalf} />
                <p className="eventFormat month">{eventByHalf.date.mDate.format('kk:mm')}</p>
            </div>
        </div>
        </>
    )
}

export default EventCardModal;