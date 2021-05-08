import React from 'react';

function ImagePopup({card, onClose}) {
    return (
        <div className={`popup popup_type_img ${card ? `popup_opened` : ""}`}>
            <div className="popup__container">
                <button type="button" className="popup__close-button" onClick={onClose}/>
                <img className="popup__image" src={card.link} alt={card.name}/>
                <h3 className="popup__name-place">{card.name}</h3>
            </div>
        </div>
    )
}

export default ImagePopup;