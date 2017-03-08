import BSTNode from './BSTNode.js';

export default class AVLNode extends BSTNode {
    constructor(key) {
        super(key);
    }

    get isRightHeavy() {
        const rightH = this.right === null ? -1 : this.right.height;
        const leftH = this.left === null ? -1 : this.left.height;
        return rightH > leftH;
    }

    get isLeftHeavy() {
        const rightH = this.right === null ? -1 : this.right.height;
        const leftH = this.left === null ? -1 : this.left.height;
        return rightH < leftH;
    }

    get isBalanced() {
        const rightH = this.right === null ? -1 : this.right.height;
        const leftH = this.left === null ? -1 : this.left.height;
        return rightH === leftH;
    }

    rebalance() {
        const rightH = this.right === null ? -1 : this.right.height;
        const leftH = this.left === null ? -1 : this.left.height;

        if (Math.abs(rightH - leftH) > 1){
            if (this.isRightHeavy) {
                //rightHeavy
                if (this.right.isRightHeavy || this.right.isBalanced) {
                    this.rotateLeft();
                }else {
                    this.right.rotateRight();
                    this.rotateLeft();
                }
            }else if (this.isLeftHeavy){
                //leftHeavy
                if (this.left.isLeftHeavy || this.isBalanced) {
                    this.rotateRight();
                }else {
                    this.left.rotateLeft();
                    this.rotateRight();
                }
            }
        }
    }

    insert(key) {
        if (key === this.key) {
            return;
        }

        if (key > this.key) {
            if (this.right !== null) {
                this.right.insert(key);
                this.rebalance();
            }else {
                this.right = new AVLNode(key);
                this.rebalance();
            }
        }

        if (key < this.key) {
            if (this.left !== null) {
                this.left.insert(key);
                this.rebalance();
            }else {
                this.left = new AVLNode(key);
                this.rebalance();
            }
        }
    }
}
