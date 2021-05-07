import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';

function App() {
  return (
      <div className="page">
        <Header />

        <Main
            handleEditAvatarClick={()=> {
                document.querySelector('.popup_type_avatar').classList.add('popup_opened');
            }}
            handleEditProfileClick={()=> {
                document.querySelector('.popup_type_profile').classList.add('popup_opened');
            }}
            handleAddPlaceClick={() => {
                document.querySelector('.popup_type_card').classList.add('popup_opened');
            }}
        />

        <Footer />

        <PopupWithForm title="Обновить аватар" name="avatar" submitBtn="Сохранить">
            <div className="popup__rows">
                <input type="url" placeholder="Ссылка на аватар" className="popup__text popup__text_type_link"
                       id="avatar" required/>
                <span className="popup__text-error avatar-error"></span>
            </div>
        </PopupWithForm>
        <PopupWithForm title="Редактировать профиль" name="profile" submitBtn="Сохранить">
            <div className="popup__rows">
                <input type="text" placeholder="Имя" className="popup__text popup__text_type_name"
                       id="title" minLength="2" maxLength="40" required/>
                <span className="popup__text-error title-error"></span>
                <input type="text" placeholder="Вид деятельности" className="popup__text popup__text_type_occupation"
                       id="occupation" minLength="2" maxLength="200" required/>
                <span className="popup__text-error occupation-error"></span>
            </div>
        </PopupWithForm>
        <PopupWithForm title="Новое место" name="card" submitBtn="Сохранить">
            <div className="popup__rows">
                <input type="text" placeholder="Название" className="popup__text popup__text_type_place"
                       id="name" minLength="2" maxLength="30" required/>
                <span className="popup__text-error name-error"></span>
                <input type="url" placeholder="Ссылка на картинку" className="popup__text popup__text_type_link"
                       id="link" required/>
                <span className="popup__text-error link-error"></span>
            </div>
        </PopupWithForm>
        <PopupWithForm title="Вы уверены?" name="question" submitBtn="Да"> </PopupWithForm>

        <div className="popup popup_type_img">
          <div className="popup__container">
            <button type="button" className="popup__close-button"></button>
            <img className="popup__image" src="#" alt="#"/>
              <h3 className="popup__name-place"></h3>
          </div>
        </div>

      </div>
  );
}

export default App;
