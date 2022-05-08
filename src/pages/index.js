import { settings, initialCards, imageAddPopup, imageAddForm, profileForm, profilePopup, profileEditButton, nameInput, descriptionInput, imageAddButton } from "../utils/constans.js";
import Card from "../components/Card.js";
import FormValidator from '../components/FormValidator.js';
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import "./index.css";

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
  const {name, job} = userInfo.getUserInfo();
  nameInput.value = name;
  descriptionInput.value = job;  
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
  }
})

profileEditButton.addEventListener('click', () => {
  openPopupEditForm();
});

imageAddButton.addEventListener('click', () => {
  imageAddFormValidator.disableSubmitButton();
  popupAddCard.open();
});

profileFormValidator.enableValidation(); 
imageAddFormValidator.enableValidation();
initialCardsList.renderItems();
popupWithImage.setEventListeners();
popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();