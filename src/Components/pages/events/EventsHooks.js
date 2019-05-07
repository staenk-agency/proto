import React, {useState} from 'react'
import moment from 'moment'
import datasJson from '../../../data.json'

const allEventsfromContext = datasJson;

export const filterEventsByMonth = (mDate) => {
    const events = allEventsfromContext.filter((event) => {
        const eventDate = event.date.start;
        const firstDayMonth = mDate.startOf('month')
        const lastDayMonth= mDate.endOf('month')
        // if(moment(event.date.start, "DD/MM/YY").clone().format('MM/YY') === moment(mDate).clone().format('MM/YY'))
        if(moment(eventDate).isBetween(firstDayMonth, lastDayMonth) || moment(eventDate).isSame(firstDayMonth) || moment(eventDate).isSame(lastDayMonth) )
            return event
    })
    return events
}

export const filterEventsByDay = (eventsFilteredByMonth, mDate) => {
    const event = eventsFilteredByMonth.filter((event) => {
        if(event.date.start === moment(mDate).format('DD/MM/YY'))
            // console.log("morning", moment(morning).format('HH:mm'))
            // console.log("after", moment(afternoon).format('HH:mm'))
            // console.log("current Date", event.date.startHour )
            // console.log("test", moment(event.date.startHour).isAfter(moment(morning).format('HH:mm')))
            return event
    })
    return event
}

export const filterEventsByHalf = (eventsFilteredByDay, mDate) => {
    // const [isMorning, setIsMorning] = useState(null);
    let isMorningInitial = null
    const morning = moment(mDate).utc().startOf('d')
    const afternoon = moment(morning).utc().add(13, 'h')
    // console.log("after", moment(afternoon))
    if(eventsFilteredByDay){
        const event = eventsFilteredByDay.filter((event) => {
            const eventMoment = [event.date.start + " " + event.date.startHour].join()
            console.log("morning", moment(morning).format("DD/MM/YY HH:mm"))
            console.log("afternoon", moment(afternoon).format('HH:mm'))
            console.log("current Date", moment(event.date.startHour, "HH:mm"))
            // console.log("teeeeeeeest", moment(eventMoment, "DD/MM/YY HH:mm").isSameOrAfter(moment(morning)))
            console.log("tesssssssst before", moment(eventMoment, "DD/MM/YY HH:mm").isBefore(moment(afternoon)))
                if(moment(eventMoment, "DD/MM/YY HH:mm").isSameOrAfter(moment(morning)) && moment(eventMoment, "DD/MM/YY HH:mm").isBefore(moment(afternoon))){
                    // setIsMorning(true)
                    isMorningInitial = true
                    console.log("dans la boucle if", isMorningInitial)
                    return [isMorningInitial, event]
                } 
                else {
                    // setIsMorning(false)
                    isMorningInitial = false
                    console.log("dans la boucle else", isMorningInitial)
                    return [isMorningInitial, event]
                }
            })
            return [event, isMorningInitial]
    }
}
