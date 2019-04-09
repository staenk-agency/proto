import React, { Component } from 'react'
import moment from 'moment'
// import NavbarDashboard from '../../dashboard/NavbarDashboard'

import './CalendarContainer.scss'
import VerticalMenu from '../../layout/VerticalMenu'
import HorizontalNavBar from '../../layout/HorizontalNavBar'
import NavContainer from '../../layout/NavContainer'
import CalendarMonth from './CalendarMonth'
import CalendarWeek from './CalendarWeek'
import CalendarDay from './CalendarDay'

export class CalendarContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentMoment: moment().utc(),
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

    render() {
        //pas en props
        const monthsName = ["JANVIER" ,"FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"]
        const daysName = ["LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI", "DIMANCHE"]
        const daysNameWeek = [ "DIMANCHE" ,"LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI"]

        console.log('current moment container:', this.state.currentMoment.format('DD MM YY'))
        return (
            <div className="grid-container">
            {/* <HorizontalNavBar/>
                <VerticalMenu /> */}
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
                <div className="calendar-container">
                {
                    this.state.stepType === 'month' && (
                        <CalendarMonth currentMoment={this.state.currentMoment} displayMonthFrench={this.displayMonthFrench} daysName={daysName} monthsName={monthsName}/>
                    )
                }
                {
                    this.state.stepType === 'week' &&(
                        <CalendarWeek currentMoment={this.state.currentMoment} displayDaysFrench={this.displayMonthFrench} daysNameWeek={daysNameWeek}/>
                    )
                }
                {
                    this.state.stepType === 'day' &&(
                        <CalendarDay currentMoment={this.state.currentMoment} />
                    )
                }
                </div>
            </div>
        )
    }
}
export default CalendarContainer

