
// функция, которая добавляет сообщение об ошибке

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input_invalid');
    errorElement.innerText = errorMessage;
}


// функция, которая скрывает сообщение об ошибке

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_invalid');
    errorElement.innerText = '';
}

// функция проверка валидности, отвечающая за демонстрацию или удаление ошибки

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
}

// функция проверки валидности при переборе массива инпутов. Если хотя бы один инпут невалиден - возвращает true

const hasNotValidInput = (inputList) => {
    return inputList.some(input => !input.validity.valid)
}

// функция, отвечающая за активность кнопки

const toggleButtonState = (inputList, buttonElement) => {
    if (hasNotValidInput(inputList)) {
        buttonElement.classList.add("popup__button_invalid");
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove("popup__button_invalid");
        buttonElement.removeAttribute('disabled');
    }
}

// функция, которая навешивает слушатели на инпуты

const setEventOnInput = (formElement, inputSelector, submitSelector) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector)); // создаем массив из всех имеющхся инпутов
    const buttonElement = formElement.querySelector(submitSelector);

    // обход массива всех инпутов, для каждого инпута выполняются функции

    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

// функция, которая навешивает слушатели на форму и отменяет стандартное поведение браузера

const enableValidation = ({ formSelector, inputSelector, submitSelector }) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
    });

    formList.forEach(formElement => {
        setEventOnInput(formElement, inputSelector, submitSelector);
    })


}


enableValidation(
    {
        formSelector: '.popup__form',
        inputSelector: '.popup__input',
        submitSelector: '.popup__button',
    });







