import React from 'react'
import EventsDay from '../../events/EventsDay/EventsDay'

const DayHourView = ({hour, handleClick, eventsInCurrentDay}) => {
    return (
        <div className={'hour ' + hour.format('kk')} onClick={() => handleClick(hour)}>
            {hour.format('kk a')}
            <EventsDay key={"event" + `${hour}`} hour={hour} eventsInCurrentDay={eventsInCurrentDay}/>
        </div>
    )
}

export default DayHourView;