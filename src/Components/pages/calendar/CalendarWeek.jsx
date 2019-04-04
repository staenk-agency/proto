import React from 'react'
import './CalendarWeek.scss'
import DayWeekView from './DayWeekView'

import {useCalendarState, useInitCalendarState, useHandleClick} from './HooksCalendar.js'

const CalendarWeek = ({currentMoment, displayDaysFrench, daysNameWeek}) => {
    let [currentStart, nextStep, previousStep] = useCalendarState(currentMoment, 'isoWeek', 7) //isoWeek => startOf the first day of the week according iso fomrat
    let [days, recomputeDays] = useInitCalendarState(currentStart, 'd', 7)
    let [dateSelected, select] = useHandleClick(null)

    console.log("current: ", currentStart.format('DD MM YY'))
    console.log("dateSelected", dateSelected)

    // initWeekDays = (mDate) => {
    //     let days = [];
    //     for(let i = 0; i < 7 ; ++i){
    //         let day = mDate.clone().add(i, 'day');
    //         days.push(day);
    //     }
    //     return days;
    // }
    // handleClick = (mDate) => {
    //     this.setState({
    //         dateSelected: moment(mDate).utc()
    //     })
    // }
    // previousWeek = () => {
    //     let newCurrentFirstDayOfMonth = this.state.currentFirstDayOfWeek.clone().subtract('7', 'd');
    //     this.setState({
    //         currentFirstDayOfWeek: newCurrentFirstDayOfMonth,
    //         days: this.initWeekDays(newCurrentFirstDayOfMonth),
    //     })
    // }
    // nextWeek = () => {
    //     let newCurrentFirstDayOfMonth = this.state.currentFirstDayOfWeek.clone().add('7', 'd');
    //     this.setState({
    //         currentFirstDayOfWeek: newCurrentFirstDayOfMonth,
    //         days: this.initWeekDays(newCurrentFirstDayOfMonth), 
    //     })
    // }
    console.log('currentStart', currentStart)
    return (
        <div className="calendar-week-container">
            <div className="calendar-nav">
                <p className="week-view-p"> 
                    <button onClick={() => previousStep(7, 'd', recomputeDays, 'd')}>
                        <i className="fas fa-caret-left"/>
                    </button>Du {currentStart.clone().format('DD/MM/YY')} au {currentStart.clone().endOf('isoWeek').format('DD/MM/YY')}
                    <button onClick={() => nextStep(7, 'd', recomputeDays, 'd')}>
                        <i className="fas fa-caret-right"/>
                    </button>
                </p>
            </div>
                <div className="weekDays">
                    {
                        days.map((day, id) => {
                            return(
                                <DayWeekView day={day} key={'day' + id} handleClick={select} displayDaysFrench={displayDaysFrench} daysNameWeek={daysNameWeek}/>
                            )
                        })
                    }
                </div>
        </div>
    )
}
export default CalendarWeek
