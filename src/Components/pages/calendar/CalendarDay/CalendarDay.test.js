// import React from 'react'
// import CalendarDay from './CalendarDay'
// import DayHourView from './DayHourView'

// import {shallow, configure} from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
// import moment from 'moment'

// configure({ adapter: new Adapter() })

// describe('CalendarDay', () => {
//     let wrapper
//     const today = moment().utc().startOf('d')
//     let currentMoment = moment().utc().startOf('d')

//     const nextStep = (step, recomputeDays, stepArray, end, startOf) => {
//             wrapper.setProps({currentMoment: currentMoment.add(1, step)})
//             recomputeDays(currentMoment.clone().startOf(startOf), stepArray, end)
//     }
//     const previousStep = (step, recomputeDays, stepArray, end, startOf) => {
//         wrapper.setProps({currentMoment: currentMoment.subtract(1, step)})
//         recomputeDays(currentMoment.clone().startOf(startOf), stepArray, end)
//     }
//     const returnToCurrentDate = (recomputeDays, stepArray, end, startOf) => {
//             wrapper.setProps({currentMoment : moment().utc()})
//             recomputeDays(currentMoment.clone().startOf(startOf), stepArray, end)
//     }

//     beforeEach(() => {
//         wrapper = shallow(
//         <CalendarDay 
//             currentMoment={moment().utc()}
//             nextStep={nextStep}
//             previousStep={previousStep}
//             returnToCurrentDate={returnToCurrentDate}
//         />)
//     })
//     it('has a calendar-day-container div', () => {
//         // console.log("wrapper", wrapper.type())
//         expect(wrapper.type()).toBe('div')
//         expect(wrapper.find('.calendar-day-container').type()).toBe('div')
//     })
//     it('has a button that returns the previous day', () => {
//         expect(wrapper.find('.btn-previous-day').type()).toBe('button')
//         wrapper.find('.btn-previous-day').simulate('click')
//         expect(wrapper.find(DayHourView).first().props().hour.format('DD MM YYYY kk mm')).toBe(today.clone().subtract(1, 'd').format('DD MM YYYY kk mm'))
//         wrapper.find('.btn-next-day').simulate('click')
//     })
//     it('has a button that returns the next day', () => {
//         expect(wrapper.find('.btn-previous-day').type()).toBe('button')
//         wrapper.find('.btn-next-day').simulate('click')
//         expect(wrapper.find(DayHourView).first().props().hour.format('DD MM YYYY kk-mm')).toBe(today.clone().add(1, 'd').format('DD MM YYYY kk-mm'))
//         wrapper.find('.btn-previous-day').simulate('click')
//     })
// })