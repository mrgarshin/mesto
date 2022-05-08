// Класс `UserInfo` отвечает за управление отображением информации о пользователе на странице. Этот класс:

// - Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
// - Содержит публичный метод `getUserInfo`, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
// - Содержит публичный метод `setUserInfo,` который принимает новые данные пользователя и добавляет их на страницу.

export default class UserInfo {
  constructor(userInfoSelectors) {
    this._userName = document.querySelector((userInfoSelectors.userName));
    this._userDescription = document.querySelector(userInfoSelectors.userDescription);
  }

  getUserInfo() {
    return {
        name: this._userName.textContent,
        job: this._userDescription.textContent
    }
  }

  setUserInfo({name, job}) {
    this._userName.textContent = name;
    this._userDescription.textContent = job;
  }
}