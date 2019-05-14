import React from 'react'
import EventsMonthView from './EventsMonthView'

import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import moment from 'moment'

configure({ adapter: new Adapter() })

describe('EventsMonthView', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(
        <EventsMonthView
            day={moment("06/05/19 13:00", "DD/MM/YY kk:mm").utc()}
            eventsInCurrentMonth={[{"date":{"start":"07/05/19","startHour":"13:30","end":"15/04/19","endHour":"18h00"},"title":"Fais tes devoirs à 13H30!","shortDescription":"ork work work work work","message":"yeep !!","account":{"name":"Bender","picture":"https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png"},"socialNetworks":{"url":"https://fr.linkedin.com/"}},{"date":{"start":"15/05/19","startHour":"14:00","end":"15/04/19","endHour":"18h00"},"title":"Boom","shortDescription":"Braa!","message":"yeep !!","account":{"name":"Bender","picture":"https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png"},"socialNetworks":{"url":"https://fr.linkedin.com/"}},{"date":{"start":"18/05/19","startHour":"15:00","end":"15/04/19","endHour":null},"title":"Ca c'est l'après-midi??!","shortDescription":"Come on!","message":"yeep !!","account":{"name":"Aziz","picture":"https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png"},"socialNetworks":{"url":"https://fr.linkedin.com/"}},{"date":{"start":"18/05/19","startHour":"09:00","end":"15/04/19","endHour":"18h00"},"title":"Ca c'est le matin","shortDescription":"Come on!","message":"yeep !!","account":{"name":"Aziz","picture":"https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png"},"socialNetworks":{"url":"https://fr.linkedin.com/"}},{"date":{"start":"06/05/19","startHour":"12:00","end":"15/04/19","endHour":"18h00"},"title":"Test test test","shortDescription":"Come on!","message":"yeep !!","account":{"name":"Leela","picture":"https://vignette.wikia.nocookie.net/en.futurama/images/d/d4/Turanga_Leela.png/revision/latest?cb=20150218013044"},"socialNetworks":{"url":"https://fr.linkedin.com/"}},{"date":{"start":"06/05/19","startHour":"06:00","end":"15/04/19","endHour":"18h00"},"title":"Test test test","shortDescription":"Come on!","message":"yeep !!","account":{"name":"Leela","picture":"https://vignette.wikia.nocookie.net/en.futurama/images/d/d4/Turanga_Leela.png/revision/latest?cb=20150218013044"},"socialNetworks":{"url":"https://fr.linkedin.com/"}},{"date":{"start":"06/05/19","startHour":"09:00","end":"15/04/19","endHour":"18h00"},"title":"Test test test","shortDescription":"Come on!","message":"yeep !!","account":{"name":"Leela","picture":"https://vignette.wikia.nocookie.net/en.futurama/images/d/d4/Turanga_Leela.png/revision/latest?cb=20150218013044"},"socialNetworks":{"url":"https://fr.linkedin.com/"}},{"date":{"start":"17/05/19","startHour":"06:00","end":"15/04/19","endHour":"18h00"},"title":"rends ton cahier des charges !!!!","shortDescription":"Come on!","message":"yeep !!","account":{"name":"Leela","picture":"https://vignette.wikia.nocookie.net/en.futurama/images/d/d4/Turanga_Leela.png/revision/latest?cb=20150218013044"},"socialNetworks":{"url":"https://fr.linkedin.com/"}},{"date":{"start":"25/05/19","startHour":"09:12","end":"15/04/19","endHour":"18h00"},"title":"Anniv Lisa","shortDescription":"Come on!","message":"yeep !!","account":{"name":"Fry","picture":"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-futurama-billy-west.jpg"},"socialNetworks":{"url":"https://fr.linkedin.com/"}},{"date":{"start":"25/05/19","startHour":"10:17","end":"15/04/19","endHour":"18h00"},"title":"prends le train pour marseille !","shortDescription":"Come on!","message":"yeep !!","account":{"name":"Fry","picture":"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-futurama-billy-west.jpg"},"socialNetworks":{"url":"https://fr.linkedin.com/"}},{"date":{"start":"25/05/19","startHour":"10:16","end":"15/04/19","endHour":"18h00"},"title":"va à la gare !","shortDescription":"Come on!","message":"yeep !!","account":{"name":"Fry","picture":"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-futurama-billy-west.jpg"},"socialNetworks":{"url":"https://fr.linkedin.com/"}},{"date":{"start":"25/05/19","startHour":"13:01","end":"15/04/19","endHour":"18h00"},"title":"c'était la mauvaise gare !","shortDescription":"Come on!","message":"yeep !!","account":{"name":"Fry","picture":"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-futurama-billy-west.jpg"},"socialNetworks":{"url":"https://fr.linkedin.com/"}},{"date":{"start":"10/05/19","startHour":"13:47","end":"15/04/19","endHour":"18h00"},"title":"Test du tri ","shortDescription":"Tu es après !!","message":"yeep !!","account":{"name":"Fry","picture":"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-futurama-billy-west.jpg"},"socialNetworks":{"url":"https://fr.linkedin.com/"}},{"date":{"start":"10/05/19","startHour":"13:45","end":"15/04/19","endHour":"18h00"},"title":"On croise les doigts","shortDescription":"Tu es avant !!","message":"yeep !!","account":{"name":"Leela","picture":"https://vignette.wikia.nocookie.net/en.futurama/images/d/d4/Turanga_Leela.png/revision/latest?cb=20150218013044"},"socialNetworks":{"url":"https://fr.linkedin.com/"}},{"date":{"start":"10/05/19","startHour":"13:21","end":"15/04/19","endHour":"18h00"},"title":"On croise les doigts","shortDescription":"Tu es avant avant !!","message":"yeep !!","account":{"name":"Bender","picture":"https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png"},"socialNetworks":{"url":"https://fr.linkedin.com/"}}]}
        />
        )
    })
    it('should return an events-month-container div', ()=> {
        expect(wrapper.find('.events-month-container').type()).toBe('div')
    })
    it('should return an morning-container div', ()=> {
        expect(wrapper.find('.morning-container').type()).toBe('div')
    })
    it('shouls return an afternoon-containe div', () => {
        expect(wrapper.find('.afternoon-container').type()).toBe('div')
    })
    it('should return the correct events in good order', () => {
        console.log('test', wrapper.debug())
        console.log('test2', wrapper.find('.eventView').at(0))
        const hours = wrapper.find('.eventView').map(node => node.text())
        console.log("hours", hours)
        expect(hours).toEqual([ '06:00', '09:00', '12:00' ])
    })
})