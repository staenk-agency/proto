import React from 'react'
import CalendarMonth from './CalendarMonth'
import DayMonthView from './DayMonthView'

import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import moment from 'moment'

import datasJson from '../../../../data.json'
import {convertDatasInMoment} from '../../events/EventsUtils.js'
// import {useInitCalendarState} from '../HooksCalendar.js'
// import {filterEventsByView, filterEventsByDay} from '../../events/EventsUtils.js'

configure({ adapter: new Adapter() });

describe('CalendarMonth', () => {
    let wrapper
    const currentMomentEnd = moment().utc().endOf('month')
    const allEventsfromContext = convertDatasInMoment(datasJson)

    beforeEach(() => {
        wrapper = shallow(
            <CalendarMonth 
                currentMoment={moment().utc()}
                displayMonthFrench={(mDate, monthsName) => {return monthsName[mDate]}}
                allEventsfromContext={allEventsfromContext}
        />)
    })

    it('has a calendar-month-container div', () => {
        expect(wrapper.type()).toBe('div')
        expect(wrapper.find('.calendar-month-container').type()).toBe('div')
    })
    it('returns the correct number of days according to the month', () => {
        const numberOfDays = currentMomentEnd.format('D')
        expect(wrapper.find(DayMonthView).last().props().day.format('D')).toBe(numberOfDays)
        const test = moment().utc().endOf('month').add(10, 'month').format('D')
        expect(wrapper.find(DayMonthView).last().props().day.add(10, 'month').format('D')).toBe(test)
    })
    it('returns the month according to the currentMonth', () => {
        const displayMonthFrench=(mDate, monthsName) => {return monthsName[mDate]}
        const monthsName=["JANVIER" ,"FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"]
        const currentMonth = moment().utc()
        expect(wrapper.find('.content-navigation').props().children[1]).toBe(displayMonthFrench(currentMonth.month(), monthsName))
    })
    // it('returns the correct number of daysMonthView according to the number of the month', () => {
    //     const daysInMonth = currentMomentEnd.format('D')
    //     const num = wrapper.find(".weekDays").props().children
    //     const days = num[1]
    //     const length = days.length
    //     expect(length).toBe(parseInt(daysInMonth))
    //     const daysInMonth2 = moment().utc().add(1, 'month').endOf('month').format('D')
    //     wrapper.find('.btn-next-month').simulate('click')
    //     const num2 = wrapper.find(".weekDays").props().children
    //     const days2 = num2[1]
    //     const length2 = days2.length
    //     expect(length2).toBe(parseInt(daysInMonth2))
    // })
    // it('has a button that returns the previous year', () => {
    //     // console.log("debuuuug", wrapper.debug())
    //     // console.log("wrapper", expect(wrapper.find('btn').at(0).type()).toBe('button'))
    //     expect(wrapper.find(".previous").at(0).type()).toBe('button')
    //     wrapper.find('.previous').at(0).simulate('click')
    //     expect(wrapper.find(DayMonthView).first().props().day.format('DD MM YYYY')).toBe(currentMomentStart.clone().subtract(1, 'y').format('DD MM YYYY'))
    //     expect(wrapper.find(DayMonthView).at(1).props().day.format('DD MM YYYY')).toBe(currentMomentStart.clone().subtract(1, 'y').add(1, 'day').format('DD MM YYYY'))
    // })
    // it('has a button that returns the previous month', () => {
    //     expect(wrapper.find('.btn-previous-month').type()).toBe('button')
    //     wrapper.find('.btn-previous-month').simulate('click')
    //     expect(wrapper.find(DayMonthView).first().props().day.format('DD MM YYYY')).toBe(currentMomentStart.clone().subtract(1, 'month').format('DD MM YYYY'))
    //     expect(wrapper.find(DayMonthView).at(2).props().day.format('DD MM YYYY')).toBe(currentMomentStart.clone().subtract(1, 'month').add(2, 'day').format('DD MM YYYY'))
    // })
    // it('has a button that returns the next month', () => {
    //     expect(wrapper.find('.btn-next-month').type()).toBe('button')
    //     wrapper.find('.btn-next-month').simulate('click')
    //     expect(wrapper.find(DayMonthView).first().props().day.format('DD MM YYYY')).toBe(currentMomentStart.clone().add(1, 'month').format('DD MM YYYY'))
    //     expect(wrapper.find(DayMonthView).at(3).props().day.format('DD MM YYYY')).toBe(currentMomentStart.clone().add(1, 'month').add(3, 'day').format('DD MM YYYY'))
    // })
    // it('has a button that returns the next year', () => {
    //     expect(wrapper.find('.btn-next-year').type()).toBe('button')
    //     wrapper.find('.btn-next-year').simulate('click')
    //     expect(wrapper.find(DayMonthView).first().props().day.format('DD MM YYYY')).toBe(currentMomentStart.clone().add(1, 'y').format('DD MM YYYY'))
    //     expect(wrapper.find(DayMonthView).at(4).props().day.format('DD MM YYYY')).toBe(currentMomentStart.clone().add(1, 'y').add(4, 'day').format('DD MM YYYY'))
    // })
})