
const SVG = Symbol();

export default class SVGView{
    constructor(domParent) {
        const ns = 'http://www.w3.org/2000/svg';
        this[SVG] = document.createElementNS(ns, 'svg');
        domParent.appendChild(this[SVG]);
        // this[SVG].setAttribute('class', 'full-SVG');
        this.domParent = domParent;
    }

    get SVG() {
        return this[SVG];
    }

    clear() {
        while(this.SVG.hasChildNodes()) {
            this.SVG.removeChild(this.SVG.lastChild);
        }
    }

    setViewBox(xmin, ymin, width, height) {
        this.SVG.setAttribute('viewBox', `${xmin} ${ymin} ${width} ${height}`);
        
        const style = window.getComputedStyle(this.domParent, null);
        const H = parseFloat(style.getPropertyValue('height'));
        const W = parseFloat(style.getPropertyValue('width'));

        if (W * height / width > H) {
            this.SVG.setAttribute('height', H);
            this.SVG.setAttribute('width', H * width / height);
        } else {
            this.SVG.setAttribute('height', W * height / width);
            this.SVG.setAttribute('width', W);
        }
    }
}
