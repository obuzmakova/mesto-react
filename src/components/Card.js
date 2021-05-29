import React from 'react';
import {CurrentUserContext}from '../contexts/CurrentUserContext';

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = props.card.owner._id === currentUser._id;

    const cardDeleteButtonClassName = (
        `element__trash ${!isOwn ? 'element__trash_hidden' : 'element__trash'}`
    );

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = `...`;

    function handleClick() {
        props.onClick(props.card);
    }

    return (
        <div className="element">
            <img className="element__photo" src={props.card.link} onClick={handleClick} alt="{name}"/>
            <h3 className="element__title">{props.card.name}</h3>
            <button type="button" className={cardDeleteButtonClassName}/>
            <button type="button" className="element__like"/>
            <p className="element__counter">{props.card.likes.length}</p>
        </div>
    )
}

export default Card;