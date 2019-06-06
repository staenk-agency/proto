import React from 'react'
import EventsWeekView from '../../events/EventsWeek/EventsWeekView'

import namesInFrench from '../momentsFrench.json'

const displayNameFrench = (mDate, daysName) => {
    return daysName[2].daysNameWeek[mDate];
}

const DayWeekView = ({day, handleClick, eventsInCurrentWeek, statusSelected}) => {
    return (
        <div className={"day position" + day.format('d')}>
            <p>{displayNameFrench(day.format('d'), namesInFrench)} {day.format('DD')}</p>
            <div className="day-post">
                <EventsWeekView key={'day' + day.id} day={day} eventsInCurrentWeek={eventsInCurrentWeek} handleClick={handleClick} statusSelected={statusSelected}/>
            </div>
        </div>
    )
}
export default DayWeekView;