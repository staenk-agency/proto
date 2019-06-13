import React from 'react'

const EventDetailed = ({eventByHalf, eventContentDisplayed}) => {
    return (
        <>
        {
            eventContentDisplayed === eventByHalf.id &&
            <div className="events-content">
                <p>{eventByHalf.shortDescription}</p>
                <p>{eventByHalf.message} </p>
            </div>
        }
        </>
    )
}

export default EventDetailed