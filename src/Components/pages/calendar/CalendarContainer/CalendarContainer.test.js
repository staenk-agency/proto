import React from 'react'
import CalendarContainer from './CalendarContainer.jsx'
import CalendarMonth from '../CalendarMonth/CalendarMonth'
import CalendarWeek from '../CalendarWeek/CalendarWeek'
import CalendarDay from '../CalendarDay/CalendarDay.jsx'
import Modal from '../../modal/Modal.jsx'
import ModalEventsList from '../../modal/ModalEventsList.jsx'
import NavBarDashboard from '../../../dashboard/NavbarDashboard.jsx'
import VerticalMenu from '../../../layout/VerticalMenu.jsx'
import HorizontalNavBar from '../../../layout/HorizontalNavBar.jsx'

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
    it('has a calendar views div container', () => {
        expect(wrapper.find('.calendar-views').type()).toBe('div')
    })
    it('returns a CalendarMonth component with a moment object when steptype is "month"', () => {
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
    it('returns a HorizontalNavBar component', () => {
        expect(wrapper.find(HorizontalNavBar).exists()).toBe(true)
    })
    it('returns a NavBarDashboard component', () => {
        expect(wrapper.find(NavBarDashboard).exists()).toBe(true)
    })
    it('returns a VerticalMenu component', () => {
        expect(wrapper.find(VerticalMenu).exists()).toBe(true)
    })
    it('send modalOpened state to Modal component', () => {
        wrapper.setState({modalOpened : true})
        props = wrapper.find(Modal).props().modalOpened
        expect(props).toEqual(true)
    })
    it('send eventsListModalOpen state to ModalEventsList component', () => {
        wrapper.setState({eventsListModalOpen : true})
        props = wrapper.find(ModalEventsList).props().eventsListModalOpen
        expect(props).toEqual(true)
    })
})
