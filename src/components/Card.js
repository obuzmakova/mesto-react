import React from 'react';

function Card(props) {

    function handleClick() {
        props.onClick(props.card);
    }

    return (
        <div className="element">
            <img className="element__photo" src={props.card.link} onClick={handleClick} alt="{name}"/>
            <h3 className="element__title">{props.card.name}</h3>
            <button type="button" className="element__like"/>
            <p className="element__counter">{props.card.likes.length}</p>
        </div>
    )
}

export default Card;