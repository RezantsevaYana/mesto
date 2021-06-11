const popupElement = document.querySelector('.popup');

const popupCloseButtonElement = popupElement.querySelector('.popup__close');

const popupOpenButtonElement = document.querySelector('.profile__button');

console.log({popupOpenButtonElement, popupCloseButtonElement, popupElement});




const openPopup = function() {
    popupElement.classList.add('popup_opened')
}

const closePopup = function() {
    popupElement.classList.remove('popup_opened')
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

