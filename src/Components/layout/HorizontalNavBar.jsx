import React from 'react';
import './HorizontalNavBar.scss';

const HorizontalNavBar = () => {
        return (
            <div className="horizontalNavBar-container">
                <div className="horizontalNavBar-elements">
                    <h2>CheckMyPost</h2>
                    <div className="horizontalNavBar-elements-profile">
                        <i className="fas fa-user-circle profile"></i>
                        <button className="profile">MON COMPTE</button>
                    </div>
                </div>
            </div>
        )
}

export default HorizontalNavBar
