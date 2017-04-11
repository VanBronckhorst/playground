const ROOT = Symbol();

class Tree {
    constructor(root) {
        this[ROOT] = root;
    }

    get root() {
        return this[ROOT];
    }

    set root(node) {
        this[ROOT] = node;
    }

    get height() {
        if (this.root !== null) {
            return this.root.height;
        }
        return 0;
    }
}

export default Tree;
