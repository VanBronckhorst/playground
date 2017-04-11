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

    rotateRight() {
        if (this[LEFT] === null) {
            throw new Error('Cannot perform right rotation because there is no left child');
        }

        let oldLeftData = this.left.data;
        let oldThisData = this.data;
        let oldLeft = this[LEFT];
        this.data = oldLeftData;
        oldLeft.data = oldThisData;
        this[LEFT] = oldLeft.left;
        oldLeft.left = oldLeft.right;
        oldLeft.right = this.right;
        this.right = oldLeft;
    }

    rotateLeft() {
        if (this[RIGHT] === null) {
            throw new Error('Cannot perform left rotation because there is no right child');
        }

        let oldRightData = this.right.data;
        let oldThisData = this.data;
        let oldRight = this.right;
        this.data = oldRightData;
        oldRight.data = oldThisData;
        this.right = oldRight.right;
        oldRight.right = oldRight.left;
        oldRight.left = this.left;
        this.left = oldRight;
    }
}
