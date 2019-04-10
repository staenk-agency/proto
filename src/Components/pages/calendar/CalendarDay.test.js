import React from 'react'
import CalendarDay from './CalendarDay'
import DayHourView from './DayHourView'

import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import moment from 'moment'

configure({ adapter: new Adapter() })

describe('CalendarDay', () => {
    let wrapper    
    beforeEach(() => {
        wrapper = shallow(
        <CalendarDay currentMoment={moment().utc()}/>)
    })
    it('has a calendar-day-container div', () => {
        expect(wrapper.type()).toBe('div')
        expect(wrapper.find('.calendar-day-container').type()).toBe('div')
    })
    it('has a button that returns the previous day', () => {
        let currentMoment = moment().utc().startOf('d')
        expect(wrapper.find('.btn-previous-day').type()).toBe('button')
        wrapper.find('.btn-previous-day').simulate('click')
        expect(wrapper.find(DayHourView).first().props().hour.format('kk mm')).toBe(currentMoment.clone().subtract(1, 'd').format('kk mm'))
    })
    it('has a button that returns the next day', () => {
        let currentMoment = moment().utc().startOf('d')
        expect(wrapper.find('.btn-previous-day').type()).toBe('button')
        wrapper.find('.btn-next-day').simulate('click')
        expect(wrapper.find(DayHourView).first().props().hour.format('DD MM YYYY kk-mm')).toBe(currentMoment.clone().add(1, 'd').format('DD MM YYYY kk-mm'))
    })
})