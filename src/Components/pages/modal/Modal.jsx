import React from 'react'
import './Modal.scss'

const Modal = ({eventSelected, commentPost, modalOpened, toggleModal, comment, handleSubmit, handleChange, toggleCommentInput, commentInput}) => {
    return (
        modalOpened &&
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <i className="fas fa-times close" onClick={() => toggleModal()}></i>
                </div>
                <div className="modal-body">
                    {
                        eventSelected && 
                        <>
                        <div className="body-text">
                            <div>
                            <h2>{eventSelected.title} </h2>
                            <h3>{eventSelected.date.mDate.format("DD/MM/YY kk:mm")}</h3>
                            <p>{eventSelected.shortDescription}</p>
                            <p>{eventSelected.message}</p>
                            {
                                eventSelected.comment &&
                                <>
                                    <p className="comment-display">Commentaire : {eventSelected.comment}</p>
                                </>
        
                            }
                            </div>
                        </div>
                        <div className="body-picture">
                            <img className="img-body-picture" src={eventSelected.account.picture} alt={eventSelected.account.name} />
                        </div>
                        </>
                    }
                </div>
                <div className="modal-footer">
                    {
                        eventSelected && 
                        <div className="modal-footer-buttons">
                            <button onClick={() => toggleCommentInput()}>Commenter</button>
                            <button onClick={() => commentPost(eventSelected, 'isInProcess')}>Mettre en attente</button>
                            <button onClick={() => commentPost(eventSelected, 'isValidated')}>Valider</button>
                        </div>
                    }
                    {
                        commentInput &&
                        <form onSubmit={(e) => handleSubmit(e, eventSelected)}>
                            <label>
                                <p>Commentaire :</p>
                                <textarea 
                                    value={comment} 
                                    onChange={handleChange} 
                                    placeholder="Ajouter un commentaire"
                                />
                            </label>
                            <button type="submit">Envoyer</button>
                        </form>
                    }
                </div>
            </div>
        </div>
    )
}
export default Modal

