// import React from 'react'
// import DayWeekView from './DayWeekView'

// import {shallow, configure} from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
// import moment from 'moment'

// configure({ adapter: new Adapter() })

// describe('DayWeekView', () => {
//     let wrapper
//     const currentMoment = moment().utc()
//     beforeEach(() => {
//         wrapper = shallow(
//         <DayWeekView 
//             day={moment().utc()}
//             displayDaysFrench={(mDate, monthsName) => {
//                 return monthsName[mDate];
//             }}
//             daysNameWeek={[ "DIMANCHE" ,"LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI"]}
//         />)
//     })
//     it('has a weekDay container as a div', () => {
//         expect(wrapper.find('.day').type()).toBe('div')
//     })
//     it('receives a moment object in the day props', () => {
//         expect(wrapper.find('p').at(0).props().children[2]).toBe(currentMoment.format('DD'))
//     })
//     // it('receives the correct position for the css grid according to the day', () => {
//     //     const position = wrapper.find('p').last().props().children[0]
//     //     // const positionWeek = moment(position).utc().format('d')
//     //     expect(position).toBe()
//     // })
// })