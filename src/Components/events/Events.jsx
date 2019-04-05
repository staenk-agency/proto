import React, { Component } from 'react'
import json from '../../data.json'
import NavbarDashboard from '../dashboard/NavbarDashboard'
import HorizontalNavBar from '../layout/HorizontalNavBar'

export class Events extends Component {
    render() {
        return (
        <div className="events-container">
        <HorizontalNavBar />
        <NavbarDashboard />
            <h2>In Events Component</h2>
                <p>Titre: {json[0].title}</p>
                <p>Début de l'event: {json[0].date.start} {json[0].date.startHour}</p>
                <p>Fin de l'event: {json[0].date.end} </p>
                <p> {json[0].shortDescription} </p>
                <p> {json[0].message} </p>
        </div>
        )
    }
}

export default Events
