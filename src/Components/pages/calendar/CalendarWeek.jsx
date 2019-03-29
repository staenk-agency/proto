import React, { Component } from 'react'
import moment from 'moment'
import './CalendarWeek.scss'

import DayWeekView from './DayWeekView'

export class CalendarWeek extends Component {
    constructor(props){
        super(props)

        let currentFirstDayOfWeek = moment().utc().startOf('isoWeek');
        let days = this.initWeekDays(currentFirstDayOfWeek);
        
        this.state = {
            dateSelected: null,
            days: days,
            currentFirstDayOfWeek: currentFirstDayOfWeek,
        }
        this.daysName = [ "DIMANCHE" ,"LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI"]
    }

    initWeekDays = (mDate) => {
        let days = [];
        for(let i = 0; i < 7 ; ++i){
            let day = mDate.clone().add(i, 'day');
            days.push(day);
        }
        return days;
    }

    handleClick = (mDate) => {
        this.setState({
            dateSelected: moment(mDate).utc()
        })
    }
    previousWeek = () => {
        let newCurrentFirstDayOfMonth = this.state.currentFirstDayOfWeek.clone().subtract('7', 'd');
        this.setState({
            currentFirstDayOfWeek: newCurrentFirstDayOfMonth,
            days: this.initWeekDays(newCurrentFirstDayOfMonth)
        })
    }
    nextWeek = () => {
        let newCurrentFirstDayOfMonth = this.state.currentFirstDayOfWeek.clone().add('7', 'd');
        this.setState({
            currentFirstDayOfWeek: newCurrentFirstDayOfMonth,
            days: this.initWeekDays(newCurrentFirstDayOfMonth)
        })
    }

    render() {
        console.log("lol", this.state.days)
        console.log("date selected", this.state.dateSelected)
        return (
            <div className="calendar-week-container">
                <div className="calendar-nav">
                    <button onClick={this.previousWeek} >avant</button>
                    <button onClick={this.nextWeek}>après</button>
                </div>
                    <div className="weekDays">
                        {
                            this.state.days.map((day, id) => {
                                return(
                                    <DayWeekView day={day} key={'day' + id} handleClick={this.handleClick} />
                                )
                            })
                        }
                    </div>
            </div>
        )
    }
}

export default CalendarWeek
