import React, {useState} from 'react'
import moment from 'moment'
import datasJson from '../../../data.json'

export const fetchEvents = (day) => {
    let date = moment(('DD/MM/YY hh:mm'),`${datasJson[0].date.start}` + " " + `${datasJson[0].date.startHour}`).utc()
    let hours = datasJson[0].date.startHour;
    const morning = moment(day).startOf('d').utc()
    const afternoon = moment(morning).add(13, 'h').utc()
    // console.log("date", date)
    // console.log("halfday", morning.format('HH:mm'))
    // console.log("halfday afternoon", afternoon.format('HH:mm'))

    const event = datasJson.filter((event) => {
        if(event.date.start === moment(day).format('DD/MM/YY')){
            console.log("morning", moment(morning).format('HH:mm'))
            console.log("after", moment(afternoon).format('HH:mm'))
            console.log("current Date", event.date.startHour )
            console.log("test", moment(event.date.startHour).isAfter(moment(morning).format('HH:mm')))
            if(moment(event.date.startHour).isAfter(moment(morning).format('HH:mm') & moment(event.date.startHour).isBefore(moment(afternoon).format('HH:mm')))){
                console.log("morning event !", event.date.startHour)
                return event
            }
            return event

        }
    })
    return event
}
