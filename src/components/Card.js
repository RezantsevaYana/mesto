//import handleCardClick from "../pages/index.js";

export class Card {
    constructor(data, cardSelector, userId, {handleCardClick, handleCardLike, handleCardDelete}) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes
        this._cardSelector = cardSelector;

        this._handleCardClick = handleCardClick; // фукнция которая открывает попап с изображением
        this._handleCardDelete = handleCardDelete; // функция должна удалять изображение
        this._handleCardLike = handleCardLike; // функция отвечающая за лайки


        this._id = data._id; //айди карточки
        this._ownerId = data.owner._id; // айди создателя карточки
        this._userId = userId; // айди пользователя
    }

    // функция отвечающая за активность лайка и изменения количества лайков, на вход принимает массив
    updateLikes(data) {
     //   const photoLike = this._element.querySelector('.element__button'); // кнопка лайка
      //  const likesCounter = this._element.querySelector('.element__counter'); // счетик лайков

       // возвращает тру если среди лайкoв есть лайк пользователя
        this._isLiked = data.likes.find(data => this._userId === data._id);

        if (this._isLiked) {
            this._photoLike.classList.add('element__button_active');
            this._likesCounter.textContent = data.likes.length;
        }
        else {
            this._photoLike.classList.remove('element__button_active');
            this._likesCounter.textContent = data.likes.length;
        }
    //    console.log(data.likes)
    }

    // метод возвращающий тру, если пользователь уже поставил лайк карточке
    isLiked() {
        return this._isLiked
    }

    // метод отвечающий за отображения кнопки удаления на карточке
    // если айди пользователя и айди создателя карточки не совпадают, то кнопка дизэйблится
    _elementShowDelete() {
        if (!(this._ownerId === this._userId)) { 
            this._element.querySelector('.element__delete').classList.add('element__delete_disabled');
        }
    }


    // приватный метод, возвращающий разметку карточки

    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);

        return cardElement;
    }
    

    
    // приватный метод обработчик событий
    _setEventListener() {
        this._photo.addEventListener('click', () => {
            this._handleCardClick();
        });
        
    
        this._photoDelete.addEventListener('click', () => {
            this._handleCardDelete();
        });

        
        this._photoLike.addEventListener('click', () => {
            this._handleCardLike();
        });

    };


    // метод удаления карточки

    elementDelete() {
        this._element.remove();
    }
    

    // приватный метод лайка карточки

    _elementLike() {
        this._photoLike.classList.toggle('element__button_active');
    }

   

    
    // публичный метод, добавляющий карточки в разметку

    generateCard() {
        this._element = this._getTemplate();  // записываем готовую разметку карточки в поле, поле приватное
        this._photo = this._element.querySelector('.element__photo'); 
        this._closePhoto = document.querySelector('.popup__close_js_image');
        this._photoDelete = this._element.querySelector('.element__delete');
        this._photoLike = this._element.querySelector('.element__button');
        this._likesCounter = this._element.querySelector('.element__counter'); // счетик лайков

        this._setEventListener();
        this._elementShowDelete();
   
        // добавляем данные в карточку

        this._element.querySelector('.element__title').textContent = this._name;
        this._photo.src = this._link;
        this._photo.alt = this._name;

        return this._element;
    };
}



