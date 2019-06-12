import React from 'react'
import './EventFormat.scss'

import EventsIcon from './EventsIcon'

const EventFormat = ({handleClick, eventByHalf, index, stepType}) => {
    const more = "Lire plus"
    const less = "Réduire"
    let buttonContent = more

    const handleShowMore = () => {
        const divContent = document.getElementsByClassName(`content ${eventByHalf.id}`)
        const divContentToHide = document.getElementsByClassName(`hideContent ${eventByHalf.id}`)
        if(buttonContent === more){
            divContentToHide[0].style.height = "auto"
            divContent[0].style.background = "#3A3A5E"
            buttonContent = less
        } else {
            divContentToHide[0].style.height = "2em"
            divContent[0].style.background = "white"
            buttonContent = more
        }
        console.log("divContentToHide", divContentToHide)
    }

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
                stepType !=='month' &&
                <div className={`eventFormat content ${eventByHalf.id}`}>
                    <img className={`eventAccountPic ${stepType}`} src={eventByHalf.account.picture} alt={eventByHalf.account.name}/> 
                    <div className={`hideContent ${eventByHalf.id}`}>
                        <h3>{eventByHalf.title}</h3>
                        <p>{eventByHalf.shortDescription}</p>
                        <p>{eventByHalf.message} </p>
                    </div>
                    <button className="showMoreOrLess" onClick={() => handleShowMore()}>{buttonContent}</button>
                </div>
            }
        </>
    )
}
export default EventFormat
