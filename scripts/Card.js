
export  class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
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
            this._handleCardClick(this._name, this._link);
        });

        this._photoDelete.addEventListener('click', () => {
            this._elementDelete();
        });

        this._photoLike.addEventListener('click', () => {
            this._elementLike();
        });
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
        this._photo.src = this._link;
        this._photo.alt = this._name;

        return this._element;
    };
}



