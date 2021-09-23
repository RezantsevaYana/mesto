
export class FormValidator {
    constructor(selectorParameters, formElement) {
        this._formSelector = selectorParameters.formSelector,
        this._inputSelector = selectorParameters.inputSelector,
        this._submitSelector = selectorParameters.submitSelector,
        this._inputInvalidSelector = selectorParameters.inputInvalidSelector,
        this._buttonInvalidSelector = selectorParameters.buttonInvalidSelector,
        this._spanInvalidActive = selectorParameters.spanInvalidActive,
        this._formElement = formElement,

        this._inputLists = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitSelector);
    };


    // приватный метод, который добавляет сообщение об ошибке

    _showInputError = (inputElement, errorMessage) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputInvalidSelector);
        errorElement.innerText = errorMessage;
    }

    // приватный метод, который скрывает сообщение об ошибке

    _hideInputError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputInvalidSelector);
        errorElement.innerText = '';
    }

    // приватный метод проверка валидности, отвечающая за демонстрацию или удаление ошибки

    _checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

   

    // приватный метод проверки валидности при переборе массива инпутов. Если хотя бы один инпут невалиден - возвращает true

    _hasNotValidInput () {
        return this._inputLists.some(input => !input.validity.valid);
    }
    

    // приватный метод, отвечающий за активность кнопки

    _toggleButtonState() {
        if (this._hasNotValidInput()) {
            this._buttonElement.classList.add(this._buttonInvalidSelector);
            this._buttonElement.setAttribute('disabled', true);
        } else {
            this._buttonElement.classList.remove(this._buttonInvalidSelector);
            this._buttonElement.removeAttribute('disabled');
        };
    }


    // приватный метод, который навешивает слушатели на инпуты

    _setEventOnInput = () => {
      this._inputLists.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            })

        });
    }

    // метод для очистки ошибок и управления кнопкой при открытии попапов

    resetValidation() {
        this._toggleButtonState();
        this._inputLists.forEach((inputElement) => {
            this._hideInputError(inputElement);
        })
    }


    // публичный метод, который включает валидацию формы

    enablevalidation() {
        this._setEventOnInput();
    }

}



