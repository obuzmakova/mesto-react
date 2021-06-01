import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    const [avatar, setAvatar] = React.useState('');

    function handleChangeAvatar(e) {
        setAvatar(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: avatar,
        });
    }

    return (
        <PopupWithForm title="Обновить аватар" name="avatar" submitBtn="Сохранить" isOpen={props.isOpen}
                       onClose={props.onClose} onSubmit={handleSubmit}>
            <div className="popup__rows">
                <input type="url" value={avatar} onChange={handleChangeAvatar} placeholder="Ссылка на аватар"
                       className="popup__text popup__text_type_link" id="avatar" required/>
                <span className="popup__text-error avatar-error"></span>
            </div>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;