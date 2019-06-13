import React from 'react'
import EventsWeekView from '../../events/EventsWeek/EventsWeekView'

import {filterByStatus} from '../../events/EventsUtils.js'

import namesInFrench from '../momentsFrench.json'
const displayNameFrench = (mDate, daysName) => {
    return daysName[2].daysNameWeek[mDate];
}

const DayWeekView = ({day, selectEvent, eventsByDay, statusSelected, stepType}) => {
    return (
        <div className={"day position" + day.format('d')}>
            <p>{displayNameFrench(day.format('d'), namesInFrench)} {day.format('DD/MM')}</p>
            <div className="day-post">
                <EventsWeekView key={'day' + day.id} day={day} eventsFilteredByStatus={filterByStatus(eventsByDay, statusSelected)} selectEvent={selectEvent} stepType={stepType}/>
            </div>
        </div>
    )
}
export default DayWeekView;