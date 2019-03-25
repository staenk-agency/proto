import React from 'react';
import './VerticalMenu.scss';


const VerticalMenu = () => {

function handleShowHideMenu(){
  let links = document.getElementsByClassName('verticalMenu-list-second-links')
    for(links of links){
      if(links.style.display === "block"){
        links.style.display = "none"
      } else {
        links.style.display = "block";
      }
  }
}

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
              <li><i className="fas fa-bell"></i>Notifications</li>
              <li><i className="fas fa-ban"></i>Posts non validés</li>
              <li><i className="far fa-clock"></i>En attente de validation</li>
              <li><i className="fas fa-redo-alt"></i>Post reçus par le client</li>
          </ul>
        
        </div>
    </div>
  )
}

export default VerticalMenu;
