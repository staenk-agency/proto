import React from 'react'

import './NavBarDashboard.scss'

const NavBarDashboard = () => {
    return(
        <div className="NavBarDashboard-container">
            <h2>Votre Dashboard</h2>
                <ul>
                    <li className="NavBarDashboard-first-list">Liste</li>
                    <li className="NavBarDashboard">Jour</li>
                    <li className="NavBarDashboard">Semaine</li>
                    <li className="NavBarDashboard-last-list">Mois</li>
                </ul>
                    <button>ENVOYER AU CLIENT</button>        
        </div>
    )
}

export default NavBarDashboard;