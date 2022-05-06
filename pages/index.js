import { settings, initialCards, imageAddPopup, imageAddForm, profileForm, profilePopup } from "../utils/constans.js";
import Card from "../components/Card.js";
import FormValidator from '../components/FormValidator.js';
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from "../components/PopupWithForm.js"



const profileEditButton = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.popup__input_name');
const descriptionInput = document.querySelector('.popup__input_job');

const imageAddButton = document.querySelector('.profile__add-button');

const profileFormValidator = new FormValidator(settings, profileForm);
const imageAddFormValidator = new FormValidator(settings, imageAddForm);
const popupWithImage = new PopupWithImage('.image-popup');

const generateCard = (data) => {
  const cardElement = new Card({
      data: data,
      handleCardClick: () => {
          popupWithImage.open(data);
      }
  }, '.element_template');
  return cardElement.createCard();
};

const initialCardsList = new Section({
  items: initialCards,
  renderer: (card) => {
    initialCardsList.addItem(generateCard(card));
  }
}, '.elements');


const userInfo = new UserInfo({
  userName: '.profile__user-name',
  userDescription: '.profile__user-job',
});



const openPopupEditForm = () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  descriptionInput.value = userData.job;  
  popupEditProfile.open();
}

const popupEditProfile = new PopupWithForm('.profile-popup', {
  handleFormSubmit: (userData) => {
    userInfo.setUserInfo(userData)
  }
})

const popupAddCard = new PopupWithForm('.add-image-popup', {
  handleFormSubmit: (userData) => {
    const newCard = generateCard(userData)
    initialCardsList.addItem(newCard)
    popupAddCard.resetInputs();
  }
})

profileEditButton.addEventListener('click', () => {
  openPopupEditForm();
  profileFormValidator.enableValidation(); 
});

imageAddButton.addEventListener('click', () => {
  imageAddFormValidator.enableValidation();
  popupAddCard.open();
});

initialCardsList.renderItems();
popupWithImage.setEventListeners();
popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();