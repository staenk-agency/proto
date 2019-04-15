import React, { Component } from 'react'

import VerticalMenu from '../../../layout/VerticalMenu'
import HorizontalNavBar from '../../../layout/HorizontalNavBar'

import moment from 'moment'
import EventsMonth from '../EventsMonth/EventsMonth'
import EventsWeek from '../EventsWeek/EventsWeek'
import EventsDay from '../EventsDay/EventsDay'

export class EventsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentMoment: moment().utc(),
            stepType: 'month'
        }
    }
    onChangeEventsType= (stepType) => {
        this.setState({
            stepType: stepType
        })
    }

    render() {
        const monthsName = ["JANVIER" ,"FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"]
        const daysName = ["LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI", "DIMANCHE"]
        const daysNameWeek = [ "DIMANCHE" ,"LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI"]
        return (
            <div className="grid-container">
                <div className="horizontalNavBar-app-container">
                    <HorizontalNavBar/>
                </div>
                <div className="verticalMenu-app-container">
                    <VerticalMenu />
                </div>
                <div className="events-container">
                    <div className="NavBarDashboard-container">
                        <h2>Votre Dashboard</h2>
                        <ul>
                            <li className="NavBarDashboard-first-list">Liste</li>
                            <li className="NavBarDashboard dayLink" onClick={() => this.onChangeEventsType('day')}>Jour</li>
                            <li className="NavBarDashboard weekLink" onClick={() => this.onChangeEventsType('week')}>Semaine</li>
                            <li className="NavBarDashboard-last-list monthLink" onClick={() => this.onChangeEventsType('month')}>Mois</li>
                        </ul>
                        <button>ENVOYER AU CLIENT</button>        
                    </div>
            {
                this.state.stepType === 'month' && (
                    <EventsMonth currentMoment={this.state.currentMoment} daysName={daysName}/>
                )
            }
            {
                this.state.stepType === 'week' &&(
                    <EventsWeek currentMoment={this.state.currentMoment} />
                )
            }
            {
                this.state.stepType === 'day' &&(
                    <EventsDay currentMoment={this.state.currentMoment} />
                )
            }
            </div>
        </div>
        )
    }
}

export default EventsContainer
