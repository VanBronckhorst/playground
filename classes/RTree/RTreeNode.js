import BoundingBox from './BoundingBox';

const CHILDREN = Symbol();
const HEIGHT = Symbol();
const BBOX = Symbol();


class Node {
    constructor(children) {
        this[CHILDREN] = [];
        this[HEIGHT] = 1;
        this[BBOX] = new BoundingBox();

        for (let i = 0; i < children.length; i++) {
            this.add(children[i]);
        }
    }

    add(item, BBox) {
        BBox = BBox || item.BBox;
        this.children.push(item);
        this.BBox.enlarge(BBox);
    }

    get fill() {
        return this.children.length;
    }

    get children() {
        return this[CHILDREN];
    }

    get height() {
        return this[HEIGHT];
    }

    set height(h) {
        this[HEIGHT] = h;
    }

    get minX() {
        return this[BBOX].minX;
    }

    get minY() {
        return this[BBOX].minY;
    }

    get maxX() {
        return this[BBOX].maxX;
    }

    get maxY() {
        return this[BBOX].maxY;
    }

    get BBox() {
        return this[BBOX];
    }

    set BBox(b) {
        this[BBOX] = b;
    }
}

export default Node;
