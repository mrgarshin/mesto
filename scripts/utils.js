import { closeByEsc, closeByAwayClick } from "./index.js"

function openPopup(element) {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
  document.addEventListener('click', closeByAwayClick);
};

export { openPopup };