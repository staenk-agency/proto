import React, { Component } from 'react';
// import Calendar from '../pages/calendar/Calendar';
import NavbarDashboard from './NavbarDashboard';
// import CalendarTry from '../pages/calendar/CalendarTry';
// import moment from 'moment';
// import momentFr from 'moment/locale/fr';
import './Dashboard.scss';
// import Try from '../pages/calendar/try';
import CalendarReact from '../pages/calendar/CalendarReact';


const customDayRenderer = ({ handleClick, date }) => {
    return (
        <a
        className="Day-inner"
        href={'#' + date.format('YYYY-MM-DD')}
        onClick={() => handleClick(date)}
        >
        {date.format('D')}
        </a>
    );
};

export class Dashboard extends Component {

    // onSelect(date, previousDate, currentMonth) {
    //     if (moment(date).isSame(previousDate)) {
    //         console.info('onSelect: false', date);
    //     return false;
    //     } else if (currentMonth.isSame(date, 'month')) {
    //         console.info('onSelect: true', date);
    //     return true;
    //     } else {
    //         console.info('onSelect: none', date);
    //     }
    // }
    
    render() {
        // let dayClasses = function(date) {
        //     let day = date.isoWeekday();
        //     if (day === 6 || day === 7) {
        //         return ['weekend'];
        //     }
        //     return [];
        // };
        return (
            <div className="dashboard-container">
                <NavbarDashboard />
                {/* <Calendar /> */}
                {/* <CalendarTry 
                    onSelect={this.onSelect}
                    dayClasses={dayClasses}
                    dayRenderer={customDayRenderer}
                /> */}

                {/* <Try /> */}
                <CalendarReact />

            </div>
        )
    }
}

export default Dashboard;
