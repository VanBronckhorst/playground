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

}

export default BoundingBox;
