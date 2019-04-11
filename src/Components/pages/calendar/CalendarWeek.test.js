import React from 'react'
import CalendarWeek from './CalendarWeek.jsx'
import DayWeekView from './DayWeekView.jsx'

import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import moment from 'moment'

configure({ adapter: new Adapter() })

describe('CalendarWeek', () => {
    let wrapper    
    beforeEach(() => {
        wrapper = shallow(
        <CalendarWeek 
            currentMoment={moment().utc()}
            displayMonthFrench={(mDate, monthsName) => {return monthsName[mDate]}} 
            daysNameWeek ={[ "DIMANCHE" ,"LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI"]}            monthsName={["JANVIER" ,"FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"]}
        />)
    })
    it('has a calendar-month-container div', () => {
        expect(wrapper.type()).toBe('div')
        expect(wrapper.find('.calendar-week-container').type()).toBe('div')
    })
    it('has a button that returns the previous week', () => {
        let currentMoment = moment().utc().startOf('isoWeek')
        expect(wrapper.find('.btn-previous-week').type()).toBe('button')
        wrapper.find('.btn-previous-week').simulate('click')
        expect(wrapper.find(DayWeekView).first().props().day.format('DD MM YYYY')).toBe(currentMoment.clone().subtract(7, 'd').format('DD MM YYYY'))
        expect(wrapper.find(DayWeekView).at(1).props().day.format('DD MM YYYY')).toBe(currentMoment.clone().subtract(7, 'd').add(1, 'day').format('DD MM YYYY'))

        // for(let d = 7; d < 49; d = d + 7){
        //     //pourquoi je suis oligée de faire un premier subtract ? 
        //     // une semaine de décalage des le debut
        //     let test = moment().utc().startOf('isoWeek').subtract(7, 'd')
        //     wrapper.find('.btn-previous-week').simulate('click')
        //     test = test.clone().subtract(d, 'd').format('DD MM YYYY')
        //     expect(wrapper.find(DayWeekView).at(0).props().day.format('DD MM YYYY')).toBe(test)
        // }
    })
    it('has a button that returns the next week', () => {
        let currentMoment = moment().utc().startOf('isoWeek')
        expect(wrapper.find('.btn-next-week').type()).toBe('button')
        wrapper.find('.btn-next-week').simulate('click')
        expect(wrapper.find(DayWeekView).first().props().day.format('DD MM YYYY')).toBe(currentMoment.clone().add(7, 'd').format('DD MM YYYY'))
        expect(wrapper.find(DayWeekView).at(1).props().day.format('DD MM YYYY')).toBe(currentMoment.clone().add(7, 'd').add(1, 'day').format('DD MM YYYY'))
    })
})