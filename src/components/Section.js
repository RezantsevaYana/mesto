// класс отвечает за отрисовку элементов на странице

export class Section {
    constructor({items, renderer}, containerSelector) {
        this._initalArray = items;
        this._renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector);

    }

    // метод, который отвечает за отрисовку всех элементов (принимает массив и возвращает готовые карточки)
    renderItems() {
        this._initalArray.forEach((item) => {
            const element =  this._renderer(item);
            this.addItem(element);
        });
    }

    // метод, который принимает DOM-элемент и добавляяет его в контейнер (принимает готовые карточки и добавляет их в контейнер)
    addItem(element) {
        this._containerSelector.prepend(element);
    }
};