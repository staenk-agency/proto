import React from 'react'
import DayWeekView from './DayWeekView'
import Events from '../../events/Events.jsx'
// import EventsCard from '../../events/EventCard.jsx'

import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import moment from 'moment'

import datasJson from '../../../../data.json'
import {filterEventsByView, filterEventsByDay, convertDatasInMoment} from '../../events/EventsUtils.js'

configure({ adapter: new Adapter() })

describe('DayWeekView', () => {
    let wrapper
    const currentMoment = moment().utc()
    const allEventsfromContext = convertDatasInMoment(datasJson)
    const eventsInCurrentWeek = filterEventsByView(currentMoment.clone().startOf('isoWeek'), 'isoWeek', allEventsfromContext)

    const eventsByDay = filterEventsByDay(eventsInCurrentWeek, currentMoment)


    beforeEach(() => {
        wrapper = shallow(
        <DayWeekView 
            day={currentMoment}
            eventsByDay={allEventsfromContext}
        />)
    })
    it('has a weekDay container as a div', () => {
        expect(wrapper.find('.day').type()).toBe('div')
    })
    it('receives and display a moment object sent by props', () => {
        expect(wrapper.find('p').at(0).props().children[2]).toBe(currentMoment.clone().format('DD'))
    })
    // it('receives the good number of event(s) according to the day', () => {
    //     console.log("TEST EVENTS IN DAY", wrapper.find(Events).prop("eventsFilteredByStatus"))
    //     // expect(wrapper.find(Events)).toHaveLength(eventsByDay.length)
    //     expect(wrapper.find(Events)).prop()
    // })
})