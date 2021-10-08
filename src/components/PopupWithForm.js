// класс, отвечающий за работу попапа с формами

import { Popup } from "./Popup.js";


export class PopupWithForm extends Popup {
    constructor (popupSelector, sumbitForm) {
        super(popupSelector);
        this._sumbitForm = sumbitForm;
        this._form = this._popup.querySelector('.popup__form');
        this._inputLists = this._form.querySelectorAll('.popup__input');
        this._submit = this._form.querySelector(".popup__button");
        this._submitText = this._submit.textContent;
    }

    // приватный метод собирает данные всех полей формы 
    getInputValues () {
        // создали пустой массив, куда будут добавляться значения всех инпутов, прошлись по массиву инпутов и собрали все значение
        this._inputValues = {};
        this._inputLists.forEach(input => {
            this._inputValues[input.name] = input.value;
        });
        // вернули массив значений всех инпутов
        return this._inputValues;
    }


    // метод, который подставляет в инпуты значения со страницы

    setInputValues(values) {
        this._inputLists.forEach(input => {
            input.value = values[input.name];
        })
    }

    // публичный метод, который не только закрывает попапы, но и при отправке формы выполняет действие
    // для формы с редактированием профиля - изменяет информацию на странице
    // для формы с добавлением карточки - при нажатии на кнопку - создаем карточку

    setEventListener() {
        super.setEventListener();
        this._form.addEventListener('submit', (evt) => {
             evt.preventDefault();
            this._sumbitForm();
        }); 
    }

    closePopup() {
        this._form.reset();
        super.closePopup();
    }

    // текст когда ожидания от сервера нет
    buttonText() {
        this._submit.textContent = this._submitText;
    }

    // изменение текста при ожидании
    waitingText() {
        this._submit.textContent = 'Сохранение...';
    }
}