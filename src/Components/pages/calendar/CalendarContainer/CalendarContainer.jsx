import React, { Component } from 'react'
import moment from 'moment'

import './CalendarContainer.scss'
import VerticalMenu from '../../../layout/VerticalMenu'
import HorizontalNavBar from '../../../layout/HorizontalNavBar'
import CalendarMonth from '../CalendarMonth/CalendarMonth'
import CalendarWeek from '../CalendarWeek/CalendarWeek'
import CalendarDay from '../CalendarDay/CalendarDay'

//changer le current moment pour qu'il change lorsque je navigue dans le calendrier selon les vues ! 
export class CalendarContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentMoment: moment().utc(),
            currentStart: moment().utc().startOf('month'),
            currentStartWeek: moment().utc().startOf('isoWeek'),
            stepType: 'month'
        }
    }
    displayMonthFrench = (mDate, monthsName) => {
        return monthsName[mDate];
    }
    
    onChangeCalendarType= (stepType) => {
        this.setState({
            stepType: stepType
        })
    }

    nextStep = (count, stepFunction, recomputeDays, stepArray, end) => {
        this.setState({
            currentStart : this.state.currentStart.add(count,stepFunction),
            currentStartWeek : this.state.currentStart.clone().startOf('isoWeek')
        })
        recomputeDays(this.state.currentStart, stepArray, end)
    }

    //recomputeDays => ne fonctionne pas pour les semaines car recompute qu'a partir de currentStart
    //comment faire passer le recompute a chaque vue ? 

    previousStep = (count, stepFunction, recomputeDays, stepArray, end) => {
        this.setState({
            currentStart : this.state.currentStart.subtract(count,stepFunction),
            currentStartWeek : this.state.currentStart.clone().subtract('isoWeek')
        })
        recomputeDays(this.state.currentStart, stepArray, end)
    }

    render(){
        console.log("state ! ", this.state.currentStart.format('DD/MM/YY'))
        //pas en props, faire un json pour ça
        const monthsName = ["JANVIER" ,"FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"]
        const daysName = ["LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI", "DIMANCHE"]
        const daysNameWeek = [ "DIMANCHE" ,"LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI"]

        // console.log('current moment container:', this.state.currentMoment.format('DD MM YY'))
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
                        <CalendarMonth currentMoment={this.state.currentMoment} currentStart={this.state.currentStart} nextStep={this.nextStep} previousStep={this.previousStep} displayMonthFrench={this.displayMonthFrench} daysName={daysName} monthsName={monthsName}/>
                    )
                }
                {
                    this.state.stepType === 'week' &&(
                        <CalendarWeek currentMoment={this.state.currentMoment} currentStart={this.state.currentStart} currentStartWeek={this.state.currentStartWeek} nextStep={this.nextStep} previousStep={this.previousStep} displayDaysFrench={this.displayMonthFrench} daysNameWeek={daysNameWeek}/>
                    )
                }
                {
                    this.state.stepType === 'day' &&(
                        <CalendarDay currentMoment={this.state.currentMoment} currentStart={this.state.currentStart} nextStep={this.nextStep} previousStep={this.previousStep} />
                    )
                }
                </div>
            </div>
        )
    }
}
export default CalendarContainer

