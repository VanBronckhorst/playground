import TreeNode from './TreeNode.js';

const HEAP_KEY = Symbol();

export default class CartesianNode extends TreeNode {
    constructor(key, heapKey) {
        super(key);
        this.data[HEAP_KEY] = heapKey;
        this.parent = null;
    }
    get heapKey() {
        return this.data[HEAP_KEY];
    }
    set heapKey(k) {
        this.data[HEAP_KEY] = k;
    }
    get content() {
        return this.key + '|' + this.heapKey;
    }


    insert(key, heapKey) {
        if (key === this.key) {
            return;
        }

        if (key > this.key) {
            if (this.right !== null) {
                this.right.insert(key, heapKey);
            }else {
                this.right = new CartesianNode(key, heapKey);
            }
            if (this.right.heapKey > this.heapKey) {
                this.rotateLeft();
            }
            return;
        }

        if (key < this.key) {
            if (this.left !== null) {
                this.left.insert(key, heapKey);
            }else {
                this.left = new CartesianNode(key, heapKey);
            }
            if (this.left.heapKey > this.heapKey) {
                this.rotateRight();
            }
            return;
        }
    }
}
