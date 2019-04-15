import React from 'react'
import {fetchDatas} from '../EventsHooks.js'

const EventsMonthView = ({day, handleClick}) => {
    const [title, shortDescription, message, start, end] = fetchDatas(day)

	const dayOfWeek = day.isoWeekday() -1;		//use to have the correct position in the grid, isoWeekday display days between 1 and 7

    // console.log("test title", title, "descr",shortDescription, "msg", message, "start", start, "end", end)
    return (
        <div>
            <div className={'weekDay position' + dayOfWeek} onClick={() => handleClick(day)}>
                {day.format("DD")}
                
                {
                    title && (
                        <div className="event-container">
                            <p>{title}</p>
                            <p>{shortDescription} </p>
                                {/* <p>Début: {start}</p>
                                <p>Fin: {end} </p>
                                <p> {message} </p> */}
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default EventsMonthView;