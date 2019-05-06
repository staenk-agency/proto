import React from 'react'
import EventsWeekView from '../../events/EventsWeek/EventsWeekView'

const DayWeekView = ({day, handleClick, displayDaysFrench, daysNameWeek}) => {
    return (
        <div className={"day position" + day.format('d') } onClick={() => handleClick(day)}>
            <p>{displayDaysFrench(day.format('d'), daysNameWeek)} {day.format('DD')}</p>
            <div className="day-post morning">
                <div>Ajouter un post
                    <EventsWeekView day={day} halfday="morning"/>
                </div>
            </div>
            <div className="day-post afternoon">
                <div>Ajouter un post
                    <EventsWeekView day={day} halfday="afternoon"/>
                </div>
            </div>
        </div>
    )
}

export default DayWeekView;