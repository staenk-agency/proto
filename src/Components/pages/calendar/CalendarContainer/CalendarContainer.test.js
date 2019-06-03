import React from 'react'
import CalendarContainer from './CalendarContainer.jsx'
import CalendarMonth from '../CalendarMonth/CalendarMonth'
import CalendarWeek from '../CalendarWeek/CalendarWeek'
import CalendarDay from '../CalendarDay/CalendarDay.jsx'

import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import moment from 'moment'
configure({ adapter: new Adapter() });

describe('CalendarContainer', () => {
    let wrapper    
    let props
    beforeEach(() => {
        wrapper = shallow(<CalendarContainer />)
    })
    it('returns a div container', () => {
        expect(wrapper.type()).toBe('div')
    })
    it('has a calendar container div', () => {
        expect(wrapper.find('.calendar-container').type()).toBe('div')
    })
    it('returns a CalendarMonth component with a moment object when steptype is "month"', () => {
        wrapper.setState({stepType: 'month'})
        props = wrapper.find(CalendarMonth).props().currentMoment.format('YYYY MM DD')
        expect(props).toEqual(moment().utc().format('YYYY MM DD'))
    })
    it('returns a CalendarWeek component with a moment object when steptype is "week"', () => {
        wrapper.setState({stepType: 'week'})
        props = wrapper.find(CalendarWeek).props().currentMoment.format('YYYY MM DD')
        expect(props).toEqual(moment().utc().format('YYYY MM DD'))
    })
    it('returns a CalendarDay component with a moment object when steptype is "day"', () => {
        wrapper.setState({stepType: 'day'})
        props = wrapper.find(CalendarDay).props().currentMoment.format('YYYY MM DD HH kk')
        expect(props).toEqual(moment().utc().format('YYYY MM DD HH kk'))
    })
    it('update the state whith the param in the function', () => {
        wrapper.find('.dayLink').simulate('click')
        expect(wrapper.state('stepType')).toBe('day')
        wrapper.find('.weekLink').simulate('click')
        expect(wrapper.state('stepType')).toBe('week')
        wrapper.find('.monthLink').simulate('click')
        expect(wrapper.state('stepType')).toBe('month')
        expect(wrapper.state('stepType')).not.toMatch('week')
        expect(wrapper.state('stepType')).not.toMatch('day')
    })
})
