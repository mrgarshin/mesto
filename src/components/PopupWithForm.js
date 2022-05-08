// Создайте класс `PopupWithForm`, который наследует от `Popup`. Этот класс:
// - Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
// - Содержит приватный метод `_getInputValues`, который собирает данные всех полей формы.
// - Перезаписывает родительский метод `_setEventListeners`. Метод `_setEventListeners` класса `PopupWithForm` должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
// - Перезаписывает родительский метод `close`, так как при закрытии попапа форма должна ещё и сбрасываться.
// `PopupWithForm`
// Для каждого попапа создавайте свой экземпляр класса `PopupWithForm`.
import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, {handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupSelector.querySelector('.popup__form');
    this._inputList = Array.from(
        this._popupForm.querySelectorAll('.popup__input')); 
  }

  _getInputValues() {
    this._newValues = {};
    this._inputList.forEach((input) => {
        this._newValues[input.name] = input.value;
    })
    return this._newValues;
  }

  setEventListeners() {
    this._popupForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
        this.close();
    });
    super.setEventListeners();
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}