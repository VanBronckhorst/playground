
const DOM = Symbol();
const EVENT = Symbol();
const linkRegex = /\[([\w\s\d\.]+)\]\((https?:\/\/[\w\d./?=#]+)\)/g;

export default class EventRow {
    constructor(event, row, leftPad, range, options) {
        const dom = document.createElement("div");
        this[DOM] = dom;
        this[EVENT] = event;
        dom.style.backgroundColor = "rgba(0,0,0,0)";
        dom.style.fontFamily = "system-ui";
        dom.style.fontSize = "80%";
        dom.style.whiteSpace = "nowrap";
        dom.style.gridRow = row + "/ span 1";
        dom.style.gridColumnStart = 1;
        dom.style.gridColumnEnd = -1;
        dom.style.height = "10px";
        dom.style.marginLeft = leftPad + "px";

        dom.style.display = "flex";
        dom.style.flexDirection = "row";
        dom.style.flexWrap = "nowrap";
        dom.style.alignItems = "center";

        
        dom.appendChild(this._createRangeView(range, options));
        dom.appendChild(this._createDateText(options));


        dom.appendChild(this._createEventText());
    }

    dom() {
        return this[DOM];
    }

    _createRangeView(range, options) {
        const r = document.createElement("div");
        r.style.width = range + "px";
        r.style.height = "80%";
        r.style.borderRadius = "5px";
        r.style.backgroundColor = `${options.eventColor}70`;
        r.style.marginRight = "5px";
        return r;
    }

    _createDateText(options) {
        const r = document.createElement("span");
        r.textContent = this[EVENT].dateString();
        r.style.color = options.dateColor;
        r.style.marginRight = "5px";
        return r;
    }

    _createEventText() {
        const r = document.createElement("span");
        const txt = this[EVENT].text();

        r.innerHTML = txt.replace(linkRegex, (substring, linkText, link) => {
            return `<a style="color:white;" href="${link}">${linkText}</a>`;
          });
        
        return r;
        
    }
}