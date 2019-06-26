import React from 'react'
// import EventsWeekView from '../../events/EventsWeek/EventsWeekView'
import Events from '../../events/Events'

import {filterByStatus} from '../../events/EventsUtils.js'

import namesInFrench from '../momentsFrench.json'
const displayNameFrench = (mDate, daysName) => {
    return daysName[2].daysNameWeek[mDate];
}

const DayWeekView = ({day, selectEvent, eventsByDay, statusSelected, stepType, toggleModal}) => {
    return (
        <div className={"day position" + day.format('d')}>
            <p>{displayNameFrench(day.format('d'), namesInFrench)}</p>
            <div className="day-post">
                <Events key={'day' + day.id} day={day} eventsFilteredByStatus={filterByStatus(eventsByDay, statusSelected)} selectEvent={selectEvent} stepType={stepType} toggleModal={toggleModal}/>
            </div>
        </div>
    )
}
export default DayWeekView;