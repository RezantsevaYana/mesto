

export class FormValidator {
    constructor(selectorParameters, formElement) {
        this._formSelector = selectorParameters.formSelector,
        this._inputSelector = selectorParameters.inputSelector,
        this._submitSelector = selectorParameters.submitSelector,
        this._inputInvalidSelector = selectorParameters.inputInvalidSelector,
        this._buttonInvalidSelector = selectorParameters.buttonInvalidSelector,

        this._formElement = formElement
    };


    // приватный метод, который добавляет сообщение об ошибке

    _showInputError = (inputElement, errorMessage) => {
        const errorElement = this._formElement.querySelectorAll(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputInvalidSelector);
        errorElement.textContent = errorMessage;
    }

    // приватный метод, который скрывает сообщение об ошибке

    _hideInputError = (inputElement) => {
        const errorElement = this._formElement.querySelectorAll(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputInvalidSelector);
        errorElement.textContentt = '';
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

    _hasNotValidInput (inputList) {
        return inputList.some(input => !input.validity.valid);
    }
    

    // приватный метод, отвечающий за активность кнопки

    _toggleButtonState(inputList, buttonElement) {
        if (this._hasNotValidInput(inputList)) {
            buttonElement.classList.add(this._buttonInvalidSelector);
            buttonElement.setAttribute('disabled', true);
        } else {
            buttonElement.classList.remove(this._buttonInvalidSelector);
            buttonElement.removeAttribute('disabled');
        };
    }

    

    // приватный метод, который навешивает слушатели на инпуты

    _setEventOnInput = () => {
        const inputLists = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelectorAll(this._submitSelector);

        inputLists.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputLists, buttonElement);
            })

        });
    }

    

    // публичный метод, который включает валидацию формы

    enablevalidation() {
        this._setEventOnInput();
    }

  
}



