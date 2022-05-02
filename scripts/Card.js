const imagePopup = document.querySelector('.image-popup');
const imagePopupBackground = imagePopup.querySelector('.image-popup__background');
const imagePopupTitle = imagePopup.querySelector('.image-popup__title');

import {openPopup} from './index.js';

export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  createCard() {
    this._cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);

    this._cardElementImage = this._cardElement.querySelector('.element__image');

    this._cardElement.querySelector('.element__title').textContent = this._name;
    this._cardElementImage.alt = this._name;
    this._cardElementImage.src = this._link;

    this._likeButton = this._cardElement.querySelector('.element__like')

    this._addListeners();

    return this._cardElement;
  }

  _addListeners() {
    this._cardElementImage.addEventListener('click', () => {
      this._openImagePopup(this._name, this._link);
      openPopup(imagePopup);
    });

    this._likeButton.addEventListener('click', () => {
      this._like();
    });

    this._cardElement.querySelector('.element__delete-button').addEventListener('click', evt => {
      this._cardElement.remove();
      this._cardElement = null;
    });
  }

  _like() {
    this._likeButton.classList.toggle('element__like_active');
  };
    
  _openImagePopup = (name, link) => {
    imagePopupTitle.textContent = name;
    imagePopupBackground.src = link;
    imagePopupBackground.alt = name;
  };
}