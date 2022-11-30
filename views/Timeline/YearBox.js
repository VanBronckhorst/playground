
const DOM = Symbol();

export default class YearBox {
    constructor(year, column, options) {
        const dom = document.createElement("div");
        this[DOM] = dom;
        dom.style.backgroundColor = options.backgroundColor;
        dom.style.borderLeft = "1px dashed gray";
        dom.style.gridColumn = column + "/ span 1";
        dom.style.gridRowStart = 1;
        dom.style.gridRowEnd = -1;

        dom.appendChild(this._createTitle(year, options));
    }

    dom() {
        return this[DOM];
    }

    _createTitle(year, options) {
        let t = document.createElement("h6");
        t.style.fontWeight = 300;
        t.style.margin = 0;
        t.style.position = "sticky";
        t.style.top = 0;
        t.style.padding = "8px";
        t.style.background = `linear-gradient(to bottom,${options.backgroundColor},77%,${options.backgroundColor}00)`;
        t.style.fontSize = ".875rem";
        t.style.lineHeight = "1.25rem";
        t.textContent = year;
        return t;
    }
}