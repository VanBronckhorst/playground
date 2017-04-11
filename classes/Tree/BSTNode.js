import TreeNode from './TreeNode.js';

export default class BSTNode extends TreeNode {
    constructor(key) {
        super(key);
    }

    insert(key) {
        if (key === this.key) {
            return;
        }

        if (key > this.key) {
            if (this.right !== null) {
                this.right.insert(key);
            }else {
                this.right = new BSTNode(key);
                return this.right;
            }
        }

        if (key < this.key) {
            if (this.left !== null) {
                this.left.insert(key);
            }else {
                this.left = new BSTNode(key);
                return this.left;
            }
        }
    }
}
