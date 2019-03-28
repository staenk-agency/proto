import React, { Component } from 'react'
import moment from "moment"

import './CalendarMonth.scss'

export class CalendarMonth extends Component {
    constructor(props){
        super(props)
        this.state = {
            dateSelected: null
        }
        this.daysName = ["LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI", "DIMANCHE"]
        this.position = null
    }
    displayDays(){
        let days = []
        this.position = this.props.firstDayOfMonth
        //change the position by the position in the grid
        if(this.props.firstDayOfMonth> 0 && this.props.firstDayOfMonth < 7){
            this.props.firstDayOfMonth -= 1
        } else if (this.props.firstDayOfMonth === 6) {
            this.props.firstDayOfMonth = 6
        }
        for(let i= 0; i < this.props.daysInMonth; i++){
            days.push()
        }

    }
    // let count = Math.ceil(daysInMonth / 7);
    render() {
        console.log(this.props)
        const {firstDayOfMonth, lastDayOfMonth, daysInMonth, month, date} = this.props
        

    return (
        <div className="calendar-month-container">
        <div className="weekDays">
            {
                this.daysName.map((day, id) => {
                    return (
                        <div className={'weekDayName ' + 'position' + id}>
                            {day}
                        </div>
                    )
                })
            }

        </div>
        


        </div>
    )
    }
}

CalendarMonth.defaultProps = {
    actually: moment(),
    firstDayOfMonth: moment().startOf("month").format("d"), 
    lastDayOfMonth: moment().endOf("month").format(),
    daysInMonth: moment().daysInMonth(),
};

export default CalendarMonth;
