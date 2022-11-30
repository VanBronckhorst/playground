
const TEXTAREA = Symbol();

export default class CollapsibleTextView {
    constructor(domParent, text) {
        this[TEXTAREA] = this._createTextArea(text);

        domParent.appendChild(this[TEXTAREA]);
    }

    getText() {
        return this[TEXTAREA].value;
    }

    _createTextArea(text) {
        const t = document.createElement("textarea");
        t.cols = 60;
        t.rows = 20;
        t.style.padding = "5px";
        t.value = text;
        // t.style.position = "absolute";
        // t.style.bottom = "5px";
        // t.style.left = "5px";
        return t;
    }
}