import React from 'react'
import './EventFormat.scss'

import EventsIcon from './EventsIcon'

const EventFormat = ({selectEvent, eventByHalf, index, stepType, showMore}) => {
    return (
        <>
            <div 
            onClick={() => selectEvent(eventByHalf)} 
            key={'eventHalf' + index} 
            className={`eventView validated-${eventByHalf.status.isValidated} process-${eventByHalf.status.isInProcess} notValidated-${eventByHalf.status.isNotValidated}`}>
                <EventsIcon eventByHalf={eventByHalf} />
                <p className="eventFormat month">{eventByHalf.date.mDate.format('kk:mm')}</p>
            </div>
            {
                stepType !=='month' &&
                <div className={`eventFormat content ${eventByHalf.id}`}>
                    <img className={`eventAccountPic ${stepType}`} src={eventByHalf.account.picture} alt={eventByHalf.account.name}/> 
                    <div className={`hideContent ${eventByHalf.id}`}>
                        <h3>{eventByHalf.title}</h3>
                        <p>{eventByHalf.shortDescription}</p>
                        <p>{eventByHalf.message} </p>
                    </div>
                    <button className="showMoreOrLess">Plus</button>
                </div>
            }
        </>
    )
}
export default EventFormat
