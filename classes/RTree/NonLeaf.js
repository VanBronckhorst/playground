import RTreeNode from './RTreeNode.js';



class NonLeaf extends RTreeNode {
    constructor(children) {
        super(children);
    }

    get isLeaf() {
        return false;
    }
}

export default NonLeaf;
