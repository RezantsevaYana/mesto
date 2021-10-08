import './index.css'
// импорты файлов

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Popup  } from '../components/Popup.js';
import UserInfo from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { 
        selectorParameters, 
        formElementEditor, mestoElement,
        nameTitle, 
        nameSubtitle, 
        popupOpenButtonElement, 
        itemOpenButtonElement,
        listCards,  
        jobInput,
        nameInput,
        userAvatar,
        avatarEditInput,
        avatarEditButton,
        avatarElement
     } from '../utils/constants.js';
import Api from '../components/Api.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';

// КЛАСС API

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-28',
    headers: {
        authorization: '55468280-6bda-4917-a0aa-0d599bf33abe',
        'Content-Type': 'application/json'
    }
})


// сохраняем переменную в которой будет храниться айди пользователя
let userId

const profileInfo = api.getUserInfo(); // сохраняем массив информации о пользователе c сервера
const initialCards = api.getInitialCards(); // сохраняем массив карточек с сервера


// инициаизация коллекции карточек
const renderCardElements = new Section({renderer: renderCard}, listCards);

// промис
Promise.all([profileInfo, initialCards])
    .then(([profileInfo, initialCards]) => {
        userInfo.setUserInfo(profileInfo)  // собираем данные о пользователе 
      //  console.log(profileInfo)
        userId = profileInfo._id  // берем из этих данных информацию об айди пользвателя
     //   console.log(userId)
        renderCardElements.renderItems(initialCards); // отрисовка дефолтных карточек с сервера
    })
    .catch(err => {
        console.log(err)
    })


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
const userInfo = new UserInfo(nameTitle, nameSubtitle, userAvatar);

// экземпляр попапа потдверждения удаления карточки

const popupDelete = new PopupWithConfirmation('.popup-delete');
popupDelete.setEventListener();

// экземпляр класса попапа с потвержденеим редактирования аватара пользователя

const popupAvatar = new PopupWithForm('.popup-avatar', submitFormEditAvatar)
popupAvatar.setEventListener()



// ФУНКЦИИ-ОБРАБОТЧИКИ ОТПРАВКИ ДАННЫХ ДЛЯ ФОРМ (ФУНКЦИИ КОЛБЭКИ В ЭКЗЕМПЛЯРЫ КЛАССА)

// обработчик отправки данных формы редактирования информации о себе (изменение информации о себе на странице)
function submitFormEditProfile() {
    const infoProfile = {
        name: nameInput.value,
        about: jobInput.value
    }
    
    popupEdit.waitingText();

    api.editUserInfo(infoProfile.name, infoProfile.about)
        .then(data => {
            userInfo.setUserInfo(data);
            popupEdit.closePopup();
        })
        .finally(() => {
            popupEdit.buttonText();
        })
};



// обработчик отправки данных формы добавления карточки (при нажатии на кнопку создается карточка)

function submitFormAddCard() {
    // собрали значение всех инпутов с формы в массив
    const newCard = popupCard.getInputValues();
   
    // по новому массиву создали экземлпяр карточки
   
    popupCard.waitingText();
    api.addCard(newCard).then((newCard) => {
     //   console.log(newCard)
        // добавляем новую карточку в разметку
        renderCardElements.addItem(renderCard(newCard));
        
        popupCard.closePopup();
    })

    .finally(() => {
        popupCard.buttonText();
    })
};



// обработчик редактирвоания аватара пользователя
function submitFormEditAvatar() {
    popupAvatar.waitingText()
    api.editAvatar(avatarEditInput.value).then((data) => {
        userInfo.setUserInfo(data);
        popupAvatar.closePopup()
    })
    .finally(() => {
        popupAvatar.buttonText();
    })
}


// функция получения разметки новой карточки
function renderCard(cards) {
    const card = new Card(cards, '.element-template', userId, {
        handleCardClick: () => {
            popupImage.openPopup(cards.name, cards.link);
        },
        handleCardLike: () => {
            // если пользователь не поставил лайк, то мы его добавляем
            if (!card.looklike()) {
                api.likeCard(cards._id)
                .then((cards) => {
                    card.elementLikeNumber(cards)
                })
                .catch((err) => {
                    console.log(err);
                })
            }
            // если лайк уже стоит, то при нажатии он должен удалиться
            else {
                api.deleteLikeCard(cards._id)
                .then((cards) => {
                    card.elementLikeNumber(cards)
                })
                .catch((err) => {
                    console.log(err);
                })
            }
        },
        handleCardDelete: () => {
            popupDelete.openPopup();
            popupDelete.submitForm(() =>{
                api.deleteCards(cards._id)
                .then(() => {
                    card.elementDelete();
                    popupDelete.closePopup();
                })
            })
        }
        

    });
    const cardElement = card.generateCard();
    card.elementLikeNumber(cards);
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

// открытие попапа с редактрованием аватара
const openAvatarEditor = function () {
    popupAvatar.openPopup();
    formAvatarValidation.resetValidation()
}



// СЛУШАТЕЛИ
// слушатель открытия попапа редактирования профиля
popupOpenButtonElement.addEventListener('click', openPopupAdd);

// слушатель открытия попапа с формой добавления карточки
itemOpenButtonElement.addEventListener('click', openItem);

//слушатель открытия попапа с формой редактирования аватара
avatarEditButton.addEventListener('click', openAvatarEditor)




// ВАЛИДАЦИЯ

// валидация формы редактирования информации в профиле

const formEditorValidation = new FormValidator(selectorParameters, formElementEditor);
formEditorValidation.enablevalidation();


// валидация формы добавления карточек
const formMestoValidation = new FormValidator(selectorParameters, mestoElement);
formMestoValidation.enablevalidation();

// валидация формы редактирования аватара
const formAvatarValidation = new FormValidator(selectorParameters, avatarElement);
formAvatarValidation.enablevalidation();



























