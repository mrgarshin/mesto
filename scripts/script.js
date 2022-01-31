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

let popUp = document.querySelector('.popup');
let profileEditButton = document.querySelector('.profile__edit-button');
let popUpCloseButton = document.querySelector('.popup__close-button');
let popUpSaveButton = document.querySelector('.popup__save-button');
let userName = document.querySelector('.profile__user-name');
let userDescription = document.querySelector('.profile__user-job');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_job');
let formElement = document.querySelector('.popup__form')
const addButton = document.querySelector('.profile__add-button');
const editPopup = document.querySelector('.edit_popup');
const closeEditPopUpButton = editPopup.querySelector('.popup__close-button');
const createEditPopupButton = editPopup.querySelector('.popup__save-button');
const elementTemplate = document.querySelector('.element_template').content;
const elements = document.querySelector('.elements');
const place = editPopup.querySelector('.popup__input_place');
const link = editPopup.querySelector('.popup__input_link');
const elementImage = document.querySelector('.element__image');
const imagePopup = document.querySelector('.image-popup');
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-button');
const imagePopupBackground = imagePopup.querySelector('.image-popup__background');
const imagePopupTitle = imagePopup.querySelector('.image-popup__title');






function openPopUp() {
  nameInput.value = userName.textContent;
  jobInput.value = userDescription.textContent;
  popUp.classList.add('popup_opened');
}
function closePopUp() {
  popUp.classList.remove('popup_opened');
}
function formSubmitHandler (evt) {
	evt.preventDefault();

  userName.textContent = nameInput.value;
  userDescription.textContent = jobInput.value;
  closePopUp();
}

function newElement(element) {
  const cardElement = elementTemplate.cloneNode(true);
  
  cardElement.querySelector('.element__title').textContent = element.name;
  cardElement.querySelector('.element__image').alt = element.name;
  cardElement.querySelector('.element__image').src = element.link;

  addListeners(cardElement);

  elements.append(cardElement);
};

function openEditPopUp() {
  editPopup.classList.add('popup_opened');
}

function closeEditPopUp() {
  editPopup.classList.remove('popup_opened');
}

function deleteCard(event) {
  event.target.closest('.element').remove();
}
function like(event) {
  event.target.classList.toggle('element__like_active');
}
function addListeners(elem) {
  elem.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  elem.querySelector('.element__like').addEventListener('click', like);
}
function createbySave() {
  const cardElement = elementTemplate.cloneNode(true);

  
  cardElement.querySelector('.element__title').textContent = place.value;
  cardElement.querySelector('.element__image').alt = place.value;
  cardElement.querySelector('.element__image').src = link.value;

  addListeners(cardElement);

  elements.prepend(cardElement);
}
function createCard(event) {
  event.preventDefault();
  createbySave();
  
  closeEditPopUp();
  place.value = '';
  link.value = '';
}

initialCards.forEach(newElement);







addButton.addEventListener('click', openEditPopUp);
closeEditPopUpButton.addEventListener('click', closeEditPopUp);
createEditPopupButton.addEventListener('click', createCard);
profileEditButton.addEventListener('click', openPopUp);
popUpCloseButton.addEventListener('click', closePopUp);
formElement.addEventListener('submit', formSubmitHandler);
elementImage.addEventListener('click', openImagePopup);



function openImagePopup() {
  elementImage.target.src = imagePopupBackground.src;
  elementImage.target.alt = imagePopupBackground.alt;
  elementImage.target.alt = imagePopupTitle.textContent;

  imagePopup.classList.add('image-popup_opened');
}
function closeImagePopup() {
  imagePopup.classList.remove('image-popup_opened');
}
imagePopupCloseButton.addEventListener('click', closeImagePopup)