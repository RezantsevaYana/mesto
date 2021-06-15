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





