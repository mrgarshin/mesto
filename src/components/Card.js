import { imagePopup, imagePopupBackground, imagePopupTitle } from "../utils/constans.js"

export default class Card {
  constructor({data, handleCardClick}, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    return document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
  }

  createCard() {
    this._cardElement = this._getTemplate();

    this._cardElementImage = this._cardElement.querySelector('.element__image');

    this._cardElement.querySelector('.element__title').textContent = this._name;
    this._cardElementImage.alt = this._name;
    this._cardElementImage.src = this._link;

    this._likeButton = this._cardElement.querySelector('.element__like')

    this._setEventListeners();

    return this._cardElement;
  };
  
  _setEventListeners() {
    this._cardElement.querySelector('.element__image').addEventListener('click', () => {
      this._handleCardClick({
          name: this._name,
          link: this._link
      })
    });
    this._cardElementImage.addEventListener('click', () => {
      this._handleOpenImagePopup();
    });

    this._likeButton.addEventListener('click', () => {
      this._handleLike();
    });

    this._cardElement.querySelector('.element__delete-button').addEventListener('click', evt => {
      this._handleDeleteCard();
    });
  };

  _handleOpenImagePopup() {
    this._openImagePopup(this._name, this._link);
  };

  _handleLike() {
    this._likeButton.classList.toggle('element__like_active');
  };

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  };
    
  _openImagePopup() {
    imagePopupTitle.textContent = this._name;
    imagePopupBackground.src = this._link;
    imagePopupBackground.alt = this._name;
  };
}