import RTreeNode from './RTreeNode.js';



class Leaf extends RTreeNode {
    constructor(children) {
        super(children);
    }

    get isLeaf() {
        return true;
    }
}

export default Leaf;
