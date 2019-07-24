import React from "react";
import "./VerticalMenuBurger.scss";

const VerticalMenu = ({ filterEventsStatus }) => {
  return (
    <div className="verticalMenu-container">
      <div className="verticalMenu-title">
        <h2>MES COMPTES</h2>
        <i className="far fa-user" />
      </div>
      <button className="add-btn">
        <i className="fas fa-plus" />
        AJOUTER UN COMPTE
      </button>
      <div className="verticalMenu-list-actions">
        <ul>
          <li onClick={() => filterEventsStatus("all")}>
            <i className="fas fa-mail-bulk" />
            <p>Tous les posts</p>
          </li>
          <li onClick={() => filterEventsStatus("isValidated")}>
            <i className="fas fa-check" />
            <p>Post validés</p>
          </li>
          <li onClick={() => filterEventsStatus("isInProcess")}>
            <i className="far fa-clock" />
            <p>En attente de validation</p>
          </li>
          <li onClick={() => filterEventsStatus("isNotValidated")}>
            <i className="fas fa-ban" />
            <p>Posts non validés</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VerticalMenu;
