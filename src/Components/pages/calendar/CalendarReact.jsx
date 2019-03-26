import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import './CalendarReact.scss';

class CalendarReact extends Component {
        state = {
            value: new Date(),
            today: new Date()
        }
    
    onChange = (value) => this.setState({ value })
    
    render() {
        console.log("value clicked", this.state.value)
        const {value} = this.state.value;
        return (
        <div className="calendarReact">
            <Calendar
            onChange={this.onChange}
            value={value}
            showNeighboringMonth={false}
            maxDetail="month"
            locale="fr"
            
            />
        </div>
        );
    }
}

export default CalendarReact;