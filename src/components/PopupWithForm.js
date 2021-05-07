import React from 'react'

function PopupWithForm({title, name, submitBtn, children}) {
    return (
        <div>
            <div className={`popup popup_type_${name}`}>
                <form name={name} className={`form popup__container popup__container_type_${name}`} noValidate>
                    <button type="button" className="popup__close-button"/>
                    <h3 className="popup__title">{title}</h3>
                    <div>{children}</div>
                    <button type="submit" className="popup__submit-btn">{submitBtn}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;