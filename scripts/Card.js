import { openPopup } from "./utils.js";
import { imagePopup, imagePopupBackground, imagePopupTitle } from "./constans.js"

export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    this._cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
  }

  createCard() {
    this._getTemplate();

    this._cardElementImage = this._cardElement.querySelector('.element__image');

    this._cardElement.querySelector('.element__title').textContent = this._name;
    this._cardElementImage.alt = this._name;
    this._cardElementImage.src = this._link;

    this._likeButton = this._cardElement.querySelector('.element__like')

    this._cardElementImageEventListeners();
    this._likeButtonEventListener();
    this._cardElementEventListener();

    return this._cardElement;
  };

  _cardElementImageEventListeners() {
    this._cardElementImage.addEventListener('click', () => {
      this._openImagePopup(this._name, this._link);
      openPopup(imagePopup);
    });
  };

  _likeButtonEventListener() {
    this._likeButton.addEventListener('click', () => {
      this._like();
    });
  };

  _cardElementEventListener() {
    this._cardElement.querySelector('.element__delete-button').addEventListener('click', evt => {
      this._cardElement.remove();
      this._cardElement = null;
    });
  };

  _like() {
    this._likeButton.classList.toggle('element__like_active');
  };
    
  _openImagePopup() {
    imagePopupTitle.textContent = this._name;
    imagePopupBackground.src = this._link;
    imagePopupBackground.alt = this._name;
  };
}