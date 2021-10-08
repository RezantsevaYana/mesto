// класс, отвечающий за потверждение удаления


import { Popup } from "./Popup.js";


export class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector),
        this._form = this._popup.querySelector('.popup__form');
    }


    // публичный метод, который при отправке формы удаляет карточку

    setEventListener() {
        super.setEventListener();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._sumbitForm();
        }); 
    }

    submitForm(submitCalback) {
        this._sumbitForm = submitCalback;
    }

}