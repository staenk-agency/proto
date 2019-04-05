import React, { Component } from 'react'
import moment from 'moment'

import NavbarDashboard from '../../dashboard/NavbarDashboard'

import CalendarMonth from './CalendarMonth'
import CalendarWeek from './CalendarWeek'
import CalendarDay from './CalendarDay'

export class CalendarContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentMoment: moment().utc(),
            month: true,
            week: false,
            day: false
        }
    }
    displayMonthFrench = (mDate, monthsName) => {
        return monthsName[mDate];
    }

    handleClick = () => {
        this.setState({
            month:!this.state.month,
            week: false,
            day: false,
        })
    }

    handleClick2= () => {
        this.setState({
            week: !this.state.week,
            month:false,
            day: false,
        })
    }
    handleClick3= () => {
        this.setState({
            day: !this.state.day,
            month:false,
            week: false,
        })
    }

    render() {
        const monthsName = ["JANVIER" ,"FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"]
        const daysName = ["LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI", "DIMANCHE"]
        const daysNameWeek = [ "DIMANCHE" ,"LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI"]

        return (
            <>
                <div className="NavBarDashboard-container">
                    <h2>Votre Dashboard</h2>
                    <ul>
                        <li className="NavBarDashboard-first-list">Liste</li>
                        <li className="NavBarDashboard" onClick={() => this.handleClick3()}>Jour</li>
                        <li className="NavBarDashboard" onClick={() => this.handleClick2()}>Semaine</li>
                        <li className="NavBarDashboard-last-list" onClick={() => this.handleClick()}>Mois</li>
                    </ul>
                    <button>ENVOYER AU CLIENT</button>        
                </div>
                {
                    this.state.month && (
                        <CalendarMonth currentFirstDayOfMonth={this.state.currentMoment} displayMonthFrench={this.displayMonthFrench} daysName={daysName} monthsName={monthsName}/>
                    )
                }
                {
                    this.state.week &&(
                        <CalendarWeek currentMoment={this.state.currentMoment} displayDaysFrench={this.displayMonthFrench} daysNameWeek={daysNameWeek}/>
                    )
                }
                {
                    this.state.day &&(
                        <CalendarDay currentMoment={this.state.currentMoment} />
                    )
                }
            </>
        )
    }
}

export default CalendarContainer

