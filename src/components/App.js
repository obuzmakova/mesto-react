import React, {useState} from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditProfilePopupOpen, setProfile] = useState(false)
    const [isAddPlacePopupOpen, setPlace] = useState(false);
    const [isEditAvatarPopupOpen, setAvatar] = useState(false);

    function closeAllPopups() {
        setAvatar(false);
        setProfile(false);
        setPlace(false);
    }

  return (
      <div className="page">
        <Header />

        <Main
            onEditAvatar={()=> {
                setAvatar(true);
            }}
            onEditProfile={()=> {
                setProfile(true);
            }}
            onAddPlace={() => {
                setPlace(true);
            }}
        />

        <Footer />

        <PopupWithForm title="Обновить аватар" name="avatar" submitBtn="Сохранить" isOpen={isEditAvatarPopupOpen}
                       onClose={closeAllPopups}>
            <div className="popup__rows">
                <input type="url" placeholder="Ссылка на аватар" className="popup__text popup__text_type_link"
                       id="avatar" required/>
                <span className="popup__text-error avatar-error"></span>
            </div>
        </PopupWithForm>
        <PopupWithForm title="Редактировать профиль" name="profile" submitBtn="Сохранить"
                       isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
            <div className="popup__rows">
                <input type="text" placeholder="Имя" className="popup__text popup__text_type_name"
                       id="title" minLength="2" maxLength="40" required/>
                <span className="popup__text-error title-error"></span>
                <input type="text" placeholder="Вид деятельности" className="popup__text popup__text_type_occupation"
                       id="occupation" minLength="2" maxLength="200" required/>
                <span className="popup__text-error occupation-error"></span>
            </div>
        </PopupWithForm>
        <PopupWithForm title="Новое место" name="card" submitBtn="Сохранить" isOpen={isAddPlacePopupOpen}
                       onClose={closeAllPopups}>
            <div className="popup__rows">
                <input type="text" placeholder="Название" className="popup__text popup__text_type_place"
                       id="name" minLength="2" maxLength="30" required/>
                <span className="popup__text-error name-error"></span>
                <input type="url" placeholder="Ссылка на картинку" className="popup__text popup__text_type_link"
                       id="link" required/>
                <span className="popup__text-error link-error"></span>
            </div>
        </PopupWithForm>
        <PopupWithForm title="Вы уверены?" name="question" submitBtn="Да" onClose={closeAllPopups}> </PopupWithForm>

        <ImagePopup />

      </div>
  );
}

export default App;
