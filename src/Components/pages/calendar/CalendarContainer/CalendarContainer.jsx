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

import datasJson from '../../../../data.json'
import {convertDatasInMoment} from '../../events/EventsUtils.js'


export class CalendarContainer extends Component {
    constructor(props) {
        super(props)
        let currentMoment = moment().utc()
        const allEventsfromContext = convertDatasInMoment(datasJson);
        
        this.state = {
            currentDate: currentMoment,
            currentMoment: currentMoment,
            allEventsfromContext: allEventsfromContext,
            stepType: 'month',
            eventSelected: null,
            statusSelected: 'all',
            modalOpened: false,
            commentInput: false,
            comment: null,
        }
    }

    onChangeCalendarType= (stepType) => {
        this.setState({stepType: stepType})
    }
    toggleModal = () => {
        this.setState({modalOpened: !this.state.modalOpened})
    }
    toggleCommentInput = () => {
        this.setState({commentInput: !this.state.commentInput})
    }
    handleSubmit = (e, event) => {
        e.preventDefault()
        event.comment = this.state.comment
        this.setState({comment : null})
        event.status.isValidated = false
        event.status.isInProcess = false
        event.status.isNotValidated = true
    }
    handleChange = (e) => {
        this.setState({comment : e.target.value})
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
        }
        this.toggleModal()
        return event
    }
    selectEvent = (event) => {
        if(event){
            this.setState({eventSelected: event})
        }
        this.toggleModal()
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

    displayCalendarView = (stepType) => {
        const CalendarView = this.componentByType(stepType);
        return (
            <CalendarView
                currentMoment={this.state.currentMoment} 
                nextStep={this.nextStep}
                previousStep={this.previousStep} 
                returnToCurrentDate={this.returnToCurrentDate}
                selectEvent={this.selectEvent}
                statusSelected={this.state.statusSelected} 
                stepType={this.state.stepType} 
                allEventsfromContext={this.state.allEventsfromContext}
                toggleModal={this.toggleModal}
            />
        )
    }
    componentByType = (stepType) => {
        switch(stepType) {
            case 'month' : return CalendarMonth;
            case 'week' : return CalendarWeek;
            default : return CalendarDay;
        }
    }

    render(){
        console.log("this.state", this.state.comment)
        return (
            <div className="grid-container">
                <HorizontalNavBar />
                <VerticalMenu displayStatus={this.displayStatus}/>
                <div className="calendar-views">
                    <NavBarDashboard onChangeCalendarType={this.onChangeCalendarType} />
                    {
                        this.displayCalendarView(this.state.stepType)
                    }
                </div>
                <Modal 
                    eventSelected={this.state.eventSelected} 
                    commentPost={this.commentPost} 
                    modalOpened={this.state.modalOpened} 
                    closeModal={this.toggleModal}
                    comment={this.state.comment}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    toggleCommentInput={this.toggleCommentInput}
                    commentInput={this.state.commentInput}
                    />
            </div>
        )
    }
}
export default CalendarContainer

