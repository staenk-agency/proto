import React from 'react';
import './VerticalMenu.scss';

const VerticalMenu = () => {
    return (
      <div className="verticalMenu-container">
        <div className="verticalMenu-title">
          <h2>MES COMPTES</h2>
          <i className="far fa-user profile"></i>
        </div>
          <ul className="verticalMenu-main-list">
            <li className="verticalMenu-main-links">Digiforma</li>
              <ul className="verticalMenu-list-second-links">
                <li>
                  <h3>Digiforma SA</h3>
                  <p>@jenesaispasquoidire</p>
                  <i className="fas fa-user-circle"></i>
                  <input type="checkbox"/>
                </li>
                <li>
                  <h3>Digiforma Pro</h3>
                  <p>@digiforma</p>
                  <i className="fas fa-user-circle"></i>
                  <input type="checkbox"/>
                </li>
                <li>
                  <h3>Digiforma SA</h3>
                  <p>@loremloremlorem</p>
                  <i className="fas fa-user-circle"></i>
                  <input type="checkbox"/>
                </li>
              </ul>
            <li className="verticalMenu-main-links">EuropaCorp</li>
            <li className="verticalMenu-main-links">Universal Pictures</li>
            <li className="verticalMenu-main-links">Ubisoft</li>
          </ul>
          <button>AJOUTER UN COMPTE</button>
          <div className="verticalMenu-list-actions">
            <ul>
                <li><i class="fas fa-bell"></i>Notifications</li>
                <li><i class="fas fa-ban"></i>Posts non validés</li>
                <li><i class="far fa-clock"></i>En attente de validation</li>
                <li><i class="fas fa-redo-alt"></i>Post reçus par le client</li>
            </ul>
          
          </div>
      </div>
    )
}

export default VerticalMenu;
