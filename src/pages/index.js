import './index.css'
// импорты файлов

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { 
        selectorParameters, 
        formElementEditor, mestoElement,
        initialCards,
        nameTitle, 
        nameSubtitle, 
        popupOpenButtonElement, 
        itemOpenButtonElement,
        listCards  } from '../utils/constants.js';



// ФУНКЦИИ
// экземлпяр класса попапа с изображением
const popupImage = new PopupWithImage('.popup_image');
popupImage.setEventListener();

// экземпляр попапа редактированя информации о себе
const popupEdit = new PopupWithForm('.popup_js_editor', submitFormEditProfile);
popupEdit.setEventListener();

// экземпляр попапа добавления новой карточки
const popupCard = new PopupWithForm('.popup_js_item', submitFormAddCard);
popupCard.setEventListener();

// экземпляр класса, овечающего за отображение информации о пользователе
const userInfo = new UserInfo(nameTitle, nameSubtitle);

// создание коллекции карточек

const renderCardElements = new Section({items:initialCards, renderer: renderCard}, listCards);

renderCardElements.renderItems();

// ФУНКЦИИ-ОБРАБОТЧИКИ ОТПРАВКИ ДАННЫХ ДЛЯ ФОРМ (ФУНКЦИИ КОЛБЭКИ В ЭКЗЕМПЛЯРЫ КЛАССА)

// обработчик отправки данных формы редактирования информации о себе (изменение информации о себе на странице)
function submitFormEditProfile() {
    userInfo.setUserInfo(popupEdit.getInputValues());
    popupEdit.closePopup();
};

// обработчик отправки данных формы добавления карточки (при нажатии на кнопку создается карточка)
function submitFormAddCard() {
    
    // собрали значение всех инпутов с формы в массив
    const newCard = popupCard.getInputValues();

    // по новому массиву создали экземлпяр карточки

    const newCardElement = renderCard(newCard);

    // добавляем новую карточку в разметку
    
    renderCardElements.addItem(newCardElement);
    
    popupCard.closePopup();
};

// функция получения разметки новой карточки
function renderCard(item) {
    const card = new Card(item, '.element-template', handleCardClick);
    const cardElement = card.generateCard();
    return cardElement;
};


// открытие попапа с формой редактирования информации в профиле
const openPopupAdd = function () {
    popupEdit.openPopup();
    popupEdit.setInputValues(userInfo.getUserInfo());
    formEditorValidation.resetValidation();
}

// открытие формы создания карточки
const openItem = function () {
    popupCard.openPopup();

    // управление кнопкой 
    
    formMestoValidation.resetValidation();
};


// СЛУШАТЕЛИ
// слушатель открытия попапа редактирования профиля
popupOpenButtonElement.addEventListener('click', openPopupAdd);

// слушатель открытия попапа с формой добавления карточки
itemOpenButtonElement.addEventListener('click', openItem);


// функция, которая получает на вход данные карточки и открывает попап с изображением

export default function handleCardClick(name, link) {
    popupImage.openPopup(name, link);
};


// ВАЛИДАЦИЯ

// валидация формы редактирования информации в профиле

const formEditorValidation = new FormValidator(selectorParameters, formElementEditor);
formEditorValidation.enablevalidation();


// валидация формы добавления карточек
const formMestoValidation = new FormValidator(selectorParameters, mestoElement);
formMestoValidation.enablevalidation();





















