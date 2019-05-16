import React, {createContext} from 'react'
import events from '../data.json'

export const EventsContext = React.createContext({
    events: events
})