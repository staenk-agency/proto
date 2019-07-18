import React from 'react';
import './HorizontalNavBar.scss';
import logo from '../../Pictures/Logo hor@2x.png'

const HorizontalNavBar = () => {
        return (
            <div className="horizontalNavBar-container">
                <div className="horizontalNavBar-elements">
                    <img src={logo} alt="Logo Check My Post"/>
                </div>
            </div>
        )
}

export default HorizontalNavBar
