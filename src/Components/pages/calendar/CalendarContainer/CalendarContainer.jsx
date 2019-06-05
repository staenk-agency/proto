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
            status: 'all'
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
    commentPost = (event) => {
        event.comment = "j'aimerais que ce soit publié le 17 juin à 13h30"
        event.status.isValidated = false
        event.status.isInProcess = false
        event.status.isNotValidated = true;
        console.log('event changed in modal', event)
        const modal = document.getElementsByClassName("modal")
        modal[0].style.display = "none";
        return event
    }
    validatePost = (event) => {
        event.comment = null
        event.status.isValidated = true
        event.status.isInProcess = false
        event.status.isNotValidated = false;
        console.log('event changed in modal', event)
        return event
    }
    putInProcessPost = (event) => {
        event.comment = null
        event.status.isValidated = false
        event.status.isInProcess = true
        event.status.isNotValidated = false;
        console.log('event changed in modal', event)
        return event
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
            currentMoment: moment().utc()
        })
        recomputeDays(moment().utc().startOf(startOf), stepArray, end)
    }

    displayStatus = (status) => {
        this.setState({status : status})
    }
    render(){
        // console.log("current state ! dans container ", this.state.currentMoment.format('DD/MM/YY'))
        console.log("event selected : ", this.state.eventSelected)
        console.log("status selected", this.state.status)
        return (
            <div className="grid-container">
                <div className="horizontalNavBar-app-container">
                    <HorizontalNavBar/>
                </div>
                <div className="verticalMenu-app-container">
                    <VerticalMenu displayStatus={this.displayStatus}/>
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
                        <CalendarMonth currentMoment={this.state.currentMoment} nextStep={this.nextStep} previousStep={this.previousStep} returnToCurrentDate={this.returnToCurrentDate} selectEvent={this.selectEvent} status={this.state.status}/>
                    )
                }
                {
                    this.state.stepType === 'week' &&(
                        <CalendarWeek currentMoment={this.state.currentMoment} nextStep={this.nextStep} previousStep={this.previousStep} returnToCurrentDate={this.returnToCurrentDate} selectEvent={this.selectEvent} status={this.state.status}/>
                    )
                }
                {
                    this.state.stepType === 'day' &&(
                        <CalendarDay currentMoment={this.state.currentMoment} nextStep={this.nextStep} previousStep={this.previousStep} returnToCurrentDate={this.returnToCurrentDate} selectEvent={this.selectEvent} status={this.state.status}/>
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
                                <button onClick={() => this.commentPost(this.state.eventSelected)}>Commenter</button>
                                <button onClick={() => this.putInProcessPost(this.state.eventSelected)}>Mettre en attente</button>
                                <button onClick={() => this.validatePost(this.state.eventSelected)}>Valider</button>
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

