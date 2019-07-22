import React from 'react';

import NavbarDashboard from '../dashboard/NavbarDashboard.jsx'

import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

describe('NavbarDashboard', () => {
    let wrapper    
    let props
    const onChangeCalendarType = (stepType) => {
        this.setState({stepType: stepType})
    }
    beforeEach(() => {
        wrapper = shallow(
            <NavbarDashboard   
                onChangeCalendarType={() => onChangeCalendarType()}
            />
        )
    })
    it('returns a div container', () => {
        expect(wrapper.type()).toBe('div')
    })
    // it('update the state whith the param in the function', () => {
    //     wrapper.find('.dayLink').simulate('click')
    //     expect(wrapper.state('stepType')).toBe('day')
    //     wrapper.find('.weekLink').simulate('click')
    //     expect(wrapper.state('stepType')).toBe('week')
    //     wrapper.find('.monthLink').simulate('click')
    //     expect(wrapper.state('stepType')).toBe('month')
    //     expect(wrapper.state('stepType')).not.toMatch('week')
    //     expect(wrapper.state('stepType')).not.toMatch('day')
    // })
})