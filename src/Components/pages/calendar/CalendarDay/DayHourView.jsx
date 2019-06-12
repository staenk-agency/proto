import React from 'react'
import EventsDay from '../../events/EventsDay/EventsDay'

const DayHourView = ({hour, handleClick, eventsInCurrentDay, statusSelected, stepType={stepType}}) => {
    // console.log("dans dayhourview, eventsInCurrentDay", eventsInCurrentDay[0].date.start.utc())
    return (
        <div className={'hour ' + hour.format('kk')}>
            {hour.format('kk a')}
            <EventsDay key={"event" + hour} hour={hour} eventsInCurrentDay={eventsInCurrentDay} handleClick={handleClick} statusSelected={statusSelected} stepType={stepType}/>
        </div>
    )
}

export default DayHourView;