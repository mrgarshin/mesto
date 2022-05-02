import Card from "./Card.js";
import FormValidator from './FormValidator.js';
import { initialCards } from "./initialCards.js";
import { openPopup } from "./utils.js";

const popups = document.querySelectorAll('.popup')
const profilePopup = document.querySelector('.profile-popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const userName = document.querySelector('.profile__user-name');
const userDescription = document.querySelector('.profile__user-job');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const profileForm = profilePopup.querySelector('.popup__form');
const imageAddButton = document.querySelector('.profile__add-button');
const imageAddPopup = document.querySelector('.add-image-popup');
const imageAddForm = imageAddPopup.querySelector('.popup__form');
const imageSaveButton = imageAddPopup.querySelector('.popup__save-button'); 
const elements = document.querySelector('.elements');
const place = imageAddPopup.querySelector('.popup__input_place');
const link = imageAddPopup.querySelector('.popup__input_link');

function openProfilePopUp() {
  nameInput.value = userName.textContent;
  jobInput.value = userDescription.textContent;
  
  openPopup(profilePopup);
};

function openAddImagePopup() {
  openPopup(imageAddPopup);
};

function closePopUp(element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
  document.removeEventListener('click', closeByAwayClick);
};

function handleProfileFormSubmit (evt) {
	evt.preventDefault();

  userName.textContent = nameInput.value;
  userDescription.textContent = jobInput.value;

  closePopUp(profilePopup) 
};

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
          closePopUp(popup)
      }
  });
});

const createCard = (name, link) => {
  const cardElement = new Card({name, link}, '.element_template');
  const createCard = cardElement.createCard();
  return createCard;
}

const renderCard = (name, link) => {
  elements.prepend(createCard(name, link));
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
  
  imageAddFormValidator.disableSubmitButton();
};

function render() {
  initialCards.forEach((item) => renderCard(item.name, item.link));
}

function closeByEsc(event) {
  if(event.key === 'Escape') {
    closeOpenedPopUp();
  }
};

function closeOpenedPopUp() {
  const openedPopup = document.querySelector('.popup_opened') 
  closePopUp(openedPopup); 
};

function closeByAwayClick(event) {
  if(event.target.classList.contains('popup_opened')) {
    closePopUp(event.target);
  }
};

render();

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
const imageAddFormValidator = new FormValidator(settings, imageAddForm);

profileFormValidator.enableValidation();
imageAddFormValidator.enableValidation();

imageAddButton.addEventListener('click', openAddImagePopup);
profileEditButton.addEventListener('click', openProfilePopUp);
profileForm.addEventListener('submit', handleProfileFormSubmit);
imageAddForm.addEventListener('submit', addCard);

export { closeByEsc, closeByAwayClick };