import moment from 'moment'
import datasJson from '../../../data.json'

//this function convert all JSON datas datas.date.mDate in moment object
export const convertDatasInMoment = (datas) => {
    const date = datas.map((event) => {
        const fullDay = moment.utc(event.date.start + " " + event.date.startHour, "DD/MM/YY kk:mm")
        event.date.mDate = fullDay              //create another key in event with a moment value
        return event
    })
    return date
}
//remove when context will be built
const allEventsfromContext = convertDatasInMoment(datasJson);
// let allEventsfromContext = this.context

const sortEvents = (array) => {
    if(array.length > 0) {
        array = array.sort((a, b) => {
            return a.date.mDate.valueOf() - b.date.mDate.valueOf()
        })
        return array
    }
}

export const filterEventsByView = (mDate, view) => {
    const events = allEventsfromContext.filter((event) => {
        const eventDate = event.date.mDate;
        const firstDayView = mDate.clone().startOf(view).utc()
        const lastDayView = mDate.clone().endOf(view).utc()
        if(eventDate.isBetween(firstDayView ,lastDayView) || eventDate.isSame(firstDayView) || eventDate.isSame(lastDayView)){
            return event
        }
    })
    return events
}

// faire d'autres fonctions plus explicites pour clarté du code !
// permet de ne pas aller chercher dans moment js direct 
// filterEventsByMonth(mDate) {return filterEventsByView(mDate,'month')}

export const filterEventsByDay = (eventsFilteredByView, mDate) => {
    const event = eventsFilteredByView.filter((event) => {
        if(event.date.mDate.isSame(mDate, 'day'))
            return event
    })
    return event
}

export const filterEventsByHour = (eventsFilteredByView, mDate) => {
    let eventsByHour = []
    eventsFilteredByView.filter((event) => {
        const eventDate = event.date.mDate.utc()
        if(eventDate.isSame(mDate, 'hour'))
            eventsByHour.push(event)
    })
    sortEvents(eventsByHour)
    return eventsByHour
}

export const filterEventsByHalf = (eventsFilteredByDay, mDate) => {
    let eventMorning = []
    let eventAfternoon = []
    const morning = mDate.clone().utc().startOf('day')
    const afternoon = morning.clone().add(13 , 'hour')

    if(eventsFilteredByDay){
        eventsFilteredByDay.filter((event) => {
        const eventDate = event.date.mDate;
        // if events are during morning (0am/12:59pm)
        if(eventDate.isBetween(morning, afternoon) || eventDate.isSame(morning)){
            eventMorning.push(event)
            return [eventMorning]
            
        // if events are during afternoon (13pm/23:59pm)
        } else {
            eventAfternoon.push(event)
            return [eventAfternoon] 
        }
        })
        eventMorning = sortEvents(eventMorning)
        eventAfternoon = sortEvents(eventAfternoon)
        return [eventAfternoon, eventMorning]
    }
}
