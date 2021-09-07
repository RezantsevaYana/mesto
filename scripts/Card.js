
export  class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
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
            this._openPopup();
        });

        this._photoDelete.addEventListener('click', () => {
            this._elementDelete();
        });

        this._photoLike.addEventListener('click', () => {
            this._elementLike();
        });
    };

    
    // приватный метод открытия попапа с изображением

    _openPopup() {
        document.querySelector('.popup_image').classList.add('popup_opened');

        document.querySelector('.popup__image-photo').src = this._link;
        document.querySelector('.popup__image-photo').alt = this._name;
        document.querySelector('.popup__image-title').textContent = this._name;
    };


    // приватный метод удаления карточки

    _elementDelete() {
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
        this._setEventListener();
       

        // добавляем данные в карточку

        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__photo').src = this._link;
        this._element.querySelector('.element__photo').alt = this._name;

        return this._element;
    };
}



