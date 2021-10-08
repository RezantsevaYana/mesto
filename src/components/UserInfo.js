// класс, отвечающий за управление отображения информации о пользователе (касается формы редактирования профиля)
// записывает в форму данные со страницы и на страницу записывает данные, введенные в форму

//import { userAvatar } from "../utils/constants";

export default class UserInfo {
    constructor(nameTitle, nameSubtitle, userAvatar) {
        this._nameTitle = nameTitle; // селекторы значения со страницы
        this._nameSubtitle = nameSubtitle; // селекторы значения со страницы
        this._userAvatar = userAvatar;
    }

    // публичный метод, который возвращает объект с данными пользователя (то есть получаем информацию уже имющюся на странице)
    getUserInfo() {
        /*
        nameInput.value = nameTitle.textContent;
        jobInput.value = nameSubtitle.textContent;
        */
        const userInfo = {};
        userInfo.name = this._nameTitle.textContent;
        userInfo.about = this._nameSubtitle.textContent;
        userInfo.src = this._userAvatar.src
        return userInfo
    }

    // публичный метод, принимающий новые данные пользователя и добавляющие их на странцу (то есть получаем данные с формы и добавляем на странцу)
    setUserInfo({name, about, avatar, _id}) {
        /*
        nameTitle.textContent = nameInput.value;
        nameSubtitle.textContent = jobInput.value;
        */
        this._nameTitle.textContent = name;
        this._nameSubtitle.textContent = about;
        this._userAvatar.src = avatar;
        this.id = _id
    }
}