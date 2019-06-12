import React from 'react'
import EventsMonthView from '../../events/EventsMonth/EventsMonthView'
import {filterByStatus} from '../../events/EventsUtils.js'

const DayMonthView = ({day, selectEvent, eventByDay, statusSelected, stepType}) => {
	let dayOfWeek = day.isoWeekday() -1;		//use to have the correct position in the grid, isoWeekday display days between 1 and 7
    
    return (
        <div className={'weekDay position' + dayOfWeek}>
            {day.format("DD")}
            <EventsMonthView key={'day' + day} day={day} eventsFilteredByStatus={filterByStatus(eventByDay, statusSelected)} selectEvent={selectEvent} stepType={stepType}/>
        </div>
    )
}

export default DayMonthView;