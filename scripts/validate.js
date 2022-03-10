const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = inputElement.closest('.popup__input-section').querySelector('.popup__input-error')
  
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input_type_error');
}

const hideError = (formElement, inputElement) => {
  const errorElement = inputElement.closest('.popup__input-section').querySelector('.popup__input-error')
  
  errorElement.textContent = "";
  errorElement.classList.remove('popup__input_type_error');
}

const checkValidity = (formElement, inputElement) => {
  const isInputNotValid = !inputElement.validity.valid;
  
  if (isInputNotValid) {
    const errorMessage = inputElement.validationMessage;

    showError(formElement, inputElement, errorMessage);
  } else {
    hideError(formElement, inputElement);
  }
}

const toggleButtonState = (inputList, submitButtonElement) => {
  const inputElements = Array.from(inputList);
  const hasInvalidInput = inputElements.some((inputElement) => {
    return !inputElement.validity.valid;
  });

  if (hasInvalidInput) {
    submitButtonElement.classList.add('popup__save-button_inactive');
    submitButtonElement.setAttribute('disabled', true);
  } else {
    submitButtonElement.classList.remove('popup__save-button_inactive');
    submitButtonElement.removeAttribute('disabled');
  }

}

const setEventListeners = (formElement) => {
  const inputList = formElement.querySelectorAll('.popup__input');
  const submitButtonElement =  formElement.querySelector('.popup__save-button');

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', (event) => {
    
      checkValidity(formElement, inputElement);
      toggleButtonState(inputList, submitButtonElement)
    });
  })
}

const enableValidation = () => {
  const formsList = document.querySelectorAll('.popup__form');
  
  formsList.forEach((formElement) => {
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      
    });

    setEventListeners(formElement);
  });
}

enableValidation();