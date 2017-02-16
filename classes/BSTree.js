import Tree from './Tree.js';
import BSTNode from './BSTNode.js';

export default class BSTree extends Tree {
    constructor() {
        super(null);
    }

    insert(key) {
        if (this.root === null) {
            this.root = new BSTNode(key);
            return;
        }

        return this.root.insert(key);
    }
}
