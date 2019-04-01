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
        this.monthsName = ["JANVIER" ,"FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"]
    }
    
    displayMonthFrench = (mDate) => {
        return this.monthsName[mDate];
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
            days: this.initWeekDays(newCurrentFirstDayOfMonth),
        })
    }
    nextWeek = () => {
        let newCurrentFirstDayOfMonth = this.state.currentFirstDayOfWeek.clone().add('7', 'd');
        this.setState({
            currentFirstDayOfWeek: newCurrentFirstDayOfMonth,
            days: this.initWeekDays(newCurrentFirstDayOfMonth), 
        })
    }
    render() {
        console.log("state days", this.state.days)
        console.log("date selected", this.state.dateSelected)
        console.log('startof', this.state.currentFirstDayOfWeek.format('DD MM YY'))
        return (
            <div className="calendar-week-container">
                <div className="calendar-nav">
                    {/* <p>{this.displayMonthFrench(this.state.currentFirstDayOfWeek.month())}</p> */}
                    <p className="week-view-p"> 
                        <button onClick={this.previousWeek}><i className="fas fa-caret-left"/></button>  |  Du {this.state.currentFirstDayOfWeek.clone().format('DD/MM/YY')} au {this.state.currentFirstDayOfWeek.clone().endOf('isoWeek').format('DD/MM/YY')}  |  <button onClick={this.nextWeek}><i className="fas fa-caret-right"/></button>
                    </p>
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
