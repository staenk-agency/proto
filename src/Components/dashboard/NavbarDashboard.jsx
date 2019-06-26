import React from 'react'
import './NavBarDashboard.scss'

const NavBarDashboard = ({onChangeCalendarType}) => {
    return(
        <div className="NavBarDashboard-container">
            <h2>Votre Dashboard</h2>
            <ul>
                <li className="NavBarDashboard first-list dayLink" onClick={() => onChangeCalendarType('day')}>Jour</li>
                <li className="NavBarDashboard weekLink" onClick={() => onChangeCalendarType('week')}>Semaine</li>
                <li className="NavBarDashboard last-list monthLink" onClick={() => onChangeCalendarType('month')}>Mois</li>
            </ul>
        </div>
    )
}

export default NavBarDashboard;