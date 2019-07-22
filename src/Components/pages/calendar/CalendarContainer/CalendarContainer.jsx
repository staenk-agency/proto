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
import ModalEventsList from '../../modal/ModalEventsList';

import datasJson from '../../../../data.json'
import {convertDatasInMoment} from '../../events/EventsUtils.js'


export class CalendarContainer extends Component {
    constructor(props) {
        super(props)
        const currentMoment = moment().utc()
        const allEventsfromContext = convertDatasInMoment(datasJson);
        
        this.state = {
            currentDate: currentMoment,     // display the currentDate with another color
            currentMoment: currentMoment,   // change the currentMoment during the navigation in the calendar
            allEventsfromContext: allEventsfromContext, // access to all the events 
            stepType: 'month',      // changes when navigation between the different views of the calendar 
            eventSelected: null,    // display the selected event
            statusSelected: 'all',  // changes when filter the display of events according to the status
            modalOpened: false,     // open or close the modal
            commentInput: false,    // display or hide the comment text area 
            comment: '',        // save the comment 
            eventsListModalOpen: false,
            eventsList: [],
            height: window.innerHeight,
            width: window.innerWidth,
        }
    }

    onChangeCalendarType= (stepType) => {
        this.setState({stepType: stepType})
    }
    toggleModal = () => {       // display or hide the modal
        this.setState({modalOpened: !this.state.modalOpened})
    }
    toggleCommentInput = () => {        //display or hide the text area for the comment in modal
        this.setState({commentInput: !this.state.commentInput})
    }
    handleSubmit = (e, event) => {      //submit the comment and save it in the event
        e.preventDefault()
        event.comment = this.state.comment
        this.setState({comment : ''})
        event.status.isValidated = false
        event.status.isInProcess = false
        event.status.isNotValidated = true
        this.toggleCommentInput()
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

    displayMoreEvents = (list) => {
        this.setState({
            eventsListModalOpen: !this.state.eventsListModalOpen,
            eventsList: list
        })
    }

    selectEvent = (event) => {
        if(event){
            this.setState({eventSelected: event, eventsListModalOpen:false})
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
                eventsListModalOpen={this.state.eventsListModalOpen}
                displayMoreEvents={this.displayMoreEvents}
                eventsList={this.state.eventsList}
                currentDate={this.state.currentDate}
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

    getSizePage = () => {
        // let height = window.innerHeight
        // let width = window.innerWidth
        let w = document.body.clientWidth;
        let h = document.body.clientHeight;
        
        this.setState({height : h, width: w})
    }
    // componentDidMount(){
    //     this.getSizePage()
    //     console.log('component did mount men !!!! ')
    // }

    render(){
        // console.log("state : ", this.state)
        // console.log("heigth : ", this.state.height)
        // console.log("width: ", this.state.width)
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
                    toggleModal={this.toggleModal}
                    comment={this.state.comment}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    toggleCommentInput={this.toggleCommentInput}
                    commentInput={this.state.commentInput}
                />
                <ModalEventsList
                    eventsListModalOpen={this.state.eventsListModalOpen}
                    displayMoreEvents={this.displayMoreEvents}
                    eventsList={this.state.eventsList}
                    selectEvent={this.selectEvent}
                    stepType={this.state.stepType} 
                />
            </div>
        )
    }
}
export default CalendarContainer

