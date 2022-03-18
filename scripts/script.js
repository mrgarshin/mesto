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
const imagePopup = document.querySelector('.image-popup');
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-button');
const imagePopupBackground = imagePopup.querySelector('.image-popup__background');
const imagePopupTitle = imagePopup.querySelector('.image-popup__title');

function openPopup(element) {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
  document.addEventListener('click', closeByAwayclick);
}

function openProfilePopUp() {
  nameInput.value = userName.textContent;
  jobInput.value = userDescription.textContent;
  
  openPopup(profilePopUp);
};

function openAddImagePopup() {
  openPopup(imageAddPopup);
};

function openImagePopup(event) {
  imagePopupBackground.src = event.target.src;
  imagePopupBackground.alt = event.target.alt;
  imagePopupTitle.textContent = event.target.alt;
  
  openPopup(imagePopup)
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

function createCard(item) {
  const cardElement = elementTemplate.cloneNode(true);
  const cardElementImage = cardElement.querySelector('.element__image');

  cardElement.querySelector('.element__title').textContent = item.name;
  cardElementImage.alt = item.name;
  cardElementImage.src = item.link;

  addListeners(cardElement);
  return cardElement;
}

function addCards(element) {
  const cardElement = createCard(element);
  elements.prepend(cardElement);
}

function createNewCard() {
  const element = {name: place.value , link: link.value}
  
  addCards(element);

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
  initialCards.forEach(addCards);
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

imageAddButton.addEventListener('click', openAddImagePopup);
profileEditButton.addEventListener('click', openProfilePopUp);
profileForm.addEventListener('submit', handleProfileFormSubmit);
imageAddForm.addEventListener('submit', addCard);