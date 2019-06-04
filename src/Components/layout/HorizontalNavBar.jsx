import React from 'react';
import './HorizontalNavBar.scss';

const HorizontalNavBar = () => {
        return (
            <div className="horizontalNavBar-container">
                <div className="horizontalNavBar-elements">
                    <h2>CheckMyPost</h2>
                    <div className="horizontalNavBar-elements-tweet">
                        <input className="input input-tweet" type="text" placeholder="Ceci est mon premier tweet !"/>
                        <ul className="horizontalNavBar-elements-list">
                            <li><i className="fas fa-paperclip"></i></li>
                            <li><i className="far fa-calendar-alt"></i></li>
                            <li><i className="fas fa-map-marker-alt"></i></li>
                            <li><i className="fas fa-shopping-bag"></i></li>
                        </ul>
                    </div>
                    <div className="horizontalNavBar-elements-profile">
                        <i className="fas fa-user-circle profile"></i>
                        <button className="profile">MON COMPTE</button>
                    </div>
                </div>
            </div>
        )
}

export default HorizontalNavBar
