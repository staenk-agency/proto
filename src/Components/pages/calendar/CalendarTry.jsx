import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

// Setup the localizer by providing the moment Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment)

const CalendarTry = (props) => (
    <div style={{height: 700}}>
        <BigCalendar
            localizer={localizer}
            events={[{
                'title': 'My event',
                'allDay': false,
                'start': new Date(2019, 0, 1, 10, 0), // 10.00 AM
                'end': new Date(2019, 0, 1, 14, 0), // 2.00 PM 
            },
            {
                'title': 'Un autre !',
                'allDay': false,
                'start': new Date(2019, 0, 1, 15, 0), // 15.00 PM
                'end': new Date(2019, 0, 1, 20, 0), // 20.00 PM  
            }
        ]}
            startAccessor="start"
            endAccessor="end"
        />
    </div>
)
export default CalendarTry;
