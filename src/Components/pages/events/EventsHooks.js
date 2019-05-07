import React, {useState} from 'react'
import moment from 'moment'
import datasJson from '../../../data.json'

const allEventsfromContext = datasJson;
// function filterEventsByView rename

export const filterEventsByMonth = (mDate, view) => {
    const events = allEventsfromContext.filter((event) => {
        const eventDate = event.date.start;
        const firstDayMonth = mDate.clone().startOf(view).format('DD/MM/YY')
        const lastDayMonth= mDate.clone().endOf(view).format('DD/MM/YY')

        if(moment(eventDate, "DD/MM/YY").isBetween(moment(firstDayMonth, "DD/MM/YY"), moment(lastDayMonth, "DD/MM/YY")) || moment(eventDate, "DD/MM/YY").isSame(moment(firstDayMonth, "DD/MM/YY")) || moment(eventDate, "DD/MM/YY").isSame(moment(lastDayMonth, "DD/MM/YY")) 
        )
            return event
    })
    return events
}

export const filterEventsByDay = (eventsFilteredByMonth, mDate) => {
    const event = eventsFilteredByMonth.filter((event) => {
        if(event.date.start === moment(mDate).format('DD/MM/YY'))
            return event
    })
    return event
}

export const filterEventsByHalf = (eventsFilteredByDay, mDate) => {
    console.log("hoookje recois :", eventsFilteredByDay)
    let isMorningInitial = null
    let eventMorning = []
    let eventAfternoon = []
    const morning = moment(mDate).utc().startOf('d')
    const afternoon = moment(morning).utc().add(13, 'h')
    if(eventsFilteredByDay){
        const event = eventsFilteredByDay.filter((event) => {
            const eventMoment = [event.date.start + " " + event.date.startHour].join()
            console.log("morning", moment(morning).format("DD/MM/YY HH:mm"))
            console.log("afternoon", moment(afternoon).format('HH:mm'))
            console.log("current Date", moment(event.date.startHour, "HH:mm"))
            console.log("teeeeeeeest after", moment(eventMoment, "DD/MM/YY HH:mm").isSameOrAfter(moment(morning)))
            console.log("tesssssssst before", moment(eventMoment, "DD/MM/YY HH:mm").isBefore(moment(afternoon)))
            console.log("looooooooooool", moment(eventMoment, "DD/MM/YY HH:mm").isSameOrAfter(moment(morning)) && moment(eventMoment, "DD/MM/YY HH:mm").isBefore(moment(afternoon)))
                if(moment(eventMoment, "DD/MM/YY HH:mm").isSameOrAfter(moment(morning)) && moment(eventMoment, "DD/MM/YY HH:mm").isBefore(moment(afternoon))){
                    isMorningInitial = true
                    eventMorning.push(event)
                    console.log("dans la boucle if", isMorningInitial)
                    console.log("eventMorning", eventMorning)
                    return [event, isMorningInitial, eventMorning]
                } 
                else {
                    isMorningInitial = false
                    eventAfternoon.push(event)
                    console.log("dans la boucle else", isMorningInitial)
                    console.log("eventAfternoon", eventAfternoon)
                    return [event, isMorningInitial, eventAfternoon]
                    
                }
            })
            console.log("avant le return", isMorningInitial)
            return [event, isMorningInitial, eventAfternoon, eventMorning]
    }
}
