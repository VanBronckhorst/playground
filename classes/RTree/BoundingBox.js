const MIN_X = Symbol();
const MIN_Y = Symbol();
const MAX_X = Symbol();
const MAX_Y = Symbol();


class BoundingBox {
    constructor(minX, minY, maxX, maxY) {
        this[MIN_X] = minX || Infinity;
        this[MIN_Y] = minY || Infinity;
        this[MAX_X] = maxX || -Infinity;
        this[MAX_Y] = maxY || -Infinity;
    }

    enlarge(toAdd) {

        this.minX = Math.min(this.minX, toAdd.minX);
        this.minY = Math.min(this.minY, toAdd.minY);
        this.maxX = Math.max(this.maxX, toAdd.maxX);
        this.maxY = Math.max(this.maxY, toAdd.maxY);
    }

    enlargedArea(toAdd) {
        let newMinX = Math.min(this.minX, toAdd.minX);
        let newMinY = Math.min(this.minY, toAdd.minY);
        let newMaxX = Math.max(this.maxX, toAdd.maxX);
        let newMaxY = Math.max(this.maxY, toAdd.maxY);

        return (newMaxX - newMinX) * (newMaxY - newMinY) - this.area;
    }

    sqDistanceFromPoint(x, y) {
        let dx = _distFromAxis(x, this.minX, this.maxX);
        let dy = _distFromAxis(y, this.minY, this.maxY);
        return dx * dx + dy * dy;
    }


    intersects(other) {
        return other.minX <= this.maxX &&
            other.minY <= this.maxY &&
            other.maxX >= this.minX &&
            other.maxY >= this.minY;
    }

    get minX() {
        return this[MIN_X];
    }

    get minY() {
        return this[MIN_Y];
    }

    get maxX() {
        return this[MAX_X];
    }

    get maxY() {
        return this[MAX_Y];
    }

    set minX(d) {
        this[MIN_X] = d;
    }

    set minY(d) {
        this[MIN_Y] = d;
    }

    set maxX(d) {
        this[MAX_X] = d;
    }

    set maxY(d) {
        this[MAX_Y] = d;
    }

    get area() {
        return (this.maxX - this.minX) * (this.maxY - this.minY);
    }

    get height() {
        return this.maxY - this.minY;
    }

    get width() {
        return this.maxX - this.minX;
    }

}

function _distFromAxis(k, min, max) {
    if (k <= min) {
        return min - k;
    }

    if (k <= max) {
        return 0;
    }

    return k - max;
}

export default BoundingBox;
