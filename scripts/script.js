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


let formElement = popupElement.querySelector('.popup__container');
let nameInput = popupElement.querySelector('.popup__name');
let jobInput = popupElement.querySelector('.popup__job');

function formSubmitHandler (evt) {
    evt.preventDefault();
    console.log(document.querySelector('.popup__name').value);
    console.log(document.querySelector('.popup__job').value);
    
    let nameTitle = document.querySelector('.profile__title');
    let nameSubtitle = document.querySelector('.profile__subtitle');

    nameTitle.textContent = nameInput.value;
    nameSubtitle.textContent = jobInput.value;
}


formElement.addEventListener('submit', formSubmitHandler);

const saveFormButton = popupElement.querySelector(".popup__button")
saveFormButton.addEventListener('click', closePopup);




