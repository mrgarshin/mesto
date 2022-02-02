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
const imageAddButton = document.querySelector('.profile__add-button');
const imageAddPopup = document.querySelector('.add-image-popup');
const imageCloseButton = imageAddPopup.querySelector('.close-button');
const imageSaveButton = imageAddPopup.querySelector('.popup__save-button');
const elementTemplate = document.querySelector('.element_template').content;
const elements = document.querySelector('.elements');
const place = imageAddPopup.querySelector('.popup__input_place');
const link = imageAddPopup.querySelector('.popup__input_link');
const imagePopup = document.querySelector('.image-popup');
const imagePopupCloseButton = imagePopup.querySelector('.close-button');
const imagePopupBackground = imagePopup.querySelector('.image-popup__background');
const imagePopupTitle = imagePopup.querySelector('.image-popup__title');

function openPopup(element) {
  element.classList.add('popup_opened');
}

function openProfilePopUp() {
  nameInput.value = userName.textContent;
  jobInput.value = userDescription.textContent;
  
  openPopup(popUp);
};

function openAddImagePopup() {
  place.value = '';
  link.value = '';

  openPopup(imageAddPopup);
};

function openImagePopup(event) {
  imagePopupBackground.src = event.target.src;
  imagePopupTitle.textContent = event.target.alt;

  imagePopup.classList.add('image-popup_opened');
};

function closePopUp(element) {
  element.classList.remove('popup_opened');
}

function closeProfilePopUp() {
  closePopUp(popUp);
};

function closeAddImagePopup() {
  closePopUp(imageAddPopup);
};

function closeImagePopup() {
  imagePopup.classList.remove('image-popup_opened');
};

function formSubmitHandler (evt) {
	evt.preventDefault();

  userName.textContent = nameInput.value;
  userDescription.textContent = jobInput.value;
  closeProfilePopUp();
};

function addCard(element) {
  const cardElement = elementTemplate.cloneNode(true);
  
  cardElement.querySelector('.element__title').textContent = element.name;
  cardElement.querySelector('.element__image').alt = element.name;
  cardElement.querySelector('.element__image').src = element.link;

  addListeners(cardElement);

  elements.prepend(cardElement);
}

function addCardFromArray(element) {
  addCard(element);
};

function createNewCard() {
  const element = {name: place.value , link: link.value}
  
  addCard(element);
};

function createCard(event) {
  event.preventDefault();

  createNewCard();
  closeAddImagePopup();
};

function addListeners(elem) {
  elem.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  elem.querySelector('.element__like').addEventListener('click', like);
  elem.querySelector('.element__image').addEventListener('click', openImagePopup);
};

function like(event) {
  event.target.classList.toggle('element__like_active');
};

function deleteCard(event) {
  event.target.closest('.element').remove();
};

function render() {
  initialCards.forEach(addCardFromArray);
}

render();

imageAddButton.addEventListener('click', openAddImagePopup);
imageCloseButton.addEventListener('click', closeAddImagePopup);
imageSaveButton.addEventListener('click', createCard);
profileEditButton.addEventListener('click', openProfilePopUp);
popUpCloseButton.addEventListener('click', closeProfilePopUp);
formElement.addEventListener('submit', formSubmitHandler);
imagePopupCloseButton.addEventListener('click', closeImagePopup);