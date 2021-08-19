
 const selectorParameters = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitSelector: '.popup__button',
    inputInvalidSelector: 'popup__input_invalid',
    buttonInvalidSelector: 'popup__button_invalid'
}


// функция, которая добавляет сообщение об ошибке

const showInputError = (formElement, inputElement, errorMessage, inputInactiveClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputInactiveClass);
    errorElement.innerText = errorMessage;
}


// функция, которая скрывает сообщение об ошибке

const hideInputError = (formElement, inputElement, inputInactiveClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputInactiveClass);
    errorElement.innerText = '';
}

// функция проверка валидности, отвечающая за демонстрацию или удаление ошибки

const checkInputValidity = (formElement, inputElement, validationParams) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, validationParams.inputInvalidSelector);
    } else {
        hideInputError(formElement, inputElement, validationParams.inputInvalidSelector);
    }
}

// функция проверки валидности при переборе массива инпутов. Если хотя бы один инпут невалиден - возвращает true

const hasNotValidInput = (inputList) => {
    return inputList.some(input => !input.validity.valid)
}

// функция, отвечающая за активность кнопки

const toggleButtonState = (inputList, buttonElement, buttonInvalidClass) => {
    if (hasNotValidInput(inputList)) {
        buttonElement.classList.add(buttonInvalidClass);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(buttonInvalidClass);
        buttonElement.removeAttribute('disabled');
    }
}

// функция, которая навешивает слушатели на инпуты

const setEventOnInput = (formElement, validationParams) => {
    const inputLists = Array.from(formElement.querySelectorAll(validationParams.inputSelector)); // создаем массив из всех имеющхся инпутов
    const buttonElement = formElement.querySelector(validationParams.submitSelector);

    // обход массива всех инпутов, для каждого инпута выполняются функции

    inputLists.forEach(inputElement => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, validationParams);
            toggleButtonState(inputLists, buttonElement, validationParams.buttonInvalidSelector);
        });
    });
};

// функция, которая навешивает слушатели на форму и отменяет стандартное поведение браузера

const enableValidation = (validationParams) => {
    const formList = Array.from(document.querySelectorAll(validationParams.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
    });

    formList.forEach(formElement => {
        setEventOnInput(formElement, validationParams);
    })


}


enableValidation(selectorParameters);









