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

const popUp = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const popUpCloseButton = document.querySelector('.popup__close-button');
const popUpSaveButton = document.querySelector('.popup__save-button');
const userName = document.querySelector('.profile__user-name');
const userDescription = document.querySelector('.profile__user-job');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const formElement = document.querySelector('.popup__form');
const addButton = document.querySelector('.profile__add-button');
const addImagePopup = document.querySelector('.add-image-popup');
const closeAddImageButton = addImagePopup.querySelector('.close-button');
const createAddPopupButton = addImagePopup.querySelector('.popup__save-button');
const elementTemplate = document.querySelector('.element_template').content;
const elements = document.querySelector('.elements');
const place = addImagePopup.querySelector('.popup__input_place');
const link = addImagePopup.querySelector('.popup__input_link');
const imagePopup = document.querySelector('.image-popup');
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-button');
const imagePopupBackground = imagePopup.querySelector('.image-popup__background');
const imagePopupTitle = imagePopup.querySelector('.image-popup__title');

function openPopUp() {
  nameInput.value = userName.textContent;
  jobInput.value = userDescription.textContent;
  popUp.classList.add('popup_opened');
};
function closePopUp() {
  popUp.classList.remove('popup_opened');
};
function formSubmitHandler (evt) {
	evt.preventDefault();

  userName.textContent = nameInput.value;
  userDescription.textContent = jobInput.value;
  closePopUp();
};

function newElement(element) {
  const cardElement = elementTemplate.cloneNode(true);
  
  cardElement.querySelector('.element__title').textContent = element.name;
  cardElement.querySelector('.element__image').alt = element.name;
  cardElement.querySelector('.element__image').src = element.link;

  addListeners(cardElement);

  elements.append(cardElement);
};

function openAddImagePopup() {
  addImagePopup.classList.add('popup_opened');
};

function closeAddImagePopup() {
  addImagePopup.classList.remove('popup_opened');
};

function deleteCard(event) {
  event.target.closest('.element').remove();
};

function like(event) {
  event.target.classList.toggle('element__like_active');
};

function addListeners(elem) {
  elem.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  elem.querySelector('.element__like').addEventListener('click', like);
  elem.querySelector('.element__image').addEventListener('click', openImagePopup);
};

function createbySave() {
  const cardElement = elementTemplate.cloneNode(true);

  cardElement.querySelector('.element__title').textContent = place.value;
  cardElement.querySelector('.element__image').alt = place.value;
  cardElement.querySelector('.element__image').src = link.value;

  addListeners(cardElement);

  elements.prepend(cardElement);
};

function createCard(event) {
  event.preventDefault();
  createbySave();
  
  closeAddImagePopup();
  place.value = '';
  link.value = '';
};

function closeImagePopup() {
  imagePopup.classList.remove('image-popup_opened');
};

function openImagePopup(event) {
  imagePopupBackground.src = event.target.src;
  imagePopupTitle.textContent = event.target.alt;

  imagePopup.classList.add('image-popup_opened');
};

initialCards.forEach(newElement);

addButton.addEventListener('click', openAddImagePopup);
closeAddImageButton.addEventListener('click', closeAddImagePopup);
createAddPopupButton.addEventListener('click', createCard);
profileEditButton.addEventListener('click', openPopUp);
popUpCloseButton.addEventListener('click', closePopUp);
formElement.addEventListener('submit', formSubmitHandler);
imagePopupCloseButton.addEventListener('click', closeImagePopup);