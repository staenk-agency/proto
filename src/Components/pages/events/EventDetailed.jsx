import React from 'react'

const EventDetailed = ({eventByHalf, eventContentDisplayed}) => {
    return (
        <>
        {
            eventContentDisplayed === eventByHalf.id &&
            <div className={`hideContent`}>
                <p>{eventByHalf.shortDescription}</p>
                <p>{eventByHalf.message} </p>
            </div>
        }
        </>
    )
}

export default EventDetailed