import React from 'react'
import DayHourView from './DayHourView'

import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import moment from 'moment'

configure({ adapter: new Adapter() })

describe('DayHourView', () => {
    let wrapper
    let currentMoment = moment().utc()
    beforeEach(() => {
        wrapper = shallow(
        <DayHourView 
            day={moment().utc()}
        />)
    })
    it('returns a hour container', () => {
        expect(wrapper.find('.hour').type().toBe('div'))
    })
})