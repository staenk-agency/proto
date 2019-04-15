import React from 'react'
import {fetchDatas} from '../EventsHooks.js'

const EventsMonthView = ({day}) => {
    const [title, shortDescription] = fetchDatas(day)

    return (
        <div>
                {
                    title && (
                        <div className="event-container">
                            <p>{title}</p>
                            <p>{shortDescription}</p>
                        </div>
                    )
                }
        </div>
    )
}
export default EventsMonthView;