import React from 'react'
import CalendarMonth from './CalendarMonth.jsx'
import CalendarContainer from './CalendarContainer.jsx'
import CalendarWeek from './CalendarWeek.jsx'
import CalendarDay from './CalendarDay.jsx'

import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import moment from 'moment'
configure({ adapter: new Adapter() });

describe('CalendarMonth', () => {
    let wrapper    
    beforeEach(() => {
        wrapper = shallow(
        <CalendarMonth 
            currentMoment={moment().utc()}
            displayMonthFrench={(mDate, monthsName) => {return monthsName[mDate]}} 
            daysName={["LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI", "DIMANCHE"]} 
            monthsName={["JANVIER" ,"FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"]}
        
        />)
    })

    it('has a calendar-month-container div', () => {
        expect(wrapper.type()).toBe('div')
        expect(wrapper.find('.calendar-month-container').type()).toBe('div')
    })
    it('has a button that returns the previous year', () => {
        expect(wrapper.find('.btn-previous-year').type()).toBe('button')
        wrapper.find('.btn-previous-year').simulate('click')
        expect(wrapper.find('currentStart')).toBe('lol')
    })
})