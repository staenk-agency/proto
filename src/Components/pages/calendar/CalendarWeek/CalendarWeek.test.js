import React from 'react'
import CalendarWeek from './CalendarWeek.jsx'
import DayWeekView from './DayWeekView.jsx'

import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import moment from 'moment'

import datasJson from '../../../../data.json'
import {convertDatasInMoment} from '../../events/EventsUtils.js'

configure({ adapter: new Adapter() })

describe('CalendarWeek', () => {
    let wrapper    
    const currentMoment = moment().utc().startOf('isoWeek')
    const allEventsfromContext = convertDatasInMoment(datasJson)
    beforeEach(() => {
        wrapper = shallow(
        <CalendarWeek 
            currentMoment={moment().utc()}
            displayMonthFrench={(mDate, monthsName) => {return monthsName[mDate]}} 
            daysNameWeek ={[ "DIMANCHE" ,"LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI"]}            
            monthsName={["JANVIER" ,"FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"]}
            allEventsfromContext={allEventsfromContext}
        />)
    })
    it('has a calendar-month-container div', () => {
        expect(wrapper.type()).toBe('div')
        expect(wrapper.find('.calendar-week-container').type()).toBe('div')
    })
    it('returns the week according to the currentWeek', () => {
        const currentMoment=moment().utc()
        expect(wrapper.find('.content-nav').props().children[1]).toBe(currentMoment.format('DD/MM/YY'))
    })
    // it('has a button that returns the previous week', () => {
    //     expect(wrapper.find('.previous-week').type()).toBe('button')
    //     wrapper.find('.previous-week').simulate('click')
    //     expect(wrapper.find(DayWeekView).first().props().day.format('DD MM YYYY')).toBe(currentMoment.clone().subtract(7, 'd').format('DD MM YYYY'))
    //     expect(wrapper.find(DayWeekView).at(1).props().day.format('DD MM YYYY')).toBe(currentMoment.clone().subtract(7, 'd').add(1, 'day').format('DD MM YYYY'))
    // })
    // it('has a button that returns the next week', () => {
    //     expect(wrapper.find('.btn-next-week').type()).toBe('button')
    //     wrapper.find('.btn-next-week').simulate('click')
    //     expect(wrapper.find(DayWeekView).first().props().day.format('DD MM YYYY')).toBe(currentMoment.clone().add(7, 'd').format('DD MM YYYY'))
    //     expect(wrapper.find(DayWeekView).at(1).props().day.format('DD MM YYYY')).toBe(currentMoment.clone().add(7, 'd').add(1, 'day').format('DD MM YYYY'))
    // })
})