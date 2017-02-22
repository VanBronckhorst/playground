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

        let oldLeftKey = this[LEFT].key;
        let oldThisKey = this.key;
        let oldLeft = this[LEFT];
        this.key = oldLeftKey;
        oldLeft.key = oldThisKey;
        this[LEFT] = oldLeft.left;
        oldLeft.left = oldLeft.right;
        oldLeft.right = this.right;
        this.right = oldLeft;
    }

    rotateLeft() {
        if (this[RIGHT] === null) {
            throw new Error('Cannot perform left rotation because there is no right child');
        }

        let oldRightKey = this.right.key;
        let oldThisKey = this.key;
        let oldRight = this.right;
        this.key = oldRightKey;
        oldRight.key = oldThisKey;
        this.right = oldRight.right;
        oldRight.right = oldRight.left;
        oldRight.left = this.left;
        this.left = oldRight;
    }
}
