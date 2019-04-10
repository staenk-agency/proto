import React from 'react'
import DayMonthView from './DayMonthView.jsx'

import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import moment from 'moment'

configure({ adapter: new Adapter() })

describe('DayMonthView', () => {
    let wrapper    
    beforeEach(() => {
        wrapper = shallow(
        <DayMonthView 
            day={}
        />)
    })
    it('has a weekDay container as a div', () => {
        expect(wrapper.find('.weekDay').type()).toBe('div')
    })
})