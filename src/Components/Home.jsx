import React from 'react'
import Dashboard from './dashboard/Dashboard';
import HorizontalNavbar from './layout/HorizontalNavBar';
import VerticalMenu from './layout/VerticalMenu';

import './Home.scss'

const Home = () => {
    return (
        <div className="home-container">
            <div className="horizontalNavBar-app-container">
                <HorizontalNavbar />
            </div>
            <div className="verticalMenu-app-container">
                <VerticalMenu />        
            </div>
            <div className="dahsboard-app-container">
                <Dashboard />      
            </div>
        </div>
    )
}
export default Home