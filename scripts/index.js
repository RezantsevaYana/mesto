
// импорты файлов

import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';


// ОБЪЯВЛЕНИЯ ПЕРЕМЕННЫХ
const popups = document.querySelectorAll('.popup');

// формы

const formAddCard = document.forms.mesto;
const formUser = document.forms.profile;

// попап редактирования профиля

const popupElement = document.querySelector('.popup_js_editor');
const formElementEditor = popupElement.querySelector('.popup__form_js_editor');
const nameInput = popupElement.querySelector('.popup__input_info_name');
const jobInput = popupElement.querySelector('.popup__input_info_job');

// информация о пользователе на странице

const popupCloseButtonElement = popupElement.querySelector('.popup__close_js_editor');
const popupOpenButtonElement = document.querySelector('.profile__button');
const nameTitle = document.querySelector('.profile__title');
const nameSubtitle = document.querySelector('.profile__subtitle');

// попап с изображением

const imagePopupPhoto = document.querySelector('.popup__image-photo');
const imagePopupTitle = document.querySelector('.popup__image-title');
const imagePopup = document.querySelector('.popup_image');

// попап с формой создания карточек

const itemElement = document.querySelector('.popup_js_item');
//const itemCloseButtonElement = itemElement.querySelector('.popup__close_js_item');
const itemOpenButtonElement = document.querySelector('.profile__addbutton');
const mestoElement = itemElement.querySelector('.popup__form_js_item');
const mestoInfoTitle = itemElement.querySelector('.popup__input_info_title');
const mestoInfoLink = itemElement.querySelector('.popup__input_info_link');
const formAddCards = itemElement.querySelector('.popup__form_js_item');

// масив с карточками

const listElements = document.querySelector('.elements');
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];


// селекторы для валидации форм

const selectorParameters = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitSelector: '.popup__button',
    inputInvalidSelector: 'popup__input_invalid',
    buttonInvalidSelector: 'popup__button_invalid'
}

// ФУНКЦИИ

// функция добавления элемента в контейнер

function addElement(item) {
    const card = new Card(item, '.element-template');

    // создаем карточку

    const cardElement = card.generateCard();

    // добавляем карточку в разметку

    listElements.prepend(cardElement);
};

// заполнение страницы массивом

initialCards.forEach((item) => {
    addElement(item);
});


// функция открытия попапа

function openPopup(popup) {
    popup.classList.add('popup_opened');
   document.addEventListener('keydown', closePopupOnEsc);
}

// функция закрытия попапа

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupOnEsc);
}


// функция закрытия попапа на esc

function closePopupOnEsc(evt) {
    
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    }
};

// открытие попапа с формой редактирования информации в профиле

const inputListsSaveInfo = Array.from(formUser.querySelectorAll('.popup__input'));

const openPopupAdd = function () {

    openPopup(popupElement)

    nameInput.value = nameTitle.textContent;
    jobInput.value = nameSubtitle.textContent;
}

//закрытие попапа с формой редактирования информации в профиле


const closePopupRemove = function () {
    closePopup(popupElement)
}

// функция, которая заполняет поля формы, также, как заполнено на странице

function formSubmitHandler(evt) {
    evt.preventDefault();

    nameTitle.textContent = nameInput.value;
    nameSubtitle.textContent = jobInput.value;

    closePopupRemove();
}


// открытие формы создания карточки
const openItem = function () {
    openPopup(itemElement);
    
    const popupButtonElementSaveCard = document.querySelector('.popup__button_save');

    popupButtonElementSaveCard.classList.add('popup__button_invalid');
    popupButtonElementSaveCard.setAttribute('disabled', true);
}

// закрытие формы создания карточки
const closeItem = function () {
    closePopup(itemElement);
}


// добавление новой карточки

formAddCard.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const  element = {
        name: document.querySelector('.popup__input_info_title').value,
        link: document.querySelector('.popup__input_info_link').value
    }
   
    addElement(element);
    

    evt.target.reset();
    
    closeItem();
});

// функция закрытия всех попапов

function closePopupOnOverlay() {
    const popups = document.querySelectorAll('.popup');

    popups.forEach(popup => {
        popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                closePopup(popup)
            }
            if (evt.target.classList.contains('popup__close')) {
               closePopup(popup)
            }
        });
    });
};

closePopupOnOverlay();


// СЛУШАТЕЛИ
// слушатель открытия попапа редактирования профиля
popupOpenButtonElement.addEventListener('click', openPopupAdd);

// слушатель, который вызывает функцию заполнения формы редактирования профиля информацией со страницы
formElementEditor.addEventListener('submit', formSubmitHandler);

// слушатель открытия попапа с формой добавления карточки
itemOpenButtonElement.addEventListener('click', openItem);

// валидация

// валидация формы редактирования информации в профиле

const formEditorValidation = new FormValidator(selectorParameters, formElementEditor);
formEditorValidation.enablevalidation();


// валидация формы добавления карточек
const formMestoValidation = new FormValidator(selectorParameters, mestoElement);
formMestoValidation.enablevalidation();













