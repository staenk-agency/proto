import React from 'react'
import EventsWeekView from '../../events/EventsWeek/EventsWeekView'

import namesInFrench from '../momentsFrench.json'

const displayNameFrench = (mDate, daysName) => {
    return daysName[2].daysNameWeek[mDate];
}

const DayWeekView = ({day, handleClick, eventsInCurrentWeek}) => {
    return (
        <div className={"day position" + day.format('d')} onClick={() => handleClick(day)}>
            <p>{displayNameFrench(day.format('d'), namesInFrench)} {day.format('DD')}</p>
            <div className="day-post">
                    <EventsWeekView key={'day' + day.id} day={day} halfday="afternoon" eventsInCurrentWeek={eventsInCurrentWeek}/>
            </div>
        </div>
    )
}
export default DayWeekView;