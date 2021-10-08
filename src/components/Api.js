
export default class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl, 
        this._headers = headers
    }

    // загрузка информации о пользователе сервиса
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers})
            .then(this._checkResult)
            .catch(this._showError)
    }

    // редактирование профиля
    editUserInfo(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            body: JSON.stringify({
              name: name,
              about: about,
            }),
            headers: this._headers
          })
          .then(this._checkResult)
          .catch(this._showError)
    }


    // загрузка начальных карточек с сервера
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers,})
            .then(this._checkResult)
            .catch(this._showError);
    }

    
    // добавление новой карточки
    addCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST', 
            body: JSON.stringify({
                name: data.name,
                link: data.link
            }),
            headers: this._headers
        })
            .then(this._checkResult)
            .catch(this._showError);
    }

    
    // удаление карточки
    deleteCards(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._checkResult)
        .catch(this._showError);
    }
    

    // постановка лайка

    likeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: this._headers
        })
        .then(this._checkResult)
        .catch(this._showError);
    }

    // удаление лайка

    deleteLikeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._checkResult)
        .catch(this._showError);
    }

    // обновление аватара пользователя

    editAvatar(avatarLink) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatarLink
            })
        })
        .then(this._checkResult)
        .catch(this._showError);
    }


    // проверка, все ли в порядке с ответом

    _checkResult = (res) => {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }

    // в случае, если сервер возвращает ошибку

    _showError = (err) => {
        console.log(err);
    }
}
