import moment from 'moment'
import datasJson from '../../../data.json'

const allEventsfromContext = datasJson;

const sortEvents = (array) => 
    array.sort((a, b) => parseInt(a.date.startHour).valueOf() - parseInt(b.date.startHour).valueOf())

// function filterEventsByView rename
export const filterEventsByView = (mDate, view) => {
    const events = allEventsfromContext.filter((event) => {
        const eventDate = event.date.start;
        const firstDayView = mDate.clone().startOf(view).utc().format('DD/MM/YY')
        const lastDayView= mDate.clone().endOf(view).utc().format('DD/MM/YY')
        if(moment(eventDate, "DD/MM/YY").utc().isBetween(moment(firstDayView, "DD/MM/YY"), moment(lastDayView, "DD/MM/YY")) || moment(eventDate, "DD/MM/YY").utc().isSame(moment(firstDayView, "DD/MM/YY")) || moment(eventDate, "DD/MM/YY").utc().isSame(moment(lastDayView, "DD/MM/YY")))
            return event
    })
    return events
}

export const filterEventsByDay = (eventsFilteredByView, mDate) => {
    const event = eventsFilteredByView.filter((event) => {
        if(event.date.start === moment(mDate).utc().format('DD/MM/YY'))
            return event
    })
    return event
}

export const filterEventsByHour = (eventsFilteredByView, mDate) => {
    let eventsByHour = []
    let eventObject = []
    eventsFilteredByView.filter((event) => {
        const hourDate = mDate.format('HH')
        const hour = event.date.startHour.split(':')
        if(event.date.startHour === mDate.format('HH:mm') || hour[0] === mDate.format('HH')){
            // console.log("dans la boucle !", event.date.startHour)
            // eventsByHour.push(mDate.format('HH') : event)
            eventsByHour.push(event)
            // eventObject.push({ hourDate : event})
            return eventsByHour
        }
    })
    return eventsByHour
}

export const filterEventsByHalf = (eventsFilteredByDay, mDate) => {
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
                eventMorning.push(event)
                // console.log("push in morning array", eventMorning)
                sortedEventsMorning = sortEvents(eventMorning)
                // console.log("sortedEventsMorning", sortedEventsMorning)
                return [sortedEventsMorning]

            // if events are during afternoon
            } else {
                eventAfternoon.push(event)
                // console.log("push in afternoon array", eventMorning)
                sortedEventsAfternoon = sortEvents(eventAfternoon)
                // console.log("sortedEventsAfternoon", sortedEventsAfternoon)
                return [sortedEventsAfternoon] 
            }
            })
            return [sortedEventsAfternoon, sortedEventsMorning]
    }
}
