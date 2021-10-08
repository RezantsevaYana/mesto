
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
    }

    // редактирование профиля
    editUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            body: JSON.stringify({
              name: data.name,
              about: data.about,
            }),
            headers: this._headers
          })
          .then(this._checkResult)
    }


    // загрузка начальных карточек с сервера
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers,})
            .then(this._checkResult)
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
    }

    
    // удаление карточки
    deleteCards(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._checkResult)
    }
    

    // постановка лайка

    likeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: this._headers
        })
        .then(this._checkResult)
    }

    // удаление лайка

    deleteLikeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._checkResult)
    }

    // обновление аватара пользователя

    editAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.link
            })
        })
        .then(this._checkResult)
    }


    // проверка, все ли в порядке с ответом

    _checkResult = (res) => {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }
}
