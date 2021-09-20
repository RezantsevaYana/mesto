// класс, отвечающий за открытие и закрытие попапов

export class Popup {
    constructor (popupSelector) {
        this._popupSelector = popupSelector;
    }
    
    // публичный метод открытия попапа

    openPopup() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown',(evt) => {
            this._handleEscClose(evt)
        });
    }

    // публичный метод закрытия попапа

    closePopup() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown',(evt) => {
            this._handleEscClose(evt)
        });
    }

    // приватный метод закрытия попапа на эскейп

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.closePopup();
        }
    }

    // публичный слушаетель закрытия попапа на крестик и на оверлэй

    setEventListener() {  
        this._popupSelector.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.closePopup();
            }
            if (evt.target.classList.contains('popup__close')) {
                this.closePopup();
            }
        });
    }
}