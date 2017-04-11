import BSTree from './BSTree.js';
import AVLNode from './AVLNode.js';

export default class AVLTree extends BSTree {
    constructor() {
        super();
    }

    insert(key) {
        if (this.root === null) {
            this.root = new AVLNode(key);
            return;
        }

        return this.root.insert(key);
    }
}
