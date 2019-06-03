import React, { Component } from 'react'
import moment from 'moment'

import './CalendarContainer.scss'
import VerticalMenu from '../../../layout/VerticalMenu'
import HorizontalNavBar from '../../../layout/HorizontalNavBar'
import CalendarMonth from '../CalendarMonth/CalendarMonth'
import CalendarWeek from '../CalendarWeek/CalendarWeek'
import CalendarDay from '../CalendarDay/CalendarDay'

export class CalendarContainer extends Component {
    constructor(props) {
        super(props)
        let currentMoment = moment().utc()
        
        this.state = {
            currentMoment: currentMoment,
            stepType: 'month'
        }
    }

    onChangeCalendarType= (stepType) => {
        this.setState({
            stepType: stepType
        })
    }

    nextStep = (step, recomputeDays, stepArray, end, startOf) => {
        this.setState({
            currentMoment: this.state.currentMoment.add(1, step),
        })
        recomputeDays(this.state.currentMoment.clone().startOf(startOf), stepArray, end)
    }
    previousStep = (step, recomputeDays, stepArray, end, startOf) => {
        this.setState({
            currentMoment: this.state.currentMoment.subtract(1, step),
        })
        recomputeDays(this.state.currentMoment.clone().startOf(startOf), stepArray, end)
    }
    returnToCurrentDate = (recomputeDays, stepArray, end, startOf) => {
        this.setState({
            currentMoment: moment().utc(),
        })
        recomputeDays(this.state.currentMoment.clone().startOf(startOf), stepArray, end)
    }
    render(){
        console.log("current state ! dans container ", this.state.currentMoment.format('DD/MM/YY'))
        return (
            <div className="grid-container">
                <div className="horizontalNavBar-app-container">
                    <HorizontalNavBar/>
                </div>
                <div className="verticalMenu-app-container">
                    <VerticalMenu />
                </div>
                <div className="calendar-container">
                <div className="NavBarDashboard-container">
                    <h2>Votre Dashboard</h2>
                    <ul>
                        <li className="NavBarDashboard-first-list">Liste</li>
                        <li className="NavBarDashboard dayLink" onClick={() => this.onChangeCalendarType('day')}>Jour</li>
                        <li className="NavBarDashboard weekLink" onClick={() => this.onChangeCalendarType('week')}>Semaine</li>
                        <li className="NavBarDashboard-last-list monthLink" onClick={() => this.onChangeCalendarType('month')}>Mois</li>
                    </ul>
                    <button>ENVOYER AU CLIENT</button>        
                </div>
                {
                    this.state.stepType === 'month' && (
                        <CalendarMonth currentMoment={this.state.currentMoment} nextStep={this.nextStep} previousStep={this.previousStep} returnToCurrentDate={this.returnToCurrentDate}/>
                    )
                }
                {
                    this.state.stepType === 'week' &&(
                        <CalendarWeek currentMoment={this.state.currentMoment} nextStep={this.nextStep} previousStep={this.previousStep} returnToCurrentDate={this.returnToCurrentDate}/>
                    )
                }
                {
                    this.state.stepType === 'day' &&(
                        <CalendarDay currentMoment={this.state.currentMoment} nextStep={this.nextStep} previousStep={this.previousStep} returnToCurrentDate={this.returnToCurrentDate}/>
                    )
                }
                </div>
            </div>
        )
    }
}
export default CalendarContainer

