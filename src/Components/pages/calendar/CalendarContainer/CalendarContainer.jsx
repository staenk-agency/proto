import React, { Component } from 'react'
import './CalendarContainer.scss'
import moment from 'moment'

import VerticalMenu from '../../../layout/VerticalMenu'
import HorizontalNavBar from '../../../layout/HorizontalNavBar'
import CalendarMonth from '../CalendarMonth/CalendarMonth'
import CalendarWeek from '../CalendarWeek/CalendarWeek'
import CalendarDay from '../CalendarDay/CalendarDay'
import Modal from '../../modal/Modal'
import NavBarDashboard from '../../../dashboard/NavbarDashboard'

export class CalendarContainer extends Component {
    constructor(props) {
        super(props)
        let currentMoment = moment().utc()
        
        this.state = {
            currentMoment: currentMoment,
            stepType: 'month',
            eventSelected: null,
            statusSelected: 'all'
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
    commentPost = (event, status) => {
        event.status.isValidated = false
        event.status.isInProcess = false
        event.status.isNotValidated = false
        if(status === 'isValidated'){
            event.status.isValidated = true
        } else if (status === 'isNotValidated'){
            event.status.isNotValidated = true
        } else {
            event.status.isInProcess = true
            event.comment = "j'aimerais que ce soit publié le 17 juin à 13h30"
        }
        console.log('event changed in modal', event)
        const modal = document.getElementsByClassName("modal")
        modal[0].style.display = "none";
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
        this.setState({statusSelected : status})
    }
    render(){
        // console.log("current state ! dans container ", this.state.currentMoment.format('DD/MM/YY'))
        console.log("event selected : ", this.state.eventSelected)
        console.log("status selected", this.state.status)
        return (
            <div className="grid-container">
                    <HorizontalNavBar />
                    <VerticalMenu displayStatus={this.displayStatus}/>
                <div className="calendar-views">
                    <NavBarDashboard onChangeCalendarType={this.onChangeCalendarType} />
                    {
                        this.state.stepType === 'month' && (
                            <CalendarMonth currentMoment={this.state.currentMoment} nextStep={this.nextStep} previousStep={this.previousStep} returnToCurrentDate={this.returnToCurrentDate} selectEvent={this.selectEvent} statusSelected={this.state.statusSelected}/>
                        )
                    }
                    {
                        this.state.stepType === 'week' &&(
                            <CalendarWeek currentMoment={this.state.currentMoment} nextStep={this.nextStep} previousStep={this.previousStep} returnToCurrentDate={this.returnToCurrentDate} selectEvent={this.selectEvent} statusSelected={this.state.statusSelected}/>
                        )
                    }
                    {
                        this.state.stepType === 'day' &&(
                            <CalendarDay currentMoment={this.state.currentMoment} nextStep={this.nextStep} previousStep={this.previousStep} returnToCurrentDate={this.returnToCurrentDate} selectEvent={this.selectEvent} statusSelected={this.state.statusSelected}/>
                        )
                    }
                </div>
                <Modal eventSelected={this.state.eventSelected} commentPost={this.commentPost}/>
            </div>
        )
    }
}
export default CalendarContainer

