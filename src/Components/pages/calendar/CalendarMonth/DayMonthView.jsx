import React from 'react'
import EventsMonthView from '../../events/EventsMonth/EventsMonthView'

const DayMonthView = ({day, handleClick, eventsInCurrentMonth}) => {
	let dayOfWeek = day.isoWeekday() -1;		//use to have the correct position in the grid, isoWeekday display days between 1 and 7

    return (
        <div className={'weekDay position' + dayOfWeek} onClick={() => handleClick(day)}>
            {day.format("DD")}
            <EventsMonthView key={'day' + {day}} day={day} eventsInCurrentMonth={eventsInCurrentMonth}/>
        </div>
    )
}

export default DayMonthView;