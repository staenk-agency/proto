import React from 'react'
import CalendarContainer from './CalendarContainer.jsx'
import CalendarMonth from './CalendarMonth.jsx'
import CalendarWeek from './CalendarWeek.jsx'
import CalendarDay from './CalendarDay.jsx'

import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import moment from 'moment'
configure({ adapter: new Adapter() });

describe('CalendarContainer', () => {
    let wrapper    
    beforeEach(() => {
        wrapper = shallow(<CalendarContainer />)
    })
    it('returns a div container', () => {
        expect(
            wrapper
            .type()).toBe('div')
    })
    it('has a calendar container div', () => {
        expect(
            wrapper.find('.calendar-container')
            .type()).toBe('div')
    })
    it('returns a CalendarMonth component with a moment object when steptype is "month"', () => {
        let props
        wrapper.setState({stepType: 'month'})
        props = wrapper.find(CalendarMonth).props().currentMoment.format('YYYY MM DD')
        expect(props).toEqual(moment().utc().format('YYYY MM DD'))
    })
    it('returns a CalendarWeek component with a moment object when steptype is "week"', () => {
        let props
        wrapper.setState({stepType: 'week'})
        props = wrapper.find(CalendarWeek).props().currentMoment.format('YYYY MM DD')
        expect(props).toEqual(moment().utc().format('YYYY MM DD'))
    })
    it('returns a CalendarDay component with a moment object when steptype is "day"', () => {
        let props
        wrapper.setState({stepType: 'day'})
        props = wrapper.find(CalendarDay).props().currentMoment.format('YYYY MM DD HH kk')
        expect(props).toEqual(moment().utc().format('YYYY MM DD HH kk'))
    })
    // it("doesn't return the Calendar's components that don't match with the steptype", () => {
    //     wrapper.setState({stepType: 'month'})
    //     expect(wrapper.find(CalendarWeek)).toBeDefined()
    //     expect(wrapper.find(CalendarDay).props()).toBeDefined()
    // })
    
    describe('change the correct stepType state when a link is clicked', () => {
        it('update the state whith the param in the function', () => {
            wrapper.find('.dayLink').simulate('click')
            expect(wrapper.state('stepType')).toBe('day')
            wrapper.find('.weekLink').simulate('click')
            expect(wrapper.state('stepType')).toBe('week')
            wrapper.find('.monthLink').simulate('click')
            expect(wrapper.state('stepType')).toBe('month')
        }) 
    })
})
