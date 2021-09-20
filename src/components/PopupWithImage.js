// класс, отвечающий за открытие попапа с изображением 

import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super(popupSelector);
        this._popupImage = this._popupSelector.querySelector('.popup__image-photo');
        this._popupTitle = this._popupSelector.querySelector('.popup__image-title');
    }

    openPopup(name, link) {
        super.openPopup();

        
        this._popupImage.alt = name;
        this._popupImage.src = link;
        this._popupTitle.textContent = name;
    }
}