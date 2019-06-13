import React from 'react'
import EventsDay from '../../events/EventsDay/EventsDay'

import {filterByStatus} from '../../events/EventsUtils.js'

const DayHourView = ({hour, handleClick, eventsByHour, statusSelected, stepType}) => {
    // console.log("dans dayhourview, eventsInCurrentDay", eventsInCurrentDay[0].date.start.utc())
    return (
        <div className={'hour ' + hour.format('kk')}>
            {hour.format('kk a')}
            <EventsDay key={"event" + hour} hour={hour} eventsFilteredByStatus={filterByStatus(eventsByHour, statusSelected)} handleClick={handleClick} stepType={stepType}/>
        </div>
    )
}

export default DayHourView;