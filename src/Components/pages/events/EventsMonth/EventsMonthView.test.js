import React from 'react'
import EventsMonthView from './EventsMonthView.jsx'

import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import moment from 'moment'

const convertDatasInMoment = (datas) => {
    const date = datas.map((event) => {
        const fullDay = moment.utc(event.date.start + " " + event.date.startHour, "DD/MM/YY kk:mm")
        event.date.mDate = fullDay
        return event
    })
    return date
}

configure({ adapter: new Adapter() })

describe('EventsMonthView', () => {
    let wrapper
    let eventsInCurrentMonth = [{"date":{"start":"27/02/48","startHour":"06:00"}},{"date":{"start":"27/02/48","startHour":"00:59"}},{"date":{"start":"27/02/48","startHour":"15:00"}}]
    // eventsInCurrentMonth = convertDatasInMoment(eventsInCurrentMonth)
    let day = moment("27/02/48 02:00", "DD/MM/YY")
    beforeEach(() => {
        wrapper = shallow(<EventsMonthView
            day={moment("27/02/48 13:00", "DD/MM/YY").utc()}
            eventsInCurrentMonth={convertDatasInMoment(eventsInCurrentMonth)}
        />)
    })
    it('should return an events-month-container div', () => {
        expect(wrapper.find('.events-month-container').type()).toBe('div')
    })
    it('should return an morning-container div', ()=> {
        expect(wrapper.find('.morning-container').type()).toBe('div')
    })
    it('should return an afternoon-containe div', () => {
        expect(wrapper.find('.afternoon-container').type()).toBe('div')
    })
    it('should return the correct events in good order', () => {
        console.log("day", day)
        console.log("eventsInCurrentMonth", eventsInCurrentMonth)
        console.log('WRAPPER DEBUG', wrapper.debug())
        console.log('wrapper', wrapper.find('.eventView').hasClass('eventView'))
        const hours = wrapper.find('.eventView').map(node => node.text())
        console.log("hours", hours)
        expect(hours).toEqual([ '06:00', '23:59'])
    })
})