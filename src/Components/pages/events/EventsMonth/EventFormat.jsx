import React from 'react'

const EventFormat = ({handleClick, eventByHalf, index}) => {
    return (
        <div 
        onClick={() => handleClick(eventByHalf)} 
        key={'eventHalf' + index} 
        //the className allows me to color the div according to the status => scss
        className={`eventView validated-${eventByHalf.status.isValidated} process-${eventByHalf.status.isInProcess} notValidated-${eventByHalf.status.isNotValidated}`}> 
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
        <p className="eventFormat">{eventByHalf.date.mDate.format('kk:mm')}</p>
        {/* faire condition pour que le component soit réutilisé en semaine et en jour */}
        {/* si c'est en semaine afficher le code en plus :  */}
        {/* <p><img src={eventByHalf.account.picture} alt={eventByHalf.account.name}/>{eventByHalf.account.name}</p> 
        <p>{eventByHalf.title}</p> */}
    </div>
    )
}
export default EventFormat