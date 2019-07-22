import React from 'react';
import '../modal/ModalEventsList.scss'

import EventCardModal from '../events/EventCardModal'

const ModalEventsList = ({eventsListModalOpen, displayMoreEvents, eventsList, selectEvent, stepType}) => {
    return (
        eventsListModalOpen &&
            <div className="modal-events">
                <div className="modal-events-content">
                    <div className="modal-events-header">
                        <div onClick={() => displayMoreEvents()}>
                            <i className="fas fa-times close"></i>
                        </div>
                        {/* <h2>{moment(eventsList[0].date.start).format('DD')}</h2> */}
                        <h2>{eventsList[0].date.start.split('/')[0]}</h2>

                    </div>
                    <div className="modal-events-body">
                        { 
                                eventsList.map((eventByHalf, index) => {
                                    return <EventCardModal
                                        eventByHalf={eventByHalf} 
                                        index={index} 
                                        selectEvent={selectEvent} 
                                        stepType={stepType} 
                                        key={index}
                                        />
                                })
                        }
                        </div>
                </div>
            </div>
    )
}

export default ModalEventsList;