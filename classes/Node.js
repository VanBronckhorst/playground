const KEY = Symbol();

class Node {
    constructor(key) {
        this[KEY] = key;
    }

    get key() {
        return this[KEY];
    }

    set key(val) {
        this[KEY] = val;
    }
}

export default Node;
