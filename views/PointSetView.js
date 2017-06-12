import SVGView from './SVGView.js';
const PADDING = 5;
const POINT_RAD = 3;
const POINT_COLOR = '#2c3e50';
const POINT_PREFIX = '_item_';

const LINE_COLOR = 'red';
const LINE_WIDTH = 5;


export default class PointSetView extends SVGView {
    constructor(domParent, points) {
        super(domParent);
        points = points || [];

        this._minX = 0;
        this._minY = 0;
        this._maxX = 0;
        this._maxY = 0;

        points.forEach(p => {
            this.addPoint(p);
        })
    }

    addPoint(point) {
        this.updateViewBox(point);

        let attributes = {
            fill: POINT_COLOR
        };

        this.appendCircle(point.x, point.y, POINT_RAD, attributes);
    }

    // Update the SVG viewBox if needed
    updateViewBox(point) {
        let changed = false;

        if (point.x < this._minX) {
            this._minX = point.x;
            changed = true;
        }
        if (point.y < this._minY) {
            this._minY = point.y;
            changed = true;
        }
        if (point.x > this._maxX) {
            this._maxX = point.x;
            changed = true;
        }
        if (point.y > this._maxY) {
            this._maxY = point.y;
            changed = true;
        }

        if (changed) {
            let w = this._maxX - this._minX;
            let h = this._maxY - this._minY;
            this.setViewBox(this._minX - PADDING, this._minY - PADDING, w + 2 * PADDING, h + 2 * PADDING);
        }
    }

    drawLine(line) {
        if (line.length < 2) {return;}

        let attributes = {
            stroke: LINE_COLOR,
            'stroke-width': LINE_WIDTH
        };
        
        for (let i = 1; i < line.length; i++) {
            let p1 = line[i - 1];
            let p2 = line[i];
            this.appendLine(p1.x, p1.y, p2.x, p2.y, attributes);
        }
    }
}
