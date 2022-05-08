// Создайте класс PopupWithImage, который наследует от Popup. Этот класс должен перезаписывать родительский метод open. В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке.

import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupWithImageBackground = this._popupSelector.querySelector('.image-popup__background');
    this._popupWithImageTitle = this._popupSelector.querySelector('.image-popup__title');
  }

  open({link, name}) {
    super.open();
    this._popupWithImageBackground.src = link;
    this._popupWithImageBackground.alt = name;
    this._popupWithImageTitle.textContent = name;
  }
}