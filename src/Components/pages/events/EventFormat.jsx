import React from 'react'
import './EventFormat.scss'

import EventsIcon from './EventsIcon'

const EventFormat = ({handleClick, eventByHalf, index, stepType}) => {
    let buttonContent = "Plus"
    
    const showMore = () => {
        const content = document.getElementsByClassName('hideContent')[0]
        content.style.height = "auto"
        buttonContent = "Moins"
    }
    
    console.log("le step", stepType)
    return (
        <>
        <div 
        onClick={() => handleClick(eventByHalf)} 
        key={'eventHalf' + index} 
        className={`eventView validated-${eventByHalf.status.isValidated} process-${eventByHalf.status.isInProcess} notValidated-${eventByHalf.status.isNotValidated}`}>
            <EventsIcon eventByHalf={eventByHalf} />
            <p className="eventFormat month">{eventByHalf.date.mDate.format('kk:mm')}</p>
        </div>
        {
            stepType === 'week' &&
            <div className="eventFormat week">
                <img className="eventAccountPic" src={eventByHalf.account.picture} alt={eventByHalf.account.name}/> 
                <h3>{eventByHalf.title}</h3>
                <div className="hideContent">
                    <p>{eventByHalf.shortDescription}</p>
                    <p>{eventByHalf.message} </p>
                </div>
                <button onClick={() => showMore()}>{buttonContent}</button>
            </div>
        }
        </>
    )
}
export default EventFormat

