import React from 'react';

function Card(props) {
    console.log(props);
    return (
        <div className="element">
            <img className="element__photo" src="#" alt="#"/>
            <h3 className="element__title"/>
            <button type="button" className="element__trash"/>
            <button type="button" className="element__like"/>
            <p className="element__counter">0</p>
        </div>
    )
}

export default Card;