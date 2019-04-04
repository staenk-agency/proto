import React from 'react'
import {NavLink} from 'react-router-dom'

import './NavBarDashboard.scss'


const handleClick = () => {

} 
const NavBarDashboard = () => {
    return(
        <div className="NavBarDashboard-container">
            <h2>Votre Dashboard</h2>
                <ul>
                    <li className="NavBarDashboard-first-list">Liste</li>
                    <li className="NavBarDashboard">Jour</li>
                    <li className="NavBarDashboard">Semaine</li>
                    {/* <li><NavLink to='/calendarWeekView'>Semaine</NavLink></li> */}
                    <li className="NavBarDashboard-last-list">Mois</li>
                    {/* <li className="NavBarDashboard-last-list"><NavLink to='/calendarMonthView'>Mois</NavLink></li> */}
                </ul>
                    <button>ENVOYER AU CLIENT</button>        
        </div>
    )
}

export default NavBarDashboard;