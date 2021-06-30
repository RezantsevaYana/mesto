// открытие/закрытие попапа - редактирование информации в профиле

const popupElement = document.querySelector('.popup');

const popupCloseButtonElement = popupElement.querySelector('.popup__close');

const popupOpenButtonElement = document.querySelector('.profile__button');

let formElement = popupElement.querySelector('.popup__form');

let nameInput = popupElement.querySelector('.popup__input_info_name');

let jobInput = popupElement.querySelector('.popup__input_info_job');

let nameTitle = document.querySelector('.profile__title');

let nameSubtitle = document.querySelector('.profile__subtitle');


const openPopup = function () {
    popupElement.classList.add('popup_opened');

    nameInput.value = nameTitle.textContent;
    jobInput.value = nameSubtitle.textContent;
}

const closePopup = function () {
    popupElement.classList.remove('popup_opened')
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);


function formSubmitHandler(evt) {
    evt.preventDefault();

    nameTitle.textContent = nameInput.value;
    nameSubtitle.textContent = jobInput.value;

    closePopup();
}


formElement.addEventListener('submit', formSubmitHandler);

// массив с карточками

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

// функция - обработчик событий

function setEventListeners(elementCard) {
    elementCard.querySelector('.element__delete').addEventListener('click', elementDelete);
    elementCard.querySelector('.element__button').addEventListener('click', elementLike);

}

// удаление карточек

function elementDelete(event) {
    event.target.closest('.element').remove();
}

// лайки

function elementLike(evt) {
    evt.target.classList.toggle('element__button_active');
}

// добавление карточек

initialCards.forEach(function (element) {
    const elementTemplate = document.querySelector('.element-template').content;
    const elementCard = elementTemplate.cloneNode(true);

    elementCard.querySelector('.element__title').textContent = element.name;
    elementCard.querySelector('.element__photo').src = element.link;
    elementCard.querySelector('.element__photo').alt = element.name;

    setEventListeners(elementCard);


    listElements.prepend(elementCard);

});

// открытие и закрытие формы создания карточек

const itemElement = document.querySelector('.item');
const itemCloseButtonElement = itemElement.querySelector('.item__close');
const itemOpenButtonElement = document.querySelector('.profile__addbutton');
let mestoElement = itemElement.querySelector('.item__form');

const openItem = function () {
    itemElement.classList.add('item_opened');
}

const closeItem = function () {
    itemElement.classList.remove('item_opened')
}

itemOpenButtonElement.addEventListener('click', openItem);
itemCloseButtonElement.addEventListener('click', closeItem);

// добавление новой карточки

function addElement(titleValue, linkValue) {
    const elementTemplate = document.querySelector('.element-template').content;
    const elementCard = elementTemplate.cloneNode(true);

    elementCard.querySelector('.element__title').textContent = titleValue;
    elementCard.querySelector('.element__photo').src = linkValue;

    
    setEventListeners(elementCard);

    listElements.prepend(elementCard);
}

document.querySelector('.item__container').addEventListener('submit', function(evt) {
    evt.preventDefault()
    const titleInput = itemElement.querySelector('.item__input_info_title');
    const linkInput = itemElement.querySelector('.item__input_info_link');

    addElement(titleInput.value, linkInput.value);

    titleInput.value = '';
    linkInput.value = '';

    closeItem();
});


























