// import React from 'react'
// import Events from './Events.jsx'
// import EventCard from './EventCard.jsx'

// import moment from 'moment'
// import {shallow, configure} from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'

// import datasJson from '../../../data.json'
// import {filterEventsByView, filterEventsByDay, convertDatasInMoment, filterEventsByHalf, filterByStatus} from './EventsUtils'

// configure({ adapter: new Adapter() })

// describe('EventCard', () => {
//     let wrapper
//     // const test = moment("25/05/2019 15:00", "25/05/2019 HH:MM").utc()
//     const currentMoment = moment().utc()
//     const status = "all"
//     const allEventsfromContext = convertDatasInMoment(datasJson)
//     const eventsInCurrentMonth = filterEventsByView(currentMoment.clone().startOf('month'), 'month', allEventsfromContext)
//     const eventsByDay = filterEventsByDay(eventsInCurrentMonth, currentMoment)
//     const eventsFilteredByStatus = filterByStatus(eventsByDay, status)
//     const [eventAfternoon, eventMorning] = filterEventsByHalf(eventsFilteredByStatus, currentMoment)
    
//     beforeEach(() => {
//         const status = "all"
//         wrapper = shallow(
//         <EventCard 
//             eventByHalf={eventAfternoon}
//             stepType="month"
//             status={status}
//         />)
//     })
//     it("returns a event-view div", () => {
//         console.log(wrapper.props())
//         expect(wrapper.find(".event-view").type()).toBe('div')
//     })
// })