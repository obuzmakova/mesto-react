

function App() {
  return (
      <div className="page">
        <header className="header">
          <img className="header__logo" src="<%=require('./images/header-logo.svg')%>"
               alt="Название ресурса Место. Россия"/>
        </header>

        <main className="content">
          <section className="profile">
            <div className="profile__avatar">
              <img className="profile__image" src="<%=require('./images/profile-avatar.jpg')%>" alt="Жак-Ив Кусто"/>
                <div className="profile__pen"></div>
            </div>
            <div className="profile__info">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button type="button" className="profile__edit-button"></button>
              <p className="profile__subtitle">Исследователь океана</p>
            </div>
            <button type="button" className="profile__add-button"></button>
          </section>

          <section className="elements">

          </section>
        </main>

        <footer className="footer">
          <p className="footer__copyright">© 2021 Mesto Russia</p>
        </footer>

        <div className="popup popup_type_avatar">
          <form name="card" className="form popup__container popup__container_type_avatar" noValidate>
            <button type="button" className="popup__close-button"></button>
            <h3 className="popup__title">Обновить аватар</h3>
            <div className="popup__rows">
              <input type="url" placeholder="Ссылка на аватар" className="popup__text popup__text_type_link"
                     id="avatar" required/>
                <span className="popup__text-error avatar-error"></span>
            </div>
            <button type="submit" className="popup__submit-btn">Сохранить</button>
          </form>
        </div>

        <div className="popup popup_type_profile">
          <form name="profile" className="form popup__container popup__container_type_profile" noValidate>
            <button type="button" className="popup__close-button"></button>
            <h3 className="popup__title">Редактировать профиль</h3>
            <div className="popup__rows">
              <input type="text" placeholder="Имя" className="popup__text popup__text_type_name"
                     id="title" minLength="2" maxLength="40" required/>
                <span className="popup__text-error title-error"></span>
                <input type="text" placeholder="Вид деятельности" className="popup__text popup__text_type_occupation"
                       id="occupation" minLength="2" maxLength="200" required/>
                  <span className="popup__text-error occupation-error"></span>
            </div>
            <button type="submit" className="popup__submit-btn">Сохранить</button>
          </form>
        </div>

        <div className="popup popup_type_card">
          <form name="card" className="form popup__container popup__container_type_card" noValidate>
            <button type="button" className="popup__close-button"></button>
            <h3 className="popup__title">Новое место</h3>
            <div className="popup__rows">
              <input type="text" placeholder="Название" className="popup__text popup__text_type_place"
                     id="name" minLength="2" maxLength="30" required/>
                <span className="popup__text-error name-error"></span>
                <input type="url" placeholder="Ссылка на картинку" className="popup__text popup__text_type_link"
                       id="link" required/>
                  <span className="popup__text-error link-error"></span>
            </div>
            <button type="submit" className="popup__submit-btn">Сохранить</button>
          </form>
        </div>

        <div className="popup popup_type_img">
          <div className="popup__container">
            <button type="button" className="popup__close-button"></button>
            <img className="popup__image" src="#" alt="#"/>
              <h3 className="popup__name-place"></h3>
          </div>
        </div>

        <div className="popup popup_type_question">
          <form name="question" className="form popup__container popup__container_type_question" noValidate>
            <button type="button" className="popup__close-button"></button>
            <h3 className="popup__title popup__title_type_question">Вы уверены?</h3>
            <button type="submit" className="popup__submit-btn popup__submit-btn_type_question">Да</button>
          </form>
        </div>

      </div>
  );
}

export default App;
