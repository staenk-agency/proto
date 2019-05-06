import React from 'react'
import json from '../../../../data.json'
import EventsMonthView from './EventsMonthView'

import './EventsMonth.scss'

import {useCalendarState, useInitCalendarState, useHandleClick} from '../../calendar/HooksCalendar.js'

const EventsMonth = ({currentMoment, daysName}) => {
    const [currentStart, nextStep, previousStep] = useCalendarState(currentMoment.clone(), 'month', 'month')
    const [days, recomputeDays] = useInitCalendarState(currentStart, 'd', 'month')
    const [dateSelected, select] = useHandleClick(null)

        return (
        <div className="events-month-container">
        <h2>Access to the datas eventsMonth</h2>
        {/*     <p>Titre: {json[0].title}</p>
                <p>Début de l'event: {json[0].date.start} {json[0].date.startHour}</p>
                <p>Fin de l'event: {json[0].date.end} </p>
                <p> {json[0].shortDescription} </p>
                <p> {json[0].message} </p> */}

                <div className="weekDays">
                    {
                        daysName.map((day, id) => {
                            return (
                                <div className={'weekDayName position' + id} key={id}>
                                    {day}
                                </div>
                            )
                        })
                    }
                    {
                        days.map((day, id) => {
                            return(
                                <EventsMonthView day={day} key={'weekDay' + id} handleClick={select}/>
                            )
                        })
                    }
                </div>
        </div>
        )
    }

export default EventsMonth
