import React, { Component } from 'react'
import moment from 'moment'

import './CalendarDay.scss'
import DayHour from '../calendar/DayHour'

export class CalendarDay extends Component {
    constructor(props){
        super(props)

        let currentDate = moment().utc().startOf('d')
        let hours = this.initHours(currentDate)

        this.state = {
            hourSelected: null,
            currentDate : currentDate,
            hours : hours,
        }
    }

    initHours = (mDate) => {
        let hours = []
        for(let i = 0; i < 24;  ++i){
            let hour = mDate.clone().add(i, 'h')
            hours.push(hour)
        }
        return hours
    }
    handleClick = (mDate) => {
        this.setState = ({ 
            hourSelected : moment(mDate),
        })
    }

    render() {
        console.log(this.state)
        return (
        <div className="calendar-day-container">
            <p> {this.state.currentDate.format('DD MMMM YYYY')} </p>
            {
                this.state.hours.map((hour, id) => {
                    return(
                        <DayHour hour={hour} key={id} handleClick={this.handleClick}/>
                    )
                })
            }
            
        </div>
        )
    }
}

export default CalendarDay
