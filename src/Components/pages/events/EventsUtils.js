import React, {useState} from 'react'
import moment from 'moment'
import datasJson from '../../../data.json'

const allEventsfromContext = datasJson;

const sortEvents = (array) => 
    array.sort((a, b) => parseInt(a.date.startHour).valueOf() - parseInt(b.date.startHour).valueOf())

// function filterEventsByView rename
export const filterEventsByMonth = (mDate, view) => {
    const events = allEventsfromContext.filter((event) => {
        const eventDate = event.date.start;
        const firstDayMonth = mDate.clone().startOf(view).utc().format('DD/MM/YY')
        const lastDayMonth= mDate.clone().endOf(view).utc().format('DD/MM/YY')
        if(moment(eventDate, "DD/MM/YY").utc().isBetween(moment(firstDayMonth, "DD/MM/YY"), moment(lastDayMonth, "DD/MM/YY")) || moment(eventDate, "DD/MM/YY").utc().isSame(moment(firstDayMonth, "DD/MM/YY")) || moment(eventDate, "DD/MM/YY").utc().isSame(moment(lastDayMonth, "DD/MM/YY")))
            return event
    })
    return events
}

export const filterEventsByDay = (eventsFilteredByMonth, mDate) => {
    const event = eventsFilteredByMonth.filter((event) => {
        if(event.date.start === moment(mDate).utc().format('DD/MM/YY'))
            return event
    })
    return event
}

export const filterEventsByHalf = (eventsFilteredByDay, mDate) => {
    let isMorning = Boolean
    let eventMorning = []
    let eventAfternoon = []
    let sortedEventsAfternoon = []
    let sortedEventsMorning = []
    const morning = moment(mDate).startOf('d')
    const afternoon = moment(morning).add(11, 'h')

    if(eventsFilteredByDay){
        const event = eventsFilteredByDay.filter((event) => {
            const eventMoment = [event.date.start + " " + event.date.startHour].join()
            // if events are during morning
            if(moment(eventMoment, "DD/MM/YY HH:mm").utc().isBetween(morning.format(), afternoon.format()) || moment(eventMoment, "DD/MM/YY HH:mm").utc().isSame(morning.format())){
                isMorning = true
                eventMorning.push(event)
                console.log("push in morning array", eventMorning)
                sortedEventsMorning = sortEvents(eventMorning)
                console.log("sortedEventsMorning", sortedEventsMorning)
                return [event, sortedEventsMorning, isMorning]
            // if events are during afternoon
            } else {
                isMorning = false
                eventAfternoon.push(event)
                console.log("push in afternoon array", eventMorning)
                sortedEventsAfternoon = sortEvents(eventAfternoon)
                console.log("sortedEventsAfternoon", sortedEventsAfternoon)
                return [event, sortedEventsAfternoon, isMorning] 
            }
            })
            return [event, sortedEventsAfternoon, sortedEventsMorning, isMorning]
    }
}
