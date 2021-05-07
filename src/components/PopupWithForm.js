import React from 'react'

function PopupWithForm({title, name, submitBtn, isOpen, onClose, children}) {
    return (
        <div>
            <div className={`popup popup_type_${name} ${isOpen ? `popup_opened` : ""}`}>
                <form name={name} className={`form popup__container popup__container_type_${name}`} noValidate>
                    <button type="button" className="popup__close-button" onClick={onClose}/>
                    <h3 className="popup__title">{title}</h3>
                    <div>{children}</div>
                    <button type="submit" className="popup__submit-btn">{submitBtn}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;