import React from 'react'
import EventsDay from '../../events/EventsDay/EventsDay'

const DayHourView = ({hour, handleClick, eventsInCurrentDay}) => {
    console.log("dans dayhourview, eventsInCurrentDay", eventsInCurrentDay[0].date.start.utc())
    return (
        <div className={'hour ' + hour.format('kk')} onClick={() => handleClick(hour)}>
            {hour.format('kk a')}
            <EventsDay key={"event" + {hour}} hour={hour} eventsInCurrentDay={eventsInCurrentDay}/>
        </div>
    )
}

export default DayHourView;