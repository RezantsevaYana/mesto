// класс, отвечающий за открытие и закрытие попапов

export class Popup {
    constructor (popupSelector) {
      //  this._popupSelector = popupSelector;
      this._popup = document.querySelector(popupSelector);
      this._handleEscClose = this._handleEscClose.bind(this);
    }
    
    // публичный метод открытия попапа

    openPopup() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    // публичный метод закрытия попапа

    closePopup() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    // приватный метод закрытия попапа на эскейп

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.closePopup();
        }
    }

    // публичный слушаетель закрытия попапа на крестик и на оверлэй

    setEventListener() { 
        this._popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.closePopup();
            }
            if (evt.target.classList.contains('popup__close')) {
                this.closePopup();
            }
        });
    }
}