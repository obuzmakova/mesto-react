import React from 'react';

function ImagePopup() {
    return (
        <div className="popup popup_type_img">
            <div className="popup__container">
                <button type="button" className="popup__close-button"></button>
                <img className="popup__image" src="#" alt="#"/>
                <h3 className="popup__name-place"></h3>
            </div>
        </div>
    )
}

export default ImagePopup;