import React from 'react';
import Card from './Card';
import {CurrentUserContext}from '../contexts/CurrentUserContext';

function Main({cards, onCardClick, onEditAvatar, onEditProfile, onAddPlace, onCardLike, onCardDelete}) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <div>
            <section className="profile">
                <div className="profile__avatar">
                    <img className="profile__image" src={currentUser.avatar} alt="Жак-Ив Кусто"/>
                    <div className="profile__pen" onClick={onEditAvatar}/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{currentUser.name}</h1>
                    <button type="button" onClick={onEditProfile} className="profile__edit-button"/>
                    <p className="profile__subtitle">{currentUser.about}</p>
                </div>
                <button type="button" onClick={onAddPlace} className="profile__add-button"/>
            </section>
            <div className="elements">
                {cards.map((card) => (<Card key={card._id} card={card} onClick={onCardClick} onCardLike={onCardLike}
                                            onCardDelete={onCardDelete}/>))}
            </div>
        </div>
    )
}

export default Main;