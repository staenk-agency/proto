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
        // console.log("wrapper debug", wrapper.debug())
        // expect(wrapper.find('.weekDay').first().props()).toBe(currentMoment.format('DD'))
    })
    it('receives the correct position for the css grid according to the day', () => {
        const checkPosition = (mDate) => {
            const numposition = moment(mDate, 'DD').isoWeekday() -1
            return numposition
        }

        const position = wrapper.find('.weekDay').props().className
        const numOfPosition = position.split("position")
        const day = parseInt(wrapper.props().children)
        expect(numOfPosition[1]).toBe(checkPosition(day).toString())
    })
})