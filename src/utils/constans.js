const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonElement: '.popup__save-button',
  inputSection:'.popup__input-section',
  inputErrorMessage:'.popup__input-error',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorElement: 'popup__input-error',
};
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
const imagePopup = document.querySelector('.image-popup');
const imagePopupBackground = imagePopup.querySelector('.image-popup__background');
const imagePopupTitle = imagePopup.querySelector('.image-popup__title');
const imageAddPopup = document.querySelector('.add-image-popup');
const imageAddForm = imageAddPopup.querySelector('.popup__form');
const profilePopup = document.querySelector('.profile-popup');
const profileForm = profilePopup.querySelector('.popup__form');
const profileEditButton = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.popup__input_name');
const descriptionInput = document.querySelector('.popup__input_job');
const imageAddButton = document.querySelector('.profile__add-button');

export { settings, initialCards, imagePopup, imagePopupBackground, imagePopupTitle, imageAddPopup, imageAddForm, profileForm, profilePopup, profileEditButton, nameInput, descriptionInput, imageAddButton };