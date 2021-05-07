import React from 'react'

function Main({userName, userDescription, userAvatar, onEditAvatar, onEditProfile, onAddPlace}) {
    return (
        <div className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <img className="profile__image" src={userAvatar} alt="Жак-Ив Кусто"/>
                    <div className="profile__pen" onClick={onEditAvatar}/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <button type="button" onClick={onEditProfile} className="profile__edit-button"/>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button type="button" onClick={onAddPlace} className="profile__add-button"/>
            </section>

            <section className="elements">

            </section>
        </div>
    )
}

export default Main;