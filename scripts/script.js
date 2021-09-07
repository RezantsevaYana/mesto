

// открытие/закрытие попапа - редактирование информации в профиле

const popupElement = document.querySelector('.popup_js_editor');

//const popupCloseButtonElement = popupElement.querySelector('.popup__close_js_editor');

const popupOpenButtonElement = document.querySelector('.profile__button');

const formElement = popupElement.querySelector('.popup__form_js_editor');

const nameInput = popupElement.querySelector('.popup__input_info_name');

const jobInput = popupElement.querySelector('.popup__input_info_job');

const nameTitle = document.querySelector('.profile__title');

const nameSubtitle = document.querySelector('.profile__subtitle');

const popups = document.querySelectorAll('.popup');

const formAddCard = document.forms.mesto;

const formUser = document.forms.profile;



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


// открытие и закрытие попапа с формой редактирования информации в профиле

const inputListsSaveInfo = Array.from(formUser.querySelectorAll('.popup__input'));

const openPopupAdd = function () {

    openPopup(popupElement)

    nameInput.value = nameTitle.textContent;
    jobInput.value = nameSubtitle.textContent;

    hideInputError(formElement, nameInput);
    hideInputError(formElement, jobInput);
}



const closePopupRemove = function () {
    closePopup(popupElement)
}

popupOpenButtonElement.addEventListener('click', openPopupAdd);
//popupCloseButtonElement.addEventListener('click', closePopupRemove);

// Поля формы принимают значения такие же как на странице

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

const imagePopupPhoto = document.querySelector('.popup__image-photo');
const imagePopupTitle = document.querySelector('.popup__image-title');
const imagePopup = document.querySelector('.popup_image');

function imagePopupOpen(event) {
    openPopup(imagePopup);
    imagePopupPhoto.src = event.target.src;
    imagePopupPhoto.alt = event.target.textContent;
    imagePopupTitle.textContent = event.target.alt;
};



// закрытие попапа с изображением

function imagePopupClose() {
    closePopup(imagePopup);
};

//document.querySelector('.popup__close_js_image').addEventListener('click', imagePopupClose);

// функция добавления карточек и обработка массива

initialCards.forEach(function (item) {
    renderCard(getElementCard(item.name, item.link));
});



// функция создания карточки

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

// функция добавление карточки в контейнер

function renderCard(card) {
    listElements.prepend(card);
};




// открытие и закрытие формы создания карточек

const itemElement = document.querySelector('.popup_js_item');
//const itemCloseButtonElement = itemElement.querySelector('.popup__close_js_item');
const itemOpenButtonElement = document.querySelector('.profile__addbutton');
const mestoElement = itemElement.querySelector('.popup__form_js_item');
const mestoInfoTitle = itemElement.querySelector('.popup__input_info_title');
const mestoInfoLink = itemElement.querySelector('.popup__input_info_link');
const formAddCards = itemElement.querySelector('.popup__form_js_item');



const openItem = function () {
    openPopup(itemElement);
    const inputListsCreateCard = Array.from(formAddCards.querySelectorAll('.popup__input'));
    const popupButtonElementSaveCard = document.querySelector('.popup__button_save');
    toggleButtonState(inputListsCreateCard, popupButtonElementSaveCard, selectorParameters.buttonInvalidSelector);
}



const closeItem = function () {
    closePopup(itemElement);
}

itemOpenButtonElement.addEventListener('click', openItem);
//itemCloseButtonElement.addEventListener('click', closeItem);


// добавление новой карточки


formAddCard.addEventListener('submit', function (evt) {
    evt.preventDefault()
    const titleInput = itemElement.querySelector('.popup__input_info_title').value;
    const linkInput = itemElement.querySelector('.popup__input_info_link').value;

    renderCard(getElementCard(titleInput, linkInput));

    evt.target.reset();
    
    closeItem();
});

// функция закрытия попапа на оверлэй

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
















































