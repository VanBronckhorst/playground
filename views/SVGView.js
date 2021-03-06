
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

    appendRect(x, y, w, h, attributes) {
        const ns = 'http://www.w3.org/2000/svg';

        let rect = document.createElementNS(ns, 'rect');
        rect.setAttribute('x', x);
        rect.setAttribute('y', y);
        rect.setAttribute('width', w);
        rect.setAttribute('height', h);
        
        for (let k in attributes) {
            rect.setAttribute(k, attributes[k]);
        }

        this.SVG.appendChild(rect);

    }

    appendCircle(x, y, r, attributes) {
        const ns = 'http://www.w3.org/2000/svg';

        let circle = document.createElementNS(ns, 'circle');
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', r);
        
        for (let k in attributes) {
            circle.setAttribute(k, attributes[k]);
        }

        this.SVG.appendChild(circle);
    }

    appendLine(x1, y1, x2, y2, attributes) {
        const ns = 'http://www.w3.org/2000/svg';

        let line = document.createElementNS(ns, 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('x2', x2);
        line.setAttribute('y1', y1);
        line.setAttribute('y2', y2);
        
        for (let k in attributes) {
            line.setAttribute(k, attributes[k]);
        }

        this.SVG.appendChild(line);
    }

    setOnClick(fun) {
        let _pt = this.SVG.createSVGPoint();

        let clickFun = (evt) => {
            _pt.x = evt.clientX;
            _pt.y = evt.clientY;

            // The cursor point, translated into svg coordinates
            var cursorpt =  _pt.matrixTransform(this.SVG.getScreenCTM().inverse());
            fun(cursorpt.x, cursorpt.y);
        }

        this.SVG.addEventListener('click', clickFun);
    }
}
