import React from 'react'
import CalendarMonth from './CalendarMonth.jsx'
import DayMonthView from './DayMonthView.jsx'

import {shallow, configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import moment from 'moment'

configure({ adapter: new Adapter() });

describe('CalendarMonth', () => {
    let wrapper
    let currentMomentStart = moment().utc().startOf('month')
    let currentMomentEnd = moment().utc().endOf('month')
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
        expect(wrapper.find(DayMonthView).first().props().day.format('DD MM YYYY')).toBe(currentMomentStart.clone().subtract(1, 'y').format('DD MM YYYY'))
        expect(wrapper.find(DayMonthView).at(1).props().day.format('DD MM YYYY')).toBe(currentMomentStart.clone().subtract(1, 'y').add(1, 'day').format('DD MM YYYY'))
    })
    it('has a button that returns the previous month', () => {
        expect(wrapper.find('.btn-previous-month').type()).toBe('button')
        wrapper.find('.btn-previous-month').simulate('click')
        expect(wrapper.find(DayMonthView).first().props().day.format('DD MM YYYY')).toBe(currentMomentStart.clone().subtract(1, 'month').format('DD MM YYYY'))
        expect(wrapper.find(DayMonthView).at(2).props().day.format('DD MM YYYY')).toBe(currentMomentStart.clone().subtract(1, 'month').add(2, 'day').format('DD MM YYYY'))
    })
    it('has a button that returns the next month', () => {
        expect(wrapper.find('.btn-next-month').type()).toBe('button')
        wrapper.find('.btn-next-month').simulate('click')
        expect(wrapper.find(DayMonthView).first().props().day.format('DD MM YYYY')).toBe(currentMomentStart.clone().add(1, 'month').format('DD MM YYYY'))
        expect(wrapper.find(DayMonthView).at(3).props().day.format('DD MM YYYY')).toBe(currentMomentStart.clone().add(1, 'month').add(3, 'day').format('DD MM YYYY'))
    })
    it('has a button that returns the next year', () => {
        expect(wrapper.find('.btn-next-year').type()).toBe('button')
        wrapper.find('.btn-next-year').simulate('click')
        expect(wrapper.find(DayMonthView).first().props().day.format('DD MM YYYY')).toBe(currentMomentStart.clone().add(1, 'y').format('DD MM YYYY'))
        expect(wrapper.find(DayMonthView).at(4).props().day.format('DD MM YYYY')).toBe(currentMomentStart.clone().add(1, 'y').add(4, 'day').format('DD MM YYYY'))
    })
    it('returns the correct number of days according to the month', () => {
        let numberOfDays = currentMomentEnd.format('D')
        expect(wrapper.find(DayMonthView).last().props().day.format('D')).toBe(numberOfDays)
        
        //pour les tests : pourquoi ils marchent lorsque add est fait à la main, et lorsque j'automatise avec une boucle for ou while, MEME sans utiliser la variable qui s'incrémente i, il ne renvoie pas les bonnes valeurs ? 
                let test = moment().utc().endOf('month').add(10, 'month').format('D')
                expect(wrapper.find(DayMonthView).last().props().day.add(10, 'month').format('D')).toBe(test)
    })
    it('returns the month according to the currentMonth', () => {
        const displayMonthFrench=(mDate, monthsName) => {
            return monthsName[mDate]}
        const monthsName=["JANVIER" ,"FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"]
            let currentMonth = moment().utc()
            expect(wrapper.find('h3').props().children[0]).toBe(displayMonthFrench(currentMonth.month(), monthsName))
    })
    it('returns the correct number of daysMonthView according to the number of the month', () => {
        let daysInMonth = currentMomentEnd.format('D')
        let num = wrapper.find(".weekDays").props().children
        let days = num[1]
        let length = days.length
        expect(length).toBe(parseInt(daysInMonth))
        let daysInMonth2 = moment().utc().add(1, 'month').endOf('month').format('D')
        wrapper.find('.btn-next-month').simulate('click')
        let num2 = wrapper.find(".weekDays").props().children
        let days2 = num2[1]
        let length2 = days2.length
        expect(length2).toBe(parseInt(daysInMonth2))
    })
    
})