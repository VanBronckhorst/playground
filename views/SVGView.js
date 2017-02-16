
const SVG = Symbol();

export default class SVGView{
    constructor(domParent) {
        const ns = 'http://www.w3.org/2000/svg';
        this[SVG] = document.createElementNS(ns, 'svg');
        domParent.appendChild(this[SVG]);
        this[SVG].setAttribute('class', 'full-SVG');
    }

    get SVG() {
        return this[SVG];
    }
}
