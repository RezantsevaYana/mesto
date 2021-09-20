// ОБЪЯВЛЕНИЯ ПЕРЕМЕННЫХ
export const popups = document.querySelectorAll('.popup');

// формы

export const formAddCard = document.forms.mesto;
export const formUser = document.forms.profile;

// попап редактирования профиля

export const popupElement = document.querySelector('.popup_js_editor');
export const formElementEditor = popupElement.querySelector('.popup__form_js_editor');
export const nameInput = popupElement.querySelector('.popup__input_info_name'); // значение в инпутах формы
export const jobInput = popupElement.querySelector('.popup__input_info_job'); // значение в инпутах формы

// информация о пользователе на странице

export const popupCloseButtonElement = popupElement.querySelector('.popup__close_js_editor');
export const popupOpenButtonElement = document.querySelector('.profile__button');
export const nameTitle = document.querySelector('.profile__title');  // значение о пользователе на странице
export const nameSubtitle = document.querySelector('.profile__subtitle'); // значение о пользователе на странице

// попап с изображением

export const imagePopupPhoto = document.querySelector('.popup__image-photo');
export const imagePopupTitle = document.querySelector('.popup__image-title');
export const imagePopup = document.querySelector('.popup_image');

// попап с формой создания карточек

export const itemElement = document.querySelector('.popup_js_item');
export const itemCloseButtonElement = itemElement.querySelector('.popup__close_js_item');
export const itemOpenButtonElement = document.querySelector('.profile__addbutton');
export const mestoElement = itemElement.querySelector('.popup__form_js_item');
export const mestoInfoTitle = itemElement.querySelector('.popup__input_info_title');
export const mestoInfoLink = itemElement.querySelector('.popup__input_info_link');
export const formAddCards = itemElement.querySelector('.popup__form_js_item');

// масив с карточками

export const listElements = document.querySelector('.elements');
export const initialCards = [
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

export const selectorParameters = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitSelector: '.popup__button',
    inputInvalidSelector: 'popup__input_invalid',
    buttonInvalidSelector: 'popup__button_invalid'
};

export const listCards = '.elements';