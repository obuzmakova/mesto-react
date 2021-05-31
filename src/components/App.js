import React, {useState, useEffect} from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import {CardsContext} from '../contexts/CardsContext'

function App() {
    const [cards, setCards] = useState([]);
    const [isEditProfilePopupOpen, setProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelect] = useState(null);
    const [currentUser, setCurrentUser] = React.useState({});

    function closeAllPopups() {
        setAvatarPopupOpen(false);
        setProfilePopupOpen(false);
        setPlacePopupOpen(false);
        setSelect(null);
    }

    function handleCardClick(card) {
        setSelect(card);
    }

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

    function handleCardDelete(card) {
        const isDeleted = card._id;

        api.deleteCard(card._id)
            .then((deletedCard) => {
                let newCards = cards.filter(function(card) {
                    return card._id !== isDeleted;
                });
                setCards(newCards);
            });
    }

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([info, cards]) => {
                setCurrentUser(info);
                setCards(cards);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])
    return (
        <CurrentUserContext.Provider value={currentUser}>
            <CardsContext.Provider value={cards}>
              <div className="page">
                <Header />

                <div className="content">
                  <Main onCardClick={handleCardClick}
                        onEditAvatar={()=> {
                            setAvatarPopupOpen(true);
                        }}
                        onEditProfile={()=> {
                            setProfilePopupOpen(true);
                        }}
                        onAddPlace={() => {
                            setPlacePopupOpen(true);
                        }}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}/>
                </div>

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

                <ImagePopup image={selectedCard} onClose={closeAllPopups}/>

              </div>
            </CardsContext.Provider>
        </CurrentUserContext.Provider>
  );
}

export default App;
