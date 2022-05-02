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


const popups = document.querySelectorAll('.popup')
const profilePopUp = document.querySelector('.profile-popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileCloseButton = profilePopUp.querySelector('.popup__close-button');
const userName = document.querySelector('.profile__user-name');
const userDescription = document.querySelector('.profile__user-job');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const profileForm = profilePopUp.querySelector('.popup__form');
const imageAddButton = document.querySelector('.profile__add-button');
const imageAddPopup = document.querySelector('.add-image-popup');
const imageCloseButton = imageAddPopup.querySelector('.popup__close-button');
const imageAddForm = imageAddPopup.querySelector('.popup__form');
const imageSaveButton = imageAddPopup.querySelector('.popup__save-button');
const elementTemplate = document.querySelector('.element_template').content;
const elements = document.querySelector('.elements');
const place = imageAddPopup.querySelector('.popup__input_place');
const link = imageAddPopup.querySelector('.popup__input_link');

function openPopup(element) {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
  document.addEventListener('click', closeByAwayclick);
}

export {openPopup};

function openProfilePopUp() {
  nameInput.value = userName.textContent;
  jobInput.value = userDescription.textContent;
  
  openPopup(profilePopUp);
};

function openAddImagePopup() {
  openPopup(imageAddPopup);
};

function closePopUp(element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
  document.removeEventListener('click', closeByAwayclick);
};

function handleProfileFormSubmit (evt) {
	evt.preventDefault();

  userName.textContent = nameInput.value;
  userDescription.textContent = jobInput.value;

  closePopUp(profilePopUp) 
};

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
          closePopUp(popup)
      }
  });
});

import Card from "./Card.js";

const addCards = (name, link) => {
  const cardElement = new Card({name, link}, '.element_template');
  const createCard = cardElement.createCard();
  return createCard;
  
}

const renderCard = (name, link) => {
  elements.prepend(addCards(name, link));
}

function createNewCard() {
  renderCard(place.value , link.value);

  place.value = '';
  link.value = '';
};

function addCard(event) {
  event.preventDefault();

  createNewCard();
  closeOpenedPopUp();
  imageSaveButton.classList.add('popup__save-button_inactive');
  imageSaveButton.setAttribute('disabled', true);
};

function deleteCard(event) {
  event.target.closest('.element').remove();
};

function render() {
  initialCards.forEach((item) => renderCard(item.name, item.link));
}

function closeOpenedPopUp() {
  const openedPopup = document.querySelector('.popup_opened') 
  closePopUp(openedPopup); 
} 

function closeByEsc(event) {
  if(event.key === 'Escape') {
    closeOpenedPopUp();
  }
};

function closeByAwayclick(event) {
  if(event.target.classList.contains('popup_opened')) {
    closePopUp(event.target);
  }
};

render();

import FormValidator from './FormValidator.js';
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

const profileFormValidator = new FormValidator(settings, profileForm);
const imageAddFormValidator = new FormValidator(settings, imageAddForm)
profileFormValidator.enableValidation();
imageAddFormValidator.enableValidation();

imageAddButton.addEventListener('click', openAddImagePopup);
profileEditButton.addEventListener('click', openProfilePopUp);
profileForm.addEventListener('submit', handleProfileFormSubmit);
imageAddForm.addEventListener('submit', addCard);
