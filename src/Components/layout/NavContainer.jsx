import React from 'react'
import HorizontalNavbar from './HorizontalNavBar'
import VerticalMenu from './VerticalMenu'

const NavContainer = () => {
    return(
        <div className="NavContainer-container">
            <div className="horizontalNavBar-app-container">
                <HorizontalNavbar />
            </div>
            <div className="verticalMenu-app-container">
                <VerticalMenu />        
            </div>
        </div>
    )
}
export default NavContainer