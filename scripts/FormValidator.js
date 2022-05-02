export default class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._settings = settings;
    this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    this._submitButtonElement =  this._form.querySelector(this._settings.submitButtonElement);
  }

  _hasInvalidInput() {    
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  _disableSubmitButton() {
    this._submitButtonElement.classList.add(this._settings.inactiveButtonClass);
    this._submitButtonElement.setAttribute('disabled', true);
  }

  _enableSubmitButton() {
    this._submitButtonElement.classList.remove(this._settings.inactiveButtonClass);
    this._submitButtonElement.removeAttribute('disabled');
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableSubmitButton()
    } else {
      this._enableSubmitButton()
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = inputElement.closest(this._settings.inputSection).querySelector(this._settings.inputErrorMessage);

    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.inputErrorClass);
  }
  
  _hideInputError(inputElement) {
    const errorElement = inputElement.closest(this._settings.inputSection).querySelector(this._settings.inputErrorMessage)
    
    errorElement.textContent = "";
    errorElement.classList.remove(this._settings.inputErrorClass);
  }

  _checkInputValidity(inputElement) {  
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setEventListeners () {
    
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', (event) => {
      
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
        });
    })
  }

  enableValidation() {
      this._form.addEventListener('submit', (event) => {
        event.preventDefault();
      });
      this._setEventListeners();
  }
}