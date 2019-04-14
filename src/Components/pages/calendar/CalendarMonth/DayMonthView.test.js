import React from 'react'
import DayMonthView from './DayMonthView'

import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import moment from 'moment'

configure({ adapter: new Adapter() })

describe('DayMonthView', () => {
    let wrapper
    const currentMoment = moment().utc()
    beforeEach(() => {
        wrapper = shallow(
        <DayMonthView 
            day={moment().utc()}
        />)
    })
    it('has a weekDay container as a div', () => {
        expect(wrapper.find('.weekDay').type()).toBe('div')
    })
    it('receives a moment object in the day props', () => {
        expect(wrapper.find('.weekDay').props().children).toBe(currentMoment.format('DD'))
    })
    it('receives the correct position for the css grid according to the day', () => {
        const checkPosition = (num) =>{
            if(num % 7 === 0)
                return num === 6
            else
                return num = (num % 7) - 1
        } //check the right position in the grid according to the num of the day 0=monday 6=sunday

        const position = wrapper.find('.weekDay').props().className
        const numOfPosition = position.split("")
        const day = parseInt(wrapper.props().children)
        expect(numOfPosition[numOfPosition.length -1]).toBe(checkPosition(day).toString())
    })
})