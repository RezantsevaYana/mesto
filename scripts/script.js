// открытие/закрытие попапа - редактирование информации в профиле

const popupElement = document.querySelector('.popup_js_editor');

const popupCloseButtonElement = popupElement.querySelector('.popup_js_close-editor');

const popupOpenButtonElement = document.querySelector('.profile__button');

const formElement = popupElement.querySelector('.popup_js_form-editor');

let nameInput = popupElement.querySelector('.popup__input_info_name');

let jobInput = popupElement.querySelector('.popup__input_info_job');

let nameTitle = document.querySelector('.profile__title');

let nameSubtitle = document.querySelector('.profile__subtitle');


// функция открытия попапа

function openPopup (popup) {
    popup.classList.add('popup_opened');
}

// функция закрытия попапа

function closePopup (popup) {
    popup.classList.remove('popup_opened');
}

// открытие и закрытие попапа с формой редактирование информации в профиле

const openPopupAdd = function () {

    openPopup (popupElement)

    nameInput.value = nameTitle.textContent;
    jobInput.value = nameSubtitle.textContent;
}



const closePopupRemove = function () {
    closePopup (popupElement)
}

popupOpenButtonElement.addEventListener('click', openPopupAdd);
popupCloseButtonElement.addEventListener('click', closePopupRemove);


function formSubmitHandler(evt) {
    evt.preventDefault();

    nameTitle.textContent = nameInput.value;
    nameSubtitle.textContent = jobInput.value;

    closePopupRemove();
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
    elementCard.querySelector('.element__photo').addEventListener('click', imagePopupOpen);
}

// удаление карточек

function elementDelete(event) {
    event.target.closest('.element').remove();
}

// лайки

function elementLike(evt) {
    evt.target.classList.toggle('element__button_active');
}

// открытие попапа с изображением

const imagePopupPhoto = document.querySelector('.image-popup__photo');
const imagePopupTitle = document.querySelector('.image-popup__title');
const imagePopup = document.querySelector('.image-popup');

function imagePopupOpen() {
    openPopup(imagePopup);
    imagePopupPhoto.src = this.src;
    imagePopupPhoto.alt = this.textContent;
    imagePopupTitle.textContent = this.alt;
};



// закрытие попапа с изображением

function imagePopupClose() {
    closePopup (imagePopup);
};

document.querySelector('.popup_js_close-image').addEventListener('click', imagePopupClose);

// функция добавления карточек и обработка массива

initialCards.forEach(function (item) {
    renderCard(getElementCard(item.name, item.link));
});

function getElementCard(name, link) {
    const elementTemplate = document.querySelector('.element-template').content;
    const elementCard = elementTemplate.cloneNode(true);

    const elementPhoto = elementCard.querySelector('.element__photo');

    elementCard.querySelector('.element__title').textContent = name;
    elementPhoto.src = link;
    elementPhoto.alt = name;

    setEventListeners(elementCard);

    return elementCard;
};


function renderCard(card) {
    listElements.prepend(card);
};


// открытие и закрытие формы создания карточек

const itemElement = document.querySelector('.popup_js_item');
const itemCloseButtonElement = itemElement.querySelector('.popup_js_close-item');
const itemOpenButtonElement = document.querySelector('.profile__addbutton');
let mestoElement = itemElement.querySelector('.popup_js_form-item');

const openItem = function () {
    openPopup(itemElement);
}


const closeItem = function () {
    closePopup(itemElement);
}

itemOpenButtonElement.addEventListener('click', openItem);
itemCloseButtonElement.addEventListener('click', closeItem);

// добавление новой карточки


document.querySelector('.popup_js_container-item').addEventListener('submit', function (evt) {
    evt.preventDefault()
    const titleInput = itemElement.querySelector('.item__input_info_title').value;
    const linkInput = itemElement.querySelector('.item__input_info_link').value;

    renderCard(getElementCard(titleInput, linkInput));

    titleInput.value = '';
    linkInput.value = '';

    closeItem();
});




































