import Tree from './Tree.js';
import CartesianNode from './CartesianNode.js';

export default class CartesianTree extends Tree {
    constructor() {
        super(null);
    }

    insert(key, heapKey) {
        if (this.root === null) {
            this.root = new CartesianNode(key, heapKey);
            return;
        }

        return this.root.insert(key, heapKey);
    }
}
