import React, { Component } from 'react'
import './CalendarContainer.scss'
import moment from 'moment'

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
            stepType: 'month',
            eventSelected: null, 
        }
    }

    onChangeCalendarType= (stepType) => {
        this.setState({
            stepType: stepType
        })
    }

    clickOnModal = () => {
        const modal = document.getElementsByClassName("modal")
        const close = document.getElementsByClassName("close")[0];
        modal[0].style.display = "block"
        close.onclick = function() {
            modal[0].style.display = "none";
        }
    }

    selectEvent = (event) => {
        if(event){
            this.setState({eventSelected: event})
        }
        this.clickOnModal()
    }

    nextStep = (step, recomputeDays, stepArray, end, startOf) => {
        this.setState({
            currentMoment: this.state.currentMoment.add(1, step),
        })
        // console.log("when next currentMoment", this.state.currentMoment.format('DD/MM/YY'))
        recomputeDays(this.state.currentMoment.clone().startOf(startOf), stepArray, end)
    }

    previousStep = (step, recomputeDays, stepArray, end, startOf) => {
        this.setState({
            currentMoment: this.state.currentMoment.subtract(1, step),
        })
        // console.log("when previous currentMoment", this.state.currentMoment.format('DD/MM/YY'))
        recomputeDays(this.state.currentMoment.clone().startOf(startOf), stepArray, end)
    }

    returnToCurrentDate = (recomputeDays, stepArray, end, startOf) => {
        this.setState({
            currentMoment: moment().utc(),
        })
        console.log("when return to currentMoment", this.state.currentMoment.format('DD/MM/YY'))
        recomputeDays(this.state.currentMoment.clone().startOf(startOf), stepArray, end)
    }
    render(){
        console.log("current state ! dans container ", this.state.currentMoment.format('DD/MM/YY'))
        // console.log("event selected : ", this.state.eventSelected)
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
                        <CalendarMonth currentMoment={this.state.currentMoment} nextStep={this.nextStep} previousStep={this.previousStep} returnToCurrentDate={this.returnToCurrentDate} selectEvent={this.selectEvent}/>
                    )
                }
                {
                    this.state.stepType === 'week' &&(
                        <CalendarWeek currentMoment={this.state.currentMoment} nextStep={this.nextStep} previousStep={this.previousStep} returnToCurrentDate={this.returnToCurrentDate} selectEvent={this.selectEvent}/>
                    )
                }
                {
                    this.state.stepType === 'day' &&(
                        <CalendarDay currentMoment={this.state.currentMoment} nextStep={this.nextStep} previousStep={this.previousStep} returnToCurrentDate={this.returnToCurrentDate} selectEvent={this.selectEvent}/>
                    )
                }
                </div>
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                                <i className="fas fa-times close"></i>
                            {
                                this.state.eventSelected &&
                                <>
                                    <h2>{this.state.eventSelected.title} </h2>
                                    <h3>{this.state.eventSelected.date.mDate.format("DD/MM/YY kk:mm")}</h3>
                                </>
                            }
                        </div>
                        <div className="modal-body">
                        {
                            this.state.eventSelected && 
                            <>
                                <p>{this.state.eventSelected.shortDescription}</p>
                                <p>{this.state.eventSelected.message}</p>
                                <img className="modal-body-picture" src={this.state.eventSelected.account.picture} alt={this.state.eventSelected.account.name} />
                            </>
                        }
                        </div>
                        <div className="modal-footer">
                        {
                                this.state.eventSelected && 
                                <div className="modal-footer-buttons">
                                    <button>Editer</button>
                                    <button>Valider</button>
                                </div>
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CalendarContainer

