import React from 'react'
import './Modal.scss'

const Modal = ({eventSelected, commentPost, modalOpened, closeModal}) => {
    return (
        modalOpened &&
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <i className="fas fa-times close" onClick={() => closeModal()}></i>
                    {
                        eventSelected &&
                        <>
                            <h2>{eventSelected.title} </h2>
                            <h3>{eventSelected.date.mDate.format("DD/MM/YY kk:mm")}</h3>
                        </>
                    }
                </div>
                <div className="modal-body">
                    {
                        eventSelected && 
                        <>
                            <p>{eventSelected.shortDescription}</p>
                            <p>{eventSelected.message}</p>
                            <img className="modal-body-picture" src={eventSelected.account.picture} alt={eventSelected.account.name} />
                        </>
                    }
                </div>
                <div className="modal-footer">
                    {
                        eventSelected && 
                        <div className="modal-footer-buttons">
                            <button onClick={() => commentPost(eventSelected, 'isNotValidated')}>Commenter</button>
                            <button onClick={() => commentPost(eventSelected, 'isInProcess')}>Mettre en attente</button>
                            <button onClick={() => commentPost(eventSelected, 'isValidated')}>Valider</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default Modal