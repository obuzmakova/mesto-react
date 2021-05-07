import React from 'react'

function Main({handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick}) {
    return (
        <div className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <img className="profile__image" src="<%=require('./images/profile-avatar.jpg')%>" alt="Жак-Ив Кусто"/>
                    <div className="profile__pen" onClick={handleEditAvatarClick}/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">Жак-Ив Кусто</h1>
                    <button type="button" onClick={handleEditProfileClick} className="profile__edit-button"/>
                    <p className="profile__subtitle">Исследователь океана</p>
                </div>
                <button type="button" onClick={handleAddPlaceClick} className="profile__add-button"/>
            </section>

            <section className="elements">

            </section>
        </div>
    )
}

export default Main;