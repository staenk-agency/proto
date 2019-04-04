import React, { Component } from 'react'
import moment from "moment"
import './CalendarMonth.scss'

import Day from './DayMonthView'


// CalendarMonth 
//  [currentFirstDayOfMonth, nextMonth, previousMonth] = useStepableCalendarState(moment(), 'month');
//  [selectedStep, selectStep] = hook2



// CalendarWeek
//  [currentFirstDayOfWeek, nextWeek, previousWeek] = useStepableCalendarState(moment(), 'week');
//  [selectedStep, selectStep] = hook2



// useStepableCalendarState = (mDate, step) => {
//     const [currentStep, setCurrentStep] = useState(mDate.utc().startOf(step));

//     let nextStep = function(count){
//         setCurrentStep(currentStep.add(count, step)); 
//     }

//     let previousStep = function(count){
//         setCurrentStep(currentStep.substract(count, step)); 
//     }

//     return [currentStep, nextStep, previousStep]
// }

export class CalendarMonth extends Component {
    constructor(props){
        super(props)
        
        let currentFirstDayOfMonth = moment().utc().startOf('month');
        let days = this.initMonthDays(currentFirstDayOfMonth);
        
        this.state = {
            dateSelected: null,
            days: days,
            currentFirstDayOfMonth: currentFirstDayOfMonth,
        }
        this.daysName = ["LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI", "DIMANCHE"]
        this.monthsName = ["JANVIER" ,"FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"]
    }

    displayMonthFrench = (mDate) => {
        return this.monthsName[mDate];
    }
    initMonthDays = (mDate) => {
        let days = [];
        for(let i = 0; i < mDate.daysInMonth(); ++i){
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
    previousMonth = () => {
        let newCurrentFirstDayOfMonth = this.state.currentFirstDayOfMonth.clone().subtract('1', 'month');
        this.setState({
            currentFirstDayOfMonth: newCurrentFirstDayOfMonth,
            days: this.initMonthDays(newCurrentFirstDayOfMonth)
        })
    }
    previousYear = () => {
        let newCurrentFirstDayOfMonth = this.state.currentFirstDayOfMonth.clone().subtract('1', 'y');
        this.setState({
            currentFirstDayOfMonth: newCurrentFirstDayOfMonth,
            days: this.initMonthDays(newCurrentFirstDayOfMonth)
        })
    }
    nextMonth = () => {
        let newCurrentFirstDayOfMonth = this.state.currentFirstDayOfMonth.clone().add('1', 'month');
        this.setState({
            currentFirstDayOfMonth: newCurrentFirstDayOfMonth,
            days: this.initMonthDays(newCurrentFirstDayOfMonth)
        })
    }
    nextYear = () => {
        let newCurrentFirstDayOfMonth = this.state.currentFirstDayOfMonth.clone().add('1', 'y');
        this.setState({
            currentFirstDayOfMonth: newCurrentFirstDayOfMonth,
            days: this.initMonthDays(newCurrentFirstDayOfMonth)
        })
    }
    
    render() {
        if(this.state.dateSelected)
        console.log("console des state dans calendarMonth ", this.state)
        return (
            <div className="calendar-month-container">
                <div className="calendar-nav">
                    <button onClick={this.previousMonth} > <i className="fas fa-caret-left"/></button>
                    <button onClick={this.previousYear} ><i className="fas fa-backward"/></button>
                    <button onClick={this.nextMonth}><i className="fas fa-caret-right"/></button>
                    <button onClick={this.nextYear}><i className="fas fa-forward"/></button>
                    <h3>{this.displayMonthFrench(this.state.currentFirstDayOfMonth.month())} {this.state.currentFirstDayOfMonth.format("YYYY")}</h3>
                </div>
                    <div className="weekDays">
                        {
                            this.daysName.map((day, id) => {
                                return (
                                    <div className={'weekDayName position' + id} key={id}>
                                        {day}
                                    </div>
                                )
                            })
                        }
                        {
                            this.state.days.map((day, id) => {
                                return(
                                    <Day day={day} key={'weekDay' + id} handleClick={this.handleClick}/>
                                )
                            })
                        }
                    </div>
            </div>
        )
    }
}
export default CalendarMonth;
