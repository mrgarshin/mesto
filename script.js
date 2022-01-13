let popUp = document.querySelector('.popup');
let profileEditButton = document.querySelector('.profile__edit-button');
let popUpCloseButton = document.querySelector('.popup__close-button');
let popUpSaveButton = document.querySelector('.popup__save-button');
let userName = document.querySelector('.user__name');
let userDescription = document.querySelector('.user__description');
let nameInput = document.querySelector('.popup__input_name')
let jobInput = document.querySelector('.popup__input_job')

function openPopUp() {
  nameInput.value = userName.textContent;
  jobInput.value = userDescription.textContent;
  popUp.classList.add('popup__opened');
}
function closePopUp() {
  popUp.classList.remove('popup__opened');
}
function saveChanges() {
  userName.textContent = nameInput.value;
  userDescription.textContent = jobInput.value;
  popUp.classList.remove('popup__opened');
}

profileEditButton.addEventListener('click', openPopUp);
popUpCloseButton.addEventListener('click', closePopUp);
popUpSaveButton.addEventListener('click', saveChanges);