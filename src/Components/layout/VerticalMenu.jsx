import React from 'react';
import './VerticalMenu.scss';

const VerticalMenu = ({displayStatus}) => {
  
  return (
    <div className="verticalMenu-container">
      <div className="verticalMenu-title">
        <h2>MES COMPTES</h2>
        <i className="far fa-user"></i>
      </div>
        <ul className="verticalMenu-main-list">
          <li className="verticalMenu-main-links">
            <i className="fas fa-chevron-down"></i><button className="button-dropDown">Digiforma</button>
          </li>
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
          <li className="verticalMenu-main-links">
            <i className="fas fa-chevron-down"></i><button className="button-dropDown">EuropaCorp</button>
          </li>
            <ul className="verticalMenu-list-second-links">
                <li>
                  <h3>Ouais ouais ouais ouais</h3>
                  <p>@jenesaispasquoidire</p>
                  <i className="fas fa-user-circle"></i>
                  <input type="checkbox"/>
                </li>
              </ul>
          <li className="verticalMenu-main-links">
            <i className="fas fa-chevron-down"></i><button className="button-dropDown">Universal Pictures</button>
          </li>
          <li className="verticalMenu-main-links">
            <i className="fas fa-chevron-down"></i><button className="button-dropDown">Ubisoft</button>
          </li>
        </ul>
        <button className="add-btn"><i className="fas fa-plus"></i>AJOUTER UN COMPTE</button>
        <div className="verticalMenu-list-actions">
          <ul>
              <li onClick={() => displayStatus('all')}>
                <i className="fas fa-mail-bulk"></i>
                <p>
                  Tous les posts
                </p>
              </li>
              <li onClick={() => displayStatus('isValidated')}>
                <i className="fas fa-check"></i>
                <p>
                  Post validés
                </p>
              </li>
              <li onClick={() => displayStatus('isInProcess')}>
                <i className="far fa-clock"></i>
                <p>
                  En attente de validation
                </p>
              </li>
              <li onClick={() => displayStatus('isNotValidated')}>
                <i className="fas fa-ban"></i>
                <p>
                  Posts non validés
                </p>
              </li>
          </ul>
        
        </div>
    </div>
  )
}

export default VerticalMenu;
