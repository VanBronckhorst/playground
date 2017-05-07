export default class OptionsBox {
    constructor(where, options = []) {
        this.container = where;
        this.options = options;
        this.render();
    }

    render() {
        for (let option of this.options) {
            this.container.appendChild(this.renderControl(option));
        }
    }

    renderControl(option) {
        const type = option.type;

        let element;
        switch (type) {
            case 'button':
                element = document.createElement('button');
                element.textContent = option.label;
                element.addEventListener('click', option.onClick);
                break;
        }

        element.className = option.className;

        return element;
    }
}