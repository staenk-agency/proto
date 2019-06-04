import React from 'react'
import EventsMonthView from '../../events/EventsMonth/EventsMonthView'

const DayMonthView = ({day, handleClick, eventsInCurrentMonth}) => {
	let dayOfWeek = day.isoWeekday() -1;		//use to have the correct position in the grid, isoWeekday display days between 1 and 7
    
    console.log("days received in daymonthview", day.format("DD/MM/YYYY"))
    return (
        <div className={'weekDay position' + dayOfWeek} >
            {day.format("DD")}
            <EventsMonthView key={'day' + day} day={day} eventsInCurrentMonth={eventsInCurrentMonth} handleClick={handleClick}/>
        </div>
    )
}

export default DayMonthView;