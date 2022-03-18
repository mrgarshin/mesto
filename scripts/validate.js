const showError = (formElement, inputElement, errorMessage, settings) => {
  const errorElement = inputElement.closest(settings.inputSection).querySelector(settings.inputErrorMessage)
  
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.inputErrorClass);
}

const hideError = (formElement, inputElement, settings) => {
  const errorElement = inputElement.closest(settings.inputSection).querySelector(settings.inputErrorMessage)
  
  errorElement.textContent = "";
  errorElement.classList.remove(settings.inputErrorClass);
}

const checkValidity = (formElement, inputElement, settings) => {
  const isInputNotValid = !inputElement.validity.valid;
  
  if (isInputNotValid) {
    const errorMessage = inputElement.validationMessage;

    showError(formElement, inputElement, errorMessage, settings);
  } else {
    hideError(formElement, inputElement, settings);
  }
}

const toggleButtonState = (inputList, submitButtonElement, settings) => {
  
  const inputElements = Array.from(inputList);
  
  const hasInvalidInput = inputElements.some((inputElement) => {
    
    return !inputElement.validity.valid;
    
  });
  if (hasInvalidInput) {
    submitButtonElement.classList.add(settings.inactiveButtonClass);
    submitButtonElement.setAttribute('disabled', true);
  } else {
    submitButtonElement.classList.remove(settings.inactiveButtonClass);
    submitButtonElement.removeAttribute('disabled');
  }
}

const setEventListeners = (formElement, settings) => {
  const inputSelector = formElement.querySelectorAll(settings.inputSelector);
  const submitButtonElement =  formElement.querySelector(settings.submitButtonElement);

  inputSelector.forEach((inputElement) => {
    inputElement.addEventListener('input', (event) => {
    
      checkValidity(formElement, inputElement, settings);
      toggleButtonState(inputSelector, submitButtonElement, settings);
      });
  })
}

const enableValidation = (settings) => {
  const formSelector = document.querySelectorAll(settings.formSelector);
  
  formSelector.forEach((formElement) => {
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      
    });

    setEventListeners(formElement, settings);
  });
}

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonElement: '.popup__save-button',
  inputSection:'.popup__input-section',
  inputErrorMessage:'.popup__input-error',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorElement: 'popup__input-error'
};

enableValidation(settings);