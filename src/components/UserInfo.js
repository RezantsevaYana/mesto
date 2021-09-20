// класс, отвечающий за управление отображения информации о пользователе (касается формы редактирования профиля)
// записывает в форму данные со страницы и на страницу записывает данные, введенные в форму

export default class UserInfo {
    constructor(nameTitle, nameSubtitle) {
        this._nameTitle = nameTitle; // селекторы значения со страницы
        this._nameSubtitle = nameSubtitle; // селекторы значения со страницы
    }

    // публичный метод, который возвращает объект с данными пользователя (то есть получаем информацию уже имющюся на странице)
    getUserInfo() {
        /*
        nameInput.value = nameTitle.textContent;
        jobInput.value = nameSubtitle.textContent;
        */
        const userInfo = {};
        userInfo.name = this._nameTitle.textContent;
        userInfo.job = this._nameSubtitle.textContent;
        return userInfo
    }

    // публичный метод, принимающий новые данные пользователя и добавляющие их на странцу (то есть получаем данные с формы и добавляем на странцу)
    setUserInfo(data) {
        /*
        nameTitle.textContent = nameInput.value;
        nameSubtitle.textContent = jobInput.value;
        */
        this._nameTitle.textContent = data.name;
        this._nameSubtitle.textContent = data.job;
    }
}