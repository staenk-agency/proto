import React from 'react';
import '../modal/ModalEventsList.scss'

import EventCard from '../events/EventCard'
// import EventCardModal from '../events/EventCardModal'

const ModalEventsList = ({eventsListModal, displayMoreEvents, eventsList, selectEvent, stepType}) => {
    console.log("eventsList", eventsList)
    return (
        eventsListModal &&
            <div className="modal-events">
                <div className="modal-events-content">
                    <div className="modal-events-header">
                        <i className="fas fa-times close" onClick={() => displayMoreEvents()}></i>
                        <h2>{eventsList[0].date.start}</h2>
                    </div>
                    <div className="modal-events-body">
                        { 
                                eventsList.map((eventByHalf, index) => {
                                    return <EventCard
                                        eventByHalf={eventByHalf} 
                                        index={index} 
                                        selectEvent={selectEvent} 
                                        stepType={stepType} 
                                        key={index}
                                        eventsListModal={eventsListModal}
                                        />
                                })
                        }
                        </div>
                </div>
            </div>
    )
}

export default ModalEventsList;