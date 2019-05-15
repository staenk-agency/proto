import moment from 'moment'
import datasJson from '../../../data.json'

//this function convert all JSON datas datas.date.start in moment object
export const convertDatasInMoment = (datas) => {
    const date = datas.map((event) => {
        const fullDay = moment.utc(event.date.start + " " + event.date.startHour, "DD/MM/YY kk:mm")
        event.date.start = fullDay
        return event
    })
    return date
}
//remove when context will be built
const allEventsfromContext = convertDatasInMoment(datasJson);

const sortEvents = (array) => {
    if(array.length > 0) {
        array = array.sort((a, b) => {
            return a.date.start.valueOf() - b.date.start.valueOf()
        })
        return array
    }
}

export const filterEventsByView = (mDate, view) => {
    const events = allEventsfromContext.filter((event) => {
        const eventDate = event.date.start;
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

// afin d'être toujours sur la date courante dès lors que je navigue dans le calendrier, remonter les hooks de currentstart, next et previous step, et faire les changements ainsi, en envoyant arguments aux enfants ! 

export const filterEventsByDay = (eventsFilteredByView, mDate) => {
    const event = eventsFilteredByView.filter((event) => {
        if(event.date.start.format('DD/MM/YY') === mDate.format('DD/MM/YY'))
            return event
        
    })
    return event
}

//probleme avec filter by hours qui n'a pas les heures correctes contrairement a filterbyday qui les reçois en reconvertissant utc()
export const filterEventsByHour = (eventsFilteredByView, mDate) => {
    let eventsByHour = []
    eventsFilteredByView.filter((event) => {
        const eventDate = event.date.start.utc()
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
        const eventDate = event.date.start;
        // if events are during morning
        if(eventDate.isBetween(morning, afternoon) || eventDate.isSame(morning)){
            eventMorning.push(event)
            return [eventMorning]
            
            // if events are during afternoon
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
