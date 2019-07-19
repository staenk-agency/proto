import React from 'react'
// import EventsMonthView from '../../events/EventsMonth/EventsMonthView'
import Events from '../../events/Events'

import {filterByStatus} from '../../events/EventsUtils.js'

const checkIfCurrentDate = (day, currentDate) => {
    let currentDateBackground = false;    
    if(currentDate.isSame(day, 'day')){
        return currentDateBackground = true;
    } else {
        currentDateBackground = false;
    }
}

const DayMonthView = ({day, selectEvent, eventByDay, statusSelected, stepType, eventsListModal, displayMoreEvents, eventsList, currentDate}) => {
	let dayOfWeek = day.isoWeekday() -1;		//use to have the correct position in the grid, isoWeekday display days between 1 and 7
    const currentDateBackground = checkIfCurrentDate(day, currentDate)
    
    return (
        <div className={`weekDay position${dayOfWeek} is-current-${checkIfCurrentDate(day, currentDate)}`}>
            <p className="day-display">{day.format("D")}</p>
            <Events 
                key={'day' + day} 
                day={day} 
                eventsFilteredByStatus={filterByStatus(eventByDay, statusSelected)} 
                selectEvent={selectEvent} 
                stepType={stepType} 
                eventsListModal={eventsListModal} 
                displayMoreEvents={displayMoreEvents}
                eventsList={eventsList}
                />
        </div>
    )
}

export default DayMonthView;