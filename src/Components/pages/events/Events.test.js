import React from 'react'
import Events from './Events.jsx'
import EventCard from './EventCard.jsx'

import moment from 'moment'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import datasJson from '../../../data.json'
import {filterEventsByView, filterEventsByDay, convertDatasInMoment, filterByStatus} from './EventsUtils'

configure({ adapter: new Adapter() })

describe('Events', () => {
    let wrapper
    const testEvents = moment("25/05/2019", "DD/MM/YYYY").utc()
    const currentMoment = moment().utc()
    const allEventsfromContext = convertDatasInMoment(datasJson)
    const eventsInCurrentWeek = filterEventsByView(currentMoment.clone().startOf('month'), 'month', allEventsfromContext)
    const eventsByDay = filterEventsByDay(eventsInCurrentWeek, currentMoment)
    
    beforeEach(() => {
        wrapper = shallow(
        <Events 
            day={currentMoment}
            eventsFilteredByStatus={filterByStatus(eventsByDay, 'all')}
        />)
    })
    it("returns a events-container div", () => {
        expect(wrapper.find(".events-container").type()).toBe('div')
    })
    // it('returns at most 2 events for month view', () => {
    //     console.log("test", wrapper.children())
    //     expect(wrapper.find(EventCard)).toHaveLength(2)
    // })
})