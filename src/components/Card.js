import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props);
    }

    return (
        <div className="element">
            <img className="element__photo" src={props.link} onClick={handleClick} alt="{props.name}"/>
            <h3 className="element__title">{props.name}</h3>
            <button type="button" className="element__like"/>
            <p className="element__counter">{props.likes.length}</p>
        </div>
    )
}

export default Card;