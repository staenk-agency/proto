import React from 'react'
import EventsWeekView from '../../events/EventsWeek/EventsWeekView'

const DayWeekView = ({day, handleClick, displayDaysFrench, daysNameWeek, eventsInCurrentWeek}) => {
    return (
        <div className={"day position" + day.format('d')} onClick={() => handleClick(day)}>
            <p>{displayDaysFrench(day.format('d'), daysNameWeek)} {day.format('DD')}</p>
            <div className="day-post">
                    <EventsWeekView key={'day' + day.id} day={day} halfday="afternoon" eventsInCurrentWeek={eventsInCurrentWeek}/>
            </div>
        </div>
    )
}
export default DayWeekView;