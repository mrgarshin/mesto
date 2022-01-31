let popUp = document.querySelector('.popup');
let profileEditButton = document.querySelector('.profile__edit-button');
let popUpCloseButton = document.querySelector('.popup__close-button');
let popUpSaveButton = document.querySelector('.popup__save-button');
let userName = document.querySelector('.profile__user-name');
let userDescription = document.querySelector('.profile__user-job');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_job');
let formElement = document.querySelector('.popup__form')

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

profileEditButton.addEventListener('click', openPopUp);
popUpCloseButton.addEventListener('click', closePopUp);
formElement.addEventListener('submit', formSubmitHandler);

// Отображение карточек из массива:
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

const elementTemplate = document.querySelector('.element_template').content;
const elements = document.querySelector('.elements')

initialCards.forEach(newElement);

function newElement(element) {
  const cardElement = elementTemplate.cloneNode(true);
  
  cardElement.querySelector('.element__title').textContent = element.name;
  cardElement.querySelector('.element__image').alt = element.name;
  cardElement.querySelector('.element__image').src = element.link;

  elements.append(cardElement);
};

// Попап добавления карточки:
const addButton = document.querySelector('.profile__add-button');
const editPopup = document.querySelector('.edit_popup')
const closeEditPopUpButton = editPopup.querySelector('.popup__close-button');
const createEditPopupButton = editPopup.querySelector('.popup__save-button');

function openEditPopUp() {
  editPopup.classList.add('popup_opened');
}
function closeEditPopUp() {
  editPopup.classList.remove('popup_opened');
}

addButton.addEventListener('click', openEditPopUp);
closeEditPopUpButton.addEventListener('click', closeEditPopUp);