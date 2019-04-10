import React from 'react'
import CalendarMonth from './CalendarMonth.jsx'
import CalendarContainer from './CalendarContainer.jsx'
import CalendarWeek from './CalendarWeek.jsx'
import CalendarDay from './CalendarDay.jsx'
import DayMonthView from './DayMonthView.jsx'

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
        let currentMoment = moment().utc().startOf('month')
        expect(wrapper.find('.btn-previous-year').type()).toBe('button')
        wrapper.find('.btn-previous-year').simulate('click')
        expect(wrapper.find(DayMonthView).first().props().day.format('DD MM YYYY')).toBe(currentMoment.clone().subtract(1, 'y').format('DD MM YYYY'))
        expect(wrapper.find(DayMonthView).at(1).props().day.format('DD MM YYYY')).toBe(currentMoment.clone().subtract(1, 'y').add(1, 'day').format('DD MM YYYY'))
    })
    it('has a button that returns the previous month', () => {
        let currentMoment = moment().utc().startOf('month')
        expect(wrapper.find('.btn-previous-month').type()).toBe('button')
        wrapper.find('.btn-previous-month').simulate('click')
        expect(wrapper.find(DayMonthView).first().props().day.format('DD MM YYYY')).toBe(currentMoment.clone().subtract(1, 'month').format('DD MM YYYY'))
        expect(wrapper.find(DayMonthView).at(2).props().day.format('DD MM YYYY')).toBe(currentMoment.clone().subtract(1, 'month').add(2, 'day').format('DD MM YYYY'))
    })
    it('has a button that returns the next month', () => {
        let currentMoment = moment().utc().startOf('month')
        expect(wrapper.find('.btn-next-month').type()).toBe('button')
        wrapper.find('.btn-next-month').simulate('click')
        expect(wrapper.find(DayMonthView).first().props().day.format('DD MM YYYY')).toBe(currentMoment.clone().add(1, 'month').format('DD MM YYYY'))
        expect(wrapper.find(DayMonthView).at(3).props().day.format('DD MM YYYY')).toBe(currentMoment.clone().add(1, 'month').add(3, 'day').format('DD MM YYYY'))
    })
    it('has a button that returns the next year', () => {
        let currentMoment = moment().utc().startOf('month')
        expect(wrapper.find('.btn-next-year').type()).toBe('button')
        wrapper.find('.btn-next-year').simulate('click')
        expect(wrapper.find(DayMonthView).first().props().day.format('DD MM YYYY')).toBe(currentMoment.clone().add(1, 'y').format('DD MM YYYY'))
        expect(wrapper.find(DayMonthView).at(4).props().day.format('DD MM YYYY')).toBe(currentMoment.clone().add(1, 'y').add(4, 'day').format('DD MM YYYY'))
    })
    it('returns the correct number of days according to the month', () => {
        let numberOfDays = moment().utc().endOf('month').format('D')
        expect(wrapper.find(DayMonthView).last().props().day.format('D')).toBe(numberOfDays)
        
        //pour les tests : pourquoi ils marchent lorsque add est fait à la main, et lorsque j'automatise avec une boucle for ou while, MEME sans utiliser la variable qui s'incrémente i, il ne renvoie pas les bonnes valeurs ? 
                let test = moment().utc().endOf('month').add(10, 'month').format('D')
                expect(wrapper.find(DayMonthView).last().props().day.add(10, 'month').format('D')).toBe(test)
    })
    it('returns the month according to the currentMonth', () => {
        const displayMonthFrench=(mDate, monthsName) => {
            return monthsName[mDate]
        }
        const monthsName=["JANVIER" ,"FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"]
            let currentMonth = moment().utc()
            expect(wrapper.find('h3').props().children[0]).toBe(displayMonthFrench(currentMonth.month(), monthsName))
    })
    // it('returns the correct number of DayMonthView according number of days in the current month', () => {
    //     expect(wrapper.find(DayMonthView).
    // })
})