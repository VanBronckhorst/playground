import Node from './Node.js';

const LEFT = Symbol();
const RIGHT = Symbol();



export default class TreeNode extends Node {
    constructor(key) {
        super(key);
        this[LEFT] = null;
        this[RIGHT] = null;
    }

    get left() {
        return this[LEFT];
    }

    get right() {
        return this[RIGHT];
    }

    set left(node) {
        this[LEFT] = node;
    }

    set right(node) {
        this[RIGHT] = node;
    }

    get height() {
        const leftHeight = this.left === null ? -1 : this.left.height;
        const rightHeight = this.right === null ? -1 : this.right.height;

        return Math.max(leftHeight, rightHeight) + 1;
    }
}
