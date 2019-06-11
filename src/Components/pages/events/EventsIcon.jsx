import React from 'react';

const EventsIcon = ({eventByHalf}) => {
    return(
        <div className="eventIcon">
            {
                eventByHalf.status.isValidated &&
                <i className="fas fa-check"/>
            }
            {
                eventByHalf.status.isNotValidated &&
                <i className="fas fa-ban"/>
            }
            {
                eventByHalf.status.isInProcess &&
                <i className="far fa-clock"/>
            }
        </div>
    )
}

export default EventsIcon